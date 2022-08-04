<script lang="ts">
  export let path: string;
</script>

<article class="code card">
  <p class="code__path">{path}</p>
    <code class="code__content">
      <pre>
        <slot />
      </pre>
    </code>
</article>

<style>
  .code {
    position: relative;
  }

  .code__path {
    font-size: 0.8rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .code__content {
    display: block;
    font-size: 1rem;
  }
</style>