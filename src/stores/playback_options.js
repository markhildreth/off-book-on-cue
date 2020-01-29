import { ImmerStore } from "./base";
import { exchange } from "../services";

export const playbackOptions = new ImmerStore({
	userLineVolume: null,
	speed: null,
	sceneRepeat: false
});

export const changeUserLineVolume = (newVolume) => {
	exchange.push("audio.change_user_line_volume", { newVolume });
}

export const changeSpeed = (newSpeed) => {
	exchange.push("audio.change_speed", { newSpeed });
}

export const changeRepeat = (newRepeat) => {
	playbackOptions.update(d => {
		d.sceneRepeat = newRepeat;
	});
}

exchange.subscribe("audio.options_update", args => {
	playbackOptions.update(d => {
		d.userLineVolume = args.userLineVolume;
		d.speed = args.speed;
	});
});
