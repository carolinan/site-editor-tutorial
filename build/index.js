/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generatebuttons.js":
/*!********************************!*\
  !*** ./src/generatebuttons.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateButtons: () => (/* binding */ generateButtons)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/**
 * Internal dependencies
 */


/**
 * Generate tutorial buttons.
 *
 * @param {Array}    Pages               - The list of tutorial pages.
 * @param {string}   screen              - The current screen.
 * @param {Function} setProcessedAnchors - Function to set processed anchors.
 * @param {Function} onButtonClick       - Function to handle button click events.
 * @return {Array} - The generated buttons.
 */
function generateButtons(Pages, screen, setProcessedAnchors, onButtonClick) {
  const tutorialList = Pages[screen];
  return tutorialList.reduce((acc, page, index) => {
    setTimeout(() => {
      let anchor = page.anchor;
      if (page.anchor.startsWith('#')) {
        anchor = document.getElementById(page.anchor.substring(1));
      } else {
        anchor = document.querySelector(page.anchor);
        if (page.nth !== undefined) {
          const nthAnchor = document.querySelectorAll(page.anchor)[page.nth];
          if (nthAnchor) {
            anchor = nthAnchor;
          }
        }
      }
      if (!anchor) {
        return;
      }
      if (page.hintType === 'border') {
        anchor.classList.add('site-editor-tutorial__hint_border');
      }
      const {
        offsetX,
        offsetY,
        hintOffsetX,
        hintOffsetY,
        label,
        hintSize
      } = page;
      const {
        top,
        left
      } = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPosition)(anchor, offsetX, offsetY, page.verticalplacement, page.horizontalplacement);
      const {
        top: hintTop,
        left: hintLeft
      } = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getPosition)(anchor, hintOffsetX, hintOffsetY, page.verticalplacement, page.horizontalplacement);
      const buttonId = `site-editor-tutorial-button-${index}`;
      setProcessedAnchors(prevProcessedAnchors => [...prevProcessedAnchors, anchor]);
      const buttonProps = {
        id: buttonId,
        top: hintTop,
        left: hintLeft,
        size: hintSize,
        label,
        index,
        onClick(event) {
          onButtonClick(event, anchor, index, top, left);
        }
      };
      acc.push({
        id: `site-editor-tutorial-button-${index}`,
        ...buttonProps
      });
    }, 1000);
    return acc;
  }, []);
}

/***/ }),

/***/ "./src/hint.js":
/*!*********************!*\
  !*** ./src/hint.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hint: () => (/* binding */ Hint)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

function Hint({
  id,
  top,
  left,
  size,
  label,
  onClick
}) {
  const style = {
    position: 'absolute',
    top,
    left,
    width: `${size}px`,
    height: `${size}px`,
    cursor: 'pointer'
  };
  // The button is not focusable because it is printed at the bottom of the page,
  // without context for keyboard users.
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    id: id,
    className: "site-editor-tutorial__hint",
    style: style,
    label: label,
    onClick: onClick,
    tabIndex: -1
  });
}

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageControlIcon: () => (/* binding */ PageControlIcon)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/router */ "@wordpress/router");
/* harmony import */ var _wordpress_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _unlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unlock */ "./src/unlock.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _tutorials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tutorials */ "./src/tutorials/index.js");
/* harmony import */ var _tutorial_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tutorial-modal */ "./src/tutorial-modal.js");
/* harmony import */ var _hint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hint */ "./src/hint.js");
/* harmony import */ var _page_selector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-selector */ "./src/page-selector.js");
/* harmony import */ var _generatebuttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./generatebuttons */ "./src/generatebuttons.js");

/**
 * WordPress dependencies
 */




// Note: Unlocking private API's require using the current version of Gutenberg!
// See src/unlock.js for more information.


const {
  useLocation,
  useHistory
} = (0,_unlock__WEBPACK_IMPORTED_MODULE_5__.unlock)(_wordpress_router__WEBPACK_IMPORTED_MODULE_4__.privateApis);

/**
 * Internal dependencies
 */






