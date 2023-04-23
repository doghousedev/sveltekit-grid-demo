<script lang="ts">
  import { onMount } from "svelte";
  import TopBarApp from "./TopBarApp.svelte";

  //ag-Grid
  import "ag-grid-community/styles/ag-grid.css";

  //import "./static/ag-grid.css";
  import "ag-grid-community/styles/ag-theme-alpine.css";
  import { Grid } from "ag-grid-community";
  import type { GridOptions } from "ag-grid-community";
  import "ag-grid-enterprise";

  //smui
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";

  //Sweet Alert
  import Swal from "sweetalert2";
  export const swal = Swal;

  //custom function
  import { jsonFlattenArrayObjectsAsString } from "./lib/flattening";
  import {
    numberParser,
    numberValueFormatter,
    percentageValueFormatter,
    unescapeSymbols,
  } from "./lib/utility_functions";

  //variables and constants
  export let record_id: any;
  export let quote_name: any;
  let grid: Grid;
  const minWidth: number = 150;
  let rd: any[] = [];

  interface MyColumnDef {
    field: string;
    headerName?: string;
    width?: number;
    hide?: boolean;
    cellStyle?: any;
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
    { field: "id", editable: false, checkboxSelection: true },
    {
      field: "job_cost_class",
      headerName: "Job Class",
      cellStyle: { "text-align": "left" },
    },
    {
      field: "category_id",
      headerName: "Category",
      cellStyle: { "text-align": "left" },
    },
    {
      field: "quantity_total",
      headerName: "Qty.",
      type: "numericColumn",
      editable: true,
      cellEditor: "agTextCellEditor",
      valueFormatter: numberValueFormatter,
      valueParser: numberParser,
      aggFunc: "sum",
    },

    {
      field: "uom",
      width: minWidth,
      headerName: "UoM",
      cellStyle: { "text-align": "left" },
    },
    {
      field: "pricebook_part_number",
      headerName: "Part No.",
      cellStyle: {
        color: "RebeccaPurple",
        "text-align": "left",
      },
    },
    {
      field: "model_name",
      valueFormatter: (params: { value: string }) =>
        unescapeSymbols(params.value),
      cellStyle: { "text-align": "left" },
      headerName: "Model",
    },
    { field: "mfg_link", cellStyle: { "text-align": "left" } },
    {
      field: "manufacturer",
      headerName: "Mfg.",
      cellStyle: { "text-align": "left" },
      valueFormatter: (params: { value: string }) =>
        unescapeSymbols(params.value),
    },
    {
      field: "description",
      headerName: "Description",
      cellStyle: { "text-align": "left" },
      valueFormatter: (params: { value: string }) =>
        unescapeSymbols(params.value),
      width: 280,
    },
    { field: "preferred_vendor_display", headerName: "Preferred Vendor" },
    {
      field: "unit_cost",
      headerName: "Unit Cost",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      valueParser: numberParser,
      editable: true,
      cellEditor: "agTextCellEditor",
      aggFunc: "sum",
    },
    {
      field: "price_modifier",
      headerName: "Price Modifier",
      editable: true,
      cellEditor: "agTextCellEditor",
      onCellValueChanged: (params) => {
        const regex = /^(P|M|D)\d{2}$|^X$|^L$/i;
        const match = params.newValue.match(regex);
        if (!match) {
          alert(
            `Invalid price modifier format. Format should be one of: \nP##, M##, D##, \nX (without digits)\nL (without digits)`
          );
          params.node.setDataValue("price_modifier", params.oldValue);
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
                "Invalid price modifier format. Format should be one \nof: P##, M##, L, D##, \nX (without digits)\nL (without digits)",
            };
          }
          return { valid: true };
        },
      },
    },
    {
      field: "unit_price",
      headerName: "Unit Price",
      cellStyle: { "text-align": "right" },
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      valueParser: numberParser,
      editable: true,
      cellEditor: "agTextCellEditor",
      aggFunc: "sum",
    },
    {
      field: "list_price",
      headerName: "List Price",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      valueParser: numberParser,
      editable: true,
      cellEditor: "agTextCellEditor",
      aggFunc: "sum",
    },
    {
      field: "extended_cost",
      headerName: "Extended Cost",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      valueParser: numberParser,
      aggFunc: "sum",
      enableRowGroup: true,
      enableValue: true,
    },
    {
      field: "extended_price",
      headerName: "Extended Cost",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
    },
    {
      field: "extended_list_price",
      headerName: "Extended List",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
    },
    {
      field: "materials_sell",
      headerName: "Materials",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
    },
    {
      field: "freight_sell",
      headerName: "Freight",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
    },
    {
      field: "tax_amount",
      headerName: "Tax",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
    },
    {
      field: "service_sell",
      headerName: "Service",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
    },
    {
      field: "sundries_sell",
      headerName: "Sundries",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
    },

    //#region hidden
    { field: "apply_cost_discount", hide: true },
    { field: "created_id", hide: true },
    {
      field: "extended_net_cost",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      hide: true,
    },
    {
      field: "extended_net_price",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      hide: true,
    },
    { field: "date_created", hide: true },
    { field: "date_modified", hide: true },
    { field: "div_1", headerName: "Location", hide: true },
    { field: "div_2", headerName: "System", hide: true },
    { field: "ishighlighted", hide: true },
    { field: "isoptional", hide: true },
    { field: "istaxable", hide: true },
    { field: "labor_task_code", hide: true },
    { field: "line_attributes", hide: true },
    { field: "object_id", hide: true },
    { field: "owner_id", hide: true },
    { field: "owner_team_id", hide: true },
    { field: "modified_id", hide: true },
    { field: "part_number", hide: true },
    { field: "preferred_vendor", hide: true },
    {
      field: "price_discount_percentage",
      valueFormatter: percentageValueFormatter,
      hide: true,
    },
    { field: "name", hide: true },
    {
      field: "net_unit_cost",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      hide: true,
    },
    {
      field: "net_unit_price",
      type: "numericColumn",
      valueFormatter: numberValueFormatter,
      hide: true,
    },
    { field: "notes", hide: true },
    { field: "qty_labor_install", hide: true },
    { field: "qty_labor_programming", hide: true },
    { field: "related_labor_pricebook", hide: true },
    { field: "record_locator", hide: true },
    { field: "search_string", hide: true },
    { field: "related_quote", hide: true },
    { field: "related_to", hide: true },
    { field: "search_string", hide: true },
    //#endregion
  ];
  //here is where we start the grid and pass in the column definitions

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
      enablePivot: true,
    },
    groupIncludeFooter: true,
    groupIncludeTotalFooter: true,
    pagination: true,
    paginationPageSize: 100,
    rowData: [],
    rowSelection: "multiple",
    sideBar: {
      toolPanels: [
        {
          id: "columns",
          labelDefault: "Columns",
          labelKey: "columns",
          iconKey: "columns",
          toolPanel: "agColumnsToolPanel",
          toolPanelParams: {
            suppressSyncLayoutWithGrid: true,
          },
        },
        {
          id: "filters",
          labelDefault: "Filters",
          labelKey: "filters",
          iconKey: "filter",
          toolPanel: "agFiltersToolPanel",
          toolPanelParams: {
            suppressSyncLayoutWithGrid: true,
          },
        },
        // {
        //   id: "customStats",
        //   labelDefault: "Recap",
        //   labelKey: "customStats",
        //   // iconKey: "custom-stats",
        //   toolPanel: "agFiltersToolPanel",
        // },
        // {
        // 	id: 'customCharts',
        // 	labelDefault: 'Charts',
        // 	labelKey: 'customCharts',
        // 	iconKey: 'chart',
        // 	toolPanel: 'customChartToolPanel'
        // }
      ],
      defaultToolPanel: "",
    },

    getRowId: (params) => params.data.id,

    onGridReady: async () => {
      let recData: [] = [];
      const URL = "https://doghousedev.com/svelte-ts-grid/data/quote.json";
      const URL_AAP = `https://net-av.agileappscloud.com/networking/rest/record/Quote_Item_Details?fieldList=*&filter=related_quote=${record_id}&alt=json`;
      if (recData.length === 0) {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const resp = await fetch(URL);
        const data = await resp.json();
        let qdata = JSON.parse(jsonFlattenArrayObjectsAsString(data));
        recData = qdata;
        gridOptions.api?.setRowData(recData);
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
    },
  };

  onMount(async () => {
    console.log("Getting record_id from App into Grid::", record_id);
    const gridEl = document.getElementById("ag-grid");

    if (!gridEl) {
      throw new Error("Grid element not found");
    }
    grid = new Grid(gridEl, gridOptions);
  });

  let newRows = 0;
  let rateVisible = false;
  let rates = {
    material: 6.0,
    freight: 6.0,
    tax: 6.0,
    service: 10.0,
  };

  let filterString = "";
  const onFilterStringChange = () => {
    gridOptions.api?.setQuickFilter(filterString);
  };
  // bind to changes of filterString to our eventHandler :)
  $: filterString, onFilterStringChange();

  //bind using the PriceBook Search String
  let pricebookSearchString = "";
  const onpricebookSearchString = () => {
    console.log({ pricebookSearchString });
  };

  // bind to changes of filterString to our eventHandler :)
  $: pricebookSearchString, onpricebookSearchString();

  //#region Functions

  export function getContextMenuItems(params: any) {
    var toastMixin = Swal.mixin({
      toast: true,
      icon: "success",
      title: "General Title",
      position: "center",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    function onAddRow() {
      console.log("onAddRow");
      Swal.fire({
        title: "Add Row",
        text: "Add a new row to the grid",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Add",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          insertRows();
        }
      });
    }
    function insertRows() {
      console.log("insertRows");
      return true;
    }
    function onRemoveSelected() {
      console.log("onRemoveSelected");
      return true;
    }
    function modifyPricing(pmod: string) {
      console.log("modifyPricing", pmod);
      return true;
    }
    function getSelectedRows() {
      console.log("getSelectedRows");
      return gridOptions.api?.getSelectedRows();
    }
    function getSelectedNodes() {
      console.log("getSelectedNodes");
      return true;
    }
    function getSelectedNodeData() {
      console.log("getSelectedNodeData");
      return true;
    }
    function updateRowCalcPaste() {
      console.log("updateRowCalcPaste");
      return true;
    }
    function updatePricebook(node: any, index: number) {
      console.log("updatePricebook");
      return true;
    }

    let result = [
      {
        name: "Add Row",
        action: function () {
          onAddRow();
        },
        icon: '<i class="fas fa-plus"></i><img src="" />',
        disabled: false,
        tooltip: "Add Line at end.",
      },
      {
        name: "Insert Rows",
        action: function () {
          insertRows();
        },
        disabled: false,
        icon: '<i class="fas fa-long-arrow-alt-right"></i><img src="" />',
        tooltip: "Insert above cursor line at end.",
      },
      {
        name: "Delete Rows",
        action: function () {
          onRemoveSelected();
        },
        disabled: false,
        tooltip: "Delete the rows selected",
        cssClasses: ["contextmenu-delete-row"],
        icon: '<i class="fas fa-trash"></i><img src="" />',
      },
      "separator",

      {
        name: "Modify Price",
        icon: '<i class="fas fa-pen-alt"></i></i> <img src="" />',
        subMenu: [
          {
            name: "P3",
            action: function () {
              modifyPricing("P03");
            },
          },
          {
            name: "P5",
            action: function () {
              modifyPricing("P05");
            },
          },
          {
            name: "P10",
            action: function () {
              modifyPricing("P10");
            },
          },
          {
            name: "P15",
            action: function () {
              modifyPricing("P15");
            },
          },
          {
            name: "P20",
            action: function () {
              modifyPricing("P20");
            },
          },
          {
            name: "P25",
            action: function () {
              modifyPricing("P25");
            },
          },
          {
            name: "P30",
            action: function () {
              modifyPricing("P30");
            },
          },
          {
            name: "P35",
            action: function () {
              modifyPricing("P35");
            },
          },
          {
            name: "P40",
            action: function () {
              modifyPricing("P40");
            },
          },
          {
            name: "P45",
            action: function () {
              modifyPricing("P45");
            },
          },
          {
            name: "P50",
            action: function () {
              modifyPricing("P50");
            },
          },
        ],
      },

      //#region
      {
        name: "Update Pricebook",
        icon: '<i class="fas fa-funnel-dollar"></i></i> <img src="" />',
        subMenu: [
          {
            name: "Update TO Pricebook",
            action: function () {
              if (getSelectedRows()) {
                const selectedRowData = getSelectedNodeData();
                selectedRowData.forEach((row) => updatePricebook(row));
              }
            },
            icon: '<i class="fas fa-arrow-right"></i><img src="" />',
            cssClasses: ["contextmenu-update-to-pricebook"],
            disabled: false,
            tooltip: "Update info TO PriceBook with the selected row data",
          },
          {
            name: "Update FROM Pricebook",
            action: function () {
              if (getSelectedRows()) {
                const selectedRowData = getSelectedNodeData();
                selectedRowData.forEach((row: any) => updatePricebook(row));
              }
              Swal.fire({
                title: "Update FROM Pricebook",
                text: "Selected rows pricing has been updated from the pricebook",
                icon: "success",
                allowEnterKey: false,
              });
            },
            icon: '<i class="fas fa-arrow-left"></i><img src="" />',
            cssClasses: ["contextmenu-update-from-pricebook"],
            disabled: false,
            tooltip: "Update selected rows FROM PriceBook ",
          },
        ],
      },

      //#endregion
      ///////////////////////////////////
      "separator",
      {
        name: "Toggle Optional",
        action: function () {
          let selectedNodes = gridOptions.api?.getSelectedNodes();

          selectedNodes?.forEach((node: any, index) => {
            if (node.data.isoptional === "N") {
              node.setDataValue("isoptional", "Y");
            } else {
              node.setDataValue("isoptional", "N");
            }

            updateRowCalcPaste(node, index);
          });
        },
        icon: '<i class="fas fa-toggle-on"></i> <img src ="" />',
        disabled: false,
        tooltip: "Modify",
      },
      {
        name: "Highlight Row",
        action: function () {
          let selectedNodes = gridOptions.api?.getSelectedNodes();

          selectedNodes?.forEach((node, index) => {
            if (node.data.ishighlighted === "N") {
              node.setDataValue("ishighlighted", "Y");
            } else {
              node.setDataValue("ishighlighted", "N");
            }

            updateRowCalcPaste(node, index);
          });
        },
        icon: '<i class="fas fa-highlighter"></i><img src="" />',
        disabled: false,
        tooltip: "Sets the line color to yellow",
      },

      "separator",
      {
        name: "Locations",
        icon: '<i class="fas fa-building"></i><img src="" />',
        disabled: false,
        tooltip: "Add a Quote Location",
        subMenu: [
          {
            name: "Add Location",
            action: async function () {
              let inputValue = "new...";
              const locationName = await Swal.fire({
                title: "Add a Location",
                input: "text",
                inputLabel: "Location Name ",
                inputValue: inputValue,
                showCancelButton: true,
                inputValidator: (inputValue) => {
                  return new Promise((resolve: any) => {
                    if (inputValue) {
                      resolve();
                    } else {
                      resolve("Loaction cannot be empty");
                    }
                  });
                },
              });

              if (locationName.value) {
                locationValues.push(locationName.value);
                sortArray(locationValues); //put the new item in order

                toastMixin.fire({
                  animation: true,
                  title: "Location Added Successfully",
                });
              }
            },
          },
          {
            name: "Rename Location",
            action: function () {
              toastMixin.fire({
                animation: true,
                icon: "info",
                title: "Location Rename action",
              });
            },
          },
          {
            name: "Delete Location",
            action: function () {
              toastMixin.fire({
                animation: true,
                icon: "warning",
                title: "Location Delete action",
              });
            },
          },
        ],
      },
      {
        name: "Systems",
        icon: '<i class="fas fa-building"></i><img src="" />',
        disabled: false,
        tooltip: "Add a Quote Systems",
        subMenu: [
          {
            name: "Add System",
            action: async function () {
              let inputValue = "new...";
              const systemName = await Swal.fire({
                title: "Add a System",
                input: "text",
                inputLabel: "System Name ",
                inputValue: inputValue,
                showCancelButton: true,
                inputValidator: (inputValue) => {
                  return new Promise((resolve: any) => {
                    if (inputValue) {
                      resolve();
                    } else {
                      resolve("System cannot be empty");
                    }
                  });
                },
              });

              if (systemName.value) {
                systemValues.push(systemName.value);
                sortArray(systemValues); //put the new item in order

                toastMixin.fire({
                  animation: true,
                  title: "Location Added Successfully",
                });
              }
            },
          },
          {
            name: "Rename System",
            action: function () {
              toastMixin.fire({
                animation: true,
                icon: "info",
                title: "System Rename action",
              });
            },
          },
          {
            name: "Delete System",
            action: function () {
              toastMixin.fire({
                animation: true,
                icon: "warning",
                title: "System Delete action",
              });
            },
          },
        ],
      },
      "separator",
      "copy",
      "copyWithHeaders",
      "separator",
      "export",
      "separator",
      "chartRange",
    ];

    return result;
  }
  function handleAddRow() {
    newRows++;
    const rowcount = gridOptions.api?.getDisplayedRowCount();
    if (!rowcount) {
      console.error("Grid API not accessible");
      return;
    }
    let maxId = 0;
    gridOptions.api?.forEachNode((rowNode) => {
      if (rowNode.data.trackId > maxId) maxId = rowNode.data.trackId;
    });
    const newRow = {
      trackId: newRows * -1,
      trackName: "",
      trackMs: undefined,
      composer: "",
      genre: "",
    };
    gridOptions.api?.applyTransaction({
      add: [newRow],
      addIndex: rowcount,
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
        X: () => row.unit_price,
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

    if (row.price_modifier === "L") {
      row.unit_price = row.list_price;
    } else {
      row.unit_price = unit_price;
    }
    row.extended_cost =
      parseFloat(row.quantity_total) * parseFloat(row.unit_cost);
    row.extended_price =
      parseFloat(row.quantity_total) * parseFloat(unit_price);
    row.extended_list_price =
      parseFloat(row.quantity_total) * parseFloat(row.list_price);
    row.extended_net_cost = row.extended_cost;
    row.extended_net_price = row.extended_price;
    row.price_modifier = row.price_modifier.toUpperCase();
    row.materials_sell =
      row.job_cost_class == "Equipment"
        ? (parseFloat(row.extended_price) * rates.material) / 100
        : row.materials_sell;
    row.freight_sell =
      row.job_cost_class == "Equipment"
        ? (parseFloat(row.extended_price) * rates.freight) / 100
        : row.freight_sell;
    row.tax_amount = row.istaxable
      ? (parseFloat(row.extended_price) * rates.tax) / 100
      : row.tax_amount;
    row.service_sell =
      row.job_cost_class == "Equipment"
        ? (parseFloat(row.extended_price) * rates.service) / 100
        : row.service_sell;

    gridOptions.api?.applyTransaction(row);
  }
  export function recalculateRates() {
    gridOptions.api?.forEachLeafNode((node) => {
      const data = node.data;
      data.materials_sell =
        (parseFloat(data.extended_price) * rates.material) / 100;
      data.freight_sell =
        (parseFloat(data.extended_price) * rates.freight) / 100;
      data.tax_amount = (parseFloat(data.extended_price) * rates.tax) / 100;
      data.service_sell =
        (parseFloat(data.extended_price) * rates.service) / 100;
      gridOptions.api?.applyTransaction(data);
    });
  }
  export function restoreState() {
    const columnState = JSON.parse(localStorage.getItem("columnState")!);
    const groupState = JSON.parse(localStorage.getItem("groupState")!);
    const filterState = JSON.parse(localStorage.getItem("filterState")!);

    // Restore the state
    gridOptions.columnApi?.applyColumnState({
      state: columnState,
      applyOrder: true,
    });
    gridOptions.columnApi?.setColumnGroupState(groupState);
    gridOptions.api?.setFilterModel(filterState);
  }
  function resetState() {
    gridOptions.columnApi?.resetColumnState();
    console.log("column state reset");
  }
  function saveState() {
    const columnState = gridOptions.columnApi?.getColumnState();
    const groupState = gridOptions.columnApi?.getColumnGroupState();
    const filterState = gridOptions.api?.getFilterModel();

    // Store the state in local storage
    localStorage.setItem("columnState", JSON.stringify(columnState));
    localStorage.setItem("groupState", JSON.stringify(groupState));
    localStorage.setItem("filterState", JSON.stringify(filterState));
  }
  function sayHi(event: { isTrusted: any }) {
    console.log("hi", event.isTrusted);
    alert("modal popup- maybe use swal or us smui dialog?");
  }
  function toggleRatesDiv(id: string) {
    const div = document.getElementById(id) as HTMLDivElement;
    rateVisible = !rateVisible;
    if (rateVisible) {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  }
  //#endregion

  ////////////////////////////////////////
  /* use events */
  function HandleButtonClick() {
    restoreState();
  }
  //////////////////////////////
</script>

<main>
  <div>
    <TopBarApp {quote_name} on:HandleButtonClick={HandleButtonClick} />
  </div>
  <div
    id="ag-grid"
    class="ag-theme-alpine"
    style="display: block; height: 800px; overflow: auto;"
  >
    <div class="flex-container">
      <Button on:click={() => toggleRatesDiv("rates")} color="secondary">
        rates
        <Icon class="material-icons">menu</Icon></Button
      >
      <Button on:click={restoreState}>Restore State</Button>
      <Button on:click={resetState}>Reset State</Button>
      <Button on:click={saveState}>Save State</Button>
    </div>
    <div
      class="flex-container"
      id="rates"
      style="display:none;justify-content:center"
    >
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
      <labl class="label-container"> Freight</labl>
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
    </div>
    <hr style="color:dodgerblue" />

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
</main>

<style>
  @import "material-icons/iconfont/material-icons.css";
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    background-color: #f5f5f5;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .ag-theme-material {
    font-family: Roboto, sans-serif;
    --ag-material-accent-color: #2778c4;
  }
</style>
