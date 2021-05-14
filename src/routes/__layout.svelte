<script>
	import 'virtual:windi.css';
	import { browser } from '$app/env';
	import Navbar from '$lib/components/Navbar.svelte';

	// enable windi.css devtools on development environment
	if (browser) import('virtual:windi-devtools');
</script>

<Navbar />
<main>
	<slot />
</main>
