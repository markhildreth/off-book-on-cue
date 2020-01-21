<script>
	export let isPlaying;

	import Prev from "../icons/Prev";
	import Play from "../icons/Play";
	import Pause from "../icons/Pause";
	import Next from "../icons/Next";

	import { pause, resume } from "../../stores/playback";

	function onPause() {
		pause();
	}

	function onPlay() {
		resume();
	}
</script>

<div class="flex justify-center items-center mb-4">
	<Prev class="h-12 cursor-pointer"/>
	{#if isPlaying}
		<div on:click={onPause}>
			<Pause class="h-20 cursor-pointer" />
		</div>
	{:else}
		<div on:click={onPlay}>
			<Play class="h-20 cursor-pointer" />
		</div>
	{/if}
	<Next class="h-12 cursor-pointer" />
</div>
