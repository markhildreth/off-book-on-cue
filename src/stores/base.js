import { produce } from "immer";
import { writable } from "svelte/store";

export class ImmerStore {
	constructor(initial) {
		this.store = writable(initial);
		this.subscribe = this.store.subscribe;
		this.set = this.store.set;
	}

	update(fn) {
		this.store.update(d => {
			return produce(d, draft => {
				fn(draft);
			});
		});
	}
}
