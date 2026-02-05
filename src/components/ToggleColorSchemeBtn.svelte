<script lang="ts">
  import { onMount } from 'svelte';

  type ColorScheme = 'default' | 'light' | 'dark';
  let colorScheme: ColorScheme = $state('default');

  const isColorScheme = (str: unknown) =>
    str === 'default' || str === 'light' || str === 'dark';

  const key = 'color-scheme';
  onMount(() => {
    const cs = localStorage.getItem(key);
    if (!isColorScheme(cs)) return;
    colorScheme = cs;
  });

  $effect(() => {
    const root = document.documentElement;
    root.dataset.colorScheme = colorScheme;
  });

  $effect(() => {
    localStorage.setItem(key, colorScheme);
  });
</script>

<button
  id="toggle-color-scheme-btn"
  type="button"
  onclick={() => {
    switch (colorScheme) {
      case 'default': {
        colorScheme = 'light';
        return;
      }
      case 'light': {
        colorScheme = 'dark';
        return;
      }
      case 'dark': {
        colorScheme = 'default';
        return;
      }
    }
  }}
>
  Toggle
</button>
