<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	//smui
	import Button from '@smui/button';
	import Select, { Option } from '@smui/select';

	import Client from '$components/Client.svelte';
	import QuoteInfo from '$components/QuoteInfo.svelte';
	import Rates from '$components/Rates.svelte';
	import Grid from '$components/Grid.svelte';
	import QuoteItemsGrid from '$components/QuoteItemsGrid.svelte';

	//#region newshowDivs
	// Define an array of objects that describes the buttons and divs
	const sections = [
		{
			id: 'quote-info',
			label: 'Quote Info'
		},
		{
			id: 'client',
			label: 'Client'
		},
		{
			id: 'ag-grid',
			label: 'Items'
		},
		{
			id: 'rates',
			label: 'Rates'
		}
	];

	// Define a function to handle button clicks and toggle the visibility of the divs
	function toggleSection(id: string) {
		sections.forEach((section) => {
			const div = document.getElementById(section.id) as HTMLDivElement;
			if (section.id === id) {
				div.style.display = 'flex';
			} else {
				div.style.display = 'none';
			}
		});
	}

	//#endregion
</script>

<div style="display: flex; justify-content: space-between; align-items: center;">
	<div>
		{#each sections as section}
			<Button on:click={() => toggleSection(section.id)}>{section.label}</Button>
		{/each}
	</div>

	<div style="margin-left: 10px;">
		<Select class="shaped-filled" variant="outlined">
			<Option value="">Select an option</Option>
			<optgroup label="File">
				<Option value="New">New</Option>
				<Option value="Open">Open</Option>
				<Option value="Save">Save</Option>
				<Option value="Save As">Save As</Option>
			</optgroup>
			<Option value="views">Views</Option>
			<Option value="reports">Reports</Option>
			<Option value="preferences">Preferences</Option>
		</Select>
	</div>
</div>

<hr />
<QuoteInfo />

<Client />

<Rates />

<!-- <Grid /> -->
<QuoteItemsGrid />

<style lang="scss">
	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading) {
		border-radius: 28px 0 0 28px;
		width: 28px;
	}

	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing) {
		border-radius: 0 28px 28px 0;
	}
</style>
