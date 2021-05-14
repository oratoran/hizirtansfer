<script>
	import Facebook from '$lib/icons/Facebook.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import Whatsapp from '$lib/icons/Whatsapp.svelte';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { page } from '$app/stores';

	const pages = ['home', 'about', 'services', 'contact'];
	let currentPage = '';

	$: offsetY = 0;
	$: isScrolledDown = offsetY >= 80;

	onMount(() => {
		const paths = $page.path.split('/');
		currentPage = paths[paths.length - 1];

		window.addEventListener('scroll', () => {
			offsetY = window.pageYOffset;
		});
	});
</script>

<nav
	class="fixed border-b-2 {isScrolledDown
		? 'text-gray-700 bg-white'
		: 'nav text-white border-dashed border-gray-200 border-opacity-40 '} transition-all duration-300 w-screen h-22 z-5"
>
	<div
		class="max-w-screen-lg grid grid-cols-3 justify-center items-center mx-auto h-full text-white"
	>
		<h1
			class="font-bold font-lora text-xl {isScrolledDown
				? 'text-gray-700'
				: 'text-white'}"
		>
			HizirTransfer
		</h1>
		<div class="font-sans flex items-center justify-between">
			{#each pages as r}
				<a
					class="font-sm transition-color duration-100 ease-in {isScrolledDown
						? 'text-gray-700 hover:(text-amber-600 underline)'
						: 'text-white hover:(text-amber-500 underline)'}"
					href="/{r}"
				>
					{$_(`navbar.${r}`)}
				</a>
			{/each}
		</div>
		<div class="flex items-center justify-end gap-5">
			<a
				class={isScrolledDown ? 'text-gray-700' : 'text-white'}
				href="https://facebook.com"><Facebook /></a
			>
			<a
				class={isScrolledDown ? 'text-gray-700' : 'text-white'}
				href="https://twitter.com"><Twitter /></a
			>
			<a
				class={isScrolledDown ? 'text-gray-700' : 'text-white'}
				href="https://whatsapp.com"><Whatsapp /></a
			>
		</div>
	</div>
</nav>

<style>
	.nav {
		background-image: linear-gradient(
			to top,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.8)
		);
	}
</style>
