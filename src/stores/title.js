import { derived } from "svelte/store";
import { appState } from "./app_state";
import { plays } from "./plays";

export const title = derived([appState, plays], ([$appState, $play]) => {
	if ($appState.screen === "play") {
		const play = $play.plays[$appState.playId];
		return play.name;
	}

	return "Off Book, On Cue";
});
