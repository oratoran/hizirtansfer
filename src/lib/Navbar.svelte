<style>
.nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  /* background-color: #F3C467; */
  /* color: #192026; */
  height: 5rem;
  /* box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.05); */
  background-image: linear-gradient(
    to bottom,
    rgba(25, 32, 38, 0.75),
    rgba(25, 32, 38, 0)
  );
  z-index: 50;
}

.nav::after {
  content: '';
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: 0;
  height: 0.125rem;
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 36, 0) 0%,
    rgba(243, 196, 103, 0.625) 50%,
    rgba(0, 0, 0, 0) 100%
  );
}

.nav__container {
  height: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
}

.nav__title {
  font-family: 'Merriweather', serif;
  justify-self: start;
  color: #ffffff;
}

.nav__items {
  justify-self: center;
  display: flex;
  gap: 2rem;
}

.nav__item {
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  color: #ffffff;
}

.nav__item:hover {
  color: #ff0000;
}

.nav__social {
  justify-self: end;
  display: flex;
  gap: 1rem;
  color: #FFFFFF;
  /* color: #F3C467; */
}
</style>

<nav class="nav">
  <div class="nav__container">
    <h1 class="nav__title">{$_('navbar.title')}</h1>
    <div class="nav__items">
      <a class="nav__item" href="/">{$_('navbar.home')}</a>
      <a class="nav__item" class:active={segment==='about'} href="/about">
        {$_('navbar.about')}
      </a>
      <a class="nav__item" class:active={segment==='about'} href="/services">
        {$_('navbar.services')}
      </a>
      <a class="nav__item" class:active={segment==='about'} href="/contact">
        {$_('navbar.contact')}
      </a>
    </div>
    <div class="nav__social">
      <Facebook />
      <Twitter />
      <Instagram />
    </div>
  </div>
</nav>

<script>
import { _ } from 'svelte-i18n';
import Facebook from '$lib/icons/Facebook.svelte';
import Twitter from '$lib/icons/Twitter.svelte';
import Instagram from '$lib/icons/Instagram.svelte';

export let segment = ''
</script>
