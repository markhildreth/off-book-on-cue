<script>
	import { appState, title } from "../stores";
	import { push, back } from "../stores/history";

	function onShowInfo() {
		if ($appState.screen !== "info") {
			push("/info");
		}
	}
</script>

<header class="bg-blue-600 text-gray-100 px-4 h-full flex items-center justify-between">
	<!-- Hack to even out the alignments -->
	<div class="w-8">
	</div>
	<h1 class="text-lg text-center font-semibold">{$title}</h1>
	<div on:click={onShowInfo} class="cursor-pointer rounded-lg p-2 bg-blue-500">
		<svg class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
			<path d="M5 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM3.5 2.5C2.67 2.5 2 3.17 2 4h1c0-.28.22-.5.5-.5s.5.22.5.5-1 1.64-1 2.5C3 7.36 3.67 8 4.5 8S6 7.33 6 6.5H5c0 .28-.22.5-.5.5S4 6.78 4 6.5C4 6.14 5 4.66 5 4c0-.81-.67-1.5-1.5-1.5z"/>
		</svg>
	</div>
</header>
