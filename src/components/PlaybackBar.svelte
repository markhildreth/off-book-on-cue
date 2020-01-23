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

