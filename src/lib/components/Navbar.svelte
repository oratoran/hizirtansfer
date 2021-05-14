<script>
	import Facebook from '$lib/icons/Facebook.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import Whatsapp from '$lib/icons/Whatsapp.svelte';
</script>

<nav
	class="fixed w-screen h-24 border-b-2 border-gray-200 border-dashed border-opacity-40"
>
	<div
		class="max-w-3/4 grid grid-cols-3 justify-center items-center mx-auto h-full text-white"
	>
		<h1 class="font-bold font-merriweather text-xl">HizirTransfer</h1>
		<div class="font-sans flex items-center justify-between">
			<a href="/home">Home</a>
			<a href="/about">About Us</a>
			<a href="/services">Services</a>
			<a href="/contact">Contact</a>
		</div>
		<div class="flex items-center justify-end gap-5">
			<a href="https://facebook.com"><Facebook /></a>
			<a href="https://twitter.com"><Twitter /></a>
			<a href="https://whatsapp.com"><Whatsapp /></a>
		</div>
	</div>
</nav>

<style>
	nav {
		background-image: linear-gradient(
			to top,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.8)
		);
	}
</style>
