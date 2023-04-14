import { c as create_ssr_component, b as compute_rest_props, g as get_current_component, d as spread, e as escape_attribute_value, f as escape_object, h as add_attribute, y as each, x as add_styles, D as merge_ssr_styles, j as escape, v as validate_component } from "../../../chunks/index2.js";
import { f as forwardEventsBuilder, c as classMap } from "../../../chunks/Ripple.js";
import { S as Select, O as Option, Q as QuoteInfo, C as Client, T as Textfield, I as Icon } from "../../../chunks/functions.js";
import { B as Button } from "../../../chunks/Button.js";
import { ComponentUtil } from "ag-grid-community";
import "@googlemaps/js-api-loader";
import "tom-select";
import "moment";
const CircularProgress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "indeterminate", "closed", "progress", "fourColor", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { indeterminate = false } = $$props;
  let { closed = false } = $$props;
  let { progress = 0 } = $$props;
  let { fourColor = false } = $$props;
  let element;
  let internalClasses = {};
  let internalAttrs = {};
  let determinateCircleAttrs = {};
  let determinateCircle;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  if ($$props.closed === void 0 && $$bindings.closed && closed !== void 0)
    $$bindings.closed(closed);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.fourColor === void 0 && $$bindings.fourColor && fourColor !== void 0)
    $$bindings.fourColor(fourColor);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-circular-progress": true,
          "mdc-circular-progress--indeterminate": indeterminate,
          "mdc-circular-progress--closed": closed,
          ...internalClasses
        }))
      },
      { role: "progressbar" },
      {
        "aria-valuemin": escape_attribute_value(0)
      },
      {
        "aria-valuemax": escape_attribute_value(1)
      },
      {
        "aria-valuenow": escape_attribute_value(indeterminate ? void 0 : progress)
      },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}><div class="mdc-circular-progress__determinate-container"><svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle class="mdc-circular-progress__determinate-track" cx="24" cy="24" r="18" stroke-width="4"></circle><circle${spread(
    [
      {
        class: "mdc-circular-progress__determinate-circle"
      },
      { cx: "24" },
      { cy: "24" },
      { r: "18" },
      { "stroke-dasharray": "113.097" },
      { "stroke-dashoffset": "113.097" },
      { "stroke-width": "4" },
      escape_object(determinateCircleAttrs)
    ],
    {}
  )}${add_attribute("this", determinateCircle, 0)}></circle></svg></div>
  <div class="mdc-circular-progress__indeterminate-container">${each(fourColor ? [1, 2, 3, 4] : [1], (color) => {
    return `<div${add_attribute(
      "class",
      classMap({
        [className]: true,
        "mdc-circular-progress__spinner-layer": true,
        ["mdc-circular-progress__color-" + color]: fourColor
      }),
      0
    )}><div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"><svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="4"></circle></svg></div>
        <div class="mdc-circular-progress__gap-patch"><svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="3.2"></circle></svg></div>
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"><svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="4"></circle></svg></div>
      </div>`;
  })}</div>
