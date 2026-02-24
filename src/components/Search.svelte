<script lang="ts">
  import { onMount } from 'svelte';
  import wordData from '../assets/glossary.json';
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
    if (!searchWord) return [];
    return wordData.filter((w) => {
      switch (searchMode) {
        case 'forward': {
          const wo = w.word.slice(0, searchWord.length);
          return searchWord === wo;
        }
        case 'backward': {
          const wo = w.word.slice(-searchWord.length);
          return searchWord === wo;
        }
        case 'exact': {
          return searchWord === w.word;
        }
        case 'partial': {
          return w.word.includes(searchWord);
        }
        default: {
          const _: never = searchMode;
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
    window.history.replaceState(null, '', url);
  });
</script>

<section aria-labelledby="search" id="search-input">
  <h3 id="search" class="text-center">Search</h3>
  <input id="search-text" type="text" bind:value={searchWord} />
  <div id="search-radiobtn">
    <span>Match:</span>
    <label>
      <input
        type="radio"
        name="search-mode"
        onclick={() => (searchMode = 'forward')}
        checked={searchMode === 'forward'}
      />
      forward
    </label>
    <label>
      <input
        type="radio"
        name="search-mode"
        onclick={() => (searchMode = 'backward')}
        checked={searchMode === 'backward'}
      />
      backward
    </label>
    <label>
      <input
        type="radio"
        name="search-mode"
        onclick={() => (searchMode = 'exact')}
        checked={searchMode === 'exact'}
      />
      exact
    </label>
    <label>
      <input
        type="radio"
        name="search-mode"
        onclick={() => (searchMode = 'partial')}
        checked={searchMode === 'partial'}
      />
      partial
    </label>
  </div>
</section>
<ShowResult {results} />

<style lang="postcss">
  @reference '../styles/globals.css';
  @layer components {
    #search-input {
      @apply flex flex-col gap-1 w-full max-w-120 mx-auto;
    }

    #search-text {
      @apply w-[80%] block mx-auto;
    }

    #search-radiobtn {
      @apply flex justify-center gap-2 flex-wrap;
    }
  }
</style>
