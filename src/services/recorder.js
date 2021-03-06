import { EventSubscription } from "./event_subscription";

const MIME_TYPE = 'audio/webm'

// TODO: This could probably be refactored into a nice FSM.
export class Recorder {
	constructor() {
		this.recording = null;

		this.events = new EventSubscription();
		this.on = this.events.on.bind(this.events);
		this._trigger = this.events.trigger.bind(this.events);
	}

	tick() {
		if (this.recording == null || this.recording.state !== "started") return;
		this._update();
	}

	async initialize() {
		const stream = await navigator.mediaDevices.getUserMedia ({ audio: true });
		const options = { mimeType: MIME_TYPE };
		this.recording = {
			state: "ready",
			recorder: new MediaRecorder(stream, options),
			isMyLine: false,
			breaks: [],
		};
		this._trigger("initialized");
	}

	async start() {
		if (this.recording == null || this.recording.state !== "ready") return;

		this.recording.recorder.start();
		this.recording.startTime = new Date();
		this.recording.state = "started";

		this._trigger("started", {
			elapsedMs: 0,
			isMyLine: false
		});
	}

	setMyLine(isMyLine) {
		if (this.recording.isMyLine !== isMyLine) {
			this.recording.breaks.push(new Date() - this.recording.startTime);
		}
		this.recording.isMyLine = isMyLine;
		this._update();
	}

	async finish({ trackId }) {
		const data = await this._stopRecording();

		this.recording = null;
		this._trigger("finished", {
			trackId,
			data
		});
	}

	cancel() {
		this.recording = null;
	}

	_stopRecording() {
		return new Promise((resolve, reject) => {
			const { breaks, recorder, startTime } = this.recording;
			recorder.ondataavailable = (ev) => {
				const blob = new Blob([ev.data], { 'type': MIME_TYPE });
				resolve({
					blob,
					breaks,
					durationMs: new Date() - startTime
				})
			};
			// Browsers differ on standard way to stop, thus the two lines here.
			recorder.stop();
			recorder.stream.getTracks().map(t => t.stop());
		});
	}

	_update() {
		this._trigger("update", {
			elapsedMs: new Date() - this.recording.startTime,
			isMyLine: this.recording.isMyLine
		});
	}
}
