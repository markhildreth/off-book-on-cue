<script>
	import { onDestroy } from "svelte";
	import { recording, history } from "../../stores";
	import { startRecording, setMyLine, finishRecording, cancelRecording } from "../../stores/recording";
	import { addScene } from "../../stores/scenes";
	import { addSceneToPlay } from "../../stores/plays";
	import { replace } from "../../stores/history";

	const padNum = n => n < 10 ? "0" + n : n.toString();
	const formatTimeFromSeconds = sec => {
		const minutes = Math.floor(sec / 60);
		const seconds = Math.floor(sec % 60);
		return padNum(minutes) + ":" + padNum(seconds);
	}

	let isRecording = false;
	let time;
	$: time = formatTimeFromSeconds(Math.floor($recording.elapsedMs / 1000));

	function onStartRecording() {
		startRecording();
		isRecording = true;
	}

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

	function stopRecording() {
		if (isRecording) {
			const name = $recording.name;
			const playId = $history.args.id;
			const sceneId = addScene({ name: $recording.name });
			addSceneToPlay({ playId, sceneId });

			finishRecording({ trackId: sceneId });
			isRecording = false;
			replace("/play", { id: $history.args.id });
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
		<div on:click|preventDefault={onStartRecording} class="button button-lg button-red">Start Recording</div>
	{:else}
		<div on:click|preventDefault={stopRecording} class="button button-lg button-red">Finish</div>
	{/if}
</div>