function SiteEditorTutorial() {
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const location = useLocation();
  const history = useHistory();
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [currentPage, setCurrentPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [activeAnchor, setActiveAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('.edit-site-layout__content');
  const [modalPosition, setModalPosition] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    top: 20,
    left: 400
  });
  const [buttons, setButtons] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [processedAnchors, setProcessedAnchors] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [currentHref, setCurrentHref] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(window.location.href);
  const {
    records,
    isResolving
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityRecords)('postType', 'wp_navigation');
  const {
    tutorials,
    screen
  } = (0,_page_selector__WEBPACK_IMPORTED_MODULE_10__.SelectPages)(_tutorials__WEBPACK_IMPORTED_MODULE_7__, records, isResolving) || {};
  const page = tutorials ? tutorials[currentPage] : null;
  const localStorageState = () => {
    try {
      const savedState = localStorage.getItem('site-editor-tutorial-shown');
      if (savedState) {
        return JSON.parse(savedState);
      }
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return {};
    }
  };

  /* Use local storage to keep track of which tutorial pages have been shown. */
  const [shownPages, setShownPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(localStorageState);

  /**
   * Close the modal when the user uses the close button, or clicks outside the modal.
   * Register that the modal has been shown, so that it doesn't show again,
   * and remove the button that activates the modal.
   */
  const onFinish = () => {
    // Remove the border CSS class from the active anchor element
    if (activeAnchor) {
      const anchorElement = typeof activeAnchor === 'string' ? document.querySelector(activeAnchor) : activeAnchor;
      if (anchorElement) {
        anchorElement.classList.remove('site-editor-tutorial__hint_border');
      }
    }

    // Wihout these two resets, the modal does not close.
    setIsOpen(false);
    setActiveAnchor(null);

    // Register that the modal has been shown, so that it doesn't show again.
    const newShownPages = {
      ...shownPages,
      [currentPage]: true
    };
    try {
      localStorage.setItem('site-editor-tutorial-shown', JSON.stringify(newShownPages));
    } catch (error) {
      console.error('Error writing to localStorage', error);
    }
    setShownPages(newShownPages);
    const buttonId = `site-editor-tutorial-button-${currentPage}`;
    const button = document.getElementById(buttonId);
    if (button) {
      document.getElementById(buttonId).style.display = 'none';
    }
  };

  // When the user clicks on a button, open the modal.
  const onButtonClick = (event, anchor, index, top, left) => {
    event.stopPropagation();
    setActiveAnchor(anchor);
    setCurrentPage(index);
    setIsOpen(true);
    setModalPosition({
      top,
      left
    });
  };

  // Move focus to the anchor when the modal is closed.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const focusAnchor = () => {
      // If the anchor is for the first modal page, do not move focus.
      if (activeAnchor !== null && activeAnchor !== '.edit-site-layout__content') {
        activeAnchor.focus();
      }
    };
    if (!isOpen) {
      focusAnchor();
    }
    return () => {
      focusAnchor();
    };
  }, [isOpen, activeAnchor]);

  // Generate the first set of buttons.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (buttons.length === 0) {
      setButtons((0,_generatebuttons__WEBPACK_IMPORTED_MODULE_11__.generateButtons)(_tutorials__WEBPACK_IMPORTED_MODULE_7__, screen, setProcessedAnchors, onButtonClick));
    }
  }, []);

  // If the href changes, generate new buttons for the correct page.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const checkHrefChangeOnClick = event => {
      const isClassFoundInParents = (target, className) => {
        while (target && target !== document) {
          if (target.classList.contains(className)) {
            return true;
          }
          target = target.parentNode;
        }
        return false;
      };

      // Check if the clicked element is inside the tutorial modal.
      if (isClassFoundInParents(event.target, 'site-editor-tutorial')) {
        return;
      }
      setTimeout(() => {
        const newHref = window.location.href;
        if (newHref !== currentHref) {
          setCurrentHref(newHref);
          onFinish();
          setButtons((0,_generatebuttons__WEBPACK_IMPORTED_MODULE_11__.generateButtons)(_tutorials__WEBPACK_IMPORTED_MODULE_7__, screen, setProcessedAnchors, onButtonClick));
        }
      }, 0);
    };
    document.addEventListener('click', checkHrefChangeOnClick);
    return () => document.removeEventListener('click', checkHrefChangeOnClick);
  }, [currentHref, location]);

  // If the iframe is clicked, generate new buttons for the correct page.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleBlur = () => {
      setTimeout(() => {
        // Use setTimeout to push to the end of the event queue
        const iframe = document.querySelector('iframe.edit-site-visual-editor__editor-canvas, iframe.edit-site-style-book__iframe, iframe.edit-site-visual-editor__editor-canvas');
        if (document.activeElement === iframe) {
          const newHref = location.pathname + location.search + '?canvas=edit';
          setTimeout(() => {
            if (newHref !== currentHref) {
              setCurrentHref(newHref);
              onFinish();
              setButtons((0,_generatebuttons__WEBPACK_IMPORTED_MODULE_11__.generateButtons)(_tutorials__WEBPACK_IMPORTED_MODULE_7__, screen, setProcessedAnchors, onButtonClick));
            }
          }, 0);
        }
      }, 0);
    };
    window.addEventListener('blur', handleBlur);
    return () => window.removeEventListener('blur', handleBlur);
  }, [currentHref, history, location.pathname, location.search]);

  // Return early if the tutorial page is not found.
  if (!page) {
    return;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, buttons.map(buttonProps => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_hint__WEBPACK_IMPORTED_MODULE_9__.Hint, {
      key: buttonProps.id,
      ...buttonProps
    });
  }), activeAnchor && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tutorial_modal__WEBPACK_IMPORTED_MODULE_8__.TutorialModal, {
    page: page,
    onFinish: onFinish,
    modalPosition: modalPosition,
    setModalPosition: setModalPosition,
    ref: ref,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    tutorials: tutorials
  }));
}
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__.registerPlugin)('site-editor-tutorial-plugin', {
  render: SiteEditorTutorial,
  icon: null
});

/***/ }),

