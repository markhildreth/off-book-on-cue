import { ImmerStore } from "./base";
import { exchange } from "../services";

export const recording = new ImmerStore(null);

export const nameScene = ({ name }) => {
	recording.set({
		state: "initializing",
		name,
		elapsedMs: 0,
		isMyLine: false
	});
	exchange.push("recording.initialize");
};

export const startRecording = () => {
	exchange.push("recording.start");
}

export const setMyLine = isMyLine => {
	exchange.push("recording.set_my_line", { isMyLine });
};

export const finishRecording = ({ trackId }) => {
	recording.set(null);
	exchange.push("recording.finish", {
		trackId
	});
};

export const cancelRecording = () => {
	recording.set(defaultState);
	exchange.push("recording.cancel");
};

exchange.subscribe("recording.initialized", args => {
	recording.update(d => {
		d.state = "studio";
	});
});

exchange.subscribe("recording.started", args => {
	recording.update(d => {
		d.state = "recording";
		d.elapsedMs = args.elapsedMs;
		d.isMyLine = args.isMyLine;
	});
});

exchange.subscribe("recording.update", args => {
	recording.update(d => {
		if (d != null) {
			d.elapsedMs = args.elapsedMs;
			d.isMyLine = args.isMyLine;
		}
	});
});
