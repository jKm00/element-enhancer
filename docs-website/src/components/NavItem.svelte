<script lang="ts">
  import NavItem from '@/components/NavItem.svelte'

  interface NavItem {
    label: string
    link: string
    subItems?: NavItem[]
  }

  export let item: NavItem

  let subItemHidden = true
</script>

<li class="item">
  {#if item.subItems}
    <a class="item__link" data-open={!subItemHidden} href={item.link} on:click|preventDefault={() => subItemHidden = !subItemHidden}>
      {item.label}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/></svg>
    </a>
    <ul class="sub-list" data-hidden={subItemHidden}>
      {#each item.subItems as subItem}
        <NavItem item={subItem} />
      {/each}
    </ul>
  {:else}
    <a class="item__link" href={item.link}>{item.label}</a>
  {/if}
</li>

<style>
  .item__link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    color: var(--clr-text);
    text-decoration: none;
    padding: 1rem 0.5rem;
  }

  .item__link svg {
    transition: transform var(--animation-duration) var(--animation-function);
  }
  
  .item__link[data-open="true"] svg {
    transform: rotate(90deg);
  }

  :global(.sub-list) {
    margin-left: 0.5rem;
  }

  /* TODO: Check if !important is necessary */
  :global(.sub-list .item__link) {
    padding-block: 0.5rem !important;
  }

  .sub-list[data-hidden="true"] {
    display: none;
  }
</style>