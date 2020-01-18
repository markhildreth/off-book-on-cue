import { loading } from "./loading";
import { history } from "./history";
import { plays } from "./plays";
import { get, derived } from "svelte/store";

const lookup = {
	"/how": { screen: "how" },
	"/new_play": { screen: "new_play" }
};

export const appState = derived(
	[loading, history],
	([loading, { path, args }]) => {
		if (loading) {
			return { screen: "loading" };
		}

		const result = lookup[path];
		if (result != null) {
			return result;
		}

		if (path === "/") {
			const knownPlays = get(plays).plays;
			if (Object.keys(knownPlays).length === 0) {
				return { screen: "landing" };
			} else {
				return { screen: "plays" };
			}
		}

		if (path === "/play") {
			const id = parseInt(args.id);
			const knownPlays = get(plays).plays;
			if (knownPlays[id]) {
				return { screen: "play", id };
			} else {
				return {
					screen: "error",
					message: `Could not find play with id "${id}"`
				};
			}
		}

		if (path === "/play/record") {
			const id = parseInt(args.id);
			const knownPlays = get(plays).plays;
			if (knownPlays[id]) {
				return { screen: "record", id };
			} else {
				return {
					screen: "error",
					message: `Could not find play with id "${id}"`
				};
			}
		}

		return { screen: "error" };
	}
);
