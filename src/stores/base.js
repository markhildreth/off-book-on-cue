import { produce } from "immer";
import { writable } from "svelte/store";

export const immerStore = (initial) => {
	const store = writable(initial);

	return {
		subscribe: store.subscribe,
		set: store.set,
		update: fn => {
			store.update(d => {
				return produce(d, draft => {
					fn(draft);
				});
			});
		},
	}
};

