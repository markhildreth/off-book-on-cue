import { ImmerStore } from "./base";

const defaultState = {
	state: 'not_recording',
	timeMs: 0,
	isMyLine: false
};
export const recording = new ImmerStore(defaultState);

export const startRecording = () => {
	fakeRecordingStarted = new Date();
	fakeRecordingInterval = setInterval(updateFake, 100);

	recording.update(d => {
		d.state = 'recording';
	});
}

// TODO: Actually intereact with recorder.
let fakeRecordingStarted = null;
let fakeRecordingInterval = null;

const updateFake = () => {
	recording.update(d => {
		d.timeMs = new Date() - fakeRecordingStarted;
	});
};

export const setMyLine = b => {
	if (fakeRecordingStarted != null) {
		recording.update(d => {
			d.isMyLine = b;
		});
	}
};

export const stopRecording = () => {
	if (fakeRecordingStarted != null) {
		recording.set(defaultState);
		clearInterval(fakeRecordingInterval);
	}
};
