<script lang="ts">
	//smui
	import CircularProgress from '@smui/circular-progress';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';

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
	// import 'ag-grid-enterprise';

	//custom function
	import { jsonFlattenArrayObjectsAsString } from '$lib/flattening';
	import { numberParser, unescapeSymbols } from '$lib/utility_functions';

	const minWidth: number = 150;

	const defaultColDef: ColDef = {
		resizable: true,
		editable: true,
		sortable: true
	};

	let rowData: any[] = [];
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
	}

	const columnDefs: MyColumnDef[] = [
		{ field: 'id', editable: false, checkboxSelection: true },
		{ field: 'job_cost_class' },
		{ field: 'category_id' },
		{
			field: 'quantity_total',
			headerName: 'Qty',
			width: minWidth,
			type: 'numericColumn',
			valueFormatter: numberValueFormatter
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
			valueParser: numberParser
		},
		{ field: 'price_modifier', width: minWidth },
		{ field: 'unit_price', type: 'numericColumn', valueFormatter: numberValueFormatter },
		{ field: 'list_price', type: 'numericColumn', valueFormatter: numberValueFormatter },
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

	let api: GridApi;
	let columnApi: ColumnApi;

	const gridOptions: GridOptions = {
		onGridReady: () => {
			if (rowData.length === 0) {
				setTimeout(() => {
					fetch('quote.json')
						.then((resp) => resp.json())
						.then((data) => {
							let qdata = JSON.parse(jsonFlattenArrayObjectsAsString(data));
							rowData = qdata;
							console.log({ rowData });
						});
				}, 1500);
			}
		},
		onGridSizeChanged: (event: GridSizeChangedEvent) => {
			if (event.clientWidth > 1200) {
				api.sizeColumnsToFit();
			}
		},
		enableRangeSelection: true,
		allowContextMenuWithControlKey: true,
		getContextMenuItems: getContextMenuItems,
		sideBar: true
	};

	let filterString = '';
	const onFilterStringChange = () => {
		console.log({ filterString });
		api?.setQuickFilter(filterString);
	};

	// bind to changes of filterString to our eventHandler :)
	$: filterString, onFilterStringChange();

	function numberValueFormatter(params: any) {
		const value = parseFloat(params.value);
		if (isNaN(value)) {
			return params.value;
		} else {
			return value.toFixed(2);
		}
	}

	function percentageValueFormatter(params: any) {
		const value = parseFloat(params.value);
		if (isNaN(value)) {
			return params.value;
		} else {
			return (value * 100).toFixed(2) + '%';
		}
	}

	function createFlagImg(flag: string) {
		return (
			'<img border="0" width="15" height="10" src="https://flags.fmcdn.net/data/flags/mini/' +
			flag +
			'.png"/>'
		);
	}

	function getContextMenuItems(params: any) {
		console.log({ params });
		var result = [
			{
				// custom item
				name: 'Alert ' + params.value,
				action: () => {
					window.alert('Alerting about ' + params.value);
				},
				cssClasses: ['redFont', 'bold']
			},
			{
				// custom item
				name: 'Always Disabled',
				disabled: true,
				tooltip:
					'Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!'
			},
			{
				name: 'Country',
				subMenu: [
					{
						name: 'Ireland',
						action: () => {
							console.log('Ireland was pressed');
						},
						icon: createFlagImg('ie')
					},
					{
						name: 'UK',
						action: () => {
							console.log('UK was pressed');
						},
						icon: createFlagImg('gb')
					},
					{
						name: 'France',
						action: () => {
							console.log('France was pressed');
						},
						icon: createFlagImg('fr')
					}
				]
			},
			{
				name: 'Person',
				subMenu: [
					{
						name: 'Niall',
						action: () => {
							console.log('Niall was pressed');
						}
					},
					{
						name: 'Sean',
						action: () => {
							console.log('Sean was pressed');
						}
					},
					{
						name: 'John',
						action: () => {
							console.log('John was pressed');
						}
					},
					{
						name: 'Alberto',
						action: () => {
							console.log('Alberto was pressed');
						}
					},
					{
						name: 'Tony',
						action: () => {
							console.log('Tony was pressed');
						}
					},
					{
						name: 'Andrew',
						action: () => {
							console.log('Andrew was pressed');
						}
					},
					{
						name: 'Kev',
						action: () => {
							console.log('Kev was pressed');
						}
					},
					{
						name: 'Will',
						action: () => {
							console.log('Will was pressed');
						}
					},
					{
						name: 'Armaan',
						action: () => {
							console.log('Armaan was pressed');
						}
					}
				]
			}, // built in separator
			'separator',
			{
				// custom item
				name: 'Windows',
				shortcut: 'Alt + W',
				action: () => {
					console.log('Windows Item Selected');
				},
				icon: '<img src="https://www.ag-grid.com/example-assets/skills/windows.png" />'
			},
			{
				// custom item
				name: 'Mac',
				shortcut: 'Alt + M',
				action: () => {
					console.log('Mac Item Selected');
				},
				icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>'
			}, // built in separator
			'separator',
			{
				// custom item
				name: 'Checked',
				checked: true,
				action: () => {
					console.log('Checked Selected');
				},
				icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>'
			}, // built in copy item
			'copy',
			'separator',
			'chartRange'
		];

		return result;
	}
</script>

<div id="ag-grid" style:display="none" style:flex-direction="column" style:height="800px">
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

	<div class="ag-theme-svelte-material" style:width="100%" style:flex="1">
		{#if rowData.length > 0}
			<AgGridSvelte
				{rowData}
				{columnDefs}
				{defaultColDef}
				{gridOptions}
				sideBar
				bind:api
				bind:columnApi
			/>
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

<style lang="scss">
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
