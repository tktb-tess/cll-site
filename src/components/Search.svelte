<script lang="ts">
  import { onMount } from 'svelte';
  import ShowResult from './ShowResult.svelte';
  import type { WordData } from '../modules/decl';

  type SearchMode = 'forward' | 'backward' | 'exact' | 'partial';

  const isMode = (str: unknown) =>
    str === 'forward' ||
    str === 'backward' ||
    str === 'exact' ||
    str === 'partial';

  let searchWord = $state('');
  let searchMode = $state<SearchMode>('forward');
  let results: WordData[] | null = $state(null);

  const searchWords = async (sw: string, sm: SearchMode) => {
    if (!sw) return null;

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
  };

  onMount(async () => {
    const params = new URL(document.URL).searchParams;
    const m = params.get('mode');
    const w = params.get('word');

    if (w) searchWord = w;

    if (isMode(m)) {
      searchMode = m;
    }

    if (w && isMode(m)) {
      results = await searchWords(w, m);
    }
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

{#if results}
  <ShowResult {results} />
{/if}

<style lang="postcss">
  @reference '../styles/globals.css';
  @layer components {
    .search-input {
      @apply flex flex-col gap-3 inline-full max-inline-120 mx-auto;

      > h3 {
        @apply text-center;
      }
    }

    .search-form {
      @apply grid gap-2 inline-full max-lg:grid-cols-1 lg:grid-cols-[auto_1fr];

      > :is(:first-child, :nth-child(3)) {
        @apply self-center max-lg:justify-self-center-safe lg:justify-self-end-safe;
      }

      > input {
        @apply min-inline-0;
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
        @apply cursor-pointer min-inline-0;

        > input {
          @apply block appearance-none sr-only outline-none;
        }

        > span {
          @apply block btn-theme-1 focus-visible:outline outline-black;
        }
      }

      label:has(input:checked) > span {
        @apply bg-accent text-text-inv;
      }
    }
  }
</style>
