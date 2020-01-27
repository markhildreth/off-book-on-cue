<script>
	import { playbackOptions } from "../../stores";
	import { changeUserLineVolume, changeSpeed } from "../../stores/playback_options";
	import LowVolume from "../icons/LowVolume";
	import HighVolume from "../icons/HighVolume";
	import Walk from "../icons/Walk";
	import Run from "../icons/Run";

	function onUserLineVolumeChanged(ev) {
		changeUserLineVolume(ev.target.valueAsNumber);
	}

	function onSpeedChanged(ev) {
		changeSpeed(ev.target.valueAsNumber);
	}
</script>

<div class="py-4 flex flex-col items-center">
	<div class="flex items-center">
		<LowVolume class="w-6 h-6" />
		<input type="range" on:change={onUserLineVolumeChanged} class="m-2" min="0" max="1.0" step="0.1" value={$playbackOptions.userLineVolume} />
		<HighVolume class="w-6 h-6" />
	</div>
	<div class="flex items-center pt-4">
		<Walk class="w-6 h-6" />
		<input type="range" on:change={onSpeedChanged} class="m-2" min="1.0" max="2.0" step="0.1" value={$playbackOptions.speed} />
		<Run class="w-6 h-6" />
	</div>
	<div class="text-tiny">
		|
	</div>
</div>
