import "localforage";

import { get } from "svelte/store";
import App from "./components/App.svelte";
import * as stores from "./stores";
import * as services from "./services";
import { Backer } from "./backer";
import { replace } from "./stores/history";
import localForage from "localForage";

window.get = get;
window.stores = stores;
window.localForage = localForage;

const app = new App({
	target: document.body
});

export default app;

const backer = new Backer({
	plays: stores.plays,
	scenes: stores.scenes
});

const start = async () => {
	try {
		await backer.initialize();
	} catch (e) {
		console.log(e);
	}

	// TODO: Probably a better way to deal with this, but if we start out in
	// the playback screen, we want to move to the play screen.
	const history = get(stores.history);
	const playlist = get(stores.playlist);
	if (history.path === "/play/playback") {
		replace("/play", { id: history.args.id });
	}
	stores.loading.set(false);
};

start();
