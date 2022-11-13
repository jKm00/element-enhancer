<script lang="ts">
  import DropdownMenu from '@/lib/dropdowns/DropdownMenu.svelte';
  import MultiDropdownMenu from '@/lib/dropdowns/MultiDropdownMenu.svelte';
  import Button from '@/lib/buttons/Button.svelte';
  import ButtonRow from '@/lib/buttons/ButtonRow.svelte';
  import '@/test.css';
  import ToolTip from './lib/addons/ToolTip.svelte';

  const dropdown = {
    label: 'My dropdown',
    items: [
      {
        name: 'Monday',
        value: 'monday',
      },
      {
        name: 'Tuesday',
        value: 'tuesday',
      },
      {
        name: 'WendsdayWendsday',
        value: 'wendsday',
      },
      {
        name: 'Thursday',
        value: 'thursday',
      },
      {
        name: 'Friday',
        value: 'friday',
      },
      {
        name: 'Saturday',
        value: 'saturday',
      },
      {
        name: 'Sunday',
        value: 'sunday',
      },
    ],
  };

  const multiDropdown = {
    label: 'Fruits',
    items: [
      {
        name: 'Apple',
        value: 'apple',
      },
      {
        name: 'Orange',
        value: 'orange',
      },
      {
        name: 'Banan',
        value: 'banane',
      },
      {
        name: 'Grape',
        value: 'grape',
      },
    ],
  };
</script>

<div class="content">
  <h1>Default</h1>
  <h1>Element enhancer</h1>
  <!-- Dropdown -->
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
  <DropdownMenu
    on:change={r => console.log(r.detail)}
    label={dropdown.label}
    items={dropdown.items}
  />
  <!-- Multi select dropdown -->
  <select name="fruits" id="fruits">
    <option value="apple">Apple</option>
    <option value="orange">Orange</option>
    <option value="banan">Banan</option>
    <option value="grape">Grape</option>
  </select>
  <MultiDropdownMenu
    on:change={r => console.log(r.detail)}
    label={multiDropdown.label}
    items={multiDropdown.items}
  />
  <!-- Button -->
  <button on:click={e => console.log(e.target)}>Click me!</button>
  <Button
    on:click={e => console.log(e.target)}
    value={'greetings'}
    styleOptions={{ textColor: 'white' }}>Click me!</Button
  >
  <!-- Multiple buttons together -->
  <div>
    <button on:click={e => console.log(e)}>Click me!</button>
    <button on:click={e => console.log(e)}>Click me!</button>
    <button on:click={e => console.log(e)}>Click me!</button>
    <button on:click={e => console.log(e)}>Click me!</button>
    <button on:click={e => console.log(e)}>Click me!</button>
  </div>
  <ButtonRow>
    <Button on:click={e => console.log(e)} value={1}>Click me!</Button>
    <Button on:click={e => console.log(e)} value={2}>Click me!</Button>
    <Button on:click={e => console.log(e)} value={3}>Click me!</Button>
    <Button on:click={e => console.log(e)} value={4}>Click me!</Button>
    <Button on:click={e => console.log(e)} value={5}>Click me!</Button>
  </ButtonRow>
</div>
<!-- Tooltip -->
<h4>Undefined</h4>
<ToolTip position={'left'}>
  <span slot="tooltip"><p>Here is a cool tip</p></span>
  <span slot="content"
    ><Button on:click={e => console.log(e.target)} value={'Tooltip button'}
      >Hover me!</Button
    ></span
  >
</ToolTip>

<style>
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
</style>
