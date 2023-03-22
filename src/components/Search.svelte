<script>
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import Button from '@smui/button';
	import Card, { Content, Actions } from '@smui/card';
	import Textfield from '@smui/textfield';
	import DataTable, { Head, Cell, Body } from '@smui/data-table';
	import { Label, Icon } from '@smui/common';

	let name = '';
	let showCard = false;

	let pbRecord = {
		mfg: 'Crestron',
		part_number: 'DMPS4-350-AEC-W',
		desc: 'A wonder product that solves all needs from all people all the time',
		unit_cost: Math.floor(Math.random() * 100) + 1,
		unit_price: 200 // replace with actual unit price as needed
	};
</script>

<svelte:head>
	<!-- Fonts -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
	/>

	<!-- Material Typography -->
	<link
		rel="stylesheet"
		href="https://unpkg.com/@material/typography@14.0.0/dist/mdc.typography.css"
	/>

	<!-- SMUI -->
	<link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>
<div id="search">
	<!-- <TopAppBar variant="static" style="text-align:center;">
		<Row>
			<Section style="text-align:center;">
				<Title>Search Dialog Svelte Material UI in a REPL</Title>
			</Section>
		</Row>
	</TopAppBar> -->

	<main style="padding: 1em;">
		{#if !showCard}
			<p class="mdc-typography--body1">Search for products</p>
			<Textfield
				label="PartNo"
				bind:value={pbRecord.part_number}
				on:keypress={(event) => (showCard = event.key === 'Enter')}
			/>
			<Button on:click={() => (showCard = true)}>Submit</Button>
		{:else}
			<Card style="width: 500px; margin: 2em auto; background-color: #eee; color: #000;">
				<Content class="mdc-typography--body2">
					<h2 class="mdc-typography--headline6" style="margin: 0;">
						{pbRecord.part_number}
					</h2>
					<table>
						<tr>
							<td><b>Mfg:</b></td>
							<td>{pbRecord.mfg}</td>
						</tr>
						<tr>
							<td><b>Part Number:</b></td>
							<td>{pbRecord.part_number}</td>
						</tr>
						<tr>
							<td><b>Description:</b></td>
							<td>{pbRecord.desc}</td>
						</tr>
						<tr>
							<td><b>Unit Cost:</b></td>
							<td>${pbRecord.unit_cost.toFixed(2)}</td>
						</tr>
						<tr>
							<td><b>Unit Price:</b></td>
							<td>${pbRecord.unit_price.toFixed(2)}</td>
						</tr>
					</table>
				</Content>
				<Actions style="display: flex; justify-content: space-even; width: 100%;">
					<Button>
						<Label>Add Item</Label>
					</Button>
					<Button on:click={() => (showCard = false)} style="text-decoration: none;">
						<Label>Cancel</Label>
					</Button>
				</Actions>
			</Card>
		{/if}
	</main>
</div>

<style>
      :global(body) {
          margin: 0;
          padding: 0;
      }
          
          /* Theme colors. */
  :root {
    --mdc-theme-primary:rgba(39, 119, 245, 0.8) ;
    --mdc-theme-secondary: #676778;
    --mdc-theme-background: #fff;
    --mdc-theme-surface: #fff;
    --mdc-theme-error: #b71c1c;
    --mdc-theme-on-primary: #fff;
    --mdc-theme-on-secondary: #fff;
    --mdc-theme-on-surface: #000;
    --mdc-theme-on-error: #fff;
    --mdc-theme-text-primary-on-background: white);
    --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);
    --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38); 
    --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);
    --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.54);
    --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-primary-on-dark: white;
    --mdc-theme-text-secondary-on-dark: rgba(255, 255, 255, 0.7);
    --mdc-theme-text-hint-on-dark: rgba(255, 255, 255, 0.5);
    --mdc-theme-text-disabled-on-dark: rgba(255, 255, 255, 0.5);
    --mdc-theme-text-icon-on-dark: rgba(255, 255, 255, 0.5);
  }
  
  /* Layout grid spacing. */
  :root {
    --mdc-layout-grid-margin-desktop: 24px;
    --mdc-layout-grid-gutter-desktop: 24px;
    --mdc-layout-grid-column-width-desktop: 72px;
    --mdc-layout-grid-margin-tablet: 16px;
    --mdc-layout-grid-gutter-tablet: 16px;
    --mdc-layout-grid-column-width-tablet: 72px;
    --mdc-layout-grid-margin-phone: 16px;
    --mdc-layout-grid-gutter-phone: 16px;
    --mdc-layout-grid-column-width-phone: 72px;
  }
</style>
