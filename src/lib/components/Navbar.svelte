<script>
	import Facebook from '$lib/icons/Facebook.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import Whatsapp from '$lib/icons/Whatsapp.svelte';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { page } from '$app/stores';

	const pages = ['home', 'about', 'services', 'contact'];
	let currentPage = '';

	onMount(() => {
		const paths = $page.path.split('/');
		currentPage = paths[paths.length - 1];
	});
</script>

<nav
	class="fixed w-screen h-24 border-b-2 border-gray-200 border-dashed border-opacity-40"
>
	<div
		class="max-w-3/4 grid grid-cols-3 justify-center items-center mx-auto h-full text-white"
	>
		<h1 class="font-bold font-merriweather text-xl">HizirTransfer</h1>
		<div class="font-sans flex items-center justify-between">
			{#each pages as r}
				<a
					class:text-yellow-300={currentPage == r}
					class="hover:text-yellow-300 font-sm transition-color duration-100 ease-in"
					href="/{r}"
				>
					{$_(`navbar.${r}`)}
				</a>
			{/each}
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
