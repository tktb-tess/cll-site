<script lang="ts">
  import { onMount } from 'svelte';
  import ShowResult from './ShowResult.svelte';

  type SearchMode = 'forward' | 'backward' | 'exact' | 'partial';

  const isMode = (str: unknown) =>
    str === 'forward' ||
    str === 'backward' ||
    str === 'exact' ||
    str === 'partial';

  let searchWord = $state('');
  let searchMode = $state<SearchMode>('forward');

  const resultPromise = $derived.by(async () => {
    if (!searchWord) return null;
    const sm = searchMode;
    const sw = searchWord;

    const { default: json } = await import('../assets/glossary.json');

    return json.filter((w) => {
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

  onMount(() => {
    const url = new URL(document.URL);
    const mode = url.searchParams.get('mode');
    if (isMode(mode)) searchMode = mode;
    const word = url.searchParams.get('word');
    if (word) searchWord = word;
  });

  $effect(() => {
    resultPromise.catch((e) => console.log(e));
  });
</script>

<section aria-labelledby="search" class="search-input">
  <h3 id="search">Search</h3>
  <form action="/glossary/" method="get" class="search-form">
    <label for="search-text">Input</label>
    <input type="text" id="search-text" name="word" value={searchWord} />
    <span>Match</span>
    <div class="match-btns">
      <label>
        <input
          type="radio"
          name="mode"
          value="forward"
          defaultChecked={searchMode === 'forward'}
        />
        <span>forward</span>
      </label>
      <label>
        <input
          type="radio"
          name="mode"
          value="backward"
          defaultChecked={searchMode === 'backward'}
        />
        <span>backward</span>
      </label>
      <label>
        <input
          type="radio"
          name="mode"
          value="exact"
          defaultChecked={searchMode === 'exact'}
        />
        <span>exact</span>
      </label>
      <label>
        <input
          type="radio"
          name="mode"
          value="partial"
          defaultChecked={searchMode === 'partial'}
        />
        <span>partial</span>
      </label>
    </div>
    <div class="search-btn">
      <button type="submit">Search</button>
    </div>
  </form>
</section>

{#await resultPromise}
  <p class="text-center text-2xl">Loading……</p>
{:then results}
  {#if results}
    <ShowResult {results} />
  {/if}
{:catch}
  <p class="ctext-caution">Something went wrong</p>
{/await}

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

      > :is(:first-child, :nth-child(3)) {
        @apply self-center max-lg:justify-self-center-safe lg:justify-self-end-safe;
      }

      > input {
        @apply min-w-0;
      }

      > .search-btn {
        @apply col-span-full justify-self-center-safe;

        > button {
          @apply btn-theme-1;
        }
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
          @apply btn-theme-1;
        }
      }

      label:has(input:checked) > span {
        @apply cbg-accent ctext-text-inv;
      }
    }
  }
</style>
