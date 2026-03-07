<script lang="ts">
  import { onMount } from 'svelte';
  // import wordData from '../assets/glossary.json';
  import ShowResult from './ShowResult.svelte';

  type SearchMode = 'forward' | 'backward' | 'exact' | 'partial';

  const isMode = (str: unknown) =>
    str === 'forward' ||
    str === 'backward' ||
    str === 'exact' ||
    str === 'partial';

  let searchWord = $state('');
  let searchMode = $state<SearchMode>('forward');

  const url = $derived.by(() => {
    const url = new URL(document.URL);
    url.searchParams.set('mode', searchMode);
    if (searchWord) {
      url.searchParams.set('word', searchWord);
    } else {
      url.searchParams.delete('word');
    }
    return url;
  });

  const results = $derived.by(() => {
    if (!searchWord) return null;
    const sm = searchMode;
    const sw = searchWord;

    return import('../assets/glossary.json').then((i) => {
      return i.default.filter((w) => {
        switch (sm) {
          case 'forward': {
            const wo = w.word.slice(0, sw.length);
            return sw === wo;
          }
          case 'backward': {
            const wo = w.word.slice(-sw.length);
            return sw === wo;
          }
          case 'exact': {
            return sw === w.word;
          }
          case 'partial': {
            return w.word.includes(sw);
          }
          default: {
            const _: never = sm;
          }
        }
      });
    });
  });

  onMount(() => {
    const url = new URL(document.URL);
    const mode = url.searchParams.get('mode');
    if (isMode(mode)) searchMode = mode;
    const word = url.searchParams.get('word');
    if (word) searchWord = word;
  });

  $effect(() => {
    window.history.replaceState(null, '', url);
  });
</script>

<section aria-labelledby="search" class="search-input">
  <h3 id="search">Search</h3>
  <div class="search-form">
    <label for="search-text">Input:</label>
    <input type="text" id="search-text" bind:value={searchWord} />
    <span>Match:</span>
    <div class="match-btns">
      <label>
        <input
          type="radio"
          name="search-mode"
          onclick={() => (searchMode = 'forward')}
          checked={searchMode === 'forward'}
        />
        <span>forward</span>
      </label>
      <label>
        <input
          type="radio"
          name="search-mode"
          onclick={() => (searchMode = 'backward')}
          checked={searchMode === 'backward'}
        />
        <span>backward</span>
      </label>
      <label>
        <input
          type="radio"
          name="search-mode"
          onclick={() => (searchMode = 'exact')}
          checked={searchMode === 'exact'}
        />
        <span>exact</span>
      </label>
      <label>
        <input
          type="radio"
          name="search-mode"
          onclick={() => (searchMode = 'partial')}
          checked={searchMode === 'partial'}
        />
        <span>partial</span>
      </label>
    </div>
  </div>
</section>
{#if results}
  {#await results}
    <h3 class="text-center">wait a moment…</h3>
  {:then res}
    <ShowResult results={res} />
  {/await}
{/if}

<style lang="postcss">
  @reference '../styles/globals.css';
  @layer components {
    .search-input {
      @apply flex flex-col gap-3 w-full max-w-120 mx-auto;

      > h3 {
        @apply text-center;
      }
    }

    .search-form {
      @apply grid gap-2 w-full max-lg:grid-cols-1 lg:grid-cols-[auto_1fr];

      > :nth-child(odd) {
        @apply self-center max-lg:justify-self-center-safe lg:justify-self-end-safe;
      }

      > input {
        @apply min-w-0;
      }
    }

    .match-btns {
      @apply flex justify-center-safe gap-3 flex-wrap;

      > label {
        @apply grid cursor-pointer min-w-0;

        > * {
          @apply block col-span-full row-span-full;
        }

        > input {
          @apply appearance-none;
        }

        > span {
          @apply px-2 border-2 rounded cborder-accent ctext-accent
          hover-focus:bg-black/15 hover-focus:dark:bg-white/15
          transition-colors;
        }
      }

      label:has(input:checked) > span {
        @apply cbg-accent ctext-text-inv;
      }
    }
  }
</style>
