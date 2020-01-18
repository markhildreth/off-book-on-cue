import { derived } from "svelte/store";
import { appState } from "./app_state";
import { plays } from "./plays";

export const title = derived([appState, plays], ([$appState, $play]) => {
	if ($appState.screen === "play") {
		const play = $play.plays[$appState.id];
		return play.name;
	}

	return "Learn You Some Lines";
});
