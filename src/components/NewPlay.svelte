<script>
	import TextForm from "./TextForm";
	import { addPlay } from "../stores/plays";
	import { push } from "../stores/history";

	const onSubmitted = value => {
		const playId = addPlay({ name: value });
		push("/play", { playId });
	}
</script>


<TextForm onSubmit={onSubmitted} label="Name of Play" />