/***/ "./src/modal-footer.js":
/*!*****************************!*\
  !*** ./src/modal-footer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteEditorTutorialFooter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-control */ "./src/page-control.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils.js");

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
    onFinish,
    setModalPosition
  } = props;
  const canGoBack = currentPage > 0;
  const canGoForward = currentPage < pages.length - 1;
  const checkforAnchor = newPage => {
    let anchor = pages[newPage].anchor;
    if (pages[newPage].anchor.startsWith('#')) {
      anchor = document.getElementById(pages[newPage].anchor.substring(1));
    } else {
      anchor = document.querySelector(pages[newPage].anchor);
      if (pages[newPage].nth !== undefined) {
        const nthAnchor = document.querySelectorAll(pages[newPage].anchor)[pages[newPage].nth];
        if (nthAnchor) {
          anchor = nthAnchor;
        }
      }
    }
    return anchor;
  };
  const goBack = () => {
    if (canGoBack) {
      setCurrentPage(prevPage => {
        const newPage = prevPage - 1;
        if (!pages[newPage].anchor) {
          return newPage;
        }
        const anchor = checkforAnchor(newPage);
        if (!anchor) {
          return newPage;
        }
        const {
          top,
          left
        } = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getPosition)(anchor, pages[newPage].offsetX, pages[newPage].offsetY, pages[newPage].verticalplacement, pages[newPage].horizontalplacement);
        setModalPosition({
          top,
          left
        });
        return newPage;
      });
    }
  };
  const goForward = () => {
    if (canGoForward) {
      setCurrentPage(prevPage => {
        const newPage = prevPage + 1;
        if (!pages[newPage].anchor) {
          return newPage;
        }
        const anchor = checkforAnchor(newPage);
        if (!anchor) {
          return newPage;
        }
        const {
          top,
          left
        } = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getPosition)(anchor, pages[newPage].offsetX, pages[newPage].offsetY, pages[newPage].verticalplacement, pages[newPage].horizontalplacement);
        setModalPosition({
          top,
          left
        });
        return newPage;
      });
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "site-editor-tutorial__footer"
  }, pages.length > 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_page_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pages: pages,
    currentPage: currentPage,
    numberOfPages: pages.length,
    setCurrentPage: setCurrentPage,
    checkforAnchor: checkforAnchor,
    setModalPosition: setModalPosition,
    getPosition: _utils__WEBPACK_IMPORTED_MODULE_4__.getPosition
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

/***/ "./src/page-control.js":
/*!*****************************!*\
  !*** ./src/page-control.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageControl)
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
    pages,
    currentPage,
    numberOfPages,
    setCurrentPage,
    getPosition,
    setModalPosition,
    checkforAnchor
  } = props;
  const onClick = page => {
    if (!pages[page].anchor) {
      setCurrentPage(page);
    } else {
      const anchor = checkforAnchor(page);
      if (!anchor) {
        // TO DO: this tutorial page should be skipped,
        // It should not be part of the array below!
        setCurrentPage(page);
        return;
      }
      const {
        top,
        left
      } = getPosition(anchor, pages[page].offsetX, pages[page].offsetY, pages[page].verticalplacement, pages[page].horizontalplacement);
      setModalPosition({
        top,
        left
      });
      setCurrentPage(page);
    }
  };
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
    onClick: () => onClick(page)
  }))));
}

/***/ }),

/***/ "./src/page-selector.js":
/*!******************************!*\
  !*** ./src/page-selector.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectPages: () => (/* binding */ SelectPages)
/* harmony export */ });
/* harmony import */ var _wordpress_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/router */ "@wordpress/router");
/* harmony import */ var _wordpress_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _unlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unlock */ "./src/unlock.js");
/**
 * WordPress dependencies
 */
// Note: Unlocking private API's require using the current version of Gutenberg!
// See src/unlock.js for more information.


const {
  useLocation
} = (0,_unlock__WEBPACK_IMPORTED_MODULE_1__.unlock)(_wordpress_router__WEBPACK_IMPORTED_MODULE_0__.privateApis);

// Select the tutorial page based on the current location.
const SelectPages = (Pages, records) => {
  let screen = '';
  let tutorials = '';

  // Get the current location
  const location = useLocation();
  const search = location.search;
  const params = new URLSearchParams(search);
  const postID = params.get('postId');
  const canvas = params.get('canvas');
  const postType = params.get('postType');
  let path = params.get('path');

  // Currently unused, but likely to be needed when more tutorials pages are added.
  // const pathname = location.pathname;

  if (!path && !canvas && !postID && !postType) {
    //console.log(' page-selector.js: No path or canvas');
    path = 'Entry';
  }
  switch (path || postType) {
    case 'wp_navigation':
      // If postID is set, or there is only one menu,
      // show the tutorial for the navigation details.
      if (postID || Array.isArray(records) && records.length === 1) {
        tutorials = Pages.NavigationDetails;
        screen = 'NavigationDetails';
      } else {
        // Otherwise, show the tutorial for the navigation screen, with the list of menus.
        tutorials = Pages.Navigation;
        screen = 'Navigation';
      }
      break;
    case '/wp_global_styles':
      /**
       * /wp_global_styles is the page with the left hand menu where you preview style variations.
       */
      tutorials = Pages.Styles;
      screen = 'Styles';
      break;
    case 'page':
      // /page is the page previews and the site editor menu with the list of pages.
      // Note that there is no "page details" tutorial because it is being removed from the site editor.
      tutorials = Pages.Pages;
      screen = 'Pages';
      break;
    case 'wp_template':
      // /wp_templateedit is the editor page for a template.
      // /wp_template is the preview page for a template.
      tutorials = Pages.Templates;
      screen = 'Templates';
      break;
    case 'wp_block':
      tutorials = Pages.Patterns;
      screen = 'Patterns';
      break;
    case 'edit':
      tutorials = Pages.editorCanvas;
      screen = 'editorCanvas';
      break;
    case 'Entry':
      tutorials = Pages.Entry;
      screen = 'Entry';
  }
  return {
    tutorials,
    screen
  };
};

