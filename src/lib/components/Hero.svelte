<style>
.hero {
  position: relative;
  height: 42rem;
}

.hero__content {
  color: white;
  padding: 4rem 2rem 2rem;
}

.hero__heading-wrapper :global(em) {
  font-weight: 700;
  color: #f3c467;
  font-style: normal;
}

.hero__heading {
  font-family: 'Merriweather', serif;
  /* font-size: 3.5rem; */
  font-size: clamp(1.25rem, calc(5vw + 1.25rem), 3.5rem);
  line-height: 1.5em;
  letter-spacing: 0.075em;
  text-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
}

.hero__heading-top {
  display: block;
  font-family: 'Merriweather', serif;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.5em;
  letter-spacing: 0.075em;
  text-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
}

.hero__heading-button {
  padding: 1rem 2rem;
  border: none;
  margin-top: 2rem;
  background-color: #f3c467;
  color: #192026;
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
}

.swiper-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 42rem;
  z-index: -1;
}

.img {
  position: absolute;
  display: block;
  object-fit: cover;
  object-position: top;
  filter: brightness(0.25) saturate(0.5) blur(4px);
  left: -1rem;
  right: -1rem;
  min-width: 100%;
}
</style>

<section class="hero">
  <div class="hero__content">
    <div class="hero__heading-wrapper">
      <span class="hero__heading-top">
        {@html $_('hero.heading-top')}
      </span>
      <h1 class="hero__heading">
        {@html $_('hero.heading')}
        <br />
        {$_('hero.heading-bot')}
      </h1>
      <button class="hero__heading-button">
        {$_('hero.button')}
      </button>
    </div>
  </div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img class="img" src="/limo.jpg" alt="limo" />
      </div>
      <div class="swiper-slide">
        <img class="img" src="/doraibu.jpg" alt="doraibu" />
      </div>
      <div class="swiper-slide">
        <img class="img" src="/white.jpg" alt="white" />
      </div>
    </div>
  </div>
</section>

<script lang="ts">
import { _ } from 'svelte-i18n';
import { onMount } from 'svelte';

// Import Swiper Svelte components
import Swiper, { Autoplay, EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

onMount(() => {
  Swiper.use([Autoplay, EffectFade]);

  new Swiper('.swiper-container', {
    speed: 1000,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
  });
});
</script>
