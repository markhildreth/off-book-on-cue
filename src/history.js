import { writable } from "svelte/store";

export const history = writable({
	location: window.location.pathname
});

const listener = window.addEventListener("popstate", () => {
	history.set({ location: window.location.pathname });

	return () => {
		window.removeEventListener(listener);
	};
});

export const push = location => {
	return () => {
		window.history.pushState(null, "", location);
		history.set({ location });
	};
};
