<script lang="ts">
	import 'ag-grid-community/styles/ag-grid.css';
	import 'ag-grid-community/styles/ag-theme-material.css';

	import CircularProgress from '@smui/circular-progress';

	import AgGridSvelte from 'ag-grid-svelte';
	import type { ColDef } from 'ag-grid-community';

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
			pinned: 'left'
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
		{ field: 'total', width: 100, pinned: 'right' }
	];

	const onGridReady = () => {
		if (rowData.length === 0) {
			setTimeout(() => {
				fetch('/olympic-winners.json')
					.then((resp) => resp.json())
					.then((data) => (rowData = data));
			}, 1500);
		}
	};
</script>

<div class="ag-theme-material" style:width="100%" style:height="100%" style:position="relative" style:overflow="hidden">
	{#if rowData.length > 0}
		<AgGridSvelte {rowData} {columnDefs} {defaultColDef} {onGridReady} />
	{:else}
		<div class="spinner-wrapper">
			<CircularProgress style="height: 64px; width: 64px;" indeterminate />
		</div>
		<div style:display="none">
			<AgGridSvelte {onGridReady} />
		</div>
	{/if}
</div>

<style>
	.spinner-wrapper {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>
