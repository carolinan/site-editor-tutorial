/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/command-palette-button.js":
/*!***************************************!*\
  !*** ./src/command-palette-button.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommandPaletteButton: function() { return /* binding */ CommandPaletteButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/commands */ "@wordpress/commands");
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_commands__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);

/**
 * This file adds a component for opening the command palette from the Site Editor welcome guide.
 */

/**
 * WordPress dependencies
 */




const CommandPaletteButton = () => {
  const {
    open: openCommandCenter
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_commands__WEBPACK_IMPORTED_MODULE_3__.store);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "is-primary edit-site-welcome-guide__text",
    onClick: () => openCommandCenter()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open Command Palette'));
};

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageControlIcon: function() { return /* binding */ PageControlIcon; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * This just adds the little circle icon when there is more than one page to walk through.
 */

/**
 * WordPress dependencies
 */

const PageControlIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "8",
  height: "8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Circle, {
  cx: "4",
  cy: "4",
  r: "4"
}));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _tutorial_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tutorial-footer */ "./src/tutorial-footer.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages */ "./src/pages/index.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function SiteEditorTutorial() {
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const [currentPage, setCurrentPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  // Set opacity to 0 to prevent layout shifts:
  const [styleAttr, setStyleAttributes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)({
    opacity: '1',
    display: 'block'
  });

  /*
   * This would have been easier if I could have just used useLocation() but its private.
   * Locate the tutorial pages based on the URL.
   */
  let pages = _pages__WEBPACK_IMPORTED_MODULE_9__.entryPages;
  const href = window.location.href;
  const path = window.location.pathname;
  function getQueryParamValue(url, param) {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get(param);
  }
  /**
   * The path determines which Site Editor screen is shown.
   * Example: wp-admin/site-editor.php?path=%2Fpage
  */
  const pathParam = getQueryParamValue(href, 'path') || '';
  /**
   * The post type parameter is used to determine which post type that is being viewed,
   * for example post, page, pattern.
   */
  const postTypeParam = getQueryParamValue(href, 'postType') || '';
  /**
   * If the canvas parameter is set, we are in the actual editor and not
   * in the preview mode where the navigation menu is shown.
  */
  const canvasParam = getQueryParamValue(href, 'canvas') || '';
  const postIDParam = getQueryParamValue(href, 'postId') || '';

  // Combine the parameters
  const pageSelector = pathParam + postTypeParam + canvasParam;
  console.log('href: ', href);
  console.log('path: ', path);
  console.log('pathParam: ', pathParam);
  console.log('postTypeParam: ', postTypeParam);
  console.log('canvasParam: ', canvasParam);
  console.log('postIDParam: ', postIDParam);
  console.log('pageSelector: ', pageSelector);
  switch (pageSelector) {
    case '/navigation':
    case 'wp_navigation':
      if (postIDParam) {
        // If the post id is set, we are in the editor for a specific menu.
        console.log('postIDParam: ', postIDParam);
        pages = _pages__WEBPACK_IMPORTED_MODULE_9__.navigationDetailsPages;
      } else {
        const {
          records,
          isResolving
        } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.useEntityRecords)('postType', 'wp_navigation');
        let count = 0;
        if (isResolving) {
          pages = _pages__WEBPACK_IMPORTED_MODULE_9__.navigationPages;
        } else if (records) {
          count = records.length;
          // If there is more than one menu, show the list of menus
          if (count > 1) {
            pages = _pages__WEBPACK_IMPORTED_MODULE_9__.navigationPages;
          } else {
            // If there is only one menu, show the details of the menu.
            pages = _pages__WEBPACK_IMPORTED_MODULE_9__.navigationDetailsPages;
          }
        }
      }
      break;
    case '/wp_global_styles':
      /**
       * Note: /wp_global_stylesedit is an exception because it does not open with
       * the select styles, just the editor.
       * 
       * /wp_global_styles is the page with the left hand menu where you preview style variations.
       */
      pages = _pages__WEBPACK_IMPORTED_MODULE_9__.stylesPages;
      break;
    case '/page':
      // /page is the page previews and the site editor menu with the list of pages.
      // /pageedit is the editor page for a page.
      pages = _pages__WEBPACK_IMPORTED_MODULE_9__.pagesPages;
      break;
    case '/wp_template':
      // /wp_templateedit is the editor page for a template.
      // /wp_template is the preview page for a template.
      pages = _pages__WEBPACK_IMPORTED_MODULE_9__.templatesPages;
      break;
    case '/patterns':
      pages = _pages__WEBPACK_IMPORTED_MODULE_9__.patternsPages;
      break;
    case 'edit':
      pages = _pages__WEBPACK_IMPORTED_MODULE_9__.editorCanvasPages;
      break;
    default:
      console.log('default');
      pages = _pages__WEBPACK_IMPORTED_MODULE_9__.entryPages;
      break;
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // Place focus at the top of the modal on mount and when the page changes.
    // This focus management needs to be separate from the "focusOnMOunt" modal property
    // because of the pagination.
    const frame = ref.current?.querySelector('.site-editor-tutorial');
    if (frame instanceof HTMLElement) {
      frame.focus();
    }
  }, [currentPage]);
  const canGoBack = currentPage > 0;
  const canGoForward = currentPage < pages.length - 1;
  const goBack = () => {
    if (canGoBack) {
      resetStyles();
      setCurrentPage(currentPage - 1);
    }
  };
  const goForward = () => {
    if (canGoForward) {
      resetStyles();
      setCurrentPage(currentPage + 1);
    }
  };
  function applyStyles(anchor, highlightType) {
    const borderColor = 'var(--wp-block-synced-color)';
    if (highlightType === 'border') {
      anchor.style.border = `6px solid ${borderColor}`;
    } else if (highlightType === 'boxShadow') {
      anchor.style.boxShadow = `inset 0 0 0 6px ${borderColor}`;
    }
  }
  const resetStyles = () => {
    let anchor = document.querySelector(pages[currentPage].anchor);
    const nth = pages[currentPage].nth;
    if (anchor) {
      if (nth >= 0) {
        anchor = document.querySelectorAll(pages[currentPage].anchor);
        const nthElement = anchor[nth];
        if (nthElement) {
          nthElement.style.border = '';
          nthElement.style.boxShadow = '';
        }
      } else {
        anchor.style.border = '';
        anchor.style.boxShadow = '';
      }
    }
  };
  const removeOverlay = () => {
    const overlay = document.querySelector('.components-modal__screen-overlay:has(.site-editor-tutorial)');
    if (overlay) {
      overlay.style.position = 'initial';
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const getAnchorElement = () => {
      const anchor = document.querySelector(pages[currentPage].anchor);
      // Some of the elements are node lists, so we need to use querySelectorAll.
      const nth = pages[currentPage].nth;
      return nth >= 0 ? document.querySelectorAll(pages[currentPage].anchor)[nth] : anchor;
    };
    const getPosition = (anchor, offsetX, offsetY) => {
      const rect = anchor.getBoundingClientRect();
      const top = pages[currentPage].verticalplacement === 'bottom' ? `${rect.bottom + window.scrollY + offsetY}px` : `${rect.top + window.scrollY + offsetY}px`;
      const left = pages[currentPage].horizontalplacement === 'right' ? `${rect.right + window.scrollX + offsetX}px` : `${rect.left + window.scrollX + offsetX}px`;
      return {
        top,
        left
      };
    };
    const createStyleAttributes = () => {
      const updateStyles = () => {
        const anchor = getAnchorElement();
        if (anchor) {
          const {
            offsetX,
            offsetY
          } = pages[currentPage];
          const {
            top,
            left
          } = getPosition(anchor, offsetX, offsetY);
          const newStyle = {
            position: 'absolute',
            top,
            left
          };

          // Add border or box shadow styles to highlight the targeted element.
          if (pages[currentPage].highlightborder || pages[currentPage].highlight) {
            const styleProperty = pages[currentPage].highlightborder ? 'border' : 'boxShadow';
            applyStyles(anchor, styleProperty);
          }
          setStyleAttributes(newStyle);
        }
      };
      requestAnimationFrame(updateStyles);
    };
    createStyleAttributes();
  }, [currentPage, pages]);
  const onFinish = () => {
    setIsOpen(false);
    resetStyles();
  };
  if (pages.length === 0 || !isOpen || path !== '/wp-admin/site-editor.php') {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('site-editor-tutorial', 'site-editor-tutorial-page-' + (currentPage + 1), {
      'site-editor-tutorial-arrow': pages[currentPage].showArrow,
      [`site-editor-tutorial-arrow-${pages[currentPage].arrowPosition}`]: pages[currentPage].showArrow
    }),
    shouldCloseOnEsc: true,
    shouldCloseOnClickOutside: false,
    style: styleAttr,
    contentLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Site Editor Tutorial'),
    isDismissible: pages.length > 1,
    onRequestClose: onFinish,
    onKeyDown: event => {
      if (event.code === 'ArrowLeft') {
        goBack();
        // Do not scroll the modal's contents.
        event.preventDefault();
      } else if (event.code === 'ArrowRight') {
        goForward();
        // Do not scroll the modal's contents.
        event.preventDefault();
      }
    },
    ref: ref
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "site-editor-tutorial__container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "site-editor-tutorial__page"
  }, pages[currentPage].image, pages[currentPage].content), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tutorial_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    pages: pages,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    canGoBack: canGoBack,
    canGoForward: canGoForward,
    goBack: goBack,
    goForward: goForward,
    onFinish: onFinish,
    resetStyles: resetStyles
  })));
}
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__.registerPlugin)('site-editor-tutorial-plugin', {
  render: SiteEditorTutorial,
  icon: null
});

