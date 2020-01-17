<script>
	import { history } from "../history.js";
	import Header from "./Header.svelte";
	import Landing from "./Landing.svelte";
	import How from "./How.svelte";
	import Error from "./Error.svelte";
	import NewPlay from "./NewPlay.svelte";

	$: location = $history.location;
</script>

<header class="fixed h-16 w-full top-0">
	<Header />
</header>

<div class="h-full w-full pt-16">
	{#if location === "/"}
	<Landing />
	{:else if location === "/how"}
	<How />
	{:else if location === "/new_play"}
	<NewPlay />
	{:else}
	<Error />
	{/if}
</div>