/***/ }),

/***/ "./src/tutorial-modal.js":
/*!*******************************!*\
  !*** ./src/tutorial-modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TutorialModal: () => (/* binding */ TutorialModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modal_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-footer */ "./src/modal-footer.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * The tutorial modal component, which displays the tutorial content.
 * See https://developer.wordpress.org/block-editor/reference-guides/components/modal/
 */
function TutorialModal(props) {
  const {
    modalPosition,
    setModalPosition,
    page,
    onFinish,
    ref,
    tutorials,
    currentPage,
    setCurrentPage
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('site-editor-tutorial', {
      'site-editor-tutorial-arrow': page.showArrow,
      [`site-editor-tutorial-arrow-${page.arrowPosition}`]: page.showArrow
    }),
    shouldCloseOnEsc: true,
    shouldCloseOnClickOutside: true,
    style: {
      position: 'absolute',
      top: modalPosition.top,
      left: modalPosition.left,
      opacity: 1,
      display: 'block'
    },
    contentLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Site Editor Tutorial'),
    isDismissible: true,
    onRequestClose: onFinish,
    ref: ref
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "site-editor-tutorial__container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "site-editor-tutorial__page"
  }, page.image, page.content), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_modal_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pages: tutorials,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    onFinish: onFinish,
    setModalPosition: setModalPosition
  })));
}

/***/ }),

/***/ "./src/tutorials/entry.js":
/*!********************************!*\
  !*** ./src/tutorials/entry.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Entry: () => (/* binding */ Entry)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");

