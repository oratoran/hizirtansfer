<script lang="ts">
	import 'virtual:windi.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { browser } from '$app/env';
	import { isLoading } from 'svelte-i18n';
	import '$lib/locale/i18n';

	// enable windi.css devtools on development environment
	if (browser) import('virtual:windi-devtools');
</script>

{#if $isLoading}
	<!-- TODO(elianiva): Implement fancy-ish loading screen -->
	Please wait...
{:else}
	<Navbar />
	<main class="mx-auto">
		<slot />
	</main>
{/if}
