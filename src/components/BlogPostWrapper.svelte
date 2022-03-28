<script>
  import BlogPostPreview from "./BlogPostPreview.svelte";
  export let posts;
</script>

<div class="blog-wrapper" role="list">
  {#each posts as item}
    <div role="listitem">
      <BlogPostPreview post="{item}" />
    </div>
  {/each}
</div>