/**
 * This file contains the content for the initial tutorial pages.
 * Example: /wp-admin/site-editor.php
 *
 * The first item is displayed automatically if the page is the point of entry,
 * or when the page is refreshed.
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

const Entry = [{
  anchor: '.edit-site-layout__content',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Site Editor tutorial intro'),
  showArrow: false,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Welcome to the Site Editor Tutorial')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('How does the Site Editor tutorial work?')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The Site Editor is split into several setting screens and panels.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('With this guide, you can navigate freely between the Site Editor screens and read helpful hints and tips to get started.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click on the purple hints to find out more about the interface or a feature.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can close the tips with the Esc key, or use the close button.')))
}, {
  anchor: '.edit-site-layout__content',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Site Editor tutorial intro'),
  showArrow: false,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('What is the Site Editor?')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The Site Editor is a WordPress feature where you can view, edit and create templates and patterns that you can use to change the design and layout of your site.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Here you can choose between premade designs, add custom color palettes and fonts.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://wordpress.org/documentation/article/site-editor/",
    target: "_new"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Read more about the Site Editor in the official documentation.'))))
}, {
  anchor: '.edit-site-layout__canvas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The site preview'),
  verticalplacement: 'top',
  horizontalplacement: 'none',
  offsetX: 40,
  offsetY: 40,
  showArrow: false,
  hintType: 'button',
  hintOffsetX: 22,
  hintOffsetY: 100,
  hintSize: 40,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The site preview')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The main content of the Site Editor entry screen is a live preview that matches the front of your site.'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' You can use it to preview your homepage, pages, templates, menus, and template parts.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clicking anywhere on the preview will open it in the editor where you can customize your design and add new blocks and patterns.')))
}, {
  anchor: '.edit-site-layout__view-mode-toggle',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The Dashboard link'),
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: 10,
  offsetY: 10,
  showArrow: true,
  arrowPosition: 'top-left',
  hintType: 'button',
  hintOffsetX: 22,
  hintOffsetY: -10,
  hintSize: 18,
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
  anchor: '.edit-site-site-hub__title a',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shortcut to the front of your site'),
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: -4,
  offsetY: 20,
  showArrow: true,
  arrowPosition: 'top-left',
  hintType: 'button',
  hintOffsetX: 6,
  hintOffsetY: 0,
  hintSize: 18,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Shortcut to the front of your site')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clicking on the site title opens your site in a new window.')))
}, {
  anchor: '.edit-site-site-hub_toggle-command-center',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Command Palette'),
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: -4,
  offsetY: 20,
  showArrow: true,
  arrowPosition: 'top-left',
  hintType: 'button',
  hintOffsetX: 7,
  hintOffsetY: 0,
  hintSize: 18,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Command Palette')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A command is a shortcut that you can use to perform common actions, such as opening or creating new posts and pages.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The button with the maginfying glass opens the Command Palette.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can also open the Command Palette by pressing Command/Ctrl + K.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Go ahead and open the Command Palette and try it out by typing "view site" in the search field:'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_js__WEBPACK_IMPORTED_MODULE_3__.CommandPaletteButton, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://wordpress.org/documentation/article/site-editor-command-palette/",
    target: "_new"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Read more in the Command Palette documentation.'))))
}, {
  anchor: '.edit-site-sidebar-button',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The back button'),
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: 0,
  offsetY: 10,
  showArrow: true,
  arrowPosition: 'top-left',
  hintType: 'button',
  hintOffsetX: 14,
  hintOffsetY: -5,
  hintSize: 12,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The back button')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This button takes you back one level in the menu.')))
}, {
  anchor: '#navigation-navigation-item',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation'),
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 0,
  showArrow: true,
  arrowPosition: 'left',
  hintType: 'button',
  hintOffsetX: -50,
  hintOffsetY: 10,
  hintSize: 16,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This menu item takes you to the Navigation screen where you can browse and edit your menus.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('- Menus decide which links and blocks should show in your menu. A menu can be used inside one or more navigation blocks.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('- The navigation block decides where and how your menu is displayed. For example, you can place a navigation block in your header, assign your menu, and change the colors, font size and font family.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://wordpress.org/documentation/article/site-editor-navigation/",
    target: "_new"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Read more about the Site Editor Navigation in the documentation.'))))
}, {
  anchor: '#global-styles-navigation-item',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Styles'),
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: -80,
  showArrow: true,
  arrowPosition: 'left-middle',
  hintType: 'button',
  hintOffsetX: -50,
  hintOffsetY: 10,
  hintSize: 16,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Styles')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Styles can change the look and feel of your site with a single setting, by switching color palettes and fonts.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pre-made style variations are optional and included in your block theme. Because of that, the styles and the number of options to choose from varies from theme to theme.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This menu item provides access to previewing, selecting and editing your site’s style variations.')))
}, {
  anchor: '#page-navigation-item',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pages'),
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 0,
  showArrow: true,
  arrowPosition: 'left',
  hintType: 'button',
  hintOffsetX: -50,
  hintOffsetY: 10,
  hintSize: 16,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pages')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Here you can create new pages or edit the content of your existing pages inside the Site Editor itself.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can preview your page with a page template to see what the page will look like on the front of your site.'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' If your theme has included optional templates, you can also swap your page template and choose a different design.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://wordpress.org/documentation/article/site-editor-pages/",
    target: "_new"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Read more about the Site Editor Pages in the documentation.'))))
}, {
  anchor: '#template-navigation-item',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Templates'),
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 0,
  showArrow: true,
  arrowPosition: 'left',
  hintType: 'button',
  hintOffsetX: -50,
  hintOffsetY: 10,
  hintSize: 16,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Templates')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Templates are used to create the layout and structure for everything that you see on the front of your site: from the front page to the single posts and the 404 page.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Here you can create new custom templates and manage the different templates for your site.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can filter and sort your existing templates, reset changes to theme templates, and rename and delete your custom templates.')))
}, {
  anchor: '#patterns-navigation-item',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Patterns'),
  verticalplacement: 'middletop',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: -80,
  showArrow: true,
  arrowPosition: 'left-middle',
  hintType: 'button',
  hintOffsetX: -50,
  hintOffsetY: 10,
  hintSize: 16,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Patterns')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('From this menu you can access and manage your patterns and template parts.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Patterns are blocks that are grouped together to create page sections and other resusable design features.'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' Here you can preview all your patterns by category, search for patterns, and create new patterns.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Template parts are most commonly used to display your site headers and footers.'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' By using a header template part, you can edit and update the header of all your templates from one location.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Go here if you want to preview your header and footer designs, or create new ones from scratch.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://wordpress.org/documentation/article/site-editor-patterns/",
    target: "_new"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Read more in the documentation.'))))
}, {
  anchor: '.edit-site-save-hub',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Status messages'),
  verticalplacement: 'top',
  horizontalplacement: 'left',
  offsetX: 10,
  offsetY: -220,
  showArrow: true,
  arrowPosition: 'bottom-left',
  hintType: 'button',
  hintOffsetX: 20,
  hintOffsetY: -10,
  hintSize: 16,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Status messages')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Status messages show information about unsaved changes that are pending review. For example changes to page content, templates or styles.'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' If the message reads "Saved" then you do not need to take action.')))
}];

/***/ }),

/***/ "./src/tutorials/index.js":
/*!********************************!*\
  !*** ./src/tutorials/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Entry: () => (/* reexport safe */ _entry__WEBPACK_IMPORTED_MODULE_0__.Entry),
/* harmony export */   Navigation: () => (/* reexport safe */ _navigation__WEBPACK_IMPORTED_MODULE_1__.Navigation),
/* harmony export */   NavigationDetails: () => (/* reexport safe */ _navigation_details__WEBPACK_IMPORTED_MODULE_2__.NavigationDetails),
/* harmony export */   Pages: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_4__.Pages),
/* harmony export */   Styles: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_3__.Styles),
/* harmony export */   Templates: () => (/* reexport safe */ _templates__WEBPACK_IMPORTED_MODULE_5__.Templates)
/* harmony export */ });
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entry */ "./src/tutorials/entry.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ "./src/tutorials/navigation.js");
/* harmony import */ var _navigation_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-details */ "./src/tutorials/navigation-details.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/tutorials/styles.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages */ "./src/tutorials/pages.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates */ "./src/tutorials/templates.js");
/**
 * Export all tutorial pages.
 */








/***/ }),

/***/ "./src/tutorials/navigation-details.js":
/*!*********************************************!*\
  !*** ./src/tutorials/navigation-details.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationDetails: () => (/* binding */ NavigationDetails)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * This file contains the content for the Navigation details screen in the Site Editor,
 * the screen with the information about the specific menu.
 * This URL contains the post id for the menu.
 * Example: wp-admin/site-editor.php?postId=4&path=%2Fnavigation
 *
 * The first item is displayed automatically if the page is the point of entry,
 * or when the page is refreshed.
 *
 * TODO: When user deletes all menus, WP creates a placeholder menu that does not have a title,
 * and the hint about the menu name is displayed, when it should not.
 * See if there is another anchor that could be used.
 */