/***/ }),

/***/ "./src/page-control.js":
/*!*****************************!*\
  !*** ./src/page-control.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PageControl; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./src/icons.js");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function PageControl(props) {
  const {
    currentPage,
    numberOfPages,
    setCurrentPage,
    resetStyles
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "site-editor-tutorial__page-control",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tutorial controls')
  }, Array.from({
    length: numberOfPages
  }).map((_, page) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: page
    // Set aria-current="step" on the active page, see https://www.w3.org/TR/wai-aria-1.1/#aria-current
    ,
    "aria-current": page === currentPage ? 'step' : undefined
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    key: page,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icons__WEBPACK_IMPORTED_MODULE_3__.PageControlIcon, null),
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( /* translators: 1: current page number 2: total number of pages */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Page %1$d of %2$d'), page + 1, numberOfPages),
    onClick: () => {
      setCurrentPage(page);
      resetStyles();
    }
  }))));
}

/***/ }),

/***/ "./src/pages/editor-canvas-pages.js":
/*!******************************************!*\
  !*** ./src/pages/editor-canvas-pages.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editorCanvasPages: function() { return /* binding */ editorCanvasPages; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * This file contains the content for the editor tutorial pages in the Site Editor welcome guide.
 */

/**
 * WordPress dependencies
 */

