
/* eslint-disable @typescript-eslint/no-explicit-any */
export function unescapeSymbols(inputString: string): string {
    if (!inputString) return ''; // Check for null or undefined input values

    const symbols: { [key: string]: string } = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&#x2F;': '/',
        '&#x60;': '`',
        '&#x3D;': '=',
        '&#x22;': '"',
        '&#x3C;': '<',
        '&#x3E;': '>',
        '&#x26;': '&',
        '&#x27;': "'",
        '&#x2D;': '-',
        '&#x5F;': '_',
        '&#x2B;': '+',
        '&#x2E;': '.',
        '&#x2A;': '*',
        '&#xfffd;': ' ' // This is a special case for the "�" symbol
    };

    return inputString.replace(/&(#x?)?\w+;/g, match => {
        const symbol = symbols[match];
        return symbol ? symbol : match;
    });
}

export function numberParser(params: { newValue: string }): number {
    const value = Number(params.newValue);
    return isNaN(value) ? NaN : value;
}

export function numberValueFormatter(params: any) {
    const value = parseFloat(params.value);
    if (isNaN(value)) {
        return params.value;
    } else {
        return value.toFixed(2).toString();
    }
}

export function percentageValueFormatter(params: any) {
    const value = parseFloat(params.value);
    if (isNaN(value)) {
        return params.value;
    } else {
        return (value * 100).toFixed(2) + '%';
    }
}

export function createFlagImg(flag: string) {
    return (
        '<img border="0" width="15" height="10" src="https://flags.fmcdn.net/data/flags/mini/' +
        flag +
        '.png"/>'
    );
}

// export function getContextMenuItems(params: any) {
//     console.log({ params });
//     const result = [
//         {
//             // custom item
//             name: 'Alert ' + params.value,
//             action: () => {
//                 window.alert('Alerting about ' + params.value);
//             },
//             cssClasses: ['redFont', 'bold']
//         },
//         {
//             // custom item
//             name: 'Always Disabled',
//             disabled: true,
//             tooltip:
//                 'Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!'
//         },
//         {
//             name: 'Country',
//             subMenu: [
//                 {
//                     name: 'Ireland',
//                     action: () => {
//                         console.log('Ireland was pressed');
//                     },
//                     icon: createFlagImg('ie')
//                 },
//                 {
//                     name: 'UK',
//                     action: () => {
//                         console.log('UK was pressed');
//                     },
//                     icon: createFlagImg('gb')
//                 },
//                 {
//                     name: 'France',
//                     action: () => {
//                         console.log('France was pressed');
//                     },
//                     icon: createFlagImg('fr')
//                 }
//             ]
//         },
//         {
//             name: 'Person',
//             subMenu: [
//                 {
//                     name: 'Niall',
//                     action: () => {
//                         console.log('Niall was pressed');
//                     }
//                 },
//                 {
//                     name: 'Sean',
//                     action: () => {
//                         console.log('Sean was pressed');
//                     }
//                 },
//                 {
//                     name: 'John',
//                     action: () => {
//                         console.log('John was pressed');
//                     }
//                 },
//                 {
//                     name: 'Alberto',
//                     action: () => {
//                         console.log('Alberto was pressed');
//                     }
//                 },
//                 {
//                     name: 'Tony',
//                     action: () => {
//                         console.log('Tony was pressed');
//                     }
//                 },
//                 {
//                     name: 'Andrew',
//                     action: () => {
//                         console.log('Andrew was pressed');
//                     }
//                 },
//                 {
//                     name: 'Kev',
//                     action: () => {
//                         console.log('Kev was pressed');
//                     }
//                 },
//                 {
//                     name: 'Will',
//                     action: () => {
//                         console.log('Will was pressed');
//                     }
//                 },
//                 {
//                     name: 'Armaan',
//                     action: () => {
//                         console.log('Armaan was pressed');
//                     }
//                 }
//             ]
//         }, // built in separator
//         'separator',
//         {
//             // custom item
//             name: 'Windows',
//             shortcut: 'Alt + W',
//             action: () => {
//                 console.log('Windows Item Selected');
//             },
//             icon: '<img src="https://www.ag-grid.com/example-assets/skills/windows.png" />'
//         },
//         {
//             // custom item
//             name: 'Mac',
//             shortcut: 'Alt + M',
//             action: () => {
//                 console.log('Mac Item Selected');
//             },
//             icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>'
//         }, // built in separator
//         'separator',
//         {
//             // custom item
//             name: 'Checked',
//             checked: true,
//             action: () => {
//                 console.log('Checked Selected');
//             },
//             icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>'
//         }, // built in copy item
//         'copy',
//         'separator',
//         'chartRange'
//     ];

//     return result;
// }

// //Right mouse button context menu
// export function getContextMenuItems(params) {
//     let result = [
//       {
//         name: "Add Row",
//         action: function () {
//           onAddRow();
//         },
//         icon: '<i class="fas fa-plus"></i><img src="" />',
//         disabled: false,
//         tooltip: "Add Line at end.",
//       },
//       {
//         name: "Insert Rows",
//         action: function () {
//           insertRows();
//         },
//         disabled: false,
//         icon: '<i class="fas fa-long-arrow-alt-right"></i><img src="" />',
//         tooltip: "Insert above cursor line at end.",
//       },
//       {
//         name: "Delete Rows",
//         action: function () {
//           onRemoveSelected();
//         },
//         disabled: false,
//         tooltip: "Delete the rows selected",
//         cssClasses: ["contextmenu-delete-row"],
//         icon: '<i class="fas fa-trash"></i><img src="" />',
//       },
//       "separator",
  
