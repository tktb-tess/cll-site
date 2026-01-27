<script lang="ts">
  type SearchMode = 'former' | 'latter' | 'exact' | 'partial';
  let searchWord = $state('');
  let searchMode = $state<SearchMode>('former');
</script>

<input type="text" bind:value={searchWord} />
<input type="radio" name="" id="radio-1" />
<label for="radio-1">前方</label>

<style lang="postcss">
  @reference '../styles/globals.css';
</style>
