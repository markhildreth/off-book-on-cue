<script>
	import { recording } from "../../stores";
	import { nameScene } from "../../stores/recording";

	let form;
	let input

	const submitForm = _ => {
		form.submit();
	};

	const onSubmit = ev => {
		nameScene({ name: input.value });
	}
</script>

<form class="h-full" on:submit|preventDefault={onSubmit}>
	<div class="mx-auto h-full flex flex-col items-center justify-center">
		<input class="mb-4" type="text" bind:this={input} autofocus="true" placeholder="Name of Scene" required />
		<input class="button button-lg" type="submit" value="Next"/>
	</div>
</form>
