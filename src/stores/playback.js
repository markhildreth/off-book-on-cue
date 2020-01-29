import { get } from "svelte/store";
import { ImmerStore } from "./base";
import { playlist } from "./playlist";
import { exchange } from "../services";
import { selectScene } from "./currentScene";
import { playbackOptions } from "./playback_options";

export const playback = new ImmerStore({
	sceneId: null,
	isPlaying: false,
	isMyLine: false,
	elapsedMs: 0,
	durationMs: 120000,
});

export const changeScene = ({ sceneId, autoPlay = false }) => {
	exchange.push("audio.load", { trackId: sceneId, autoPlay });
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

exchange.subscribe("audio.ended", args => {
	const pl = get(playlist);
	const options = get(playbackOptions);
	if (pl == null) return;

	if (options.sceneRepeat) {
		resume();
	} else {
		const sceneId = pl.nextSceneId;
		if (sceneId != null) {
			selectScene({ playId: pl.playId, sceneId });
			changeScene({ sceneId, autoPlay: true });
		}
	}
});
