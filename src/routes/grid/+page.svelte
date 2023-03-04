<script lang="ts">
	import { toggleSection, sections } from './grid';

	//smui
	import CircularProgress from '@smui/circular-progress';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import Button from '@smui/button';

	import Select, { Option } from '@smui/select';
	import HelperText from '@smui/textfield/helper-text';
	1;

	//ag-grid
	import AgGridSvelte from 'ag-grid-svelte';
	import type {
		ColDef,
		GridApi,
		ColumnApi,
		GridOptions,
		GridSizeChangedEvent,
		SortController
	} from 'ag-grid-community';

	import Info from '$components/QuoteInfo.svelte';
	import Client from '$components/Client.svelte';
	import Rates from '$components/Rates.svelte';

	interface IOlympicData {
		athlete: string;
		age: number;
		country: string;
		year: number;
		date: string;
		sport: string;
		gold: number;
		silver: number;
		bronze: number;
		total: number;
	}

	const defaultColDef: ColDef = { resizable: true, editable: true, sortable: true, width: 90 };
	let rowData: IOlympicData[] = [];

	const columnDefs: ColDef[] = [
		{
			headerName: 'id',
			field: 'id',
			pinned: 'left',
			editable: false
		},
		{ field: 'athlete', width: 150, pinned: 'left' },
		{ field: 'age', pinned: 'left' },
		{ field: 'country', width: 150 },
		{ field: 'year' },
		{ field: 'date', width: 110 },
		{ field: 'sport', width: 150 },
		{ field: 'gold', width: 100 },
		{ field: 'silver', width: 100 },
		{ field: 'bronze', width: 100 },
		{ field: 'total', width: 100, pinned: 'right', editable: false }
	];

	let api: GridApi;
	let columnApi: ColumnApi;

	const gridOptions: GridOptions = {
		onGridReady: () => {
			if (rowData.length === 0) {
				setTimeout(() => {
					fetch('/olympic-winners.json')
						.then((resp) => resp.json())
						.then((data) => {
							rowData = data;
						});
				}, 1500);
			}
		},
		onGridSizeChanged: (event: GridSizeChangedEvent) => {
			if (event.clientWidth > 1200) {
				api.sizeColumnsToFit();
			}
		}
	};

	let filterString = '';
	const onFilterStringChange = () => {
		console.log({ filterString });
		api?.setQuickFilter(filterString);
	};

	// bind to changes of filterString to our eventHandler :)
	$: filterString, onFilterStringChange();
</script>

<div style="display: flex; justify-content: space-between; align-items: center;">
	<div>
		{#each sections as section}
			<Button on:click={() => toggleSection(section.id)}>{section.label}</Button>
		{/each}
	</div>

	<div style="margin-left: 10px;">
		<Select>
			<Option value="">Select an option</Option>
			<Option value="views">Views</Option>
			<Option value="reports">Reports</Option>
			<Option value="preferences">Preferences</Option>
		</Select>
	</div>
</div>

<hr />
<Info />

<Client />

<div id="ag-grid" style:display="none" style:flex-direction="column" style:height="800px">
	+
	{#if rowData.length > 0}
		<div style:text-align="end" style:margin-bottom="35px">
			<Textfield
				class="shaped-outlined"
				variant="outlined"
				bind:value={filterString}
				label="Search"
			>
				<Icon class="material-icons" slot="leadingIcon">search</Icon>
			</Textfield>
		</div>
	{/if}

	<div
		class="ag-theme-svelte-material"
		style:width="100%"
		style:flex="1"
		style:position="relative"
		style:overflow="hidden"
	>
		{#if rowData.length > 0}
			<AgGridSvelte {rowData} {columnDefs} {defaultColDef} {gridOptions} bind:api bind:columnApi />
		{:else}
			<div class="spinner-wrapper">
				<CircularProgress style="height: 64px; width: 64px;" indeterminate />
			</div>
			<div style:display="none">
				<AgGridSvelte {gridOptions} />
			</div>
		{/if}
	</div>
</div>

<Rates />

<style lang="scss">
	.textfield-container {
		display: flex;
		align-items: center;
	}
	.textfield-label {
		margin-right: 16px; /* adjust this to your liking */
	}
	.textfield-input {
		flex-grow: 1;
	}

	.spinner-wrapper {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading) {
		border-radius: 28px 0 0 28px;
		width: 28px;
	}

	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing) {
		border-radius: 0 28px 28px 0;
	}
</style>
