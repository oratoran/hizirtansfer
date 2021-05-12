<script>
	import 'virtual:windi.css';
	import { browser } from '$app/env';

	// enable windi.css devtools on development environment
	if (browser) import('virtual:windi-devtools');
</script>

<slot />
