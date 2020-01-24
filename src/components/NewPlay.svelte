<script>
	import TextForm from "./TextForm";
	import { addPlay } from "../stores/plays";
	import { replace } from "../stores/history";

	const onSubmitted = value => {
		const playId = addPlay({ name: value });
		replace("/play", { playId });
	}
</script>


<TextForm onSubmit={onSubmitted} label="Name of Play" />