const editorCanvasPages = [{
  anchor: '.edit-site-layout__sidebar-region',
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 10,
  highlight: false,
  showArrow: true,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Editor')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('TODO: Add info here')))
}];

/***/ }),

/***/ "./src/pages/entry-pages.js":
/*!**********************************!*\
  !*** ./src/pages/entry-pages.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   entryPages: function() { return /* binding */ entryPages; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _command_palette_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../command-palette-button */ "./src/command-palette-button.js");
/* harmony import */ var _next_steps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./next-steps */ "./src/pages/next-steps.js");

/**
 * This file contains the content for the initial tutorial pages in the Site Editor welcome guide.
 * It needs to be split further as the content increases.
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const entryPages = [{
  anchor: '.interface-interface-skeleton__header',
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: 20,
  offsetY: 20,
  highlight: false,
  showArrow: false,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Welcome to the Site Editor tutorial')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This walkthrough will introduce the Site Editor interface and features.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('While the tutorial is open, you will not be able to interact with any other elements on the page.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can close the tutorial by clicking the close button (X) in the top corner, or with the Esc key.'), "\xA0", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can also navigate to the next or previous tutorial page with the left and right arrow keys.')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null))
}, {
  anchor: '.edit-site-layout__canvas',
  verticalplacement: 'top',
  horizontalplacement: 'none',
  offsetX: 40,
  offsetY: 40,
  highlight: false,
  highlightborder: true,
  showArrow: false,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The site preview')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The main content of the Site Editor entry screen is a preview of your site.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The preview changes depending on which template or page you have selected.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clicking anywhere on the preview will open the template and make it available for editing. This feature is disabled during this step of the tutorial.')))
}, {
  anchor: '.edit-site-layout__sidebar-region',
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 10,
  highlight: true,
  showArrow: true,
  arrowPosition: 'left-middle',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The Siter Editor Menu')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can use the menu to navigate to different settings screens.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Positioned at the top, you will find shortcuts and a button that opens the Command Palette.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Below the menu, there is a status area where you will be notified if you have unsaved changes.')))
}, {
  anchor: '.edit-site-layout__view-mode-toggle',
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: 10,
  offsetY: 10,
  highlight: true,
  showArrow: true,
  arrowPosition: 'top-left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The Dashboard link')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The first link in the top corner of the screen takes you back to the Dashboard. Look for your site logo or the WordPress logo: <InserterIconImage />.'), {
    InserterIconImage: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('WordPress logo'),
      src: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-2 -2 24 24' fill='%23333' width='24' height='24'><path d='M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z' /></svg>"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Depending on which page you are on, the link may also open the Site Editor entry page.')))
}, {
  anchor: '.edit-site-site-hub__site-title',
  verticalplacement: 'bottom',
  horizontalplacement: 'left',
  offsetX: 0,
  offsetY: 20,
  highlight: true,
  showArrow: true,
  arrowPosition: 'top-left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Site title')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This is your site title.')))
}, {
  anchor: '.edit-site-site-hub__site-view-link',
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: -4,
  offsetY: 20,
  highlight: true,
  showArrow: true,
  arrowPosition: 'top-left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shortcut to the front of your site')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Next to the site title is a link that opens the front of your site in a new window.')))
}, {
  anchor: '.edit-site-site-hub_toggle-command-center',
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: -4,
  offsetY: 20,
  highlight: true,
  showArrow: true,
  arrowPosition: 'top-left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Command Palette')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A command is a shortcut that you can use to perform common actions, such as opening or creating new posts and pages.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The button with the maginfying glass opens the Command Palette.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can also open the Command Palette by pressing Command/Ctrl + K.')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Go ahead and open the Command Palette and try it out by typing "view site" in the search field:')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_command_palette_button__WEBPACK_IMPORTED_MODULE_3__.CommandPaletteButton, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://wordpress.org/documentation/article/site-editor-command-palette/",
    target: "_new"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Read more in the documentation.'))))
}, {
  anchor: '.edit-site-sidebar-button',
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: 0,
  offsetY: 10,
  highlight: true,
  showArrow: true,
  arrowPosition: 'top-left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The back button')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This button takes you back one level in the menu.')))
}, {
  anchor: '.edit-site-sidebar-navigation-item',
  nth: 0,
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 0,
  highlight: true,
  showArrow: true,
  arrowPosition: 'left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Allows you to browse and edit your menus and make changes such as adding, re-ordering or removing links and blocks.')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://wordpress.org/documentation/article/site-editor-navigation/",
    target: "_new"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Read more in the documentation.'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "/wp-admin/site-editor.php?path=%2Fnavigation",
    className: "components-button is-primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Skip ahead to the Navigation tutorial'))))
}, {
  anchor: '.edit-site-sidebar-navigation-item',
  nth: 1,
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 0,
  highlight: true,
  showArrow: true,
  arrowPosition: 'left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Styles')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Styles can change the look and feel of your site with a single setting, by switching color palettes and fonts.')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This menu provides direct access to previewing, selecting and editing your site’s style variations.')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "/wp-admin/site-editor.php?path=%2Fwp_global_styles",
    className: "components-button is-primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Skip ahead to the Styles tutorial'))))
}, {
  anchor: '.edit-site-sidebar-navigation-item',
  nth: 2,
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 0,
  highlight: true,
  showArrow: true,
  arrowPosition: 'left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pages')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit the content of your pages inside the Site Editor itself.')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://wordpress.org/documentation/article/site-editor-pages/",
    target: "_new"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Read more in the documentation.'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "/wp-admin/site-editor.php?path=%2Fpage",
    className: "components-button is-primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Skip ahead to the Page tutorial'))))
}, {
  anchor: '.edit-site-sidebar-navigation-item',
  nth: 3,
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 0,
  highlight: true,
  showArrow: true,
  arrowPosition: 'left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Templates')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Templates are used to create the layout and structure for everything that you see on the front of your site: from the front page to the single posts and the 404 page.')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Here you can manage the different layouts for your site and create new custom templates.')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "/wp-admin/site-editor.php?path=%2Fwp_template",
    className: "components-button is-primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Skip ahead to the Template tutorial'))))
}, {
  anchor: '.edit-site-sidebar-navigation-item',
  nth: 4,
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 0,
  highlight: true,
  showArrow: true,
  arrowPosition: 'left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Patterns')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Patterns are blocks grouped together to create customizable design features. For example a gallery, FAQ, or pricing table. Patterns can be added to your content or your templates.')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Template parts can be used to display the site header and site footer in your templates.')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage your synced patterns and template parts here.')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://wordpress.org/documentation/article/site-editor-patterns/",
    target: "_new"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Read more in the documentation.'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "/wp-admin/site-editor.php?path=%2Fpatterns",
    className: "components-button is-primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Skip ahead to the Pattern tutorial'))))
}, {
  anchor: '.edit-site-save-hub',
  verticalplacement: 'top',
  horizontalplacement: 'left',
  offsetX: 10,
  offsetY: -220,
  highlight: true,
  showArrow: true,
  arrowPosition: 'bottom-left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Status messages')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Status messages show information about unsaved changes that are pending review. For example changes to page content, templates or styles.'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' If the message reads "Saved" then you do not need to take action.')))
}, _next_steps__WEBPACK_IMPORTED_MODULE_4__.nextSteps];

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editorCanvasPages: function() { return /* reexport safe */ _editor_canvas_pages__WEBPACK_IMPORTED_MODULE_0__.editorCanvasPages; },
/* harmony export */   entryPages: function() { return /* reexport safe */ _entry_pages__WEBPACK_IMPORTED_MODULE_1__.entryPages; },
/* harmony export */   navigationDetailsPages: function() { return /* reexport safe */ _navigation_details_pages__WEBPACK_IMPORTED_MODULE_3__.navigationDetailsPages; },
/* harmony export */   navigationPages: function() { return /* reexport safe */ _navigation_pages__WEBPACK_IMPORTED_MODULE_2__.navigationPages; },
/* harmony export */   pagesPages: function() { return /* reexport safe */ _pages_pages__WEBPACK_IMPORTED_MODULE_4__.pagesPages; },
/* harmony export */   patternsPages: function() { return /* reexport safe */ _patterns_pages__WEBPACK_IMPORTED_MODULE_5__.patternsPages; },
/* harmony export */   stylesPages: function() { return /* reexport safe */ _styles_pages__WEBPACK_IMPORTED_MODULE_6__.stylesPages; },
/* harmony export */   templatesPages: function() { return /* reexport safe */ _templates_pages__WEBPACK_IMPORTED_MODULE_7__.templatesPages; }
/* harmony export */ });
/* harmony import */ var _editor_canvas_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-canvas-pages */ "./src/pages/editor-canvas-pages.js");
/* harmony import */ var _entry_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entry-pages */ "./src/pages/entry-pages.js");
/* harmony import */ var _navigation_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-pages */ "./src/pages/navigation-pages.js");
/* harmony import */ var _navigation_details_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation-details-pages */ "./src/pages/navigation-details-pages.js");
/* harmony import */ var _pages_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages-pages */ "./src/pages/pages-pages.js");
/* harmony import */ var _patterns_pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patterns-pages */ "./src/pages/patterns-pages.js");
/* harmony import */ var _styles_pages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles-pages */ "./src/pages/styles-pages.js");
/* harmony import */ var _templates_pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates-pages */ "./src/pages/templates-pages.js");
/**
 * Export all pages.
 */

