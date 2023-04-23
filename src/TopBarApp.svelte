<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title as BarTitle,
  } from "@smui/top-app-bar";
  import Drawer, {
    AppContent,
    Content,
    Header,
    Title,
    Subtitle,
  } from "@smui/drawer";
  import List, { Item, Text } from "@smui/list";
  import IconButton from "@smui/icon-button";

  let open = false;
  export let quote_name: any;

  //////////////////////////////
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function HandleButtonClick() {
    dispatch("HandleButtonClick");
  }
  /////////////////////////////
</script>

<main>
  <TopAppBar
    variant="static"
    prominent={false}
    dense={true}
    style="background-color: #1776bf;"
  >
    <Row>
      <Section>
        <IconButton
          class="material-icons"
          on:click={() => {
            console.log("Menu");
            open = !open;
          }}>menu</IconButton
        >
        <BarTitle>Quote: {quote_name}</BarTitle>
      </Section>
      <Section style="justify-content: flex-end">
        <IconButton class="material-icons" on:click={() => console.log("Print")}
          >mail</IconButton
        >
        <IconButton class="material-icons" on:click={() => console.log("Print")}
          >print</IconButton
        >
        <IconButton class="material-icons" on:click={() => console.log("Print")}
          >download</IconButton
        >
        <IconButton class="material-icons" on:click={HandleButtonClick}
          >visibility</IconButton
        >
        <IconButton
          class="material-icons"
          on:click={() => console.log("Options")}>settings</IconButton
        >
      </Section>
    </Row>
  </TopAppBar>
  <!-- if to open the drawer-->
  {#if open}
    <Drawer class=".drawer-container">
      <Content style="background-color:#f5f5f5 width=50px">
        <List>
          <Item>
            <Text>Save</Text>
          </Item>
          <Item>
            <Text>Save As</Text>
          </Item>
          <Item>
            <Text>Close</Text>
          </Item>
        </List>
      </Content>
    </Drawer>
  {/if}
</main>

<style lang="scss">
  .drawer-container {
    position: relative;
    display: flex;
    height: 100%;
    border: none var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    overflow: hidden;
    z-index: 0;
  }
  .flexor-content {
    flex-basis: 0;
    height: 0;
    flex-grow: 1;
    overflow: hidden;
  }
  // * :global(.app-content) {
  //   flex: auto;
  //   overflow: hidden;
  //   position: relative;
  //   flex-grow: 1;
  //   padding: 25px;
  // }
</style>
