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
        name: "Wendsday",
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
  <DropdownMenu label={dropdown.label} items={dropdown.items} />
</div>

<style>
</style>
