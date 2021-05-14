<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = ({ session }) => {
		return {
			status: 303,
			redirect: `/${session.lang}/home`
		};
	};
</script>
