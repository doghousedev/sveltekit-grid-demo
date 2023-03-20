<script lang="ts">
	//smui
	import Button from '@smui/button';
	import CircularProgress from '@smui/circular-progress';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';

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

	import handleBlur from '$components/Rates.svelte';

	let rd: any[] = [];

	const minWidth: number = 150;

	interface MyColumnDef {
		field: string;
		headerName?: string;
		width?: number;
		hide?: boolean;
		checkboxSelection?: boolean;
		editable?: boolean;
		enableRowGroup?: boolean;
		enableValue?: boolean;
		type?: string;
		valueFormatter?: (params: { value: any }) => string;
		valueParser?: (params: { newValue: any }) => number;
		aggFunc?: string;
		cellEditor?: string;
		cellEditorParams?: any;
		onCellValueChanged?: (params: any) => void;
	}

	const columnDefs: MyColumnDef[] = [
		{ field: 'id', editable: false, checkboxSelection: true },
		{ field: 'job_cost_class', headerName: 'Cost Class' },
		{ field: 'category_id', headerName: 'Category' },
		{
			field: 'quantity_total',
			headerName: 'Qty.',
			type: 'numericColumn',
			editable: true,
			cellEditor: 'agTextCellEditor',
			valueFormatter: numberValueFormatter,
			valueParser: numberParser,
			aggFunc: 'sum'
		},

		{ field: 'uom', width: minWidth, headerName: 'UoM' },
		{ field: 'pricebook_part_number', headerName: 'Part No.' },
		{
			field: 'model_name',
			valueFormatter: (params: { value: string }) => unescapeSymbols(params.value),
			headerName: 'Model'
		},
		{ field: 'mfg_link' },
		{
			field: 'manufacturer',
			headerName: 'Mfg.',
			valueFormatter: (params: { value: string }) => unescapeSymbols(params.value)
		},
		{
			field: 'description',
			headerName: 'Description',
			width: 280,
			valueFormatter: (params: { value: string }) => unescapeSymbols(params.value)
		},
		{ field: 'preferred_vendor_display', headerName: 'Preferred Vendor' },
		{
			field: 'unit_cost',
			headerName: 'Unit Cost',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter,
			valueParser: numberParser,
			editable: true,
			cellEditor: 'agTextCellEditor',
			aggFunc: 'sum'
		},
		{
			field: 'price_modifier',
			headerName: 'Price Modifier',
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
			headerName: 'Unit Price',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter,
			valueParser: numberParser,
			editable: true,
			cellEditor: 'agTextCellEditor',
			aggFunc: 'sum'
		},
		{
			field: 'list_price',
			headerName: 'List Price',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter,
			valueParser: numberParser,
			editable: true,
			cellEditor: 'agTextCellEditor',
			aggFunc: 'sum'
		},
		{
			field: 'extended_cost',
			headerName: 'Extended Cost',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter,
			valueParser: numberParser,
			aggFunc: 'sum',
			enableRowGroup: true,
			enableValue: true
		},
		{
			field: 'extended_price',
			headerName: 'Extended Cost',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter
		},
		{
			field: 'extended_list_price',
			headerName: 'Extended List',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter
		},
		{
			field: 'freight_sell',
			headerName: 'Freight',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter
		},
		{
			field: 'materials_sell',
			headerName: 'Materials',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter
		},
		{
			field: 'service_sell',
			headerName: 'Service',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter
		},
		{
			field: 'sundries_sell',
			headerName: 'Sundries',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter
		},
		{
			field: 'tax_amount',
			headerName: 'Tax',
			type: 'numericColumn',
			valueFormatter: numberValueFormatter
		},
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
		autoGroupColumnDef: {
			cellRendererParams: {
				footerValueGetter: (params: { node: { level: number }; value: any }) => {
					const isRootLevel = params.node.level === -1;
					if (isRootLevel) {
						return 'Grand Total';
					}
					return `Sub Total (${params.value})`;
				}
			}
		},
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
		groupIncludeFooter: true,
		groupIncludeTotalFooter: true,
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
			recalculateTotals(params);
			recalculateRates();
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

	export function recalculateTotals(params: any) {
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
		row.materials_sell =
			row.job_cost_class == 'Equipment'
				? (parseFloat(row.extended_price) * rates.material) / 100
				: row.materials_sell;
		row.freight_sell =
			row.job_cost_class == 'Equipment'
				? (parseFloat(row.extended_price) * rates.freight) / 100
				: row.freight_sell;
		row.tax_amount = row.istaxable
			? (parseFloat(row.extended_price) * rates.tax) / 100
			: row.tax_amount;
		row.service_sell =
			row.job_cost_class == 'Equipment'
				? (parseFloat(row.extended_price) * rates.service) / 100
				: row.service_sell;

		gridOptions.api?.applyTransaction(row);
	}

	export function recalculateRates() {
		gridOptions.api?.forEachNode((node) => {
			const data = node.data;
			data.materials_sell = (parseFloat(data.extended_price) * rates.material) / 100;
			data.freight_sell = (parseFloat(data.extended_price) * rates.freight) / 100;
			data.tax_amount = (parseFloat(data.extended_price) * rates.tax) / 100;
			data.service_sell = (parseFloat(data.extended_price) * rates.service) / 100;
			gridOptions.api?.applyTransaction(data);
		});
	}

	function saveState() {
		const columnState = gridOptions.columnApi?.getColumnState();
		const groupState = gridOptions.columnApi?.getColumnGroupState();
		const filterState = gridOptions.api?.getFilterModel();
		console.log(columnState);

		// Store the state in local storage
		localStorage.setItem('columnState', JSON.stringify(columnState));
		localStorage.setItem('groupState', JSON.stringify(groupState));
		localStorage.setItem('filterState', JSON.stringify(filterState));
	}

	function restoreState() {
		const columnState = JSON.parse(localStorage.getItem('columnState')!);
		const groupState = JSON.parse(localStorage.getItem('groupState')!);
		const filterState = JSON.parse(localStorage.getItem('filterState')!);

		// Restore the state
		gridOptions.columnApi?.applyColumnState({
			state: columnState,
			applyOrder: true
		});
		gridOptions.columnApi?.setColumnGroupState(groupState);
		gridOptions.api?.setFilterModel(filterState);
	}

	function resetState() {
		gridOptions.columnApi?.resetColumnState();
		console.log('column state reset');
	}

	function sayHi(event: { isTrusted: any }) {
		console.log('hi', event.isTrusted);
		alert('modal popup- maybe use swal or us smui dialog?');
	}

	let error = false;

	let filterString = '';
	const onFilterStringChange = () => {
		console.log({ filterString });
		gridOptions.api?.setQuickFilter(filterString);
	};

	// bind to changes of filterString to our eventHandler :)
	$: filterString, onFilterStringChange();

	//bind using the PriceBook Search String
	let pricebookSearchString = '';
	const onpricebookSearchString = () => {
		console.log({ pricebookSearchString });
	};

	// bind to changes of filterString to our eventHandler :)
	$: pricebookSearchString, onpricebookSearchString();

	///////////////////////////////////////////////////////////
	let rateVisible = false;
	function toggleRatesDiv(id: string) {
		const div = document.getElementById(id) as HTMLDivElement;
		rateVisible = !rateVisible;
		if (rateVisible) {
			div.style.display = 'flex';
		} else {
			div.style.display = 'none';
		}
	}

	let rates = {
		material: 6.0,
		freight: 6.0,
		tax: 6.0,
		service: 10.0
	};
	$: console.log({ ...rates });
	///////////////////////////////////////
</script>

<div
	id="ag-grid"
	class="ag-theme-material"
	style:display="none"
	style:flex-direction="column"
	style:height="800px"
>
	<div class="flex-container">
		<Button on:click={() => toggleRatesDiv('rates')} color="secondary">
			rates
			<Icon class="material-icons">menu</Icon></Button
		>
		<Button on:click={saveState}>Save State</Button>
		<Button on:click={restoreState}>Restore State</Button>
		<Button on:click={resetState}>Reset State</Button>
	</div>
	<div class="flex-container" id="rates" style="display:none">
		<labl class="label-container"> Materials</labl>
		<Textfield
			style="width: 120px; height:40px; margin-right: 10px;"
			variant="outlined"
			type="number"
			input$step=".1"
			bind:value={rates.material}
			on:blur={recalculateRates}
		>
			<Icon class="material-icons" slot="trailingIcon">percent</Icon>
		</Textfield>
		<labl class="label-container"> Shipping</labl>
		<Textfield
			style="width: 120px; height:40px; margin-right: 10px;"
			variant="outlined"
			type="number"
			input$step=".1"
			bind:value={rates.freight}
			on:blur={recalculateRates}
		>
			<Icon class="material-icons" slot="trailingIcon">percent</Icon>
		</Textfield>
		<labl class="label-container"> Tax</labl>
		<Textfield
			style="width: 120px; height:40px; margin-right: 10px;"
			variant="outlined"
			type="number"
			input$step=".1"
			bind:value={rates.tax}
			on:blur={recalculateRates}
		>
			<Icon class="material-icons" slot="trailingIcon">percent</Icon>
		</Textfield>
		<labl class="label-container"> Service</labl>
		<Textfield
			style="width: 120px; height:40px; margin-right: 10px;"
			variant="outlined"
			type="number"
			input$step=".1"
			bind:value={rates.service}
			on:blur={recalculateRates}
		>
			<Icon class="material-icons" slot="trailingIcon">percent</Icon>
		</Textfield>
		<br />
		<hr />
	</div>

	<div style="display: flex; justify-content: space-between;">
		<div style="text-align: start; margin-bottom: 15px;">
			<Textfield
				class="shaped-outlined"
				variant="standard"
				style="width: 600px;"
				bind:value={pricebookSearchString}
				label="Search Pricebook"
			/>
			<Button on:click={sayHi}>
				<Icon class="material-icons">search</Icon>
			</Button>
		</div>
		<div style="text-align: end; margin-bottom: 15px;">
			<Textfield
				class="shaped-outlined"
				variant="standard"
				bind:value={filterString}
				label="Find"
			/>
		</div>
	</div>
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

	.flex-container {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f1f1f1;
	}
	.label-container {
		width: 80px;
		margin: 0.5rem;
		text-align: right;
		font-weight: 700;
	}
</style>
