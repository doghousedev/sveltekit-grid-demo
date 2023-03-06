<script lang="ts">
	import CircularProgress from '@smui/circular-progress';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';

	import { onMount } from 'svelte';
	import { Grid } from 'ag-grid-community';
	import type { GridOptions } from 'ag-grid-community';
	import 'ag-grid-enterprise';

	import 'ag-grid-community/styles/ag-grid.css';
	import 'ag-grid-community/styles/ag-theme-material.css';
	//custom function
	import { jsonFlattenArrayObjectsAsString } from '$lib/flattening';
	import {
		createFlagImg,
		getContextMenuItems,
		numberParser,
		numberValueFormatter,
		percentageValueFormatter,
		unescapeSymbols
	} from '$lib/utility_functions';

	let rd: any[] = [];

	const minWidth: number = 150;

	interface MyColumnDef {
		field: string;
		headerName?: string;
		width?: number;
		hide?: boolean;
		checkboxSelection?: boolean;
		editable?: boolean;
		type?: string;
		valueFormatter?: (params: { value: any }) => string;
		valueParser?: (params: { newValue: any }) => number | string;
		aggFunc?: string;
		cellEditor?: string;
		cellEditorParams?: any;
		onCellValueChanged?: (params: any) => void;
	}

	const columnDefs: MyColumnDef[] = [
		{ field: 'id', editable: false, checkboxSelection: true },
		{ field: 'job_cost_class' },
		{ field: 'category_id' },
		{
			field: 'quantity_total',
			type: 'numericColumn',
			editable: true,
			cellEditor: 'agTextCellEditor',
			valueFormatter: numberValueFormatter,
			valueParser: numberParser,
			aggFunc: 'sum'
		},

		{ field: 'uom', width: minWidth },
		{ field: 'pricebook_part_number' },
		{
			field: 'model_name',
			valueFormatter: (params: { value: string }) => unescapeSymbols(params.value)
		},
		{ field: 'mfg_link' },
		{
			field: 'manufacturer',
			valueFormatter: (params: { value: string }) => unescapeSymbols(params.value)
		},
		{
			field: 'description',
			width: 280,
			valueFormatter: (params: { value: string }) => unescapeSymbols(params.value)
		},
		{ field: 'preferred_vendor_display' },
		{
			field: 'unit_cost',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter,
			valueParser: numberParser,
			editable: true,
			cellEditor: 'agTextCellEditor',
			aggFunc: 'sum'
		},
		{
			headerName: 'Price Modifier',
			field: 'price_modifier',
			editable: true,
			cellEditor: 'agTextCellEditor',
			onCellValueChanged: (params) => {
				const regex = /^(P|M|D)\d{2}$|^X$|^L$/i;
				const match = params.newValue.match(regex);
				if (!match) {
					alert(
						`Invalid price modifier format. Format should be one of: \nP##, M##, D##, \nX (without digits)\nL (without digits)`
					);
					params.node.setDataValue('price_modifier', params.oldValue);
				}
			},
			cellEditorParams: {
				validate: (value: string) => {
					const regex = /^(P|M|D)\d{2}$|^X$|^L$/i;
					const match = value.match(regex);
					if (!match) {
						return {
							valid: false,
							message:
								'Invalid price modifier format. Format should be one \nof: P##, M##, L, D##, \nX (without digits)\nL (without digits)'
						};
					}
					return { valid: true };
				}
			}
		},
		{
			field: 'unit_price',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter,
			valueParser: numberParser,
			editable: true,
			cellEditor: 'agTextCellEditor',
			aggFunc: 'sum'
		},
		{
			field: 'list_price',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter,
			valueParser: numberParser,
			editable: true,
			cellEditor: 'agTextCellEditor',
			aggFunc: 'sum'
		},
		{
			field: 'extended_cost',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter,
			valueParser: numberParser,
			aggFunc: 'sum'
		},
		{ field: 'extended_price', type: 'numericColumn', valueFormatter: numberValueFormatter },
		{ field: 'extended_list_price', type: 'numericColumn', valueFormatter: numberValueFormatter },
		{ field: 'freight_sell', type: 'numericColumn', valueFormatter: numberValueFormatter },
		{ field: 'materials_sell', type: 'numericColumn', valueFormatter: numberValueFormatter },
		{ field: 'service_sell', type: 'numericColumn', valueFormatter: numberValueFormatter },
		{ field: 'sundries_sell', type: 'numericColumn', valueFormatter: numberValueFormatter },
		{ field: 'tax_amount', type: 'numericColumn', valueFormatter: numberValueFormatter },
		//#region hidden
		{ field: 'apply_cost_discount', hide: true },
		{ field: 'created_id', hide: true },
		{
			field: 'extended_net_cost',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter,
			hide: true
		},
		{
			field: 'extended_net_price',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter,
			hide: true
		},
		{ field: 'date_created', hide: true },
		{ field: 'date_modified', hide: true },
		{ field: 'div_1', headerName: 'Location', hide: true },
		{ field: 'div_2', headerName: 'System', hide: true },
		{ field: 'ishighlighted', hide: true },
		{ field: 'isoptional', hide: true },
		{ field: 'istaxable', hide: true },
		{ field: 'labor_task_code', hide: true },
		{ field: 'line_attributes', hide: true },
		{ field: 'object_id', hide: true },
		{ field: 'owner_id', hide: true },
		{ field: 'owner_team_id', hide: true },
		{ field: 'modified_id', hide: true },
		{ field: 'part_number', hide: true },
		{ field: 'preferred_vendor', hide: true },
		{ field: 'price_discount_percentage', valueFormatter: percentageValueFormatter, hide: true },
		{ field: 'name', hide: true },
		{
			field: 'net_unit_cost',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter,
			hide: true
		},
		{
			field: 'net_unit_price',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter,
			hide: true
		},
		{ field: 'notes', hide: true },
		{ field: 'qty_labor_install', hide: true },
		{ field: 'qty_labor_programming', hide: true },
		{ field: 'related_labor_pricebook', hide: true },
		{ field: 'record_locator', hide: true },
		{ field: 'search_string', hide: true },
		{ field: 'related_quote', hide: true },
		{ field: 'related_to', hide: true },
		{ field: 'search_string', hide: true }
		//#endregion
	];

	//here is where we start the grid and pass in the column definitions
	let grid: Grid;

	const gridOptions: GridOptions = {
		columnDefs: columnDefs,
		getContextMenuItems: getContextMenuItems,
		defaultColDef: {
			sortable: true,
			filter: true,
			flex: 1,
			resizable: true,
			enableValue: true,
			enableRowGroup: true,
			enablePivot: true
		},
		pagination: false,
		paginationPageSize: 20,
		rowData: [],
		rowSelection: 'multiple',
		sideBar: {
			toolPanels: [
				{
					id: 'columns',
					labelDefault: 'Columns',
					labelKey: 'columns',
					iconKey: 'columns',
					toolPanel: 'agColumnsToolPanel'
				},
				{
					id: 'filters',
					labelDefault: 'Filters',
					labelKey: 'filters',
					iconKey: 'filter',
					toolPanel: 'agFiltersToolPanel'
				}
			]
		},

		getRowId: (params) => params.data.id,

		onGridReady: () => {
			let recData: [] = [];
			if (recData.length === 0) {
				setTimeout(() => {
					fetch('quote.json')
						.then((resp) => resp.json())
						.then((data) => {
							let qdata = JSON.parse(jsonFlattenArrayObjectsAsString(data));
							recData = qdata;
						})
						.then(() => {
							gridOptions.api?.setRowData(recData);
						});
				}, 1500);
			}
		},
		onRowSelected: () => {
			// const selectedRows = gridOptions.api?.getSelectedRows();
			// if (selectedRows) {
			// 	selectedRows.forEach((row) => {
			// 		row.extended_cost = parseFloat(row.quantity_total) * parseFloat(row.unit_cost);
			// 		gridOptions.api?.applyTransaction(row);
			// 	});
			// }
		},
		onCellValueChanged: function (params) {
			// perform any necessary updates to your application state
			recalcualteTotals(params);
			//console.log('Cell data has changed:', params);
		}
	};

	onMount(async () => {
		const gridEl = document.getElementById('ag-grid');
		if (!gridEl) {
			throw new Error('Grid element not found');
		}
		grid = new Grid(gridEl, gridOptions);
	});
	let newRows = 0;

	function handleAddRow() {
		newRows++;
		const rowcount = gridOptions.api?.getDisplayedRowCount();
		if (!rowcount) {
			console.error('Grid API not accessible');
			return;
		}
		let maxId = 0;
		gridOptions.api?.forEachNode((rowNode) => {
			if (rowNode.data.trackId > maxId) maxId = rowNode.data.trackId;
		});
		const newRow = {
			trackId: newRows * -1,
			trackName: '',
			trackMs: undefined,
			composer: '',
			genre: ''
		};
		gridOptions.api?.applyTransaction({
			add: [newRow],
			addIndex: rowcount
		});
		setTimeout(() => {
			const firstCol = gridOptions.columnApi?.getAllDisplayedColumns()[0];
			gridOptions.api?.ensureColumnVisible(firstCol!);
			gridOptions.api?.ensureIndexVisible(rowcount);
			gridOptions.api?.setFocusedCell(rowcount, firstCol!);
		}, 50);
	}

	function recalcualteTotals(params: any) {
		function calculateUnitPrice(row: any) {
			const pMod = row.price_modifier.toUpperCase();

			type ModifierFunctions = {
				[key: string]: (value: number) => number;
			};

			const modifierFunctions: ModifierFunctions = {
				P: (multiplier: number) => row.unit_cost / ((100 - multiplier) / 100),
				M: (multiplier: number) => row.unit_cost * (1 + multiplier / 100),
				L: () => row.list_price,
				D: (discount: number) => row.list_price * (1 - discount / 100),
				X: () => row.unit_price
			};

			const regex = /^(P|M|L|D|X)(\d{2})$/;
			const match = pMod.match(regex);
			if (!match) {
				return;
			}

			const modifier = match[1];
			const value = parseInt(match[2]);

			const calculatePrice = modifierFunctions[modifier];

			if (calculatePrice) {
				return calculatePrice(value);
			} else {
				console.log(`Invalid price modifiers: ${pMod}`);
			}
		}

		let row = params.data;

		const unit_price = calculateUnitPrice(row) || row.unit_price;
		console.log(unit_price);

		if (row.price_modifier === 'L') {
			row.unit_price = row.list_price;
		} else {
			row.unit_price = unit_price;
		}
		row.extended_cost = parseFloat(row.quantity_total) * parseFloat(row.unit_cost);
		row.extended_price = parseFloat(row.quantity_total) * parseFloat(unit_price);
		row.extended_list_price = parseFloat(row.quantity_total) * parseFloat(row.list_price);
		row.extended_net_cost = row.extended_cost;
		row.extended_net_price = row.extended_price;
		row.price_modifier = row.price_modifier.toUpperCase();

		gridOptions.api?.applyTransaction(row);
	}

	let error = false;

	let filterString = '';
	const onFilterStringChange = () => {
		console.log({ filterString });
		gridOptions.api?.setQuickFilter(filterString);
	};

	// bind to changes of filterString to our eventHandler :)
	$: filterString, onFilterStringChange();
