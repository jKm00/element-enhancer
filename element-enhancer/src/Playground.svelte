<script lang="ts">
  import DropdownMenu from "@/lib/dropdowns/DropdownMenu.svelte";

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
</script>

<div class="content">
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
</div>

<style>
  .content {
    display: flex;
    gap: 1rem;
  }
</style>
