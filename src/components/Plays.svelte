<script>
	import { plays } from "../stores";
	import { push } from "../stores/history";

	$: ids = Object.keys($plays.plays);
</script>

<h1 class="text-2xl my-4 text-center">Start Rehearsing</h1>
<div class="flex flex-col justify-start items-center">
	{#each ids as id (id)}
	<button on:click={push("/play", { id })} class="button button-lg mb-4">{$plays.plays[id].name}</button>
	{/each}
	<button on:click={push("/new_play")} class="button button-lg">New Play</button>
</div>
