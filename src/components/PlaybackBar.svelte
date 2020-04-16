<script>
	import Play from "./icons/Play";
	import Pause from "./icons/Pause";

	import { playlist, playback } from "../stores";
	import { push } from "../stores/history";
	import { pause, resume } from "../stores/playback";

	function openFullPlayback() {
		push("/play/playback", { playId: $playlist.playId });
	}

	function onPause() {
		pause();
	}

	function onPlay() {
		resume();
	}
</script>

<div on:click={openFullPlayback} class="flex h-full w-full justify-between items-center px-2 cursor-pointer">
	<p>{$playlist.scene.name}</p>
	<svg class="h-4 self-start mt-2 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path d="M4 1L0 5l1.5 1.5L4 4l2.5 2.5L8 5 4 1z"/></svg>
	{#if $playback.isPlaying}
		<div class="h-full" on:click|stopPropagation={onPause}>
			<Pause class="h-full"/>
		</div>
	{:else}
		<div class="h-full" on:click|stopPropagation={onPlay}>
			<Play class="h-full" />
		</div>
	{/if}
</div>

