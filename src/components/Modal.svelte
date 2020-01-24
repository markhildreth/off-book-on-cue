<script>
	export let onClose;

	function handleKeyDown(ev) {
		if (ev.key === "Escape") {
			onClose();
		}
	}

</script>

<svelte:window on:keydown={handleKeyDown}/>

<div class="fixed w-screen h-screen top-0 left-0 z-50">
	<div on:click={onClose} class="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>
	<div class="absolute" style="top: 50%; left: 10%; width: 80%; transform: translateY(-50%);">
		<div class="relative bg-gray-100 rounded shadow-lg p-6">
			<div on:click={onClose} class="cursor-pointer absolute w-6 rounded-full bg-black" style="top:-0.75rem; right:-0.75rem">
				<svg class="text-gray-100 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/>
				</svg>
			</div>
			<slot></slot>
		</div>
	</div>
</div>

