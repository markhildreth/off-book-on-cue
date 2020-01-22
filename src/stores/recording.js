import { ImmerStore } from "./base";
import { exchange } from "../services";

const defaultState = {
	state: "initial",
	playId: null,
	name: null,
	elapsedMs: 0,
	isMyLine: false,
};
export const recording = new ImmerStore(defaultState);

export const nameScene = ({ name }) => {
	recording.update(d => {
		d.name = name;
		d.state = "studio";
	});
};

export const startRecording = () => {
	exchange.push("recording.start");
}

export const setMyLine = isMyLine => {
	exchange.push("recording.set_my_line", { isMyLine });
};

export const finishRecording = () => {
	recording.set(defaultState);
	exchange.push("recording.finish");
};

export const cancelRecording = () => {
	recording.set(defaultState);
	exchange.push("recording.cancel");
};

exchange.subscribe("recording.started", args => {
	recording.update(d => {
		d.state = "recording";
		d.elapsedMs = args.elapsedMs;
		d.isMyLine = args.isMyLine;
	});
});

exchange.subscribe("recording.update", args => {
	recording.update(d => {
		d.elapsedMs = args.elapsedMs;
		d.isMyLine = args.isMyLine;
	});
});
