<script>
	import TextForm from "../TextForm";
	import { recording } from "../../stores";
	import { nameScene } from "../../stores/recording";

	const onSubmitted = value => {
		nameScene({ name: value });
	}
</script>

<TextForm onSubmit={onSubmitted} label="Name of Scene" />
