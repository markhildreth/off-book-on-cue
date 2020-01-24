import { ImmerStore } from "./base";

export const currentScene = new ImmerStore(null);

export const selectScene = ({ playId, sceneId }) => {
	currentScene.set({ playId, sceneId });
};

export const clearSelectedScene = () => {
	currentScene.set(null);
};
