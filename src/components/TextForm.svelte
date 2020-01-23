<script>
	export let label;
	export let onSubmit;
	export let initialValue = "";

	let form;
	let input

	const submitForm = _ => {
		form.submit();
	};

	const onFormSubmit = ev => {
		onSubmit(input.value);
	}
</script>


<form class="h-full" bind:this={form} on:submit|preventDefault={onFormSubmit}>
	<div class="mx-auto h-full flex flex-col items-center justify-center">
		<input class="mb-4" type="text" bind:this={input} value={initialValue} autofocus="true" placeholder={label} required />
		<input class="button button-lg" type="submit" value="Next"/>
	</div>
</form>

