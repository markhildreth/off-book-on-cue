<script>
	export let message;
</script>

<h1 class="text-center">
{#if message}
	{message}
{:else}
	There has been an error.
{/if}
</h1>
