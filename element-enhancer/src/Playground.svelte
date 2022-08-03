<script lang="ts">
  import DropdownMenu from "@/lib/dropdowns/DropdownMenu.svelte";
  import MultiDropdownMenu from "@/lib/dropdowns/MultiDropdownMenu.svelte";

  const dropdown = {
    label: "My dropdown",
    items: [
      {
        name: "Monday",
        value: "monday",
      },
      {
        name: "Tuesday",
        value: "tuesday",
      },
      {
        name: "WendsdayWendsday",
        value: "wendsday",
      },
      {
        name: "Thursday",
        value: "thursday",
      },
      {
        name: "Friday",
        value: "friday",
      },
      {
        name: "Saturday",
        value: "saturday",
      },
      {
        name: "Sunday",
        value: "sunday",
      },
    ],
  };

  const multiDropdown = {
    label: 'Fruits',
    items: [
      {
        name: 'Apple',
        value: 'apple'
      },
      {
        name: 'Orange',
        value: 'orange'
      },
      {
        name: 'Banan',
        value: 'banane'
      },
      {
        name: 'Grape',
        value: 'grape'
      }
    ]
  }
</script>

<div class="content">
  <h1>Default</h1>
  <h1>Element enhancer</h1>
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
  <DropdownMenu
    on:change={(r) => console.log(r.detail)}
    label={dropdown.label}
    items={dropdown.items}
  />
  <select name="fruits" id="fruits">
    <option value="apple">Apple</option>
    <option value="orange">Orange</option>
    <option value="banan">Banan</option>
    <option value="grape">Grape</option>
  </select>
  <MultiDropdownMenu 
    on:change={(r) => console.log(r.detail)} 
    label={multiDropdown.label} 
    items={multiDropdown.items} 
  />
</div>

<style>
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
</style>
