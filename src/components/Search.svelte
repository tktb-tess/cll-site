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

  onMount(() => {
    const url = new URL(document.URL);
    const mode = url.searchParams.get('mode');
    if (isMode(mode)) searchMode = mode;
    const word = url.searchParams.get('word');
    if (word) searchWord = word;
  });
</script>

<section aria-labelledby="search" class="search-input">
  <h3 id="search">Search</h3>
  <form action="/glossary/" class="search-form">
    <label for="search-text">Input:</label>
    <input type="text" id="search-text" name="word" value={searchWord} />
    <span>Match:</span>
    <div class="match-btns">
      <label>
        <input
          type="radio"
          name="mode"
          defaultChecked={searchMode === 'forward'}
        />
        <span>forward</span>
      </label>
      <label>
        <input
          type="radio"
          name="mode"
          defaultChecked={searchMode === 'backward'}
        />
        <span>backward</span>
      </label>
      <label>
        <input
          type="radio"
          name="mode"
          defaultChecked={searchMode === 'exact'}
        />
        <span>exact</span>
      </label>
      <label>
        <input
          type="radio"
          name="mode"
          defaultChecked={searchMode === 'partial'}
        />
        <span>partial</span>
      </label>
    </div>
    <button type="submit">Search</button>
  </form>
</section>

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

      > button {
        @apply btn-theme-1;
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
