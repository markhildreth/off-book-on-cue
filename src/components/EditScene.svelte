<script>
	import { scenes }  from "../stores";
	import { back } from "../stores/history";
	import { editScene } from "../stores/scenes";
	export let sceneId;

	import TextForm from "./TextForm";

	const onSubmitted = value => {
		editScene({ sceneId: sceneId, name: value });
		back();
	}
</script>

<TextForm label="Name of Play" initialValue={$scenes.scenes[sceneId].name} onSubmit={onSubmitted} />
