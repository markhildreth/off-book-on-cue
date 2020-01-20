import { derived } from "svelte/store";
import { appState } from "./app_state";
import { plays } from "./plays";
import { scenes } from "./scenes";
import { currentScene } from "./currentScene";

export const playlist = derived([currentScene, plays, scenes], ([$currentScene, $plays, $scenes]) => {
	if ($currentScene == null) {
		return null;
	}

	const play = $plays.plays[$currentScene.playId];
	const scene = $scenes.scenes[$currentScene.sceneId];

	return {
		playId: $currentScene.playId,
		scene: {
			name: scene.name
		}
	}
});
