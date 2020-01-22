import { Exchange } from "./exchange.js";
import { FakeAudioPlayer } from "./audio_playback";
import { FakeRecorder } from "./fake_recorder";

export const exchange = new Exchange();

// Audio Player
const fakePlayer = new FakeAudioPlayer();
setInterval(fakePlayer.tick.bind(fakePlayer), 100);

fakePlayer.on("update", args => {
	exchange.push("audio.update", args);
});

exchange.subscribe("audio.load", ({ trackId }) => {
	fakePlayer.load({ trackId });
});

exchange.subscribe("audio.pause", () => {
	fakePlayer.pause()
});

exchange.subscribe("audio.resume", () => {
	fakePlayer.resume()
});

// Recorder
const fakeRecorder = new FakeRecorder();
setInterval(fakeRecorder.tick.bind(fakeRecorder), 10);

fakeRecorder.on("update", args => {
	exchange.push("recording.update", {
		elapsedMs: args.elapsedMs,
		isMyLine: args.isMyLine
	});
});

fakeRecorder.on("started", args => {
	exchange.push("recording.started", {
		elapsedMs: args.elapsedMs,
		isMyLine: args.isMyLine
	});
});

exchange.subscribe("recording.start", args => {
	fakeRecorder.start();
});

exchange.subscribe("recording.set_my_line", args => {
	fakeRecorder.setMyLine(args.isMyLine);
});

exchange.subscribe("recording.finish", args => {
	fakeRecorder.finish();
});

exchange.subscribe("recording.cancel", args => {
	fakeRecorder.cancel();
});