//       {
//         name: "Modify Price",
//         icon: '<i class="fas fa-pen-alt"></i></i> <img src="" />',
//         subMenu: [
//           {
//             name: "P3",
//             action: function () {
//               modifyPricing("P03");
//             },
//           },
//           {
//             name: "P5",
//             action: function () {
//               modifyPricing("P05");
//             },
//           },
//           {
//             name: "P10",
//             action: function () {
//               modifyPricing("P10");
//             },
//           },
//           {
//             name: "P15",
//             action: function () {
//               modifyPricing("P15");
//             },
//           },
//           {
//             name: "P20",
//             action: function () {
//               modifyPricing("P20");
//             },
//           },
//           {
//             name: "P25",
//             action: function () {
//               modifyPricing("P25");
//             },
//           },
//           {
//             name: "P30",
//             action: function () {
//               modifyPricing("P30");
//             },
//           },
//           {
//             name: "P35",
//             action: function () {
//               modifyPricing("P35");
//             },
//           },
//           {
//             name: "P40",
//             action: function () {
//               modifyPricing("P40");
//             },
//           },
//           {
//             name: "P45",
//             action: function () {
//               modifyPricing("P45");
//             },
//           },
//           {
//             name: "P50",
//             action: function () {
//               modifyPricing("P50");
//             },
//           },
//         ],
//       },
  
//       //#region 
//       {
//         name: "Update Pricebook",
//         icon: '<i class="fas fa-funnel-dollar"></i></i> <img src="" />',
//         subMenu: [
//           {
//             name: "Update TO Pricebook",
//             action: function () {
//               if (getSelectedRows()) {
//                 const selectedRowData = getSelectedNodeData();
//                 selectedRowData.forEach((row) => updatePricebook(row));
//               }
//             },
//             icon: '<i class="fas fa-arrow-right"></i><img src="" />',
//             cssClasses: ["contextmenu-update-to-pricebook"],
//             disabled: false,
//             tooltip: "Update info TO PriceBook with the selected row data",
//           },
//           {
//             name: "Update FROM Pricebook",
//             action: function () {
//               if (getSelectedRows()) {
//                 const selectedRowData = getSelectedNodeData();
//                 selectedRowData.forEach((row) => updatePricebook(row));
//               }
//               Swal.fire({
//                 title: "Updating FROM Pricebook",
//                 text: "Selected rows pricing has been updated from the pricebook",
//                 type: "success",
//                 allowEnterKey: false,
//               });
//             },
//             icon: '<i class="fas fa-arrow-left"></i><img src="" />',
//             cssClasses: ["contextmenu-update-from-pricebook"],
//             disabled: false,
//             tooltip: "Update selected rows FROM PriceBook ",
//           },
//         ],
//       },
  
//       //#endregion
//       ///////////////////////////////////
//       "separator",
//       {
//         name: "Toggle Optional",
//         action: function () {
//           let selectedNodes = gridOptions.api.getSelectedNodes();
  
//           selectedNodes.forEach((node, index) => {
//             if (node.data.isoptional === "N") {
//               node.setDataValue("isoptional", "Y");
//             } else {
//               node.setDataValue("isoptional", "N");
//             }
  
//             updateRowCalcPaste(node);
//           });
//         },
//         icon: '<i class="fas fa-toggle-on"></i> <img src ="" />',
//         disabled: false,
//         tooltip: "Modify",
//       },
//       {
//         name: "Highlight Row",
//         action: function () {
//           let selectedNodes = gridOptions.api.getSelectedNodes();
  
//           selectedNodes.forEach((node, index) => {
//             if (node.data.ishighlighted === "N") {
//               node.setDataValue("ishighlighted", "Y");
//             } else {
//               node.setDataValue("ishighlighted", "N");
//             }
  
//             updateRowCalcPaste(node);
//           });
//         },
//         icon: '<i class="fas fa-highlighter"></i><img src="" />',
//         disabled: false,
//         tooltip: "Sets the line color to yellow",
//       },
  
//       "separator",
//       {
//         name: "Locations",
//         icon: '<i class="fas fa-building"></i><img src="" />',
//         disabled: false,
//         tooltip: "Add a Quote Location",
//         subMenu: [
//           {
//             name: "Add Location",
//             action: async function () {
//               inputValue = "new";
//               const locationName = await Swal.fire({
//                 title: "Add a Location",
//                 input: "text",
//                 inputLabel: "Location Name ",
//                 inputValue: inputValue,
//                 showCancelButton: true,
//                 inputValidator: (value) => {
//                   if (!value) {
//                     return "You need to write something!";
//                   }
//                 },
//               });
  
//               if (locationName.value) {
//                 locationValues.push(locationName.value);
//                 sortArray(locationValues); //put the new item in order
  
//                 toastMixin.fire({
//                   animation: true,
//                   title: "Location Added Successfully",
//                 });
//               }
//             },
//           },
//           {
//             name: "Rename Location",
//             action: function () {
//               toastMixin.fire({
//                 animation: true,
//                 icon: "info",
//                 title: "Location Rename action",
//               });
//             },
//           },
//           {
//             name: "Delete Location",
//             action: function () {
//               toastMixin.fire({
//                 animation: true,
//                 icon: "warning",
//                 title: "Location Delete action",
//               });
//             },
//           },
//         ],
//       },
//       "separator",
//       "copy",
//       "copyWithHeaders",
//       "separator",
//       "export",
//       "separator",
//       "chartRange",
//     ];
  
//     return result;
//   }