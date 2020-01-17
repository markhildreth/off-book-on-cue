import { immerStore } from "./base";

export const plays = immerStore({ plays: {} });

export const addPlay = ({ name }) => {
	const id = Math.floor(Math.random() * 100000);
	plays.update(d => {
		d.plays[id] = {
			name,
			scenes: []
		};
	});
	return id;
};
