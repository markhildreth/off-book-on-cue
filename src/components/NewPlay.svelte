<script>
	let form;
	const submitForm = _ => {
		form.submit();
	};

	const onSubmit = ev => {
	}
</script>


<form class="h-full" bind:this={form} on:submit|preventDefault={onSubmit}>
	<div class="mx-auto h-full flex flex-col items-center justify-center">
		<input class="mb-4" type="text" autofocus="true" placeholder="Name of Play" required />
		<input class="button button-lg" type="submit" value="Next"/>
	</div>
</form>