// Not used    export * from './command-palette-pages';









/***/ }),

/***/ "./src/pages/navigation-details-pages.js":
/*!***********************************************!*\
  !*** ./src/pages/navigation-details-pages.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigationDetailsPages: function() { return /* binding */ navigationDetailsPages; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _next_steps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./next-steps */ "./src/pages/next-steps.js");

/**
 * This file contains the content for the single (details) Navigation pages in the Site Editor welcome guide.
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const navigationDetailsPages = [{
  anchor: '.edit-site-layout__sidebar-region',
  name: 'navigationDetailsPages',
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 10,
  highlight: true,
  showArrow: true,
  arrowPosition: 'left-middle',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation Details')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This panel shows the name of your menu, and a list of all its blocks.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Here you can rename, duplicate and delete your menu, and move and remove the blocks. To add new blocks you need to select the Edit option.')))
}, {
  anchor: '.edit-site-sidebar-button',
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: 0,
  offsetY: 10,
  highlight: true,
  showArrow: true,
  arrowPosition: 'top-left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The back button')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This button takes you back one level in the sidebar menu.')))
}, {
  anchor: '.edit-site-sidebar-navigation-screen__title',
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: 10,
  offsetY: 20,
  highlight: true,
  showArrow: true,
  arrowPosition: 'top-left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Menu name')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This is the name of the menu you are editing.')))
}, {
  anchor: '.sidebar-navigation__more-menu button',
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: -3,
  offsetY: 20,
  highlight: true,
  showArrow: true,
  arrowPosition: 'top-left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation Actions menu')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Under the three dot menu, also known as the actions menu, you can rename, duplicate or delete your menu.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('When you delete a menu, it is no longer visible on the front of your site.')))
}, {
  anchor: '.edit-site-sidebar-button',
  nth: 1,
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: -3,
  offsetY: 20,
  highlight: true,
  showArrow: true,
  arrowPosition: 'top-left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select the edit button (the pen icon) to open the navigation block in the editor.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Use this option to change styles or to add new blocks to your menu.')))
}, {
  anchor: '.edit-site-sidebar-navigation-screen-navigation-menus__content',
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 10,
  highlight: true,
  showArrow: true,
  arrowPosition: 'left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Menu items')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This is the list of all the blocks that you have added to your menu.')))
}, {
  anchor: '.block-editor-list-view-leaf',
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 30,
  offsetY: 0,
  highlight: true,
  showArrow: true,
  arrowPosition: 'left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Menu item')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Each menu item is a block. The icon on the left shows the block type, for example post, page, custom link, or site logo.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The text matches the link text in the menu on the front of your site. For example the page title.')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can click and hold the block to move it to another position.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Or, you can use the three dot menu to move or remove the block.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can expand submenus by clicking on the arrow before the icon.')))
}, {
  anchor: '.edit-site-save-hub',
  verticalplacement: 'top',
  horizontalplacement: 'left',
  offsetX: 10,
  offsetY: -220,
  highlight: true,
  showArrow: true,
  arrowPosition: 'bottom-left',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Status messages')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Status messages show information about unsaved changes that are pending review. For example if you have moved a menu item.'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' If the message reads "Saved" then you do not need to take action.')))
}, _next_steps__WEBPACK_IMPORTED_MODULE_2__.nextSteps];

/***/ }),

