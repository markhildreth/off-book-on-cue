import "localforage";

import App from "./components/App.svelte";
import * as stores from "./stores";
import { Backer } from "./backer";
import { get } from "svelte/store";

const app = new App({
	target: document.body
});

export default app;

window.get = get;
window.stores = stores;

const backer = new Backer({
	'plays': stores.plays
});

backer
	.initialize()
	.catch(e => {
		console.log(e);
	})
	.finally(() => {
		stores.loading.set(false);
	});
