import App from "./components/App.svelte";
import { history } from "./history.js";
import { plays } from "./plays.js";
import { appState } from "./app_state.js";
import { get } from "svelte/store";

const app = new App({
	target: document.body
});

export default app;

window.get = get;
window.stores = {
	history,
	plays,
	appState
};
