<script lang="ts">
  import { onMount } from "svelte";

  //smui
  import Button from "@smui/button";

  import "./static/smui.css";
  import Grid from "./Grid.svelte";

  let record_id: any;
  export let quote_name: any;
  let value: any;

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    record_id = urlParams.get("record_id");
    quote_name = urlParams.get("quote_name");
  });
</script>

<main>
  <div style="margin-left: 10px;" />
  {#if record_id}
    <Grid {record_id} {quote_name} />
  {:else}
    {console.log("No record_id")}
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 0.5em;
    margin: 0 auto;
    background-color: #f5f5f5;
  }
</style>