/**
 * WordPress dependencies
 */

const NavigationDetails = [{
  anchor: '.edit-site-sidebar-navigation-screen__content',
  // Required
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation Details'),
  name: 'navigationDetailsPages',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation Details')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This screen shows the name of your chosen menu, and a list of all blocks that you have placed inside it.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Here you can rename, duplicate and delete your menu, and move and remove the blocks. To add new blocks you need to select the Edit option.')))
}, {
  anchor: '.edit-site-sidebar-navigation-screen__title',
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: -10,
  offsetY: 10,
  showArrow: true,
  arrowPosition: 'top-left',
  hintType: 'button',
  hintOffsetX: 0,
  hintOffsetY: 0,
  hintSize: 16,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Menu name')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This is the name of the menu you are editing.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('To rename the menu, select the option in the Actions menu.')))
}, {
  anchor: '.sidebar-navigation__more-menu button',
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: 0,
  offsetY: 20,
  showArrow: true,
  arrowPosition: 'top-left',
  hintType: 'button',
  hintOffsetX: 10,
  hintOffsetY: 0,
  hintSize: 16,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation Actions menu')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Under the three dot menu, also known as the Actions menu, you can rename, duplicate or delete your menu.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Here you can also access the Edit option, which opens the menu in the editor. From there, you can add new blocks to your menu.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('When you delete a menu, it is no longer visible on the front of your site.')))
}, {
  anchor: '.block-editor-list-view-leaf',
  verticalplacement: 'middle',
  horizontalplacement: 'right',
  offsetX: 30,
  offsetY: -80,
  showArrow: true,
  arrowPosition: 'left-middle',
  hintType: 'button',
  hintOffsetX: 0,
  hintOffsetY: 0,
  hintSize: 40,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Menu items')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Each menu item is a block. The icon on the left shows the block type, for example post, page, page list, custom link, or site logo.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('An arrow icon before the block indicates that the block has a submenu. Clicking on the arrow expands the submenu.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can click and hold to drag the block to move it to another position in the menu.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Each block has an Options menu where you can move or remove the block. Page blocks also have links that opens the page in the Site Editor.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('To see the Options menu, you must first close this tutorial window and hover over the block.')))
}];

/***/ }),

/***/ "./src/tutorials/navigation.js":
/*!*************************************!*\
  !*** ./src/tutorials/navigation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Navigation: () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * This file contains the content for the Navigation screen in the Site Editor,
 * the screen with the list of menus.
 * Example: wp-admin/site-editor.php?postType=wp_navigation
 *
 * The first item is displayed automatically if the page is the point of entry,
 * or when the page is refreshed.
 */

/**
 * WordPress dependencies
 */

const Navigation = [{
  anchor: '.edit-site-sidebar-navigation-screen__content',
  // Required
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation'),
  name: 'Navigation',
  showArrow: false,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The Navigation screen is where you can browse and edit your menus.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('- Menus decide which links and blocks should show in your menu. A menu can be used inside one or more navigation blocks.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('- The navigation block decides where and how your menu is displayed. For example, you can place a navigation block in your header, assign your menu, and change the colors, font size and font family.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://wordpress.org/documentation/article/site-editor-navigation/",
    target: "_new"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Read more about the Site Editor Navigation in the documentation.'))))
}, {
  anchor: '.edit-site-sidebar-navigation-screen__content',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation'),
  verticalplacement: 'middle',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 0,
  showArrow: true,
  arrowPosition: 'left',
  hintType: 'border',
  hintOffsetX: -50,
  hintOffsetY: 10,
  hintSize: 16,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This panel shows a list of all the menus on your site.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click on a menu to open it.')))
}];

/***/ }),

/***/ "./src/tutorials/pages.js":
/*!********************************!*\
  !*** ./src/tutorials/pages.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pages: () => (/* binding */ Pages)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * This file contains the content for the Pages screen in the Site Editor,
 * the screen with the list of pages and related options.
 * Example: wp-admin/site-editor.php?postType=page
 *
 * The first item is displayed automatically if the page is the point of entry,
 * or when the page is refreshed.
 *
 * TODO: The documentation on .org should be updated to match the 6.6 release.
 */

/**
 * WordPress dependencies
 */

