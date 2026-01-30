<script lang="ts">
  import type { WordData } from '../modules/decl';

  interface Props {
    readonly results: WordData[];
  }

  const { results }: Props = $props();
</script>

<section aria-labelledby="results">
  {#if results.length > 0}
    <h2 id="results">Search Results</h2>
    <p id="match-num">{results.length} {results.length === 1 ? 'word' : 'words'} matched</p>
  {/if}
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
    section {
      @apply flow-root;

      > :where(#results, #match-num) {
        @apply text-center;
      }

      :where(ul) {
        @apply mt-2;
      }
    }
  }
</style>
