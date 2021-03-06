import { ImmerStore } from "./base";

export const scenes = new ImmerStore({ scenes: {} });

export const addScene = ({ name }) => {
	const id = Math.floor(Math.random() * 100000);
	scenes.update(d => {
		d.scenes[id] = {
			name
		};
	});
	return id;
};

export const editScene = ({ sceneId, name }) => {
	scenes.update(d => {
		d.scenes[sceneId].name = name;
	});
};

export const deleteScene = ({ sceneId }) => {
	scenes.update(d => {
		delete d.scenes[sceneId];
	});
};
