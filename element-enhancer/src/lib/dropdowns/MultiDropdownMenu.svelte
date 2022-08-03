<script lang="ts">
  import { KeyCodes } from '@/util/KeyCodes';
  import type { StyleOptions } from '@/util/types/StyleOptions';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  type Item = {
    name: string;
    value: string
  }

  // Props
  export let label: string;
  export let items: Item[];
  // Custom styles
  export let styleOptions: StyleOptions = undefined;

  $: cssVariables = styleOptions ? 
  Object.entries(styleOptions)
    .map(([key, value]) => `--${key}:${value}`)
    .join(';') 
  : null

  // State
  let checked = [] as Item[]
  let isOpen = false;

  /**
   * Dispatches the checked array whenever it changes
  */
  $: dispatch('change', checked.map(i => i.value))

  /**
   * Checks if there are any checked itmes.
   * Is true when there are, and false if not
   */
  $: anyCheckedItems = checked.length > 0

  /**
   * Checks if an item is checked. Return true
   * if it is, and false if not
   * @param item, the item to check whether or not its checked
   */
  $: isChecked = (item: Item) => {
    return checked.find(i => i.value === item.value) ? true : false;
  }

  /**
   * Toggles the dropdown menu
   */
  const toggleMenu = () => {
    isOpen = !isOpen;
  }

  /**
   * Handles key event.
   * If enter is pressed on label: dropdown menu is toggled
   * If enter is pressed on item in dropdown: handle the selection
   * of that item
   * If escape is pressed: dropdown is closed
   * @param e, the event triggered when a key is pressed
   */
  const handleKeyEvent = (e: KeyboardEvent, item?: Item) => {
    if (e.key === KeyCodes.ENTER) {
      item ? handleItemPressed(item) : toggleMenu()
    } else if (e.key === KeyCodes.ESC) {
      closeMenu()
    }
  }

  /**
   * Closes the menu
   */
  const closeMenu = () => {
    isOpen = false
  }

  /**
   * Toggles the state of the pressed item
   * @param item the item presses
   */
  const handleItemPressed = (item: Item) => {
    if (isChecked(item)) {
      checked = checked.filter(i => i.value !== item.value)
    } else {
      checked = [...checked, item]
    }
  }
</script>

<div class="el el-dropdown" style={cssVariables}>
  <div 
    class="el-label" 
    tabindex="0"
    on:click={toggleMenu}
    on:keyup={e => handleKeyEvent(e)}
  >
    {#if anyCheckedItems}
      {checked.map(i => i.name).join(', ')}
    {:else}
      {label}
    {/if}
    <svg data-open={isOpen} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/></svg>
  </div>
  <ul class="el-list" data-open={isOpen}>    
    {#each items as item, index (index)}
      <li 
        class="el-item"
        data-checked={isChecked(item)}
      >
        <label
          on:keyup={(e) => handleKeyEvent(e, item)}
        >
          <input type="checkbox" bind:group={checked} name="items" value={item} />
          {item.name}
        </label>
      </li>
    {/each}
  </ul>
</div>

<style>
  .el-dropdown {
    color: var(--textColor);
    min-width: var(--minWidth);
    max-width: var(--maxWidth);

    position: relative;
  }

  .el-label {
    border: var(--borderThickness) var(--borderStyle) var(--borderColor);
    border-radius: var(--borderRadius);
    padding-block: var(--spacingY);
    padding-inline: var(--spacingX);
    background-color: var(--bgColor);

    transition: 
      background-color var(--animationDuration) var(--animationFunction),
      color var(--animationDuration) var(--animationFunction);

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }

  .el-label:hover {
    background-color: var(--bgColorHover);
    color: var(--textColorHover);
  }

  .el-label:focus-visible {
    background-color: var(--bgColorFocus);
    color: var(--textColorFocus);
  }

  .el-label svg {
    fill: var(--textColor);
    transition:
      transform var(--animationDuration) var(--animationFunction),
      fill var(--animationDuration) var(--animationFunction);
  }

  .el-label svg[data-open="true"] {
    transform: rotate(90deg);
  }

  .el-label:hover svg {
    fill: var(--textColorHover);
  }

  .el-label:focus-visible svg {
    fill: var(--textColorFocus);
  }

  .el-list {
    box-shadow: 
      var(--shadowX)
      var(--shadowY)
      var(--shadowBlur)
      var(--shadowOffset)
      var(--shadowColor);
    background-color: var(--neutralColor);
    padding-block: var(--spacingY);

    display: none;
    position: absolute;
    left:0;
    right:0;
    z-index: 99999;
    min-width: fit-content;
  }

  .el-list[data-open="true"] {
    display: block;
  }

  .el-item label {
    padding-inline: var(--spacingX);
    padding-block: var(--spacingY);

    transition:
      background-color var(--animationDuration) var(--animationFunction),
      color var(--animationDuration) var(--animationFunction);
  }

  .el-item:hover {
    background-color: var(--bgColorHover);
    color: var(--textColorHover);
  }

  .el-item:focus {
    background-color: var(--bgColorFocus);
    color: var(--textColorFocus);
  }

  .el-item[data-checked="true"] {
    background-color: var(--bgColorSelected);
    color: var(--textColorSelected)
  }

  .el-item label {
    display: flex;
    align-items: center;
    gap: 0.5rem
  }
</style>