/***/ "./src/pages/navigation-pages.js":
/*!***************************************!*\
  !*** ./src/pages/navigation-pages.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigationPages: function() { return /* binding */ navigationPages; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * This file contains the content for the Navigation pages in the Site Editor welcome guide.
 */

/**
 * WordPress dependencies
 */

const navigationPages = [{
  anchor: '.edit-site-layout__sidebar-region',
  name: 'navigationPages',
  verticalplacement: 'middle',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 10,
  highlight: true,
  showArrow: true,
  arrowPosition: 'left-middle',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This panel shows a list of all the menus on your site.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your menus are separate from your navigation blocks. A menu can be used in more than one navigation block.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click on a menu to open it.')))
}];

/***/ }),

/***/ "./src/pages/next-steps.js":
/*!*********************************!*\
  !*** ./src/pages/next-steps.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nextSteps: function() { return /* binding */ nextSteps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const nextSteps = {
  anchor: '.interface-interface-skeleton__header',
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: 40,
  offsetY: 40,
  highlight: false,
  showArrow: false,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Next steps')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose your next tutorial:')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "/wp-admin/site-editor.php?path=%2Fnavigation",
    className: "components-button is-primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation')), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "/wp-admin/site-editor.php?path=%2Fwp_global_styles",
    className: "components-button is-primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Styles')), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "/wp-admin/site-editor.php?path=%2Fpage",
    className: "components-button is-primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pages')), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "/wp-admin/site-editor.php?path=%2Fwp_template",
    className: "components-button is-primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Templates')), "\xA0", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "/wp-admin/site-editor.php?path=%2Fpatterns",
    className: "components-button is-primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Patterns')), "\xA0"))
};