const Pages = [{
  anchor: '.edit-site-layout__content',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pages'),
  name: 'Pages',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage Pages')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Here you can see all your pages, create new pages, trash, rename and duplicate pages.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can also filter pages by status, author, or search for a specific page.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://wordpress.org/documentation/article/site-editor-pages/",
    target: "_new"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Read more about the Site Editor Pages in the documentation.'))))
}, {
  anchor: '.edit-site-sidebar-navigation-screen__content',
  verticalplacement: 'middle',
  horizontalplacement: 'right',
  offsetX: 20,
  offsetY: -14,
  showArrow: true,
  arrowPosition: 'left',
  hintType: 'border',
  hintOffsetX: 0,
  hintOffsetY: 0,
  hintSize: 16,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Page filters')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This panel has quick links for displaying your pages according to three default filters: All pages, drafts, and trashed pages.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can select one of the filters in the panel, or, you can select "All pages" and add your own custom filter.')))
}, {
  // This only shows when layout: List is used.
  anchor: '.dataviews-view-list',
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 10,
  offsetY: 0,
  showArrow: true,
  arrowPosition: 'left',
  hintType: 'border',
  hintOffsetX: -10,
  hintOffsetY: -10,
  hintSize: 40,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage pages: List Layout')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This is the list of pages, sorted according to your filter.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Close this tutorial window and hover over the page title to see the page options:'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('- Click on the page title or the pen icon to open the page in the editor.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('- Click on the Actions menu (the three dots menu) to acess options to duplicate, rename or trash the page.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('- Select "View" in the Actions menu to view the page on the front of the site. The page opens in a new tab.')))
}, {
  // This only shows when layout: Grid is used.
  anchor: '.dataviews-view-grid',
  verticalplacement: 'top',
  horizontalplacement: 'none',
  offsetX: 330,
  offsetY: 0,
  showArrow: true,
  arrowPosition: 'left',
  hintType: 'border',
  hintOffsetX: 300,
  hintOffsetY: 0,
  hintSize: 40,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage pages: Grid Layout')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This grid shows your pages, sorted according to your filter.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('If your page has a featured image, the image is shown in the grid.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Each page has an options menu (the three dot menu) where you can edit, view, duplicate, rename, and trash the page.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The edit option opens the page in the editor where you can make changes. While the view option opens the page on the front of site, in a new browser tab.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Each page also has a check box before the title, by checking the boxes, you can trash multiple pages at once.')))
}, {
  // This only shows when layout: Table is used.
  anchor: '.dataviews-view-table',
  verticalplacement: 'top',
  horizontalplacement: 'none',
  offsetX: 330,
  offsetY: 0,
  showArrow: true,
  arrowPosition: 'left',
  hintType: 'border',
  hintOffsetX: 300,
  hintOffsetY: 0,
  hintSize: 40,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage pages: Table Layout')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This is the list of pages, sorted according to your filter.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Close this tutorial window and hover over the page title to see the page options:'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('- Click on the page title or the pen icon to open the page in the editor.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('- Click on the Actions menu (the three dots menu) to acess options to duplicate, rename or trash the page.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('- Select "View" in the Actions menu to view the page on the front of the site. The page opens in a new tab.')))
}, {
  // This only shows when layout: List is used.
  anchor: '.edit-site-visual-editor ',
  verticalplacement: 'middle',
  horizontalplacement: 'none',
  offsetX: 10,
  offsetY: 10,
  hintType: 'button',
  hintOffsetX: 10,
  hintOffsetY: 10,
  hintSize: 40,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Page preview')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This frame is a preview of your page. The preview is only available when you are using the list layout.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click anywhere in the preview to open the page in the editor, where you can make changes to your content.')))
}, {
  anchor: '.dataviews-filters__view-actions button',
  verticalplacement: 'top',
  horizontalplacement: 'right',
  offsetX: 16,
  offsetY: -12,
  showArrow: true,
  arrowPosition: 'left',
  hintType: 'button',
  hintOffsetX: 0,
  hintOffsetY: 0,
  hintSize: 14,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Filters')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add a custom filter here to filter pages by author or status.')))
}, {
  //anchor: '.dataviews-filters__view-actions button',
  //nth: 2, //The first button is the filter, the second is the actions.
  anchor: '#:r3:',
  verticalplacement: 'bottom',
  horizontalplacement: 'left',
  offsetX: -540,
  offsetY: 20,
  showArrow: true,
  arrowPosition: 'top-right',
  hintType: 'button',
  hintOffsetX: 0,
  hintOffsetY: 0,
  hintSize: 16,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('View Options')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('With the view options you can customize how you want to display the page information.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('You can choose between a list, table or a grid layout, decide how many pages to show show at the time, and hide the author or publishing date, ')))
}, {
  anchor: '.dataviews-filters__view-actions button',
  nth: 2,
  // On the grid and table layout, the bulk edit is the second button.
  verticalplacement: 'bottom',
  horizontalplacement: 'left',
  offsetX: -540,
  offsetY: 20,
  showArrow: true,
  arrowPosition: 'top-right',
  hintType: 'button',
  hintOffsetX: 0,
  hintOffsetY: 0,
  hintSize: 16,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bulk edit')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('When you have selected mulitple pages you can use bulk edit to trash them.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('If your pages are already trashed, you can use the bulk edito to restore them or delete them permanently.')))
}];

/***/ }),

/***/ "./src/tutorials/styles.js":
/*!*********************************!*\
  !*** ./src/tutorials/styles.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Styles: () => (/* binding */ Styles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * This file contains the content for the Styles screen in the Site Editor,
 * the screen with the list of global style variations.
 * Example: wp-admin/site-editor.php?path=%2Fwp_global_styles
 *
 * The first item is displayed automatically if the page is the point of entry,
 * or when the page is refreshed.
 */

/**
 * WordPress dependencies
 */

