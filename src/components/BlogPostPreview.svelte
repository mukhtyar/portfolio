<script>
  import { dateOptions } from "../data/constants";
  export let post;
</script>

<style>
  .post-wrapper {
    padding-bottom: var(--size-4);
    border-bottom: 1px solid var(--gray-4);
  }

  .post-link {
    margin: 0;
    padding-bottom: var(--size-2);
    text-decoration: none;
  }

  h3 {
    font-weight: var(--font-weight-5);
    font-size: var(--font-size-4);
    color: var(--gray-9);
    margin-bottom: var(--size-2);
  }

  p {
    color: var(--gray-7);
  }
</style>

<div class="post-wrapper">
  <a href="{post.url}" class="post-link">
    <h3>{post.title}</h3>
    <p>{post.description}</p>
  </a>
  <div class="post-about-wrapper">
    <span
      >{new Date(post.publishDate).toLocaleDateString(
        "en-US",
        dateOptions
      )}</span
    >
  </div>
</div>