/***/ }),

/***/ "./src/pages/pages-pages.js":
/*!**********************************!*\
  !*** ./src/pages/pages-pages.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pagesPages: function() { return /* binding */ pagesPages; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * This file contains the content for the Pages tutorial pages in the Site Editor welcome guide.
 */

/**
 * WordPress dependencies
 */

const pagesPages = [{
  anchor: '.edit-site-layout__sidebar-region',
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 10,
  highlight: false,
  showArrow: true,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pages')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You have opened the pages settings page.')))
}];

/***/ }),

/***/ "./src/pages/patterns-pages.js":
/*!*************************************!*\
  !*** ./src/pages/patterns-pages.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   patternsPages: function() { return /* binding */ patternsPages; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * This file contains the content for the patterns tutorial pages in the Site Editor welcome guide.
 */

/**
 * WordPress dependencies
 */

const patternsPages = [{
  anchor: '.edit-site-layout__sidebar-region',
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 10,
  highlight: false,
  showArrow: true,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Patterns')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You have opened the patterns settings page.')))
}];

/***/ }),

/***/ "./src/pages/styles-pages.js":
/*!***********************************!*\
  !*** ./src/pages/styles-pages.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stylesPages: function() { return /* binding */ stylesPages; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * This file contains the content for the Styles tutorial pages in the Site Editor welcome guide.
 */

