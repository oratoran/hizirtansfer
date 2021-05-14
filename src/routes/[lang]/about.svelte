<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log($page.params.lang);
	});
</script>

<img
	class="fixed bg object-center object-cover w-screen absolute -z-5 h-[28rem]"
	src="/assets/limo.jpg"
	alt="limo"
/>

<style>
	.bg {
		filter: brightness(0.25) contrast(0.75) saturate(0.75) hue-rotate(10deg);
	}
</style>