</script>

<div
	id="ag-grid"
	class="ag-theme-material"
	style:display="none"
	style:flex-direction="column"
	style:height="800px"
>
	<div style:text-align="end" style:margin-bottom="15px">
		<Icon class="material-icons" slot="leadingIcon">search</Icon>
		<Textfield class="shaped-outlined" variant="dense" bind:value={filterString} label="Search" />
	</div>
</div>
<div class="column">
	{#if error}
		<div class="py-2">
			<div class="notification is-danger">
				<button class="delete" on:click={() => (error = false)} />
				Error saving changes
			</div>
		</div>
	{/if}
</div>

<style lang="scss" global>
	// @use 'ag-grid-community/styles' as ag;
	// @include ag.grid-styles(
	// 	(
	// 		--ag-row-hover-color: chartreuse
	// 	)
	// );
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
	// .ag-theme-material {
	// 	--ag-background-color: #efefef;
	// 	--ag-cell-hover-background-color: chartruse;
	// }
	.ag-theme-material {
		// --ag-background-color: #efefef;
		--ag-checkbox-background-color: white;
		--ag-checkbox-checked-color: dodgerblue;
		--ag-checkbox-unchecked-color: $blue-grey-500;
		--ag-checkbox-indeterminate-color: grey;
	}
</style>
