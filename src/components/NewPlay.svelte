<script>
	import { addPlay } from "../stores/plays";
	import { push } from "../stores/history";

	let form;
	let input

	const submitForm = _ => {
		form.submit();
	};

	const onSubmit = ev => {
		const id = addPlay({ name: input.value });
		push("/play", { id });
	}
</script>


<form class="h-full" bind:this={form} on:submit|preventDefault={onSubmit}>
	<div class="mx-auto h-full flex flex-col items-center justify-center">
		<input class="mb-4" type="text" bind:this={input} autofocus="true" placeholder="Name of Play" required />
		<input class="button button-lg" type="submit" value="Next"/>
	</div>
</form>

