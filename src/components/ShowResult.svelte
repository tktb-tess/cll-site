<script lang="ts">
  import type { WordData } from '../modules/decl';

  interface Props {
    readonly results: WordData[];
  }

  const { results }: Props = $props();

  const foundText = $derived.by(() => {
    const len = results.length;
    const num = len ? `${len}` : 'No';
    const word = len === 1 ? 'word' : 'words';
    return `${num} ${word} found`;
  });
</script>

<section class="__results" aria-labelledby="search-results">
  <h2 id="search-results">Search Results</h2>
  <p id="match-num">{foundText}</p>
  {#each results as result}
    <div>
      <h4>{result.word}</h4>
      <ul>
        {#each result.contents as content}
          <li>{content}</li>
        {/each}
      </ul>
    </div>
  {/each}
</section>

<style lang="postcss">
  @reference '../styles/globals.css';
  @layer components {
    .__results {
      @apply flow-root;

      > :where(#search-results, #match-num) {
        @apply text-center;
      }

      :where(ul) {
        @apply mt-2;
      }
    }
  }
</style>
