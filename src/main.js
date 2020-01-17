import App from "./components/App.svelte";
import * as stores from "./stores";
import { get } from "svelte/store";

const app = new App({
	target: document.body
});

export default app;

window.get = get;
window.stores = stores;

setTimeout(() => {
	stores.loading.set(false);
}, 1000);
