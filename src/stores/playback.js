import { ImmerStore } from "./base";
import { exchange } from "../services";

export const playback = new ImmerStore({
	sceneId: null,
	isPlaying: false,
	isMyLine: false,
	elapsedMs: 0,
	durationMs: 120000,
});

export const changeScene = ({ sceneId }) => {
	exchange.push("audio.load", { trackId: 0 });
}

export const pause = () => {
	exchange.push("audio.pause");
}

export const resume = () => {
	exchange.push("audio.resume");
}

exchange.subscribe("audio.update", args => {
	playback.update(d => {
		d.sceneId = args.sceneId;
		d.isPlaying = args.isPlaying;
		d.isMyLine = args.isMyLine;
		d.elapsedMs = args.elapsedMs;
		d.durationMs = args.durationMs;
	});
});
