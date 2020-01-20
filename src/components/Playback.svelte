<script>
	import { playlist } from "../stores";
	import { push } from "../stores/history";

	function openFullPlayback() {
		push("/play/playback", { id: $playlist.playId });
	}
</script>

<div on:click={openFullPlayback} class="flex h-full w-full justify-between items-center px-2 cursor-pointer">
	<p>{$playlist.scene.name}</p>
	<p>Settings</p>
	<p>Play</p>
</div>

