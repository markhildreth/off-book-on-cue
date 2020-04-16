import { writable } from "svelte/store";

const buildLocation = (path, args) => {
	const queryStr = Object.keys(args).length > 0 ? "?" + new URLSearchParams(args).toString() : "";
	return path + queryStr;
}

const parseLocation = (location) => {
	const path = location.pathname;
	const args = Object.fromEntries(new URLSearchParams(location.search));
	return { path, args };
}

export const history = writable(parseLocation(window.location));

const listener = window.addEventListener("popstate", () => {
	const data = parseLocation(window.location);
	history.set(data);

	return () => {
		window.removeEventListener(listener);
	};
});

export const push = (path, args={}) => {
	const newLocation = buildLocation(path, args);
	window.history.pushState(null, "", newLocation);
	history.set({ path, args });
};

export const replace = (path, args={}) => {
	const newLocation = buildLocation(path, args);
	window.history.replaceState(null, "", newLocation);
	history.set({ path, args });
}

export const back = () => {
	window.history.back();
}
