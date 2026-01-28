<script lang="ts">
  type WordData = {
    word: string;
    contents: string[];
  };

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
      {#each result.contents as content}
        <p>{content}</p>
      {/each}
    </div>
  {/each}
</section>
