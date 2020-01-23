import { ImmerStore } from "./base";

export const plays = new ImmerStore({ plays: {} });

export const addPlay = ({ name }) => {
	const playId = Math.floor(Math.random() * 100000);
	plays.update(d => {
		d.plays[playId] = {
			name,
			scenes: []
		};
	});
	return playId;
};

export const addSceneToPlay = ({ playId, sceneId }) => {
	plays.update(d => {
		d.plays[playId].scenes.push(sceneId);
	});
};
