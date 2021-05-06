<style>
.asdf {
  background-color: red;
  z-index: 2;
}
</style>

<Hero />

<section class="asdf">
  <h1>{$_('title')}</h1>
  <p>
    Dolor nesciunt dicta nobis voluptatum incidunt, ipsam mollitia Accusantium
    porro velit a magnam numquam vitae? Officiis voluptates voluptate provident
    earum quam. Vero neque praesentium aut deleniti fugiat, pariatur sit
    mollitia? Minus nulla veniam nobis non itaque. Tenetur ipsam illum expedita.
  </p>
</section>

<section class="hero">
  <p>
    Dolor nesciunt dicta nobis voluptatum incidunt, ipsam mollitia Accusantium
    porro velit a magnam numquam vitae? Officiis voluptates voluptate provident
    earum quam. Vero neque praesentium aut deleniti fugiat, pariatur sit
    mollitia? Minus nulla veniam nobis non itaque. Tenetur ipsam illum expedita.
  </p>
</section>

<script>
import { page } from '$app/stores';
import { _ } from 'svelte-i18n';
import Hero from '$lib/components/Hero.svelte';
import { locale } from 'svelte-i18n';

locale.set($page.params.lang);
</script>
