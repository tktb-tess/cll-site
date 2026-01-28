<script lang="ts">
  import { onMount } from 'svelte';
  import wordData from '../modules/glossary.json';
  import ShowResult from './ShowResult.svelte';

  type SearchMode = 'former' | 'latter' | 'exact' | 'partial';

  const isMode = (str: unknown) =>
    str === 'former' ||
    str === 'latter' ||
    str === 'exact' ||
    str === 'partial';

  let searchWord = $state('');
  let searchMode = $state<SearchMode>('former');

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
    return wordData.filter((w) => {
      switch (searchMode) {
        case 'former': {
          const wo = w.word.slice(0, searchWord.length);
          return searchWord === wo;
        }
        case 'latter': {
          const wo = w.word.slice(-searchWord.length);
          return searchWord === wo;
        }
        case 'exact': {
          return searchWord === w.word;
        }
        case 'partial': {
          return w.word.includes(searchWord);
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
  <input type="text" class="block w-full" bind:value={searchWord} />
  <div id="search-radiobtn">
    <span>一致方式:</span>
    <input
      type="radio"
      name="search-mode"
      id="radio-1"
      onclick={() => (searchMode = 'former')}
      checked
    />
    <label for="radio-1">前方</label>
    <input
      type="radio"
      name="search-mode"
      id="radio-2"
      onclick={() => (searchMode = 'latter')}
    />
    <label for="radio-2">後方</label>
    <input
      type="radio"
      name="search-mode"
      id="radio-3"
      onclick={() => (searchMode = 'exact')}
    />
    <label for="radio-3">完全</label>
    <input
      type="radio"
      name="search-mode"
      id="radio-4"
      onclick={() => (searchMode = 'partial')}
    />
    <label for="radio-4">部分</label>
  </div>
</section>
<ShowResult {results} />

<style lang="postcss">
  @reference '../styles/globals.css';
  @layer components {
    #search-input {
      @apply flex flex-col gap-1 w-full max-w-80 mx-auto;
    }

    #search-radiobtn {
      @apply flex justify-center gap-2;
    }
  }
</style>
