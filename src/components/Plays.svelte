<script>
	import { plays } from "../stores";
	import { push } from "../stores/history";

	$: ids = Object.keys($plays.plays);

	function onPlayClicked(playId) {
		push("/play", { playId });
	}

	function onNewPlayClicked() {
		push("/new_play");
	}

	function onDeletePlayClicked() {
		push("/delete_plays");
	}
</script>

<h1 class="text-2xl my-4 text-center">Start Rehearsing</h1>
<div class="flex flex-col justify-start items-center">
	{#each ids as id (id)}
	<button on:click={() => { onPlayClicked(id) }} class="button w-5/6 button-lg mb-4">{$plays.plays[id].name}</button>
	{/each}
	<button on:click={onNewPlayClicked} class="button w-1/2 button-lg mb-4">New Play</button>
	<button on:click={onDeletePlayClicked} class="button button-red w-1/2">Delete Play</button>
</div>
