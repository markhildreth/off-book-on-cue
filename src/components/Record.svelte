<script>
	import { onDestroy } from "svelte";
	import { recording } from "../stores";
	import { startRecording, setMyLine, stopRecording, cancelRecording} from "../stores/recording";

	const padNum = n => n < 10 ? "0" + n : n.toString();
	const formatTimeFromSeconds = sec => {
		const minutes = Math.floor(sec / 60);
		const seconds = Math.floor(sec % 60);
		return padNum(minutes) + ":" + padNum(seconds);
	}

	let time;
	$: isRecording = $recording.state === 'recording';
	$: time = formatTimeFromSeconds(Math.floor($recording.timeMs / 1000));

	function startUserLine(ev) {
		if (isRecording) {
			setMyLine(true);
			ev.preventDefault();
		}
	}

	function stopUserLine(ev) {
		if (isRecording) {
			setMyLine(false);
			ev.preventDefault();
		}
	}

	onDestroy(() => {
		if (isRecording) {
			cancelRecording();
		}
	});
</script>

<div class="h-full flex flex-col justify-evenly items-center">
	<div class="flex flex-col items-center">
		<button
			on:touchstart={startUserLine}
			on:touchend={stopUserLine}
			on:mousedown={startUserLine}
			on:click={stopUserLine}
			disabled={!isRecording}
			class="button p-12">
			{#if $recording.isMyLine}
				Your Line
			{:else}
				Others Lines
			{/if}
		</button>
		<h3 class="text-4xl">{time}</h3>
	</div>
	{#if !isRecording}
		<div on:click={startRecording} class="button button-lg button-red">Start Recording</div>
	{:else}
		<div on:click={stopRecording} class="button button-lg button-red">Finish</div>
	{/if}
</div>
