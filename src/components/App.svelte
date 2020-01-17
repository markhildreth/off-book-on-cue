<script>
	import Header from './Header.svelte';
</script>

<header class="fixed h-16 w-full top-0">
	<Header />
</header>

<div class="h-full w-full pt-16">
	<div class="flex flex-col justify-evenly items-center h-full">
		<div class="w-32 h-32 border">
			<!-- TODO: Image -->
		</div>
		<p class="text-2xl text-center">
		"Learn You Some Lines" helps you memorize your lines.
		</p>
		<div class="text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg p-2 cursor-pointer">
			How It Works
		</div>
		<div class="text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg p-2 cursor-pointer">
			Get Started
		</div>
	</div>
</div>
