<script>
  import {
    DEFAULT_SIZE,
    DEFAULT_FILL_COLOR,
    DEFAULT_ARIA_HIDDEN,
    DEFAULT_TITLE,
  } from "./constants";

  let width = DEFAULT_SIZE;
  let height = DEFAULT_SIZE;
  let fill = DEFAULT_FILL_COLOR;
  let ariaHidden = DEFAULT_ARIA_HIDDEN;
  let title = DEFAULT_TITLE;

  const titleId = "icon-kaggle";
  const ariaLabelledBy = !ariaHidden && title;
</script>

<svg
  {...{ width, height, fill }}
  aria-hidden="{ariaHidden}"
  aria-labelledby="{ariaLabelledBy && titleId}"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
>
  {#if title}
    <title id="{titleId}">{title}</title>
  {/if}
  <path
    d="M385.708,476.478L254.742,313.713l125.578-121.534c2.334-2.426,1.526-9.433-4.761-9.433h-62.16    c-3.145,0-6.288,1.618-9.433,4.761L185.128,307.604V32.738c0-4.491-2.247-6.737-6.738-6.737h-46.618    c-4.492,0-6.737,2.246-6.737,6.737v446.433c0,4.491,2.246,6.738,6.737,6.738h46.618c4.491,0,6.738-2.247,6.738-6.738v-97.91    l27.666-26.317l99.257,126.294c2.695,3.145,5.839,4.762,9.432,4.762h60.095c3.143,0,4.939-0.899,5.389-2.696L385.708,476.478z"
  ></path>
</svg>