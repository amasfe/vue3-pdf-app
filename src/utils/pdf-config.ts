import { ToolbarIdConfig } from "@/types";
import { PDF_FILE_INPUT_ID } from "@/utils/constants";

const getEl = (id: string) => document.getElementById(id);

export default (idConfig: ToolbarIdConfig = {}, instanceId?: string) => {
  const prefix = instanceId ? `${instanceId}-` : "";

  return {
    appContainer: getEl(`${prefix}pdf`),
    mainContainer: getEl(`${prefix}viewerContainer`),
    viewerContainer: getEl(`${prefix}viewer`),
    eventBus: null,
    toolbar: {
      container: getEl(`${prefix}toolbarViewer`),
      numPages: getEl(idConfig.numPages || `${prefix}numPages`),
      pageNumber: getEl(idConfig.pageNumber || `${prefix}pageNumber`),
      // TODO make scale select customizable
      scaleSelectContainer: getEl(`${prefix}scaleSelectContainer`),
      scaleSelect: getEl(`${prefix}scaleSelect`),
      customScaleOption: getEl(`${prefix}customScaleOption`),
      previous: getEl(idConfig.previousPage || `${prefix}previous`),
      next: getEl(idConfig.nextPage || `${prefix}next`),
      zoomIn: getEl(idConfig.zoomIn || `${prefix}zoomIn`),
      zoomOut: getEl(idConfig.zoomOut || `${prefix}zoomOut`),
      viewFind: getEl(idConfig.toggleFindbar || `${prefix}viewFind`),
      openFile: getEl(idConfig.openFile || `${prefix}openFile`),
      print: getEl(idConfig.print || `${prefix}print`),
      presentationModeButton: getEl(
        idConfig.presentationMode || `${prefix}presentationMode`
      ),
      download: getEl(idConfig.download || `${prefix}download`),
      viewBookmark: getEl(idConfig.viewBookmark || `${prefix}viewBookmark`),
    },
    secondaryToolbar: {
      toolbar: getEl(`${prefix}secondaryToolbar`),
      toggleButton: getEl(`${prefix}secondaryToolbarToggle`),
      toolbarButtonContainer: getEl(`${prefix}secondaryToolbarButtonContainer`),
      presentationModeButton: getEl(`${prefix}secondaryPresentationMode`),
      openFileButton: getEl(`${prefix}secondaryOpenFile`),
      printButton: getEl(`${prefix}secondaryPrint`),
      downloadButton: getEl(`${prefix}secondaryDownload`),
      viewBookmarkButton: getEl(`${prefix}secondaryViewBookmark`),
      firstPageButton: getEl(idConfig.firstPage || `${prefix}firstPage`),
      lastPageButton: getEl(idConfig.lastPage || `${prefix}lastPage`),
      pageRotateCwButton: getEl(
        idConfig.pageRotateCw || `${prefix}pageRotateCw`
      ),
      pageRotateCcwButton: getEl(
        idConfig.pageRotateCcw || `${prefix}pageRotateCcw`
      ),
      cursorSelectToolButton: getEl(
        idConfig.cursorSelectTool || `${prefix}cursorSelectTool`
      ),
      cursorHandToolButton: getEl(
        idConfig.cursorHandTool || `${prefix}cursorHandTool`
      ),
      scrollVerticalButton: getEl(
        idConfig.scrollVertical || `${prefix}scrollVertical`
      ),
      scrollHorizontalButton: getEl(
        idConfig.scrollHorizontal || `${prefix}scrollHorizontal`
      ),
      scrollWrappedButton: getEl(
        idConfig.scrollWrapped || `${prefix}scrollWrapped`
      ),
      spreadNoneButton: getEl(idConfig.spreadNone || `${prefix}spreadNone`),
      spreadOddButton: getEl(idConfig.spreadOdd || `${prefix}spreadOdd`),
      spreadEvenButton: getEl(idConfig.spreadEven || `${prefix}spreadEven`),
      documentPropertiesButton: getEl(
        idConfig.documentProperties || `${prefix}documentProperties`
      ),
    },
    fullscreen: {
      contextFirstPage: getEl(`${prefix}contextFirstPage`),
      contextLastPage: getEl(`${prefix}contextLastPage`),
      contextPageRotateCw: getEl(`${prefix}contextPageRotateCw`),
      contextPageRotateCcw: getEl(`${prefix}contextPageRotateCcw`),
    },
    sidebar: {
      // Divs (and sidebar button)
      outerContainer: getEl(`${prefix}outerContainer`),
      viewerContainer: getEl(`${prefix}viewerContainer`),
      toggleButton: getEl(idConfig.sidebarToggle || `${prefix}sidebarToggle`),
      // Buttons
      thumbnailButton: getEl(
        idConfig.viewThumbnail || `${prefix}viewThumbnail`
      ),
      outlineButton: getEl(idConfig.viewOutline || `${prefix}viewOutline`),
      attachmentsButton: getEl(
        idConfig.viewAttachments || `${prefix}viewAttachments`
      ),
      // Views
      thumbnailView: getEl(`${prefix}thumbnailView`),
      outlineView: getEl(`${prefix}outlineView`),
      attachmentsView: getEl(`${prefix}attachmentsView`),
    },
    sidebarResizer: {
      outerContainer: getEl(`${prefix}outerContainer`),
      resizer: getEl(`${prefix}sidebarResizer`),
    },
    findBar: {
      bar: getEl(idConfig.findbar || `${prefix}findbar`),
      toggleButton: getEl(idConfig.toggleFindbar || `${prefix}viewFind`),
      findField: getEl(idConfig.findInput || `${prefix}findInput`),
      highlightAllCheckbox: getEl(
        idConfig.findHighlightAll || `${prefix}findHighlightAll`
      ),
      caseSensitiveCheckbox: getEl(
        idConfig.findMatchCase || `${prefix}findMatchCase`
      ),
      entireWordCheckbox: getEl(
        idConfig.findEntireWord || `${prefix}findEntireWord`
      ),
      findMsg: getEl(idConfig.findMessage || `${prefix}findMsg`),
      findResultsCount: getEl(
        idConfig.findResultsCount || `${prefix}findResultsCount`
      ),
      findPreviousButton: getEl(
        idConfig.findPrevious || `${prefix}findPrevious`
      ),
      findNextButton: getEl(idConfig.findNext || `${prefix}findNext`),
    },
    passwordOverlay: {
      overlayName: "passwordOverlay",
      container: getEl(`${prefix}passwordOverlay`),
      label: getEl(`${prefix}passwordText`),
      input: getEl(`${prefix}password`),
      submitButton: getEl(`${prefix}passwordSubmit`),
      cancelButton: getEl(`${prefix}passwordCancel`),
    },
    documentProperties: {
      overlayName: "documentPropertiesOverlay",
      container: getEl(`${prefix}documentPropertiesOverlay`),
      closeButton: getEl(`${prefix}documentPropertiesClose`),
      fields: {
        fileName: getEl(`${prefix}fileNameField`),
        fileSize: getEl(`${prefix}fileSizeField`),
        title: getEl(`${prefix}titleField`),
        author: getEl(`${prefix}authorField`),
        subject: getEl(`${prefix}subjectField`),
        keywords: getEl(`${prefix}keywordsField`),
        creationDate: getEl(`${prefix}creationDateField`),
        modificationDate: getEl(`${prefix}modificationDateField`),
        creator: getEl(`${prefix}creatorField`),
        producer: getEl(`${prefix}producerField`),
        version: getEl(`${prefix}versionField`),
        pageCount: getEl(`${prefix}pageCountField`),
        pageSize: getEl(`${prefix}pageSizeField`),
        linearized: getEl(`${prefix}linearizedField`),
      },
    },
    errorWrapper: {
      container: getEl(`${prefix}errorWrapper`),
      errorMessage: getEl(`${prefix}errorMessage`),
      closeButton: getEl(`${prefix}errorClose`),
      errorMoreInfo: getEl(`${prefix}errorMoreInfo`),
      moreInfoButton: getEl(`${prefix}errorShowMore`),
      lessInfoButton: getEl(`${prefix}errorShowLess`),
    },
    printContainer: getEl(`${prefix}printContainer`),
    openFileInputName: PDF_FILE_INPUT_ID,
  };
};
