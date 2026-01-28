<script lang="ts">
  import { onMount } from 'svelte';

  type SearchMode = 'former' | 'latter' | 'exact' | 'partial';
  type WordData = {
    word: string;
    contents: string[];
  };
  let searchWord = $state('');
  let searchMode = $state<SearchMode>('former');
  let wordData: WordData[] | undefined = $state();

  onMount(async () => {
    wordData = (await import('../modules/glossary.json')).default;
  });

  $effect(() => {
    const newUrl = new URL(document.URL);
    newUrl.searchParams.set('mode', searchMode);
    if (searchWord) {
      newUrl.searchParams.set('word', searchWord);
    } else {
      newUrl.searchParams.delete('word');
    }
    window.history.replaceState(null, '', newUrl);
  });
</script>

<section
  aria-labelledby="kensaku"
  class="flex flex-col gap-1 w-full max-w-80 mx-auto"
>
  <h3 id="kensaku" class="text-center">検索</h3>
  <input type="text" class="block w-full" bind:value={searchWord} />
  <div class="flex justify-center gap-2">
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

<style lang="postcss">
  @reference '../styles/globals.css';
</style>