const Styles = [{
  anchor: '.edit-site-layout__content',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Styles'),
  name: 'Styles',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Styles')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Styles can change the look and feel of your site with a single setting, by switching color palettes and fonts.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style presets are optional and included in your block theme. Because of that, the styles and the number of options to choose from varies from theme to theme.')))
}, {
  anchor: '.edit-site-sidebar-navigation-screen__actions button',
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: 0,
  offsetY: 10,
  showArrow: true,
  arrowPosition: 'top-left',
  hintType: 'button',
  hintOffsetX: 10,
  hintOffsetY: 0,
  hintSize: 14,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style Book')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The eye icon opens the Style book, a preview of what a the most common blocks will look like with a style variation applied.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click on the icon again to see the preview of the site instead.')))
}, {
  anchor: '.edit-site-sidebar-navigation-screen__actions button',
  verticalplacement: 'bottom',
  horizontalplacement: 'none',
  offsetX: 36,
  offsetY: 10,
  showArrow: true,
  arrowPosition: 'top-left',
  hintType: 'button',
  hintOffsetX: 46,
  hintOffsetY: 0,
  hintSize: 14,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Styles')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('If you click on the pen icon (Edit styles), you will close the side panel and open the Site Editor with the Style settings opened.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('That is where you can change the site wide color palette, typography, and spacing.')))
}, {
  anchor: '.edit-site-global-styles-variation-container',
  verticalplacement: 'middle',
  horizontalplacement: 'right',
  offsetX: 60,
  offsetY: -80,
  showArrow: true,
  arrowPosition: 'left-middle',
  hintType: 'button',
  hintOffsetX: 0,
  hintOffsetY: 0,
  hintSize: 40,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style Variations (presets)')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This list shows the style variations enabled for your theme.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('There are three types of style presets: General (which can change both colors, typography and spacing), Colors, and Typography. You may need to scroll to see all the presets.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click on a preset to preview it. You can combine different presets to create a uniqe style.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Next, if you have selected a style that you want to save, click on the large "Save" button at the bottom of the panel.')))
},
// This element only appears when the user has saved a style variation.
{
  anchor: '.edit-site-sidebar-navigation-screen-details-footer',
  verticalplacement: 'middle',
  horizontalplacement: 'right',
  offsetX: 20,
  offsetY: -95,
  showArrow: true,
  arrowPosition: 'left-middle',
  hintType: 'button',
  hintOffsetX: 0,
  hintOffsetY: 0,
  hintSize: 14,
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style revisions')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Here you can see when your styles were last modified.'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click on the icon with the timer to open a timeline over your style changes.')))
}];

/***/ }),

/***/ "./src/tutorials/templates.js":
/*!************************************!*\
  !*** ./src/tutorials/templates.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Templates: () => (/* binding */ Templates)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * This file contains the content for the Templates screen in the Site Editor,
 * the screen with the list of templates.
 * Example: wp-admin/site-editor.php?postType=wp_template
 *
 * The first item is displayed automatically if the page is the point of entry,
 * or when the page is refreshed.
 */

/**
 * WordPress dependencies
 */

const Templates = [{
  anchor: '.edit-site-layout__content',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Templates'),
  name: 'Templates',
  content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "edit-site-welcome-guide__heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Templates')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "edit-site-welcome-guide__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Something.')))
}];

/***/ }),

/***/ "./src/unlock.js":
/*!***********************!*\
  !*** ./src/unlock.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unlock: () => (/* binding */ unlock)
/* harmony export */ });
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/private-apis */ "@wordpress/private-apis");
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


// Unlock for Gutenberg 18.3+, May 17 2024.
const {
  unlock
} = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I know using unstable features means my theme or plugin will inevitably break in the next version of WordPress.', '@wordpress/edit-site');

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommandPaletteButton: () => (/* binding */ CommandPaletteButton),
/* harmony export */   getPosition: () => (/* binding */ getPosition),
/* harmony export */   localStorageState: () => (/* binding */ localStorageState)
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
 * WordPress dependencies
 */





// Get the position of the element,
// so that the button and modal can be positioned relative to it.
const getPosition = (anchor, offsetX, offsetY, verticalPlacement, horizontalPlacement) => {
  if (!anchor) {
    return;
  }
  const rect = anchor.getBoundingClientRect();
  const top = verticalPlacement === 'bottom' ? `${rect.bottom + window.scrollY + offsetY}px` : `${rect.top + window.scrollY + offsetY}px`;
  const left = horizontalPlacement === 'right' ? `${rect.right + window.scrollX + offsetX}px` : `${rect.left + window.scrollX + offsetX}px`;
  return {
    top,
    left
  };
};
const localStorageState = () => {
  try {
    const savedState = localStorage.getItem('site-editor-tutorial-shown');
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.error('Error reading from localStorage', error);
    return {};
  }
};

// A button that opens the command palette, used in the "Entry" tutorial page.
// See https://developer.wordpress.org/block-editor/reference-guides/packages/packages-commands/
const CommandPaletteButton = () => {
  const {
    open: openCommandCenter
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_commands__WEBPACK_IMPORTED_MODULE_3__.store);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: "is-primary",
    onClick: () => openCommandCenter()
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open Command Palette'));
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/commands":
/*!**********************************!*\
  !*** external ["wp","commands"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["commands"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/private-apis":
/*!*************************************!*\
  !*** external ["wp","privateApis"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["privateApis"];

/***/ }),

/***/ "@wordpress/router":
/*!********************************!*\
  !*** external ["wp","router"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["router"];

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
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksite_editor_tutorial"] = globalThis["webpackChunksite_editor_tutorial"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map