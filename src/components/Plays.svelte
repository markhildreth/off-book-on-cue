<script>
	import { plays } from "../stores";
	import { push } from "../stores/history";

	$: keys = Object.keys($plays.plays);
</script>

<h1 class="text-2xl my-4 text-center">Start Rehearsing</h1>
<div class="flex flex-col justify-start items-center">
	{#each keys as key (key)}
	<button on:click={push("/play/" + key)} class="button button-lg mb-4">{$plays.plays[key].name}</button>
	{/each}
	<button on:click={push("/new_play")} class="button button-lg">New Play</button>
</div>
