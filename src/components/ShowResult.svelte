<script lang="ts">
  import type { WordData } from '../modules/decl';

  interface Props {
    readonly results: WordData[];
  }

  const { results }: Props = $props();
</script>

<section aria-labelledby="results">
  <h2 id="results">Search Results</h2>
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

      > :where(#results) {
        @apply text-center;
      }

      :where(ul) {
        @apply mt-2;
      }
    }
  }
</style>
