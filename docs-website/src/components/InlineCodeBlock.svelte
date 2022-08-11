<!-- Represents an inline code block -->
<code class="code">
  <slot></slot>
</code>

<style>
  .code {
    display: inline-block;
    max-height: 1.5rem;
    line-height: 1.5rem;
    padding-inline: 0.5rem;
    background-color: var(--clr-inline-code-bg);
    box-shadow: 0 5px 10px rgba(0,0,0,0.07);
    border-radius: var(--border-radius);
  }
</style>