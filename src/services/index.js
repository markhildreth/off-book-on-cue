import { Exchange } from "./exchange.js";
import { FakeAudioPlayer } from "./audio_playback";

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
