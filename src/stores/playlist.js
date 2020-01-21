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
	const playIndex = play.scenes.indexOf($currentScene.sceneId);
	const scene = $scenes.scenes[$currentScene.sceneId];

	return {
		playId: $currentScene.playId,
		scene: {
			name: scene.name
		},
		prevSceneId: play.scenes[playIndex - 1],
		nextSceneId: play.scenes[playIndex + 1]
	}
});