</div>`;
});
const formatProperty = new Map([
  ...ComponentUtil.BOOLEAN_PROPERTIES.map((prop) => [prop, ComponentUtil.toBoolean]),
  ...ComponentUtil.NUMBER_PROPERTIES.map((prop) => [prop, ComponentUtil.toNumber])
]);
const AgGridSvelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let updateProp;
  let isClientSide;
  let { statusBar = void 0 } = $$props;
  let { sideBar = void 0 } = $$props;
  let { getContextMenuItems = void 0 } = $$props;
  let { suppressContextMenu = void 0 } = $$props;
  let { preventDefaultOnContextMenu = void 0 } = $$props;
  let { allowContextMenuWithControlKey = void 0 } = $$props;
  let { getMainMenuItems = void 0 } = $$props;
  let { suppressMenuHide = void 0 } = $$props;
  let { popupParent = void 0 } = $$props;
  let { postProcessPopup = void 0 } = $$props;
  let { copyHeadersToClipboard = void 0 } = $$props;
  let { copyGroupHeadersToClipboard = void 0 } = $$props;
  let { clipboardDelimiter = void 0 } = $$props;
  let { suppressCopyRowsToClipboard = void 0 } = $$props;
  let { suppressCopySingleCellRanges = void 0 } = $$props;
  let { suppressLastEmptyLineOnPaste = void 0 } = $$props;
  let { suppressClipboardPaste = void 0 } = $$props;
  let { suppressClipboardApi = void 0 } = $$props;
  let { processCellForClipboard = void 0 } = $$props;
  let { processHeaderForClipboard = void 0 } = $$props;
  let { processGroupHeaderForClipboard = void 0 } = $$props;
  let { processCellFromClipboard = void 0 } = $$props;
  let { sendToClipboard = void 0 } = $$props;
  let { processDataFromClipboard = void 0 } = $$props;
  let { columnDefs = void 0 } = $$props;
  let { defaultColDef = void 0 } = $$props;
  let { defaultColGroupDef = void 0 } = $$props;
  let { columnTypes = void 0 } = $$props;
  let { maintainColumnOrder = void 0 } = $$props;
  let { suppressFieldDotNotation = void 0 } = $$props;
  let { headerHeight = void 0 } = $$props;
  let { groupHeaderHeight = void 0 } = $$props;
  let { floatingFiltersHeight = void 0 } = $$props;
  let { pivotHeaderHeight = void 0 } = $$props;
  let { pivotGroupHeaderHeight = void 0 } = $$props;
  let { allowDragFromColumnsToolPanel = void 0 } = $$props;
  let { suppressMovableColumns = void 0 } = $$props;
  let { suppressColumnMoveAnimation = void 0 } = $$props;
  let { suppressDragLeaveHidesColumns = void 0 } = $$props;
  let { suppressRowGroupHidesColumns = void 0 } = $$props;
  let { colResizeDefault = void 0 } = $$props;
  let { suppressAutoSize = void 0 } = $$props;
  let { autoSizePadding = void 0 } = $$props;
  let { skipHeaderOnAutoSize = void 0 } = $$props;
  let { editType = void 0 } = $$props;
  let { singleClickEdit = void 0 } = $$props;
  let { suppressClickEdit = void 0 } = $$props;
  let { stopEditingWhenCellsLoseFocus = void 0 } = $$props;
  let { enterMovesDown = void 0 } = $$props;
  let { enterMovesDownAfterEdit = void 0 } = $$props;
  let { undoRedoCellEditing = void 0 } = $$props;
  let { undoRedoCellEditingLimit = void 0 } = $$props;
  let { readOnlyEdit = void 0 } = $$props;
  let { defaultCsvExportParams = void 0 } = $$props;
  let { suppressCsvExport = void 0 } = $$props;
  let { defaultExcelExportParams = void 0 } = $$props;
  let { suppressExcelExport = void 0 } = $$props;
  let { excelStyles = void 0 } = $$props;
  let { quickFilterText = void 0 } = $$props;
  let { cacheQuickFilter = void 0 } = $$props;
  let { isExternalFilterPresent = void 0 } = $$props;
  let { doesExternalFilterPass = void 0 } = $$props;
  let { excludeChildrenWhenTreeDataFiltering = void 0 } = $$props;
  let { enableCharts = void 0 } = $$props;
  let { getChartToolbarItems = void 0 } = $$props;
  let { createChartContainer = void 0 } = $$props;
  let { chartThemes = void 0 } = $$props;
  let { customChartThemes = void 0 } = $$props;
  let { chartThemeOverrides = void 0 } = $$props;
  let { navigateToNextHeader = void 0 } = $$props;
  let { tabToNextHeader = void 0 } = $$props;
  let { navigateToNextCell = void 0 } = $$props;
  let { tabToNextCell = void 0 } = $$props;
  let { loadingCellRenderer = void 0 } = $$props;
  let { loadingCellRendererParams = void 0 } = $$props;
  let { loadingCellRendererSelector = void 0 } = $$props;
  let { localeText = void 0 } = $$props;
  let { getLocaleText = void 0 } = $$props;
  let { masterDetail = void 0 } = $$props;
  let { isRowMaster = void 0 } = $$props;
  let { detailCellRenderer = void 0 } = $$props;
  let { detailCellRendererParams = void 0 } = $$props;
  let { detailRowHeight = void 0 } = $$props;
  let { detailRowAutoHeight = void 0 } = $$props;
  let { embedFullWidthRows = void 0 } = $$props;
  let { keepDetailRows = void 0 } = $$props;
  let { keepDetailRowsCount = void 0 } = $$props;
  let { api = void 0 } = $$props;
  let { columnApi = void 0 } = $$props;
  let { alignedGrids = void 0 } = $$props;
  let { context = void 0 } = $$props;
  let { tabIndex = void 0 } = $$props;
  let { rowBuffer = void 0 } = $$props;
  let { valueCache = void 0 } = $$props;
  let { valueCacheNeverExpires = void 0 } = $$props;
  let { enableCellExpressions = void 0 } = $$props;
  let { getDocument = void 0 } = $$props;
  let { suppressParentsInRowNodes = void 0 } = $$props;
  let { suppressTouch = void 0 } = $$props;
  let { suppressFocusAfterRefresh = void 0 } = $$props;
  let { suppressAsyncEvents = void 0 } = $$props;
  let { suppressBrowserResizeObserver = void 0 } = $$props;
  let { suppressPropertyNamesCheck = void 0 } = $$props;
  let { suppressChangeDetection = void 0 } = $$props;
  let { debug = void 0 } = $$props;
  let { overlayLoadingTemplate = void 0 } = $$props;
  let { loadingOverlayComponent = void 0 } = $$props;
  let { loadingOverlayComponentParams = void 0 } = $$props;
  let { suppressLoadingOverlay = void 0 } = $$props;
  let { overlayNoRowsTemplate = void 0 } = $$props;
  let { noRowsOverlayComponent = void 0 } = $$props;
  let { noRowsOverlayComponentParams = void 0 } = $$props;
  let { suppressNoRowsOverlay = void 0 } = $$props;
  let { pagination = void 0 } = $$props;
  let { paginationPageSize = void 0 } = $$props;
  let { paginationNumberFormatter = void 0 } = $$props;
  let { paginationAutoPageSize = void 0 } = $$props;
  let { paginateChildRows = void 0 } = $$props;
  let { suppressPaginationPanel = void 0 } = $$props;
  let { pivotMode = void 0 } = $$props;
  let { pivotPanelShow = void 0 } = $$props;
  let { pivotColumnGroupTotals = void 0 } = $$props;
  let { pivotRowTotals = void 0 } = $$props;
  let { pivotSuppressAutoColumn = void 0 } = $$props;
  let { processPivotResultColDef = void 0 } = $$props;
  let { processPivotResultColGroupDef = void 0 } = $$props;
  let { suppressExpandablePivotGroups = void 0 } = $$props;
  let { functionsReadOnly = void 0 } = $$props;
  let { aggFuncs = void 0 } = $$props;
  let { getGroupRowAgg = void 0 } = $$props;
  let { suppressAggFuncInHeader = void 0 } = $$props;
  let { suppressAggAtRootLevel = void 0 } = $$props;
  let { aggregateOnlyChangedColumns = void 0 } = $$props;
  let { suppressAggFilteredOnly = void 0 } = $$props;
  let { groupAggFiltering = void 0 } = $$props;
  let { removePivotHeaderRowWhenSingleValueColumn = void 0 } = $$props;
  let { animateRows = void 0 } = $$props;
  let { enableCellChangeFlash = void 0 } = $$props;
  let { cellFlashDelay = void 0 } = $$props;
  let { cellFadeDelay = void 0 } = $$props;
  let { allowShowChangeAfterFilter = void 0 } = $$props;
  let { domLayout = void 0 } = $$props;
  let { ensureDomOrder = void 0 } = $$props;
  let { getBusinessKeyForNode = void 0 } = $$props;
  let { processRowPostCreate = void 0 } = $$props;
  let { enableRtl = void 0 } = $$props;
  let { suppressColumnVirtualisation = void 0 } = $$props;
  let { suppressRowVirtualisation = void 0 } = $$props;
  let { suppressMaxRenderedRowRestriction = void 0 } = $$props;
  let { rowDragManaged = void 0 } = $$props;
  let { rowDragEntireRow = void 0 } = $$props;
  let { rowDragMultiRow = void 0 } = $$props;
  let { suppressRowDrag = void 0 } = $$props;
  let { suppressMoveWhenRowDragging = void 0 } = $$props;
  let { fullWidthCellRenderer = void 0 } = $$props;
  let { fullWidthCellRendererParams = void 0 } = $$props;
  let { groupDisplayType = void 0 } = $$props;
  let { groupDefaultExpanded = void 0 } = $$props;
  let { autoGroupColumnDef = void 0 } = $$props;
  let { groupMaintainOrder = void 0 } = $$props;
  let { groupSelectsChildren = void 0 } = $$props;
  let { groupIncludeFooter = void 0 } = $$props;
  let { groupIncludeTotalFooter = void 0 } = $$props;
  let { groupSuppressBlankHeader = void 0 } = $$props;
  let { groupRowsSticky = void 0 } = $$props;
  let { groupSelectsFiltered = void 0 } = $$props;
  let { showOpenedGroup = void 0 } = $$props;
  let { isGroupOpenByDefault = void 0 } = $$props;
  let { initialGroupOrderComparator = void 0 } = $$props;
  let { groupRemoveSingleChildren = void 0 } = $$props;
  let { groupRemoveLowestSingleChildren = void 0 } = $$props;
  let { groupHideOpenParents = void 0 } = $$props;
  let { rowGroupPanelShow = void 0 } = $$props;
  let { groupRowRenderer = void 0 } = $$props;
  let { groupRowRendererParams = void 0 } = $$props;
  let { suppressMakeColumnVisibleAfterUnGroup = void 0 } = $$props;
  let { treeData = void 0 } = $$props;
  let { getDataPath = void 0 } = $$props;
  let { pinnedTopRowData = void 0 } = $$props;
  let { pinnedBottomRowData = void 0 } = $$props;
  let { rowModelType = void 0 } = $$props;
  let { getRowId = void 0 } = $$props;
  let { rowData = void 0 } = $$props;
  let { resetRowDataOnUpdate = void 0 } = $$props;
  let { asyncTransactionWaitMillis = void 0 } = $$props;
  let { suppressModelUpdateAfterUpdateTransaction = void 0 } = $$props;
  let { datasource = void 0 } = $$props;
  let { cacheOverflowSize = void 0 } = $$props;
  let { maxConcurrentDatasourceRequests = void 0 } = $$props;
  let { cacheBlockSize = void 0 } = $$props;
  let { maxBlocksInCache = void 0 } = $$props;
  let { infiniteInitialRowCount = void 0 } = $$props;
  let { serverSideDatasource = void 0 } = $$props;
  let { serverSideInfiniteScroll = void 0 } = $$props;
  let { blockLoadDebounceMillis = void 0 } = $$props;
  let { purgeClosedRowNodes = void 0 } = $$props;
  let { serverSideSortAllLevels = void 0 } = $$props;
  let { serverSideFilterAllLevels = void 0 } = $$props;
  let { serverSideSortOnServer = void 0 } = $$props;
  let { serverSideFilterOnServer = void 0 } = $$props;
  let { serverSideInitialRowCount = void 0 } = $$props;
  let { getChildCount = void 0 } = $$props;
  let { getServerSideGroupLevelParams = void 0 } = $$props;
  let { isServerSideGroupOpenByDefault = void 0 } = $$props;
  let { isApplyServerSideTransaction = void 0 } = $$props;
  let { isServerSideGroup = void 0 } = $$props;
  let { getServerSideGroupKey = void 0 } = $$props;
  let { viewportDatasource = void 0 } = $$props;
  let { viewportRowModelPageSize = void 0 } = $$props;
  let { viewportRowModelBufferSize = void 0 } = $$props;
  let { alwaysShowHorizontalScroll = void 0 } = $$props;
  let { alwaysShowVerticalScroll = void 0 } = $$props;
  let { debounceVerticalScrollbar = void 0 } = $$props;
  let { suppressHorizontalScroll = void 0 } = $$props;
  let { suppressScrollOnNewData = void 0 } = $$props;
  let { suppressScrollWhenPopupsAreOpen = void 0 } = $$props;
  let { suppressAnimationFrame = void 0 } = $$props;
  let { suppressMiddleClickScrolls = void 0 } = $$props;
  let { suppressPreventDefaultOnMouseWheel = void 0 } = $$props;
  let { scrollbarWidth = void 0 } = $$props;
  let { rowSelection = void 0 } = $$props;
  let { rowMultiSelectWithClick = void 0 } = $$props;
  let { isRowSelectable = void 0 } = $$props;
  let { suppressRowDeselection = void 0 } = $$props;
  let { suppressRowClickSelection = void 0 } = $$props;
  let { suppressCellFocus = void 0 } = $$props;
  let { suppressMultiRangeSelection = void 0 } = $$props;
  let { enableCellTextSelection = void 0 } = $$props;
  let { enableRangeSelection = void 0 } = $$props;
  let { enableRangeHandle = void 0 } = $$props;
  let { enableFillHandle = void 0 } = $$props;
  let { fillHandleDirection = void 0 } = $$props;
  let { fillOperation = void 0 } = $$props;
  let { suppressClearOnFillReduction = void 0 } = $$props;
  let { sortingOrder = void 0 } = $$props;
  let { accentedSort = void 0 } = $$props;
  let { unSortIcon = void 0 } = $$props;
  let { suppressMultiSort = void 0 } = $$props;
  let { alwaysMultiSort = void 0 } = $$props;
  let { multiSortKey = void 0 } = $$props;
  let { suppressMaintainUnsortedOrder = void 0 } = $$props;
  let { postSortRows = void 0 } = $$props;
  let { deltaSort = void 0 } = $$props;
  let { icons = void 0 } = $$props;
  let { rowHeight = void 0 } = $$props;
  let { getRowHeight = void 0 } = $$props;
  let { rowStyle = void 0 } = $$props;
  let { getRowStyle = void 0 } = $$props;
  let { rowClass = void 0 } = $$props;
  let { getRowClass = void 0 } = $$props;
  let { rowClassRules = void 0 } = $$props;
  let { isFullWidthRow = void 0 } = $$props;
  let { suppressRowHoverHighlight = void 0 } = $$props;
  let { suppressRowTransform = void 0 } = $$props;
  let { columnHoverHighlight = void 0 } = $$props;
  let { enableBrowserTooltips = void 0 } = $$props;
  let { tooltipShowDelay = void 0 } = $$props;
  let { tooltipHideDelay = void 0 } = $$props;
  let { tooltipMouseTrack = void 0 } = $$props;
  let { onGridReady = void 0 } = $$props;
  let { gridOptions = {} } = $$props;
  let { modules = [] } = $$props;
  let { className = "" } = $$props;
  let { style = "" } = $$props;
  let eGui;
  const _update = (setters, key, prop) => {
    const setterName = `set${key.charAt(0).toUpperCase()}${key.substring(1)}`;
    const formattedProp = formatProperty.get(key)?.(prop) ?? prop;
    if (setters[setterName])
      setters[setterName](formattedProp);
    gridOptions[key] = formattedProp;
  };
  if ($$props.statusBar === void 0 && $$bindings.statusBar && statusBar !== void 0)
    $$bindings.statusBar(statusBar);
  if ($$props.sideBar === void 0 && $$bindings.sideBar && sideBar !== void 0)
    $$bindings.sideBar(sideBar);
  if ($$props.getContextMenuItems === void 0 && $$bindings.getContextMenuItems && getContextMenuItems !== void 0)
    $$bindings.getContextMenuItems(getContextMenuItems);
  if ($$props.suppressContextMenu === void 0 && $$bindings.suppressContextMenu && suppressContextMenu !== void 0)
    $$bindings.suppressContextMenu(suppressContextMenu);
  if ($$props.preventDefaultOnContextMenu === void 0 && $$bindings.preventDefaultOnContextMenu && preventDefaultOnContextMenu !== void 0)
    $$bindings.preventDefaultOnContextMenu(preventDefaultOnContextMenu);
  if ($$props.allowContextMenuWithControlKey === void 0 && $$bindings.allowContextMenuWithControlKey && allowContextMenuWithControlKey !== void 0)
    $$bindings.allowContextMenuWithControlKey(allowContextMenuWithControlKey);
  if ($$props.getMainMenuItems === void 0 && $$bindings.getMainMenuItems && getMainMenuItems !== void 0)
    $$bindings.getMainMenuItems(getMainMenuItems);
  if ($$props.suppressMenuHide === void 0 && $$bindings.suppressMenuHide && suppressMenuHide !== void 0)
    $$bindings.suppressMenuHide(suppressMenuHide);
  if ($$props.popupParent === void 0 && $$bindings.popupParent && popupParent !== void 0)
    $$bindings.popupParent(popupParent);
  if ($$props.postProcessPopup === void 0 && $$bindings.postProcessPopup && postProcessPopup !== void 0)
    $$bindings.postProcessPopup(postProcessPopup);
  if ($$props.copyHeadersToClipboard === void 0 && $$bindings.copyHeadersToClipboard && copyHeadersToClipboard !== void 0)
    $$bindings.copyHeadersToClipboard(copyHeadersToClipboard);
  if ($$props.copyGroupHeadersToClipboard === void 0 && $$bindings.copyGroupHeadersToClipboard && copyGroupHeadersToClipboard !== void 0)
    $$bindings.copyGroupHeadersToClipboard(copyGroupHeadersToClipboard);
  if ($$props.clipboardDelimiter === void 0 && $$bindings.clipboardDelimiter && clipboardDelimiter !== void 0)
    $$bindings.clipboardDelimiter(clipboardDelimiter);
  if ($$props.suppressCopyRowsToClipboard === void 0 && $$bindings.suppressCopyRowsToClipboard && suppressCopyRowsToClipboard !== void 0)
    $$bindings.suppressCopyRowsToClipboard(suppressCopyRowsToClipboard);
  if ($$props.suppressCopySingleCellRanges === void 0 && $$bindings.suppressCopySingleCellRanges && suppressCopySingleCellRanges !== void 0)
    $$bindings.suppressCopySingleCellRanges(suppressCopySingleCellRanges);
  if ($$props.suppressLastEmptyLineOnPaste === void 0 && $$bindings.suppressLastEmptyLineOnPaste && suppressLastEmptyLineOnPaste !== void 0)
    $$bindings.suppressLastEmptyLineOnPaste(suppressLastEmptyLineOnPaste);
  if ($$props.suppressClipboardPaste === void 0 && $$bindings.suppressClipboardPaste && suppressClipboardPaste !== void 0)
    $$bindings.suppressClipboardPaste(suppressClipboardPaste);
  if ($$props.suppressClipboardApi === void 0 && $$bindings.suppressClipboardApi && suppressClipboardApi !== void 0)
    $$bindings.suppressClipboardApi(suppressClipboardApi);
  if ($$props.processCellForClipboard === void 0 && $$bindings.processCellForClipboard && processCellForClipboard !== void 0)
    $$bindings.processCellForClipboard(processCellForClipboard);
  if ($$props.processHeaderForClipboard === void 0 && $$bindings.processHeaderForClipboard && processHeaderForClipboard !== void 0)
    $$bindings.processHeaderForClipboard(processHeaderForClipboard);
  if ($$props.processGroupHeaderForClipboard === void 0 && $$bindings.processGroupHeaderForClipboard && processGroupHeaderForClipboard !== void 0)
    $$bindings.processGroupHeaderForClipboard(processGroupHeaderForClipboard);
  if ($$props.processCellFromClipboard === void 0 && $$bindings.processCellFromClipboard && processCellFromClipboard !== void 0)
    $$bindings.processCellFromClipboard(processCellFromClipboard);
  if ($$props.sendToClipboard === void 0 && $$bindings.sendToClipboard && sendToClipboard !== void 0)
    $$bindings.sendToClipboard(sendToClipboard);
  if ($$props.processDataFromClipboard === void 0 && $$bindings.processDataFromClipboard && processDataFromClipboard !== void 0)
    $$bindings.processDataFromClipboard(processDataFromClipboard);
  if ($$props.columnDefs === void 0 && $$bindings.columnDefs && columnDefs !== void 0)
    $$bindings.columnDefs(columnDefs);
  if ($$props.defaultColDef === void 0 && $$bindings.defaultColDef && defaultColDef !== void 0)
    $$bindings.defaultColDef(defaultColDef);
  if ($$props.defaultColGroupDef === void 0 && $$bindings.defaultColGroupDef && defaultColGroupDef !== void 0)
    $$bindings.defaultColGroupDef(defaultColGroupDef);
  if ($$props.columnTypes === void 0 && $$bindings.columnTypes && columnTypes !== void 0)
    $$bindings.columnTypes(columnTypes);
  if ($$props.maintainColumnOrder === void 0 && $$bindings.maintainColumnOrder && maintainColumnOrder !== void 0)
    $$bindings.maintainColumnOrder(maintainColumnOrder);
  if ($$props.suppressFieldDotNotation === void 0 && $$bindings.suppressFieldDotNotation && suppressFieldDotNotation !== void 0)
    $$bindings.suppressFieldDotNotation(suppressFieldDotNotation);
  if ($$props.headerHeight === void 0 && $$bindings.headerHeight && headerHeight !== void 0)
    $$bindings.headerHeight(headerHeight);
  if ($$props.groupHeaderHeight === void 0 && $$bindings.groupHeaderHeight && groupHeaderHeight !== void 0)
    $$bindings.groupHeaderHeight(groupHeaderHeight);
  if ($$props.floatingFiltersHeight === void 0 && $$bindings.floatingFiltersHeight && floatingFiltersHeight !== void 0)
    $$bindings.floatingFiltersHeight(floatingFiltersHeight);
  if ($$props.pivotHeaderHeight === void 0 && $$bindings.pivotHeaderHeight && pivotHeaderHeight !== void 0)
    $$bindings.pivotHeaderHeight(pivotHeaderHeight);
  if ($$props.pivotGroupHeaderHeight === void 0 && $$bindings.pivotGroupHeaderHeight && pivotGroupHeaderHeight !== void 0)
    $$bindings.pivotGroupHeaderHeight(pivotGroupHeaderHeight);
  if ($$props.allowDragFromColumnsToolPanel === void 0 && $$bindings.allowDragFromColumnsToolPanel && allowDragFromColumnsToolPanel !== void 0)
    $$bindings.allowDragFromColumnsToolPanel(allowDragFromColumnsToolPanel);
  if ($$props.suppressMovableColumns === void 0 && $$bindings.suppressMovableColumns && suppressMovableColumns !== void 0)
    $$bindings.suppressMovableColumns(suppressMovableColumns);
  if ($$props.suppressColumnMoveAnimation === void 0 && $$bindings.suppressColumnMoveAnimation && suppressColumnMoveAnimation !== void 0)
    $$bindings.suppressColumnMoveAnimation(suppressColumnMoveAnimation);
  if ($$props.suppressDragLeaveHidesColumns === void 0 && $$bindings.suppressDragLeaveHidesColumns && suppressDragLeaveHidesColumns !== void 0)
    $$bindings.suppressDragLeaveHidesColumns(suppressDragLeaveHidesColumns);
  if ($$props.suppressRowGroupHidesColumns === void 0 && $$bindings.suppressRowGroupHidesColumns && suppressRowGroupHidesColumns !== void 0)
    $$bindings.suppressRowGroupHidesColumns(suppressRowGroupHidesColumns);
  if ($$props.colResizeDefault === void 0 && $$bindings.colResizeDefault && colResizeDefault !== void 0)
    $$bindings.colResizeDefault(colResizeDefault);
  if ($$props.suppressAutoSize === void 0 && $$bindings.suppressAutoSize && suppressAutoSize !== void 0)
    $$bindings.suppressAutoSize(suppressAutoSize);
  if ($$props.autoSizePadding === void 0 && $$bindings.autoSizePadding && autoSizePadding !== void 0)
    $$bindings.autoSizePadding(autoSizePadding);
  if ($$props.skipHeaderOnAutoSize === void 0 && $$bindings.skipHeaderOnAutoSize && skipHeaderOnAutoSize !== void 0)
    $$bindings.skipHeaderOnAutoSize(skipHeaderOnAutoSize);
  if ($$props.editType === void 0 && $$bindings.editType && editType !== void 0)
    $$bindings.editType(editType);
  if ($$props.singleClickEdit === void 0 && $$bindings.singleClickEdit && singleClickEdit !== void 0)
    $$bindings.singleClickEdit(singleClickEdit);
  if ($$props.suppressClickEdit === void 0 && $$bindings.suppressClickEdit && suppressClickEdit !== void 0)
    $$bindings.suppressClickEdit(suppressClickEdit);
  if ($$props.stopEditingWhenCellsLoseFocus === void 0 && $$bindings.stopEditingWhenCellsLoseFocus && stopEditingWhenCellsLoseFocus !== void 0)
    $$bindings.stopEditingWhenCellsLoseFocus(stopEditingWhenCellsLoseFocus);
  if ($$props.enterMovesDown === void 0 && $$bindings.enterMovesDown && enterMovesDown !== void 0)
    $$bindings.enterMovesDown(enterMovesDown);
  if ($$props.enterMovesDownAfterEdit === void 0 && $$bindings.enterMovesDownAfterEdit && enterMovesDownAfterEdit !== void 0)
    $$bindings.enterMovesDownAfterEdit(enterMovesDownAfterEdit);
  if ($$props.undoRedoCellEditing === void 0 && $$bindings.undoRedoCellEditing && undoRedoCellEditing !== void 0)
    $$bindings.undoRedoCellEditing(undoRedoCellEditing);
  if ($$props.undoRedoCellEditingLimit === void 0 && $$bindings.undoRedoCellEditingLimit && undoRedoCellEditingLimit !== void 0)
    $$bindings.undoRedoCellEditingLimit(undoRedoCellEditingLimit);
  if ($$props.readOnlyEdit === void 0 && $$bindings.readOnlyEdit && readOnlyEdit !== void 0)
    $$bindings.readOnlyEdit(readOnlyEdit);
  if ($$props.defaultCsvExportParams === void 0 && $$bindings.defaultCsvExportParams && defaultCsvExportParams !== void 0)
    $$bindings.defaultCsvExportParams(defaultCsvExportParams);
  if ($$props.suppressCsvExport === void 0 && $$bindings.suppressCsvExport && suppressCsvExport !== void 0)
    $$bindings.suppressCsvExport(suppressCsvExport);
  if ($$props.defaultExcelExportParams === void 0 && $$bindings.defaultExcelExportParams && defaultExcelExportParams !== void 0)
    $$bindings.defaultExcelExportParams(defaultExcelExportParams);
  if ($$props.suppressExcelExport === void 0 && $$bindings.suppressExcelExport && suppressExcelExport !== void 0)
    $$bindings.suppressExcelExport(suppressExcelExport);
  if ($$props.excelStyles === void 0 && $$bindings.excelStyles && excelStyles !== void 0)
    $$bindings.excelStyles(excelStyles);
  if ($$props.quickFilterText === void 0 && $$bindings.quickFilterText && quickFilterText !== void 0)
    $$bindings.quickFilterText(quickFilterText);
  if ($$props.cacheQuickFilter === void 0 && $$bindings.cacheQuickFilter && cacheQuickFilter !== void 0)
    $$bindings.cacheQuickFilter(cacheQuickFilter);
  if ($$props.isExternalFilterPresent === void 0 && $$bindings.isExternalFilterPresent && isExternalFilterPresent !== void 0)
    $$bindings.isExternalFilterPresent(isExternalFilterPresent);
  if ($$props.doesExternalFilterPass === void 0 && $$bindings.doesExternalFilterPass && doesExternalFilterPass !== void 0)
    $$bindings.doesExternalFilterPass(doesExternalFilterPass);
  if ($$props.excludeChildrenWhenTreeDataFiltering === void 0 && $$bindings.excludeChildrenWhenTreeDataFiltering && excludeChildrenWhenTreeDataFiltering !== void 0)
    $$bindings.excludeChildrenWhenTreeDataFiltering(excludeChildrenWhenTreeDataFiltering);
  if ($$props.enableCharts === void 0 && $$bindings.enableCharts && enableCharts !== void 0)
    $$bindings.enableCharts(enableCharts);
  if ($$props.getChartToolbarItems === void 0 && $$bindings.getChartToolbarItems && getChartToolbarItems !== void 0)
    $$bindings.getChartToolbarItems(getChartToolbarItems);
  if ($$props.createChartContainer === void 0 && $$bindings.createChartContainer && createChartContainer !== void 0)
    $$bindings.createChartContainer(createChartContainer);
  if ($$props.chartThemes === void 0 && $$bindings.chartThemes && chartThemes !== void 0)
    $$bindings.chartThemes(chartThemes);
  if ($$props.customChartThemes === void 0 && $$bindings.customChartThemes && customChartThemes !== void 0)
    $$bindings.customChartThemes(customChartThemes);
  if ($$props.chartThemeOverrides === void 0 && $$bindings.chartThemeOverrides && chartThemeOverrides !== void 0)
    $$bindings.chartThemeOverrides(chartThemeOverrides);
  if ($$props.navigateToNextHeader === void 0 && $$bindings.navigateToNextHeader && navigateToNextHeader !== void 0)
    $$bindings.navigateToNextHeader(navigateToNextHeader);
  if ($$props.tabToNextHeader === void 0 && $$bindings.tabToNextHeader && tabToNextHeader !== void 0)
    $$bindings.tabToNextHeader(tabToNextHeader);
  if ($$props.navigateToNextCell === void 0 && $$bindings.navigateToNextCell && navigateToNextCell !== void 0)
    $$bindings.navigateToNextCell(navigateToNextCell);
  if ($$props.tabToNextCell === void 0 && $$bindings.tabToNextCell && tabToNextCell !== void 0)
    $$bindings.tabToNextCell(tabToNextCell);
  if ($$props.loadingCellRenderer === void 0 && $$bindings.loadingCellRenderer && loadingCellRenderer !== void 0)
    $$bindings.loadingCellRenderer(loadingCellRenderer);
  if ($$props.loadingCellRendererParams === void 0 && $$bindings.loadingCellRendererParams && loadingCellRendererParams !== void 0)
    $$bindings.loadingCellRendererParams(loadingCellRendererParams);
  if ($$props.loadingCellRendererSelector === void 0 && $$bindings.loadingCellRendererSelector && loadingCellRendererSelector !== void 0)
    $$bindings.loadingCellRendererSelector(loadingCellRendererSelector);
  if ($$props.localeText === void 0 && $$bindings.localeText && localeText !== void 0)
    $$bindings.localeText(localeText);
  if ($$props.getLocaleText === void 0 && $$bindings.getLocaleText && getLocaleText !== void 0)
    $$bindings.getLocaleText(getLocaleText);
  if ($$props.masterDetail === void 0 && $$bindings.masterDetail && masterDetail !== void 0)
    $$bindings.masterDetail(masterDetail);
  if ($$props.isRowMaster === void 0 && $$bindings.isRowMaster && isRowMaster !== void 0)
    $$bindings.isRowMaster(isRowMaster);
  if ($$props.detailCellRenderer === void 0 && $$bindings.detailCellRenderer && detailCellRenderer !== void 0)
    $$bindings.detailCellRenderer(detailCellRenderer);
  if ($$props.detailCellRendererParams === void 0 && $$bindings.detailCellRendererParams && detailCellRendererParams !== void 0)
    $$bindings.detailCellRendererParams(detailCellRendererParams);
  if ($$props.detailRowHeight === void 0 && $$bindings.detailRowHeight && detailRowHeight !== void 0)
    $$bindings.detailRowHeight(detailRowHeight);
  if ($$props.detailRowAutoHeight === void 0 && $$bindings.detailRowAutoHeight && detailRowAutoHeight !== void 0)
    $$bindings.detailRowAutoHeight(detailRowAutoHeight);
  if ($$props.embedFullWidthRows === void 0 && $$bindings.embedFullWidthRows && embedFullWidthRows !== void 0)
    $$bindings.embedFullWidthRows(embedFullWidthRows);
  if ($$props.keepDetailRows === void 0 && $$bindings.keepDetailRows && keepDetailRows !== void 0)
    $$bindings.keepDetailRows(keepDetailRows);
  if ($$props.keepDetailRowsCount === void 0 && $$bindings.keepDetailRowsCount && keepDetailRowsCount !== void 0)
    $$bindings.keepDetailRowsCount(keepDetailRowsCount);
  if ($$props.api === void 0 && $$bindings.api && api !== void 0)
    $$bindings.api(api);
  if ($$props.columnApi === void 0 && $$bindings.columnApi && columnApi !== void 0)
    $$bindings.columnApi(columnApi);
  if ($$props.alignedGrids === void 0 && $$bindings.alignedGrids && alignedGrids !== void 0)
    $$bindings.alignedGrids(alignedGrids);
  if ($$props.context === void 0 && $$bindings.context && context !== void 0)
    $$bindings.context(context);
  if ($$props.tabIndex === void 0 && $$bindings.tabIndex && tabIndex !== void 0)
    $$bindings.tabIndex(tabIndex);
  if ($$props.rowBuffer === void 0 && $$bindings.rowBuffer && rowBuffer !== void 0)
    $$bindings.rowBuffer(rowBuffer);
  if ($$props.valueCache === void 0 && $$bindings.valueCache && valueCache !== void 0)
    $$bindings.valueCache(valueCache);
  if ($$props.valueCacheNeverExpires === void 0 && $$bindings.valueCacheNeverExpires && valueCacheNeverExpires !== void 0)
    $$bindings.valueCacheNeverExpires(valueCacheNeverExpires);
  if ($$props.enableCellExpressions === void 0 && $$bindings.enableCellExpressions && enableCellExpressions !== void 0)
    $$bindings.enableCellExpressions(enableCellExpressions);
  if ($$props.getDocument === void 0 && $$bindings.getDocument && getDocument !== void 0)
    $$bindings.getDocument(getDocument);
  if ($$props.suppressParentsInRowNodes === void 0 && $$bindings.suppressParentsInRowNodes && suppressParentsInRowNodes !== void 0)
    $$bindings.suppressParentsInRowNodes(suppressParentsInRowNodes);
  if ($$props.suppressTouch === void 0 && $$bindings.suppressTouch && suppressTouch !== void 0)
    $$bindings.suppressTouch(suppressTouch);
  if ($$props.suppressFocusAfterRefresh === void 0 && $$bindings.suppressFocusAfterRefresh && suppressFocusAfterRefresh !== void 0)
    $$bindings.suppressFocusAfterRefresh(suppressFocusAfterRefresh);
  if ($$props.suppressAsyncEvents === void 0 && $$bindings.suppressAsyncEvents && suppressAsyncEvents !== void 0)
    $$bindings.suppressAsyncEvents(suppressAsyncEvents);
  if ($$props.suppressBrowserResizeObserver === void 0 && $$bindings.suppressBrowserResizeObserver && suppressBrowserResizeObserver !== void 0)
    $$bindings.suppressBrowserResizeObserver(suppressBrowserResizeObserver);
  if ($$props.suppressPropertyNamesCheck === void 0 && $$bindings.suppressPropertyNamesCheck && suppressPropertyNamesCheck !== void 0)
    $$bindings.suppressPropertyNamesCheck(suppressPropertyNamesCheck);
  if ($$props.suppressChangeDetection === void 0 && $$bindings.suppressChangeDetection && suppressChangeDetection !== void 0)
    $$bindings.suppressChangeDetection(suppressChangeDetection);
  if ($$props.debug === void 0 && $$bindings.debug && debug !== void 0)
    $$bindings.debug(debug);
  if ($$props.overlayLoadingTemplate === void 0 && $$bindings.overlayLoadingTemplate && overlayLoadingTemplate !== void 0)
    $$bindings.overlayLoadingTemplate(overlayLoadingTemplate);
  if ($$props.loadingOverlayComponent === void 0 && $$bindings.loadingOverlayComponent && loadingOverlayComponent !== void 0)
    $$bindings.loadingOverlayComponent(loadingOverlayComponent);
  if ($$props.loadingOverlayComponentParams === void 0 && $$bindings.loadingOverlayComponentParams && loadingOverlayComponentParams !== void 0)
    $$bindings.loadingOverlayComponentParams(loadingOverlayComponentParams);
  if ($$props.suppressLoadingOverlay === void 0 && $$bindings.suppressLoadingOverlay && suppressLoadingOverlay !== void 0)
    $$bindings.suppressLoadingOverlay(suppressLoadingOverlay);
  if ($$props.overlayNoRowsTemplate === void 0 && $$bindings.overlayNoRowsTemplate && overlayNoRowsTemplate !== void 0)
    $$bindings.overlayNoRowsTemplate(overlayNoRowsTemplate);
  if ($$props.noRowsOverlayComponent === void 0 && $$bindings.noRowsOverlayComponent && noRowsOverlayComponent !== void 0)
    $$bindings.noRowsOverlayComponent(noRowsOverlayComponent);
  if ($$props.noRowsOverlayComponentParams === void 0 && $$bindings.noRowsOverlayComponentParams && noRowsOverlayComponentParams !== void 0)
    $$bindings.noRowsOverlayComponentParams(noRowsOverlayComponentParams);
  if ($$props.suppressNoRowsOverlay === void 0 && $$bindings.suppressNoRowsOverlay && suppressNoRowsOverlay !== void 0)
    $$bindings.suppressNoRowsOverlay(suppressNoRowsOverlay);
  if ($$props.pagination === void 0 && $$bindings.pagination && pagination !== void 0)
    $$bindings.pagination(pagination);
  if ($$props.paginationPageSize === void 0 && $$bindings.paginationPageSize && paginationPageSize !== void 0)
    $$bindings.paginationPageSize(paginationPageSize);
  if ($$props.paginationNumberFormatter === void 0 && $$bindings.paginationNumberFormatter && paginationNumberFormatter !== void 0)
    $$bindings.paginationNumberFormatter(paginationNumberFormatter);
  if ($$props.paginationAutoPageSize === void 0 && $$bindings.paginationAutoPageSize && paginationAutoPageSize !== void 0)
    $$bindings.paginationAutoPageSize(paginationAutoPageSize);
  if ($$props.paginateChildRows === void 0 && $$bindings.paginateChildRows && paginateChildRows !== void 0)
    $$bindings.paginateChildRows(paginateChildRows);
  if ($$props.suppressPaginationPanel === void 0 && $$bindings.suppressPaginationPanel && suppressPaginationPanel !== void 0)
    $$bindings.suppressPaginationPanel(suppressPaginationPanel);
  if ($$props.pivotMode === void 0 && $$bindings.pivotMode && pivotMode !== void 0)
    $$bindings.pivotMode(pivotMode);
  if ($$props.pivotPanelShow === void 0 && $$bindings.pivotPanelShow && pivotPanelShow !== void 0)
    $$bindings.pivotPanelShow(pivotPanelShow);
  if ($$props.pivotColumnGroupTotals === void 0 && $$bindings.pivotColumnGroupTotals && pivotColumnGroupTotals !== void 0)
    $$bindings.pivotColumnGroupTotals(pivotColumnGroupTotals);
  if ($$props.pivotRowTotals === void 0 && $$bindings.pivotRowTotals && pivotRowTotals !== void 0)
    $$bindings.pivotRowTotals(pivotRowTotals);
  if ($$props.pivotSuppressAutoColumn === void 0 && $$bindings.pivotSuppressAutoColumn && pivotSuppressAutoColumn !== void 0)
    $$bindings.pivotSuppressAutoColumn(pivotSuppressAutoColumn);
  if ($$props.processPivotResultColDef === void 0 && $$bindings.processPivotResultColDef && processPivotResultColDef !== void 0)
    $$bindings.processPivotResultColDef(processPivotResultColDef);
  if ($$props.processPivotResultColGroupDef === void 0 && $$bindings.processPivotResultColGroupDef && processPivotResultColGroupDef !== void 0)
    $$bindings.processPivotResultColGroupDef(processPivotResultColGroupDef);
  if ($$props.suppressExpandablePivotGroups === void 0 && $$bindings.suppressExpandablePivotGroups && suppressExpandablePivotGroups !== void 0)
    $$bindings.suppressExpandablePivotGroups(suppressExpandablePivotGroups);
  if ($$props.functionsReadOnly === void 0 && $$bindings.functionsReadOnly && functionsReadOnly !== void 0)
    $$bindings.functionsReadOnly(functionsReadOnly);
  if ($$props.aggFuncs === void 0 && $$bindings.aggFuncs && aggFuncs !== void 0)
    $$bindings.aggFuncs(aggFuncs);
  if ($$props.getGroupRowAgg === void 0 && $$bindings.getGroupRowAgg && getGroupRowAgg !== void 0)
    $$bindings.getGroupRowAgg(getGroupRowAgg);
  if ($$props.suppressAggFuncInHeader === void 0 && $$bindings.suppressAggFuncInHeader && suppressAggFuncInHeader !== void 0)
    $$bindings.suppressAggFuncInHeader(suppressAggFuncInHeader);
  if ($$props.suppressAggAtRootLevel === void 0 && $$bindings.suppressAggAtRootLevel && suppressAggAtRootLevel !== void 0)
    $$bindings.suppressAggAtRootLevel(suppressAggAtRootLevel);
  if ($$props.aggregateOnlyChangedColumns === void 0 && $$bindings.aggregateOnlyChangedColumns && aggregateOnlyChangedColumns !== void 0)
    $$bindings.aggregateOnlyChangedColumns(aggregateOnlyChangedColumns);
  if ($$props.suppressAggFilteredOnly === void 0 && $$bindings.suppressAggFilteredOnly && suppressAggFilteredOnly !== void 0)
    $$bindings.suppressAggFilteredOnly(suppressAggFilteredOnly);
  if ($$props.groupAggFiltering === void 0 && $$bindings.groupAggFiltering && groupAggFiltering !== void 0)
    $$bindings.groupAggFiltering(groupAggFiltering);
  if ($$props.removePivotHeaderRowWhenSingleValueColumn === void 0 && $$bindings.removePivotHeaderRowWhenSingleValueColumn && removePivotHeaderRowWhenSingleValueColumn !== void 0)
    $$bindings.removePivotHeaderRowWhenSingleValueColumn(removePivotHeaderRowWhenSingleValueColumn);
  if ($$props.animateRows === void 0 && $$bindings.animateRows && animateRows !== void 0)
    $$bindings.animateRows(animateRows);
  if ($$props.enableCellChangeFlash === void 0 && $$bindings.enableCellChangeFlash && enableCellChangeFlash !== void 0)
    $$bindings.enableCellChangeFlash(enableCellChangeFlash);
  if ($$props.cellFlashDelay === void 0 && $$bindings.cellFlashDelay && cellFlashDelay !== void 0)
    $$bindings.cellFlashDelay(cellFlashDelay);
  if ($$props.cellFadeDelay === void 0 && $$bindings.cellFadeDelay && cellFadeDelay !== void 0)
    $$bindings.cellFadeDelay(cellFadeDelay);
  if ($$props.allowShowChangeAfterFilter === void 0 && $$bindings.allowShowChangeAfterFilter && allowShowChangeAfterFilter !== void 0)
    $$bindings.allowShowChangeAfterFilter(allowShowChangeAfterFilter);
  if ($$props.domLayout === void 0 && $$bindings.domLayout && domLayout !== void 0)
    $$bindings.domLayout(domLayout);
  if ($$props.ensureDomOrder === void 0 && $$bindings.ensureDomOrder && ensureDomOrder !== void 0)
    $$bindings.ensureDomOrder(ensureDomOrder);
  if ($$props.getBusinessKeyForNode === void 0 && $$bindings.getBusinessKeyForNode && getBusinessKeyForNode !== void 0)
    $$bindings.getBusinessKeyForNode(getBusinessKeyForNode);
  if ($$props.processRowPostCreate === void 0 && $$bindings.processRowPostCreate && processRowPostCreate !== void 0)
    $$bindings.processRowPostCreate(processRowPostCreate);
  if ($$props.enableRtl === void 0 && $$bindings.enableRtl && enableRtl !== void 0)
    $$bindings.enableRtl(enableRtl);
  if ($$props.suppressColumnVirtualisation === void 0 && $$bindings.suppressColumnVirtualisation && suppressColumnVirtualisation !== void 0)
    $$bindings.suppressColumnVirtualisation(suppressColumnVirtualisation);
  if ($$props.suppressRowVirtualisation === void 0 && $$bindings.suppressRowVirtualisation && suppressRowVirtualisation !== void 0)
    $$bindings.suppressRowVirtualisation(suppressRowVirtualisation);
  if ($$props.suppressMaxRenderedRowRestriction === void 0 && $$bindings.suppressMaxRenderedRowRestriction && suppressMaxRenderedRowRestriction !== void 0)
    $$bindings.suppressMaxRenderedRowRestriction(suppressMaxRenderedRowRestriction);
  if ($$props.rowDragManaged === void 0 && $$bindings.rowDragManaged && rowDragManaged !== void 0)
    $$bindings.rowDragManaged(rowDragManaged);
  if ($$props.rowDragEntireRow === void 0 && $$bindings.rowDragEntireRow && rowDragEntireRow !== void 0)
    $$bindings.rowDragEntireRow(rowDragEntireRow);
  if ($$props.rowDragMultiRow === void 0 && $$bindings.rowDragMultiRow && rowDragMultiRow !== void 0)
    $$bindings.rowDragMultiRow(rowDragMultiRow);
  if ($$props.suppressRowDrag === void 0 && $$bindings.suppressRowDrag && suppressRowDrag !== void 0)
    $$bindings.suppressRowDrag(suppressRowDrag);
  if ($$props.suppressMoveWhenRowDragging === void 0 && $$bindings.suppressMoveWhenRowDragging && suppressMoveWhenRowDragging !== void 0)
    $$bindings.suppressMoveWhenRowDragging(suppressMoveWhenRowDragging);
  if ($$props.fullWidthCellRenderer === void 0 && $$bindings.fullWidthCellRenderer && fullWidthCellRenderer !== void 0)
    $$bindings.fullWidthCellRenderer(fullWidthCellRenderer);
  if ($$props.fullWidthCellRendererParams === void 0 && $$bindings.fullWidthCellRendererParams && fullWidthCellRendererParams !== void 0)
    $$bindings.fullWidthCellRendererParams(fullWidthCellRendererParams);
  if ($$props.groupDisplayType === void 0 && $$bindings.groupDisplayType && groupDisplayType !== void 0)
    $$bindings.groupDisplayType(groupDisplayType);
  if ($$props.groupDefaultExpanded === void 0 && $$bindings.groupDefaultExpanded && groupDefaultExpanded !== void 0)
    $$bindings.groupDefaultExpanded(groupDefaultExpanded);
  if ($$props.autoGroupColumnDef === void 0 && $$bindings.autoGroupColumnDef && autoGroupColumnDef !== void 0)
    $$bindings.autoGroupColumnDef(autoGroupColumnDef);
  if ($$props.groupMaintainOrder === void 0 && $$bindings.groupMaintainOrder && groupMaintainOrder !== void 0)
    $$bindings.groupMaintainOrder(groupMaintainOrder);
  if ($$props.groupSelectsChildren === void 0 && $$bindings.groupSelectsChildren && groupSelectsChildren !== void 0)
    $$bindings.groupSelectsChildren(groupSelectsChildren);
  if ($$props.groupIncludeFooter === void 0 && $$bindings.groupIncludeFooter && groupIncludeFooter !== void 0)
    $$bindings.groupIncludeFooter(groupIncludeFooter);
  if ($$props.groupIncludeTotalFooter === void 0 && $$bindings.groupIncludeTotalFooter && groupIncludeTotalFooter !== void 0)
    $$bindings.groupIncludeTotalFooter(groupIncludeTotalFooter);
  if ($$props.groupSuppressBlankHeader === void 0 && $$bindings.groupSuppressBlankHeader && groupSuppressBlankHeader !== void 0)
    $$bindings.groupSuppressBlankHeader(groupSuppressBlankHeader);
  if ($$props.groupRowsSticky === void 0 && $$bindings.groupRowsSticky && groupRowsSticky !== void 0)
    $$bindings.groupRowsSticky(groupRowsSticky);
  if ($$props.groupSelectsFiltered === void 0 && $$bindings.groupSelectsFiltered && groupSelectsFiltered !== void 0)
    $$bindings.groupSelectsFiltered(groupSelectsFiltered);
  if ($$props.showOpenedGroup === void 0 && $$bindings.showOpenedGroup && showOpenedGroup !== void 0)
    $$bindings.showOpenedGroup(showOpenedGroup);
  if ($$props.isGroupOpenByDefault === void 0 && $$bindings.isGroupOpenByDefault && isGroupOpenByDefault !== void 0)
    $$bindings.isGroupOpenByDefault(isGroupOpenByDefault);
  if ($$props.initialGroupOrderComparator === void 0 && $$bindings.initialGroupOrderComparator && initialGroupOrderComparator !== void 0)
    $$bindings.initialGroupOrderComparator(initialGroupOrderComparator);
  if ($$props.groupRemoveSingleChildren === void 0 && $$bindings.groupRemoveSingleChildren && groupRemoveSingleChildren !== void 0)
    $$bindings.groupRemoveSingleChildren(groupRemoveSingleChildren);
  if ($$props.groupRemoveLowestSingleChildren === void 0 && $$bindings.groupRemoveLowestSingleChildren && groupRemoveLowestSingleChildren !== void 0)
    $$bindings.groupRemoveLowestSingleChildren(groupRemoveLowestSingleChildren);
  if ($$props.groupHideOpenParents === void 0 && $$bindings.groupHideOpenParents && groupHideOpenParents !== void 0)
    $$bindings.groupHideOpenParents(groupHideOpenParents);
  if ($$props.rowGroupPanelShow === void 0 && $$bindings.rowGroupPanelShow && rowGroupPanelShow !== void 0)
    $$bindings.rowGroupPanelShow(rowGroupPanelShow);
  if ($$props.groupRowRenderer === void 0 && $$bindings.groupRowRenderer && groupRowRenderer !== void 0)
    $$bindings.groupRowRenderer(groupRowRenderer);
  if ($$props.groupRowRendererParams === void 0 && $$bindings.groupRowRendererParams && groupRowRendererParams !== void 0)
    $$bindings.groupRowRendererParams(groupRowRendererParams);
  if ($$props.suppressMakeColumnVisibleAfterUnGroup === void 0 && $$bindings.suppressMakeColumnVisibleAfterUnGroup && suppressMakeColumnVisibleAfterUnGroup !== void 0)
    $$bindings.suppressMakeColumnVisibleAfterUnGroup(suppressMakeColumnVisibleAfterUnGroup);
  if ($$props.treeData === void 0 && $$bindings.treeData && treeData !== void 0)
    $$bindings.treeData(treeData);
  if ($$props.getDataPath === void 0 && $$bindings.getDataPath && getDataPath !== void 0)
    $$bindings.getDataPath(getDataPath);
  if ($$props.pinnedTopRowData === void 0 && $$bindings.pinnedTopRowData && pinnedTopRowData !== void 0)
    $$bindings.pinnedTopRowData(pinnedTopRowData);
  if ($$props.pinnedBottomRowData === void 0 && $$bindings.pinnedBottomRowData && pinnedBottomRowData !== void 0)
    $$bindings.pinnedBottomRowData(pinnedBottomRowData);
  if ($$props.rowModelType === void 0 && $$bindings.rowModelType && rowModelType !== void 0)
    $$bindings.rowModelType(rowModelType);
  if ($$props.getRowId === void 0 && $$bindings.getRowId && getRowId !== void 0)
    $$bindings.getRowId(getRowId);
  if ($$props.rowData === void 0 && $$bindings.rowData && rowData !== void 0)
    $$bindings.rowData(rowData);
  if ($$props.resetRowDataOnUpdate === void 0 && $$bindings.resetRowDataOnUpdate && resetRowDataOnUpdate !== void 0)
    $$bindings.resetRowDataOnUpdate(resetRowDataOnUpdate);
  if ($$props.asyncTransactionWaitMillis === void 0 && $$bindings.asyncTransactionWaitMillis && asyncTransactionWaitMillis !== void 0)
    $$bindings.asyncTransactionWaitMillis(asyncTransactionWaitMillis);
  if ($$props.suppressModelUpdateAfterUpdateTransaction === void 0 && $$bindings.suppressModelUpdateAfterUpdateTransaction && suppressModelUpdateAfterUpdateTransaction !== void 0)
    $$bindings.suppressModelUpdateAfterUpdateTransaction(suppressModelUpdateAfterUpdateTransaction);
  if ($$props.datasource === void 0 && $$bindings.datasource && datasource !== void 0)
    $$bindings.datasource(datasource);
  if ($$props.cacheOverflowSize === void 0 && $$bindings.cacheOverflowSize && cacheOverflowSize !== void 0)
    $$bindings.cacheOverflowSize(cacheOverflowSize);
  if ($$props.maxConcurrentDatasourceRequests === void 0 && $$bindings.maxConcurrentDatasourceRequests && maxConcurrentDatasourceRequests !== void 0)
    $$bindings.maxConcurrentDatasourceRequests(maxConcurrentDatasourceRequests);
  if ($$props.cacheBlockSize === void 0 && $$bindings.cacheBlockSize && cacheBlockSize !== void 0)
    $$bindings.cacheBlockSize(cacheBlockSize);
  if ($$props.maxBlocksInCache === void 0 && $$bindings.maxBlocksInCache && maxBlocksInCache !== void 0)
    $$bindings.maxBlocksInCache(maxBlocksInCache);
  if ($$props.infiniteInitialRowCount === void 0 && $$bindings.infiniteInitialRowCount && infiniteInitialRowCount !== void 0)
    $$bindings.infiniteInitialRowCount(infiniteInitialRowCount);
  if ($$props.serverSideDatasource === void 0 && $$bindings.serverSideDatasource && serverSideDatasource !== void 0)
    $$bindings.serverSideDatasource(serverSideDatasource);
  if ($$props.serverSideInfiniteScroll === void 0 && $$bindings.serverSideInfiniteScroll && serverSideInfiniteScroll !== void 0)
    $$bindings.serverSideInfiniteScroll(serverSideInfiniteScroll);
  if ($$props.blockLoadDebounceMillis === void 0 && $$bindings.blockLoadDebounceMillis && blockLoadDebounceMillis !== void 0)
    $$bindings.blockLoadDebounceMillis(blockLoadDebounceMillis);
  if ($$props.purgeClosedRowNodes === void 0 && $$bindings.purgeClosedRowNodes && purgeClosedRowNodes !== void 0)
    $$bindings.purgeClosedRowNodes(purgeClosedRowNodes);
  if ($$props.serverSideSortAllLevels === void 0 && $$bindings.serverSideSortAllLevels && serverSideSortAllLevels !== void 0)
    $$bindings.serverSideSortAllLevels(serverSideSortAllLevels);
  if ($$props.serverSideFilterAllLevels === void 0 && $$bindings.serverSideFilterAllLevels && serverSideFilterAllLevels !== void 0)
    $$bindings.serverSideFilterAllLevels(serverSideFilterAllLevels);
  if ($$props.serverSideSortOnServer === void 0 && $$bindings.serverSideSortOnServer && serverSideSortOnServer !== void 0)
    $$bindings.serverSideSortOnServer(serverSideSortOnServer);
  if ($$props.serverSideFilterOnServer === void 0 && $$bindings.serverSideFilterOnServer && serverSideFilterOnServer !== void 0)
    $$bindings.serverSideFilterOnServer(serverSideFilterOnServer);
  if ($$props.serverSideInitialRowCount === void 0 && $$bindings.serverSideInitialRowCount && serverSideInitialRowCount !== void 0)
    $$bindings.serverSideInitialRowCount(serverSideInitialRowCount);
  if ($$props.getChildCount === void 0 && $$bindings.getChildCount && getChildCount !== void 0)
    $$bindings.getChildCount(getChildCount);
  if ($$props.getServerSideGroupLevelParams === void 0 && $$bindings.getServerSideGroupLevelParams && getServerSideGroupLevelParams !== void 0)
    $$bindings.getServerSideGroupLevelParams(getServerSideGroupLevelParams);
  if ($$props.isServerSideGroupOpenByDefault === void 0 && $$bindings.isServerSideGroupOpenByDefault && isServerSideGroupOpenByDefault !== void 0)
    $$bindings.isServerSideGroupOpenByDefault(isServerSideGroupOpenByDefault);
  if ($$props.isApplyServerSideTransaction === void 0 && $$bindings.isApplyServerSideTransaction && isApplyServerSideTransaction !== void 0)
    $$bindings.isApplyServerSideTransaction(isApplyServerSideTransaction);
  if ($$props.isServerSideGroup === void 0 && $$bindings.isServerSideGroup && isServerSideGroup !== void 0)
    $$bindings.isServerSideGroup(isServerSideGroup);
  if ($$props.getServerSideGroupKey === void 0 && $$bindings.getServerSideGroupKey && getServerSideGroupKey !== void 0)
    $$bindings.getServerSideGroupKey(getServerSideGroupKey);
  if ($$props.viewportDatasource === void 0 && $$bindings.viewportDatasource && viewportDatasource !== void 0)
    $$bindings.viewportDatasource(viewportDatasource);
  if ($$props.viewportRowModelPageSize === void 0 && $$bindings.viewportRowModelPageSize && viewportRowModelPageSize !== void 0)
    $$bindings.viewportRowModelPageSize(viewportRowModelPageSize);
  if ($$props.viewportRowModelBufferSize === void 0 && $$bindings.viewportRowModelBufferSize && viewportRowModelBufferSize !== void 0)
    $$bindings.viewportRowModelBufferSize(viewportRowModelBufferSize);
  if ($$props.alwaysShowHorizontalScroll === void 0 && $$bindings.alwaysShowHorizontalScroll && alwaysShowHorizontalScroll !== void 0)
    $$bindings.alwaysShowHorizontalScroll(alwaysShowHorizontalScroll);
  if ($$props.alwaysShowVerticalScroll === void 0 && $$bindings.alwaysShowVerticalScroll && alwaysShowVerticalScroll !== void 0)
    $$bindings.alwaysShowVerticalScroll(alwaysShowVerticalScroll);
  if ($$props.debounceVerticalScrollbar === void 0 && $$bindings.debounceVerticalScrollbar && debounceVerticalScrollbar !== void 0)
    $$bindings.debounceVerticalScrollbar(debounceVerticalScrollbar);
  if ($$props.suppressHorizontalScroll === void 0 && $$bindings.suppressHorizontalScroll && suppressHorizontalScroll !== void 0)
    $$bindings.suppressHorizontalScroll(suppressHorizontalScroll);
  if ($$props.suppressScrollOnNewData === void 0 && $$bindings.suppressScrollOnNewData && suppressScrollOnNewData !== void 0)
    $$bindings.suppressScrollOnNewData(suppressScrollOnNewData);
  if ($$props.suppressScrollWhenPopupsAreOpen === void 0 && $$bindings.suppressScrollWhenPopupsAreOpen && suppressScrollWhenPopupsAreOpen !== void 0)
    $$bindings.suppressScrollWhenPopupsAreOpen(suppressScrollWhenPopupsAreOpen);
  if ($$props.suppressAnimationFrame === void 0 && $$bindings.suppressAnimationFrame && suppressAnimationFrame !== void 0)
    $$bindings.suppressAnimationFrame(suppressAnimationFrame);
  if ($$props.suppressMiddleClickScrolls === void 0 && $$bindings.suppressMiddleClickScrolls && suppressMiddleClickScrolls !== void 0)
    $$bindings.suppressMiddleClickScrolls(suppressMiddleClickScrolls);
  if ($$props.suppressPreventDefaultOnMouseWheel === void 0 && $$bindings.suppressPreventDefaultOnMouseWheel && suppressPreventDefaultOnMouseWheel !== void 0)
    $$bindings.suppressPreventDefaultOnMouseWheel(suppressPreventDefaultOnMouseWheel);
  if ($$props.scrollbarWidth === void 0 && $$bindings.scrollbarWidth && scrollbarWidth !== void 0)
    $$bindings.scrollbarWidth(scrollbarWidth);
  if ($$props.rowSelection === void 0 && $$bindings.rowSelection && rowSelection !== void 0)
    $$bindings.rowSelection(rowSelection);
  if ($$props.rowMultiSelectWithClick === void 0 && $$bindings.rowMultiSelectWithClick && rowMultiSelectWithClick !== void 0)
    $$bindings.rowMultiSelectWithClick(rowMultiSelectWithClick);
  if ($$props.isRowSelectable === void 0 && $$bindings.isRowSelectable && isRowSelectable !== void 0)
    $$bindings.isRowSelectable(isRowSelectable);
  if ($$props.suppressRowDeselection === void 0 && $$bindings.suppressRowDeselection && suppressRowDeselection !== void 0)
    $$bindings.suppressRowDeselection(suppressRowDeselection);
  if ($$props.suppressRowClickSelection === void 0 && $$bindings.suppressRowClickSelection && suppressRowClickSelection !== void 0)
    $$bindings.suppressRowClickSelection(suppressRowClickSelection);
  if ($$props.suppressCellFocus === void 0 && $$bindings.suppressCellFocus && suppressCellFocus !== void 0)
    $$bindings.suppressCellFocus(suppressCellFocus);
  if ($$props.suppressMultiRangeSelection === void 0 && $$bindings.suppressMultiRangeSelection && suppressMultiRangeSelection !== void 0)
    $$bindings.suppressMultiRangeSelection(suppressMultiRangeSelection);
  if ($$props.enableCellTextSelection === void 0 && $$bindings.enableCellTextSelection && enableCellTextSelection !== void 0)
    $$bindings.enableCellTextSelection(enableCellTextSelection);
  if ($$props.enableRangeSelection === void 0 && $$bindings.enableRangeSelection && enableRangeSelection !== void 0)
    $$bindings.enableRangeSelection(enableRangeSelection);
  if ($$props.enableRangeHandle === void 0 && $$bindings.enableRangeHandle && enableRangeHandle !== void 0)
    $$bindings.enableRangeHandle(enableRangeHandle);
  if ($$props.enableFillHandle === void 0 && $$bindings.enableFillHandle && enableFillHandle !== void 0)
    $$bindings.enableFillHandle(enableFillHandle);
  if ($$props.fillHandleDirection === void 0 && $$bindings.fillHandleDirection && fillHandleDirection !== void 0)
    $$bindings.fillHandleDirection(fillHandleDirection);
  if ($$props.fillOperation === void 0 && $$bindings.fillOperation && fillOperation !== void 0)
    $$bindings.fillOperation(fillOperation);
  if ($$props.suppressClearOnFillReduction === void 0 && $$bindings.suppressClearOnFillReduction && suppressClearOnFillReduction !== void 0)
    $$bindings.suppressClearOnFillReduction(suppressClearOnFillReduction);
  if ($$props.sortingOrder === void 0 && $$bindings.sortingOrder && sortingOrder !== void 0)
    $$bindings.sortingOrder(sortingOrder);
  if ($$props.accentedSort === void 0 && $$bindings.accentedSort && accentedSort !== void 0)
    $$bindings.accentedSort(accentedSort);
  if ($$props.unSortIcon === void 0 && $$bindings.unSortIcon && unSortIcon !== void 0)
    $$bindings.unSortIcon(unSortIcon);
  if ($$props.suppressMultiSort === void 0 && $$bindings.suppressMultiSort && suppressMultiSort !== void 0)
    $$bindings.suppressMultiSort(suppressMultiSort);
  if ($$props.alwaysMultiSort === void 0 && $$bindings.alwaysMultiSort && alwaysMultiSort !== void 0)
    $$bindings.alwaysMultiSort(alwaysMultiSort);
  if ($$props.multiSortKey === void 0 && $$bindings.multiSortKey && multiSortKey !== void 0)
    $$bindings.multiSortKey(multiSortKey);
  if ($$props.suppressMaintainUnsortedOrder === void 0 && $$bindings.suppressMaintainUnsortedOrder && suppressMaintainUnsortedOrder !== void 0)
    $$bindings.suppressMaintainUnsortedOrder(suppressMaintainUnsortedOrder);
  if ($$props.postSortRows === void 0 && $$bindings.postSortRows && postSortRows !== void 0)
    $$bindings.postSortRows(postSortRows);
  if ($$props.deltaSort === void 0 && $$bindings.deltaSort && deltaSort !== void 0)
    $$bindings.deltaSort(deltaSort);
  if ($$props.icons === void 0 && $$bindings.icons && icons !== void 0)
    $$bindings.icons(icons);
  if ($$props.rowHeight === void 0 && $$bindings.rowHeight && rowHeight !== void 0)
    $$bindings.rowHeight(rowHeight);
  if ($$props.getRowHeight === void 0 && $$bindings.getRowHeight && getRowHeight !== void 0)
    $$bindings.getRowHeight(getRowHeight);
  if ($$props.rowStyle === void 0 && $$bindings.rowStyle && rowStyle !== void 0)
    $$bindings.rowStyle(rowStyle);
  if ($$props.getRowStyle === void 0 && $$bindings.getRowStyle && getRowStyle !== void 0)
    $$bindings.getRowStyle(getRowStyle);
  if ($$props.rowClass === void 0 && $$bindings.rowClass && rowClass !== void 0)
    $$bindings.rowClass(rowClass);
  if ($$props.getRowClass === void 0 && $$bindings.getRowClass && getRowClass !== void 0)
    $$bindings.getRowClass(getRowClass);
  if ($$props.rowClassRules === void 0 && $$bindings.rowClassRules && rowClassRules !== void 0)
    $$bindings.rowClassRules(rowClassRules);
  if ($$props.isFullWidthRow === void 0 && $$bindings.isFullWidthRow && isFullWidthRow !== void 0)
    $$bindings.isFullWidthRow(isFullWidthRow);
  if ($$props.suppressRowHoverHighlight === void 0 && $$bindings.suppressRowHoverHighlight && suppressRowHoverHighlight !== void 0)
    $$bindings.suppressRowHoverHighlight(suppressRowHoverHighlight);
  if ($$props.suppressRowTransform === void 0 && $$bindings.suppressRowTransform && suppressRowTransform !== void 0)
    $$bindings.suppressRowTransform(suppressRowTransform);
  if ($$props.columnHoverHighlight === void 0 && $$bindings.columnHoverHighlight && columnHoverHighlight !== void 0)
    $$bindings.columnHoverHighlight(columnHoverHighlight);
  if ($$props.enableBrowserTooltips === void 0 && $$bindings.enableBrowserTooltips && enableBrowserTooltips !== void 0)
    $$bindings.enableBrowserTooltips(enableBrowserTooltips);
  if ($$props.tooltipShowDelay === void 0 && $$bindings.tooltipShowDelay && tooltipShowDelay !== void 0)
    $$bindings.tooltipShowDelay(tooltipShowDelay);
  if ($$props.tooltipHideDelay === void 0 && $$bindings.tooltipHideDelay && tooltipHideDelay !== void 0)
    $$bindings.tooltipHideDelay(tooltipHideDelay);
  if ($$props.tooltipMouseTrack === void 0 && $$bindings.tooltipMouseTrack && tooltipMouseTrack !== void 0)
    $$bindings.tooltipMouseTrack(tooltipMouseTrack);
  if ($$props.onGridReady === void 0 && $$bindings.onGridReady && onGridReady !== void 0)
    $$bindings.onGridReady(onGridReady);
  if ($$props.gridOptions === void 0 && $$bindings.gridOptions && gridOptions !== void 0)
    $$bindings.gridOptions(gridOptions);
  if ($$props.modules === void 0 && $$bindings.modules && modules !== void 0)
    $$bindings.modules(modules);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  updateProp = (key, prop) => {
    if (api)
      _update(api, key, prop);
  };
  {
    updateProp("enableBrowserTooltips", enableBrowserTooltips);
  }
  {
    updateProp("tooltipShowDelay", tooltipShowDelay);
  }
  {
    updateProp("tooltipHideDelay", tooltipHideDelay);
  }
  {
    updateProp("tooltipMouseTrack", tooltipMouseTrack);
  }
  {
    updateProp("statusBar", statusBar);
  }
  {
    updateProp("sideBar", sideBar);
  }
  {
    updateProp("getContextMenuItems", getContextMenuItems);
  }
  {
    updateProp("suppressContextMenu", suppressContextMenu);
  }
  {
    updateProp("preventDefaultOnContextMenu", preventDefaultOnContextMenu);
  }
  {
    updateProp("allowContextMenuWithControlKey", allowContextMenuWithControlKey);
  }
  {
    updateProp("getMainMenuItems", getMainMenuItems);
  }
  {
    updateProp("suppressMenuHide", suppressMenuHide);
  }
  {
    updateProp("popupParent", popupParent);
  }
  {
    updateProp("postProcessPopup", postProcessPopup);
  }
  {
    updateProp("copyHeadersToClipboard", copyHeadersToClipboard);
  }
  {
    updateProp("copyGroupHeadersToClipboard", copyGroupHeadersToClipboard);
  }
  {
    updateProp("clipboardDelimiter", clipboardDelimiter);
  }
  {
    updateProp("suppressCopyRowsToClipboard", suppressCopyRowsToClipboard);
  }
  {
    updateProp("suppressCopySingleCellRanges", suppressCopySingleCellRanges);
  }
  {
    updateProp("suppressLastEmptyLineOnPaste", suppressLastEmptyLineOnPaste);
  }
  {
    updateProp("suppressClipboardPaste", suppressClipboardPaste);
  }
  {
    updateProp("suppressClipboardApi", suppressClipboardApi);
  }
  {
    updateProp("processCellForClipboard", processCellForClipboard);
  }
  {
    updateProp("processHeaderForClipboard", processHeaderForClipboard);
  }
  {
    updateProp("processGroupHeaderForClipboard", processGroupHeaderForClipboard);
  }
  {
    updateProp("processCellFromClipboard", processCellFromClipboard);
  }
  {
    updateProp("sendToClipboard", sendToClipboard);
  }
  {
    updateProp("processDataFromClipboard", processDataFromClipboard);
  }
  {
    updateProp("defaultColDef", defaultColDef);
  }
  {
    updateProp("defaultColGroupDef", defaultColGroupDef);
  }
  {
    updateProp("columnTypes", columnTypes);
  }
  {
    updateProp("maintainColumnOrder", maintainColumnOrder);
  }
  {
    updateProp("suppressFieldDotNotation", suppressFieldDotNotation);
  }
  {
    updateProp("columnDefs", columnDefs);
  }
  {
    updateProp("headerHeight", headerHeight);
  }
  {
    updateProp("groupHeaderHeight", groupHeaderHeight);
  }
  {
    updateProp("floatingFiltersHeight", floatingFiltersHeight);
  }
  {
    updateProp("pivotHeaderHeight", pivotHeaderHeight);
  }
  {
    updateProp("pivotGroupHeaderHeight", pivotGroupHeaderHeight);
  }
  {
    updateProp("allowDragFromColumnsToolPanel", allowDragFromColumnsToolPanel);
  }
  {
    updateProp("suppressMovableColumns", suppressMovableColumns);
  }
  {
    updateProp("suppressColumnMoveAnimation", suppressColumnMoveAnimation);
  }
  {
    updateProp("suppressDragLeaveHidesColumns", suppressDragLeaveHidesColumns);
  }
  {
    updateProp("suppressRowGroupHidesColumns", suppressRowGroupHidesColumns);
  }
  {
    updateProp("colResizeDefault", colResizeDefault);
  }
  {
    updateProp("suppressAutoSize", suppressAutoSize);
  }
  {
    updateProp("autoSizePadding", autoSizePadding);
  }
  {
    updateProp("skipHeaderOnAutoSize", skipHeaderOnAutoSize);
  }
  {
    updateProp("editType", editType);
  }
  {
    updateProp("singleClickEdit", singleClickEdit);
  }
  {
    updateProp("suppressClickEdit", suppressClickEdit);
  }
  {
    updateProp("stopEditingWhenCellsLoseFocus", stopEditingWhenCellsLoseFocus);
  }
  {
    updateProp("enterMovesDown", enterMovesDown);
  }
  {
    updateProp("enterMovesDownAfterEdit", enterMovesDownAfterEdit);
  }
  {
    updateProp("undoRedoCellEditing", undoRedoCellEditing);
  }
  {
    updateProp("undoRedoCellEditingLimit", undoRedoCellEditingLimit);
  }
  {
    updateProp("readOnlyEdit", readOnlyEdit);
  }
  {
    updateProp("defaultCsvExportParams", defaultCsvExportParams);
  }
  {
    updateProp("suppressCsvExport", suppressCsvExport);
  }
  {
    updateProp("defaultExcelExportParams", defaultExcelExportParams);
  }
  {
    updateProp("suppressExcelExport", suppressExcelExport);
  }
  {
    updateProp("excelStyles", excelStyles);
  }
  {
    updateProp("quickFilterText", quickFilterText);
  }
  {
    updateProp("cacheQuickFilter", cacheQuickFilter);
  }
  {
    updateProp("isExternalFilterPresent", isExternalFilterPresent);
  }
  {
    updateProp("doesExternalFilterPass", doesExternalFilterPass);
  }
  {
    updateProp("excludeChildrenWhenTreeDataFiltering", excludeChildrenWhenTreeDataFiltering);
  }
  {
    updateProp("enableCharts", enableCharts);
  }
  {
    updateProp("getChartToolbarItems", getChartToolbarItems);
  }
  {
    updateProp("createChartContainer", createChartContainer);
  }
  {
    updateProp("chartThemes", chartThemes);
  }
  {
    updateProp("customChartThemes", customChartThemes);
  }
  {
    updateProp("chartThemeOverrides", chartThemeOverrides);
  }
  {
    updateProp("navigateToNextHeader", navigateToNextHeader);
  }
  {
    updateProp("tabToNextHeader", tabToNextHeader);
  }
  {
    updateProp("navigateToNextCell", navigateToNextCell);
  }
  {
    updateProp("tabToNextCell", tabToNextCell);
  }
  {
    updateProp("loadingCellRenderer", loadingCellRenderer);
  }
  {
    updateProp("loadingCellRendererParams", loadingCellRendererParams);
  }
  {
    updateProp("loadingCellRendererSelector", loadingCellRendererSelector);
  }
  {
    updateProp("localeText", localeText);
  }
  {
    updateProp("getLocaleText", getLocaleText);
  }
  {
    updateProp("masterDetail", masterDetail);
  }
  {
    updateProp("isRowMaster", isRowMaster);
  }
  {
    updateProp("detailCellRenderer", detailCellRenderer);
  }
  {
    updateProp("detailCellRendererParams", detailCellRendererParams);
  }
  {
    updateProp("detailRowHeight", detailRowHeight);
  }
  {
    updateProp("detailRowAutoHeight", detailRowAutoHeight);
  }
  {
    updateProp("embedFullWidthRows", embedFullWidthRows);
  }
  {
    updateProp("keepDetailRows", keepDetailRows);
  }
  {
    updateProp("keepDetailRowsCount", keepDetailRowsCount);
  }
  {
    updateProp("api", api);
  }
  {
    updateProp("columnApi", columnApi);
  }
  {
    updateProp("alignedGrids", alignedGrids);
  }
  {
    updateProp("context", context);
  }
  {
    updateProp("tabIndex", tabIndex);
  }
  {
    updateProp("rowBuffer", rowBuffer);
  }
  {
    updateProp("valueCache", valueCache);
  }
  {
    updateProp("valueCacheNeverExpires", valueCacheNeverExpires);
  }
  {
    updateProp("enableCellExpressions", enableCellExpressions);
  }
  {
    updateProp("getDocument", getDocument);
  }
  {
    updateProp("suppressParentsInRowNodes", suppressParentsInRowNodes);
  }
  {
    updateProp("suppressTouch", suppressTouch);
  }
  {
    updateProp("suppressFocusAfterRefresh", suppressFocusAfterRefresh);
  }
  {
    updateProp("suppressAsyncEvents", suppressAsyncEvents);
  }
  {
    updateProp("suppressBrowserResizeObserver", suppressBrowserResizeObserver);
  }
  {
    updateProp("suppressPropertyNamesCheck", suppressPropertyNamesCheck);
  }
  {
    updateProp("suppressChangeDetection", suppressChangeDetection);
  }
  {
    updateProp("debug", debug);
  }
  {
    updateProp("overlayLoadingTemplate", overlayLoadingTemplate);
  }
  {
    updateProp("loadingOverlayComponent", loadingOverlayComponent);
  }
  {
    updateProp("loadingOverlayComponentParams", loadingOverlayComponentParams);
  }
  {
    updateProp("suppressLoadingOverlay", suppressLoadingOverlay);
  }
  {
    updateProp("overlayNoRowsTemplate", overlayNoRowsTemplate);
  }
  {
    updateProp("noRowsOverlayComponent", noRowsOverlayComponent);
  }
  {
    updateProp("noRowsOverlayComponentParams", noRowsOverlayComponentParams);
  }
  {
    updateProp("suppressNoRowsOverlay", suppressNoRowsOverlay);
  }
  {
    updateProp("pagination", pagination);
  }
  {
    updateProp("paginationPageSize", paginationPageSize);
  }
  {
    updateProp("paginationNumberFormatter", paginationNumberFormatter);
  }
  {
    updateProp("paginationAutoPageSize", paginationAutoPageSize);
  }
  {
    updateProp("paginateChildRows", paginateChildRows);
  }
  {
    updateProp("suppressPaginationPanel", suppressPaginationPanel);
  }
  {
    updateProp("pivotMode", pivotMode);
  }
  {
    updateProp("pivotPanelShow", pivotPanelShow);
  }
  {
    updateProp("pivotColumnGroupTotals", pivotColumnGroupTotals);
  }
  {
    updateProp("pivotRowTotals", pivotRowTotals);
  }
  {
    updateProp("pivotSuppressAutoColumn", pivotSuppressAutoColumn);
  }
  {
    updateProp("processPivotResultColDef", processPivotResultColDef);
  }
  {
    updateProp("processPivotResultColGroupDef", processPivotResultColGroupDef);
  }
  {
    updateProp("suppressExpandablePivotGroups", suppressExpandablePivotGroups);
  }
  {
    updateProp("functionsReadOnly", functionsReadOnly);
  }
  {
    updateProp("aggFuncs", aggFuncs);
  }
  {
    updateProp("getGroupRowAgg", getGroupRowAgg);
  }
  {
    updateProp("suppressAggFuncInHeader", suppressAggFuncInHeader);
  }
  {
    updateProp("suppressAggAtRootLevel", suppressAggAtRootLevel);
  }
  {
    updateProp("aggregateOnlyChangedColumns", aggregateOnlyChangedColumns);
  }
  {
    updateProp("suppressAggFilteredOnly", suppressAggFilteredOnly);
  }
  {
    updateProp("groupAggFiltering", groupAggFiltering);
  }
  {
    updateProp("removePivotHeaderRowWhenSingleValueColumn", removePivotHeaderRowWhenSingleValueColumn);
  }
  {
    updateProp("animateRows", animateRows);
  }
  {
    updateProp("enableCellChangeFlash", enableCellChangeFlash);
  }
  {
    updateProp("cellFlashDelay", cellFlashDelay);
  }
  {
    updateProp("cellFadeDelay", cellFadeDelay);
  }
  {
    updateProp("allowShowChangeAfterFilter", allowShowChangeAfterFilter);
  }
  {
    updateProp("domLayout", domLayout);
  }
  {
    updateProp("ensureDomOrder", ensureDomOrder);
  }
  {
    updateProp("getBusinessKeyForNode", getBusinessKeyForNode);
  }
  {
    updateProp("processRowPostCreate", processRowPostCreate);
  }
  {
    updateProp("enableRtl", enableRtl);
  }
  {
    updateProp("suppressColumnVirtualisation", suppressColumnVirtualisation);
  }
  {
    updateProp("suppressRowVirtualisation", suppressRowVirtualisation);
  }
  {
    updateProp("suppressMaxRenderedRowRestriction", suppressMaxRenderedRowRestriction);
  }
  {
    updateProp("rowDragManaged", rowDragManaged);
  }
  {
    updateProp("rowDragEntireRow", rowDragEntireRow);
  }
  {
    updateProp("rowDragMultiRow", rowDragMultiRow);
  }
  {
    updateProp("suppressRowDrag", suppressRowDrag);
  }
  {
    updateProp("suppressMoveWhenRowDragging", suppressMoveWhenRowDragging);
  }
  {
    updateProp("fullWidthCellRenderer", fullWidthCellRenderer);
  }
  {
    updateProp("fullWidthCellRendererParams", fullWidthCellRendererParams);
  }
  {
    updateProp("groupDisplayType", groupDisplayType);
  }
  {
    updateProp("groupDefaultExpanded", groupDefaultExpanded);
  }
  {
    updateProp("autoGroupColumnDef", autoGroupColumnDef);
  }
  {
    updateProp("groupMaintainOrder", groupMaintainOrder);
  }
  {
    updateProp("groupSelectsChildren", groupSelectsChildren);
  }
  {
    updateProp("groupIncludeFooter", groupIncludeFooter);
  }
  {
    updateProp("groupIncludeTotalFooter", groupIncludeTotalFooter);
  }
  {
    updateProp("groupSuppressBlankHeader", groupSuppressBlankHeader);
  }
  {
    updateProp("groupRowsSticky", groupRowsSticky);
  }
  {
    updateProp("groupSelectsFiltered", groupSelectsFiltered);
  }
  {
    updateProp("showOpenedGroup", showOpenedGroup);
  }
  {
    updateProp("isGroupOpenByDefault", isGroupOpenByDefault);
  }
  {
    updateProp("initialGroupOrderComparator", initialGroupOrderComparator);
  }
  {
    updateProp("groupRemoveSingleChildren", groupRemoveSingleChildren);
  }
  {
    updateProp("groupRemoveLowestSingleChildren", groupRemoveLowestSingleChildren);
  }
  {
    updateProp("groupHideOpenParents", groupHideOpenParents);
  }
  {
    updateProp("rowGroupPanelShow", rowGroupPanelShow);
  }
  {
    updateProp("groupRowRenderer", groupRowRenderer);
  }
  {
    updateProp("groupRowRendererParams", groupRowRendererParams);
  }
  {
    updateProp("suppressMakeColumnVisibleAfterUnGroup", suppressMakeColumnVisibleAfterUnGroup);
  }
  {
    updateProp("treeData", treeData);
  }
  {
    updateProp("getDataPath", getDataPath);
  }
  {
    updateProp("pinnedTopRowData", pinnedTopRowData);
  }
  {
    updateProp("pinnedBottomRowData", pinnedBottomRowData);
  }
  {
    updateProp("rowModelType", rowModelType);
  }
  {
    updateProp("getRowId", getRowId);
  }
  isClientSide = rowModelType == null || rowModelType === "clientSide";
  {
    if (isClientSide)
      updateProp("rowData", rowData);
  }
  {
    if (isClientSide)
      updateProp("resetRowDataOnUpdate", resetRowDataOnUpdate);
  }
  {
    if (isClientSide)
      updateProp("asyncTransactionWaitMillis", asyncTransactionWaitMillis);
  }
  {
    if (isClientSide)
      updateProp("suppressModelUpdateAfterUpdateTransaction", suppressModelUpdateAfterUpdateTransaction);
  }
  {
    if (rowModelType === "infinite")
      updateProp("datasource", datasource);
  }
  {
    if (rowModelType === "infinite")
      updateProp("cacheOverflowSize", cacheOverflowSize);
  }
  {
    if (rowModelType === "infinite")
      updateProp("maxConcurrentDatasourceRequests", maxConcurrentDatasourceRequests);
  }
  {
    if (rowModelType === "infinite" || rowModelType === "serverSide")
      updateProp("cacheBlockSize", cacheBlockSize);
  }
  {
    if (rowModelType === "infinite" || rowModelType === "serverSide")
      updateProp("maxBlocksInCache", maxBlocksInCache);
  }
  {
    if (rowModelType === "infinite" || rowModelType === "serverSide")
      updateProp("infiniteInitialRowCount", infiniteInitialRowCount);
  }
  {
    if (rowModelType === "serverSide")
      updateProp("serverSideDatasource", serverSideDatasource);
  }
  {
    if (rowModelType === "serverSide")
      updateProp("serverSideInfiniteScroll", serverSideInfiniteScroll);
  }
  {
    if (rowModelType === "serverSide")
      updateProp("blockLoadDebounceMillis", blockLoadDebounceMillis);
  }
  {
    if (rowModelType === "serverSide")
      updateProp("purgeClosedRowNodes", purgeClosedRowNodes);
  }
  {
    if (rowModelType === "serverSide")
      updateProp("serverSideSortAllLevels", serverSideSortAllLevels);
  }
  {
    if (rowModelType === "serverSide")
      updateProp("serverSideFilterAllLevels", serverSideFilterAllLevels);
  }
  {
    if (rowModelType === "serverSide")
      updateProp("serverSideSortOnServer", serverSideSortOnServer);
  }
  {
    if (rowModelType === "serverSide")
      updateProp("serverSideFilterOnServer", serverSideFilterOnServer);
  }
  {
    if (rowModelType === "serverSide")
      updateProp("serverSideInitialRowCount", serverSideInitialRowCount);
  }
  {
    if (rowModelType === "serverSide")
      updateProp("getChildCount", getChildCount);
  }
  {
    if (rowModelType === "serverSide")
      updateProp("getServerSideGroupLevelParams", getServerSideGroupLevelParams);
  }
  {
    if (rowModelType === "serverSide")
      updateProp("isServerSideGroupOpenByDefault", isServerSideGroupOpenByDefault);
  }
  {
    if (rowModelType === "serverSide")
      updateProp("isApplyServerSideTransaction", isApplyServerSideTransaction);
  }
  {
    if (rowModelType === "serverSide")
      updateProp("isServerSideGroup", isServerSideGroup);
  }
  {
    if (rowModelType === "serverSide")
      updateProp("getServerSideGroupKey", getServerSideGroupKey);
  }
  {
    if (rowModelType === "viewport")
      updateProp("viewportDatasource", viewportDatasource);
  }
  {
    if (rowModelType === "viewport")
      updateProp("viewportRowModelPageSize", viewportRowModelPageSize);
  }
  {
    if (rowModelType === "viewport")
      updateProp("viewportRowModelBufferSize", viewportRowModelBufferSize);
  }
  {
    updateProp("alwaysShowHorizontalScroll", alwaysShowHorizontalScroll);
  }
  {
    updateProp("alwaysShowVerticalScroll", alwaysShowVerticalScroll);
  }
  {
    updateProp("debounceVerticalScrollbar", debounceVerticalScrollbar);
  }
  {
    updateProp("suppressHorizontalScroll", suppressHorizontalScroll);
  }
  {
    updateProp("suppressScrollOnNewData", suppressScrollOnNewData);
  }
  {
    updateProp("suppressScrollWhenPopupsAreOpen", suppressScrollWhenPopupsAreOpen);
  }
  {
    updateProp("suppressAnimationFrame", suppressAnimationFrame);
  }
  {
    updateProp("suppressMiddleClickScrolls", suppressMiddleClickScrolls);
  }
  {
    updateProp("suppressPreventDefaultOnMouseWheel", suppressPreventDefaultOnMouseWheel);
  }
  {
    updateProp("scrollbarWidth", scrollbarWidth);
  }
  {
    updateProp("rowSelection", rowSelection);
  }
  {
    updateProp("rowMultiSelectWithClick", rowMultiSelectWithClick);
  }
  {
    updateProp("isRowSelectable", isRowSelectable);
  }
  {
    updateProp("suppressRowDeselection", suppressRowDeselection);
  }
  {
    updateProp("suppressRowClickSelection", suppressRowClickSelection);
  }
  {
    updateProp("suppressCellFocus", suppressCellFocus);
  }
  {
    updateProp("suppressMultiRangeSelection", suppressMultiRangeSelection);
  }
  {
    updateProp("enableCellTextSelection", enableCellTextSelection);
  }
  {
    updateProp("enableRangeSelection", enableRangeSelection);
  }
  {
    updateProp("enableRangeHandle", enableRangeHandle);
  }
  {
    updateProp("enableFillHandle", enableFillHandle);
  }
  {
    updateProp("fillHandleDirection", fillHandleDirection);
  }
  {
    updateProp("fillOperation", fillOperation);
  }
  {
    updateProp("suppressClearOnFillReduction", suppressClearOnFillReduction);
  }
  {
    updateProp("sortingOrder", sortingOrder);
  }
  {
    updateProp("accentedSort", accentedSort);
  }
  {
    updateProp("unSortIcon", unSortIcon);
  }
  {
    updateProp("suppressMultiSort", suppressMultiSort);
  }
  {
    updateProp("alwaysMultiSort", alwaysMultiSort);
  }
  {
    updateProp("multiSortKey", multiSortKey);
  }
  {
    updateProp("suppressMaintainUnsortedOrder", suppressMaintainUnsortedOrder);
  }
  {
    updateProp("postSortRows", postSortRows);
  }
  {
    updateProp("deltaSort", deltaSort);
  }
  {
    updateProp("icons", icons);
  }
  {
    updateProp("rowHeight", rowHeight);
  }
  {
    updateProp("getRowHeight", getRowHeight);
  }
  {
    updateProp("rowStyle", rowStyle);
  }
  {
    updateProp("getRowStyle", getRowStyle);
  }
  {
    updateProp("rowClass", rowClass);
  }
  {
    updateProp("getRowClass", getRowClass);
  }
  {
    updateProp("rowClassRules", rowClassRules);
  }
  {
    updateProp("isFullWidthRow", isFullWidthRow);
  }
  {
    updateProp("suppressRowHoverHighlight", suppressRowHoverHighlight);
  }
  {
    updateProp("suppressRowTransform", suppressRowTransform);
  }
  {
    updateProp("columnHoverHighlight", columnHoverHighlight);
  }
  return `<div${add_styles(merge_ssr_styles(escape(style, true), { "height": `100%` }))}${add_attribute("class", className, 0)}${add_attribute("this", eGui, 0)}></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".spinner-wrapper.svelte-1xd3vwm{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.svelte-1xd3vwm .shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:28px 0 0 28px;width:28px}.svelte-1xd3vwm .shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 28px 28px 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const defaultColDef = {
    resizable: true,
    editable: true,
    sortable: true,
    width: 90
  };
  let rowData = [];
  const columnDefs = [
    {
      headerName: "id",
      field: "id",
      pinned: "left",
      editable: false
    },
    {
      field: "athlete",
      width: 150,
      pinned: "left"
    },
    { field: "age", pinned: "left" },
    { field: "country", width: 150 },
    { field: "year" },
    { field: "date", width: 110 },
    { field: "sport", width: 150 },
    { field: "gold", width: 100 },
    { field: "silver", width: 100 },
    { field: "bronze", width: 100 },
    {
      field: "total",
      width: 100,
      pinned: "right",
      editable: false
    }
  ];
  let api;
  let columnApi;
  const gridOptions = {
    onGridReady: () => {
      if (rowData.length === 0) {
        setTimeout(
          () => {
            fetch("/olympic-winners.json").then((resp) => resp.json()).then((data) => {
              rowData = data;
            });
          },
          1500
        );
      }
    },
    onGridSizeChanged: (event) => {
      if (event.clientWidth > 1200) {
        api.sizeColumnsToFit();
      }
    }
  };
  let filterString = "";
  const onFilterStringChange = () => {
    api?.setQuickFilter(filterString);
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      onFilterStringChange();
    }
    $$rendered = `<div style="display: flex; justify-content: space-between; align-items: center;" class="svelte-1xd3vwm"><div class="svelte-1xd3vwm">${each(sections, (section) => {
      return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(section.label)}`;
        }
      })}`;
    })}</div>

	<div style="margin-left: 10px;" class="svelte-1xd3vwm">${validate_component(Select, "Select").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Option, "Option").$$render($$result, { value: "" }, {}, {
          default: () => {
            return `Select an option`;
          }
        })}
			${validate_component(Option, "Option").$$render($$result, { value: "views" }, {}, {
          default: () => {
            return `Views`;
          }
        })}
			${validate_component(Option, "Option").$$render($$result, { value: "reports" }, {}, {
          default: () => {
            return `Reports`;
          }
        })}
			${validate_component(Option, "Option").$$render($$result, { value: "preferences" }, {}, {
          default: () => {
            return `Preferences`;
          }
        })}`;
      }
    })}</div></div>

