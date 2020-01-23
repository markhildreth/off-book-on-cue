import { loading } from "./loading";
import { history } from "./history";
import { plays } from "./plays";
import { scenes } from "./scenes";
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
			const playId = parseInt(args.playId);
			const knownPlays = get(plays).plays;
			if (knownPlays[playId]) {
				return { screen: "play", playId };
			} else {
				return {
					screen: "error",
					message: `Could not find play with id "${playId}"`
				};
			}
		}

		if (path === "/play/record") {
			const playId = parseInt(args.playId);
			const knownPlays = get(plays).plays;
			if (knownPlays[playId]) {
				return { screen: "record", playId };
			} else {
				return {
					screen: "error",
					message: `Could not find play with id "${playId}"`
				};
			}
		}

		if (path === "/play/playback") {
			return {
				screen: "playback",
				playId: parseInt(args.playId)
			}
		}

		if (path === "/play/scene/edit") {
			const playId = parseInt(args.playId);
			const sceneId = parseInt(args.sceneId);

			const knownPlays = get(plays).plays;
			const knownScenes = get(scenes).scenes;
			if (knownPlays[playId] && knownScenes[sceneId]) {
				return {
					screen: "edit_scene",
					playId,
					sceneId,
				};
			} else {
				return {
					screen: "error",
					message: `Could not find scene from play ${playId}, scene ${sceneId}`
				};
			}
		}
		return { screen: "error" };
	}
);
