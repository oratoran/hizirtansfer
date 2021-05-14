<script>
	import { page } from '$app/stores';
	import { _ } from 'svelte-i18n';
</script>

<header class="relative grid w-screen place-items-center h-[30rem] pt-24">
	<div class="bg bg-fixed bg-center absolute inset-0 -z-5" />
	<div class="flex flex-col gap-6">
		<h1 class="font-lora font-medium text-6xl text-white">
			{$_('pages.about')}
		</h1>
		<div class="flex items-center justify-center gap-4 font-sans">
			<span class="text-amber-300 font-medium text-md">
				{$_('pages.home')}
			</span>
			<span class="text-gray-400 font-bold text-sm">//</span>
			<span class="text-white text-md">{$_('pages.about')}</span>
		</div>
	</div>
</header>

<div class="bg-white">
	<article class="max-w-screen-lg grid grid-cols-2 pt-10 mx-auto">
		<div class="px-4">
			<p class="text-lg leading-relaxed">
				Ipsum laborum exercitationem libero eveniet aliquid voluptatem Fugiat
				accusamus dolore voluptatem sunt eum repellat cumque Provident fugiat
				nisi ab hic aliquid. Sequi assumenda culpa deserunt temporibus
				perspiciatis. Itaque libero incidunt maiores hic id praesentium?
				Consequatur obcaecati officiis porro ab consectetur!
			</p>
			<p class="text-lg leading-relaxed">
				Ipsum laborum exercitationem libero eveniet aliquid voluptatem Fugiat
				accusamus dolore voluptatem sunt eum repellat cumque Provident fugiat
				nisi ab hic aliquid. Sequi assumenda culpa deserunt temporibus
				perspiciatis. Itaque libero incidunt maiores hic id praesentium?
				Consequatur obcaecati officiis porro ab consectetur!
			</p>
			<p class="text-lg leading-relaxed">
				Ipsum laborum exercitationem libero eveniet aliquid voluptatem Fugiat
				accusamus dolore voluptatem sunt eum repellat cumque Provident fugiat
				nisi ab hic aliquid. Sequi assumenda culpa deserunt temporibus
				perspiciatis. Itaque libero incidunt maiores hic id praesentium?
				Consequatur obcaecati officiis porro ab consectetur!
			</p>
		</div>
		<div class="px-4">
			<p>
				Ipsum laborum exercitationem libero eveniet aliquid voluptatem Fugiat
				accusamus dolore voluptatem sunt eum repellat cumque Provident fugiat
				nisi ab hic aliquid. Sequi assumenda culpa deserunt temporibus
				perspiciatis. Itaque libero incidunt maiores hic id praesentium?
				Consequatur obcaecati officiis porro ab consectetur!
			</p>
		</div>
	</article>
</div>

<style>
	.bg {
		background-image: url('/assets/limo.jpg');
		filter: brightness(0.25) contrast(0.75) saturate(0.75) hue-rotate(15deg);
	}
</style>