/**
 * WordPress dependencies
 */

const stylesPages = [{
  anchor: '.edit-site-layout__sidebar-region',
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 10,
  highlight: false,
  showArrow: true,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Styles')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You have opened the styles settings page.')))
}];

/***/ }),

/***/ "./src/pages/templates-pages.js":
/*!**************************************!*\
  !*** ./src/pages/templates-pages.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   templatesPages: function() { return /* binding */ templatesPages; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * This file contains the content for the templates tutorial pages in the Site Editor welcome guide.
 */

/**
 * WordPress dependencies
 */

const templatesPages = [{
  anchor: '.edit-site-layout__sidebar-region',
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 10,
  highlight: false,
  showArrow: true,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Templates')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You have opened the template settings page.')))
}];

/***/ }),

/***/ "./src/tutorial-footer.js":
/*!********************************!*\
  !*** ./src/tutorial-footer.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SiteEditorTutorialFooter; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-control */ "./src/page-control.js");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function SiteEditorTutorialFooter(props) {
  const {
    currentPage,
    setCurrentPage,
    pages,
    canGoBack,
    canGoForward,
    goBack,
    goForward,
    onFinish,
    resetStyles
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "site-editor-tutorial__footer"
  }, pages.length > 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_page_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currentPage: currentPage,
    numberOfPages: pages.length,
    setCurrentPage: setCurrentPage,
    resetStyles: resetStyles
  }), ",", canGoBack && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "site-editor-tutorial__back-button",
    variant: "tertiary",
    onClick: goBack
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Previous')), canGoForward && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "site-editor-tutorial__forward-button",
    variant: "primary",
    onClick: goForward
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Next')), !canGoForward && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "site-editor-tutorial__finish-button",
    variant: "primary",
    onClick: onFinish
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Finish')));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/commands":
/*!**********************************!*\
  !*** external ["wp","commands"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["commands"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksite_editor_tutorial"] = self["webpackChunksite_editor_tutorial"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map