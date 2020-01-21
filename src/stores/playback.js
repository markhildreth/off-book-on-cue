import { ImmerStore } from "./base";

export const playback = new ImmerStore({
	sceneId: null,
	isPlaying: false,
	isUserLine: false,
	elapsedMs: 0,
	durationMs: 120000,
});

export const changeScene = ({ sceneId }) => {
	playback.update(d => {
		d.sceneId = sceneId;
		d.isPlaying = true;
		d.isUserLine = false;
		d.elapsedMs = 0;
		d.durationMs = 120000;
	});
	isFakePlaying = true;
};

let isFakePlaying = false;
let lastUpdate = new Date();

const updateFake = () => {
	const newUpdate = new Date();
	if (isFakePlaying) {
		playback.update(d => {
			d.elapsedMs += newUpdate - lastUpdate;
			d.isUserLine = Math.floor(d.elapsedMs / 5000) % 2 === 1;
		});
	}
	lastUpdate = newUpdate;
};
setInterval(updateFake, 100);

export const pause = () => {
	playback.update(d => {
		d.isPlaying = false;
	});
	isFakePlaying = false;
}

export const resume = () => {
	playback.update(d => {
		d.isPlaying = true;
	});
	isFakePlaying = true;
}
