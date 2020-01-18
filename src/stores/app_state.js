import { loading } from "./loading";
import { history } from "./history";
import { plays } from "./plays";
import { get, derived } from 'svelte/store';

const lookup = {
	"/how": { screen: "how" },
	"/new_play": { screen: "new_play" },
};

export const appState = derived([loading, history], ([loading, { location }]) => {
	if (loading) {
		return { screen: "loading" };
	}

	const result = lookup[location];
	if (result != null) {
		return result;
	}

	if (location === "/") {
		const knownPlays = get(plays).plays;
		if (Object.keys(knownPlays).length === 0) {
			return { screen: "landing" };
		} else {
			return { screen: "plays" };
		}
	}

	if (location.startsWith("/play/")) {
		const knownPlays = get(plays).plays;
		const parts = location.split("/");
		const id = parseInt(parts[2]);
		if (knownPlays[id]) {
			return { screen: "play", id };
		} else {
			return { screen: "error", message: `Could not find play with id "${id}"` }
		}
	}

	return { screen: "error" }
});



