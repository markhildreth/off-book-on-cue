<script>
	import { scenes }  from "../stores";
	import { push } from "../stores/history";
	import { editScene } from "../stores/scenes";
	export let sceneId;
	export let playId;

	import TextForm from "./TextForm";

	const onSubmitted = value => {
		editScene({ sceneId: sceneId, name: value });
		push("/play", { playId });
	}
</script>

<TextForm label="Name of Play" initialValue={$scenes.scenes[sceneId].name} onSubmit={onSubmitted} />
