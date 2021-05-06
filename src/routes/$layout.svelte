<style>
main {
  padding-top: 5rem;
  max-width: 1080px;
  margin: 0 auto;
}
</style>

{#if $isLoading}
  Please wait...
{:else}
  <Navbar {segment}/>
  <main>
    <slot />
  </main>
{/if}

<script lang="ts">
import { isLoading } from 'svelte-i18n';
import Navbar from '$lib/Navbar.svelte';

import '$lib/locale/i18n';

export let segment = '';
</script>
