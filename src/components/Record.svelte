<script>
	import { recording } from "../stores";
	import Name from "./record/Name.svelte";
	import Studio from "./record/Studio.svelte";

	$: state = $recording.state;
</script>

{#if $recording.state === "initial"}
	<Name />
{:else}
	<Studio />
{/if}

