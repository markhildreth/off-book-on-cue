import produce from "immer";
import { writable } from 'svelte/store';

export const plays = writable({ plays: {} });

export const addPlay = ({ name }) => {
	plays.update(s => {
		return produce(s, d => {
			d.plays[0] = {
				name,
				scenes: []
			};
		});
	});

	return 0;
};
