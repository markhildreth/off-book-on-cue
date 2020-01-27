import { ImmerStore } from "./base";
import { exchange } from "../services";

export const playbackOptions = new ImmerStore(null);

export const changeUserLineVolume = (newVolume) => {
	exchange.push("audio.change_user_line_volume", { newVolume });
}

export const changeSpeed = (newSpeed) => {
	exchange.push("audio.change_speed", { newSpeed });
}

exchange.subscribe("audio.options_update", args => {
	playbackOptions.set({
		userLineVolume: args.userLineVolume,
		speed: args.speed
	});
});