<hr class="svelte-1xd3vwm">
${validate_component(QuoteInfo, "Info").$$render($$result, {}, {}, {})}

${validate_component(Client, "Client").$$render($$result, {}, {}, {})}

<div id="ag-grid" class="svelte-1xd3vwm"${add_styles({
      "display": `none`,
      "flex-direction": `column`,
      "height": `800px`
    })}>+
	${rowData.length > 0 ? `<div class="svelte-1xd3vwm"${add_styles({
      "text-align": `end`,
      "margin-bottom": `35px`
    })}>${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        class: "shaped-outlined",
        variant: "outlined",
        label: "Search",
        value: filterString
      },
      {
        value: ($$value) => {
          filterString = $$value;
          $$settled = false;
        }
      },
      {
        leadingIcon: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              class: "material-icons",
              slot: "leadingIcon"
            },
            {},
            {
              default: () => {
                return `search`;
              }
            }
          )}`;
        }
      }
    )}</div>` : ``}

	<div class="ag-theme-svelte-material svelte-1xd3vwm"${add_styles({
      "width": `100%`,
      "flex": `1`,
      "position": `relative`,
      "overflow": `hidden`
    })}>${rowData.length > 0 ? `${validate_component(AgGridSvelte, "AgGridSvelte").$$render(
      $$result,
      {
        rowData,
        columnDefs,
        defaultColDef,
        gridOptions,
        api,
        columnApi
      },
      {
        api: ($$value) => {
          api = $$value;
          $$settled = false;
        },
        columnApi: ($$value) => {
          columnApi = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `<div class="spinner-wrapper svelte-1xd3vwm">${validate_component(CircularProgress, "CircularProgress").$$render(
      $$result,
      {
        style: "height: 64px; width: 64px;",
        indeterminate: true
      },
      {},
      {}
    )}</div>
			<div class="svelte-1xd3vwm"${add_styles({ "display": `none` })}>${validate_component(AgGridSvelte, "AgGridSvelte").$$render($$result, { gridOptions }, {}, {})}</div>`}</div></div>

${validate_component(Rates, "Rates").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
