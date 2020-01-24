import { Exchange } from "./exchange.js";
import { TrackPlayer } from "./track_player";
import { Recorder } from "./recorder";
import localForage from "localForage";

export const exchange = new Exchange();

// Audio Player
const trackPlayer = new TrackPlayer();
setInterval(trackPlayer.tick.bind(trackPlayer), 100);

trackPlayer.on("update", args => {
	exchange.push("audio.update", args);
});

exchange.subscribe("audio.load", async ({ trackId }) => {
	const track = await localForage.getItem(`track_${trackId}`);
	trackPlayer.load({ track });
});

exchange.subscribe("audio.pause", () => {
	trackPlayer.pause()
});

exchange.subscribe("audio.resume", () => {
	trackPlayer.resume()
});

// Recorder
const recorder = new Recorder();
setInterval(recorder.tick.bind(recorder), 10);

recorder.on("initialized", args => {
	exchange.push("recording.initialized");
});

recorder.on("update", args => {
	exchange.push("recording.update", {
		elapsedMs: args.elapsedMs,
		isMyLine: args.isMyLine
	});
});

recorder.on("started", args => {
	exchange.push("recording.started", {
		elapsedMs: args.elapsedMs,
		isMyLine: args.isMyLine
	});
});

recorder.on("finished", async args => {
	localForage.setItem(`track_${args.trackId}`, args.data);
});

exchange.subscribe("recording.initialize", args => {
	recorder.initialize();
});

exchange.subscribe("recording.start", args => {
	recorder.start();
});

exchange.subscribe("recording.set_my_line", args => {
	recorder.setMyLine(args.isMyLine);
});

exchange.subscribe("recording.finish", args => {
	recorder.finish({ trackId: args.trackId });
});

exchange.subscribe("recording.cancel", args => {
	recorder.cancel();
});
