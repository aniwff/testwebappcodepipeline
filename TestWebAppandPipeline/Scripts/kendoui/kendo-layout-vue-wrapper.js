(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["KendoLayoutVueWrapper"] = factory(require("vue"));
	else
		root["KendoLayoutVueWrapper"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KendoSharedMethods = exports.KendoBaseInputComponent = exports.KendoBaseDatasourceComponent = exports.KendoBaseComponent = undefined;

var _kendoBaseComponent = __webpack_require__(14);

var _kendoBaseComponent2 = _interopRequireDefault(_kendoBaseComponent);

var _kendoBaseDatasourceComponent = __webpack_require__(15);

var _kendoBaseDatasourceComponent2 = _interopRequireDefault(_kendoBaseDatasourceComponent);

var _kendoBaseInputComponent = __webpack_require__(16);

var _kendoBaseInputComponent2 = _interopRequireDefault(_kendoBaseInputComponent);

var _kendoSharedMethods = __webpack_require__(17);

var _kendoSharedMethods2 = _interopRequireDefault(_kendoSharedMethods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.KendoBaseComponent = _kendoBaseComponent2.default;
exports.KendoBaseDatasourceComponent = _kendoBaseDatasourceComponent2.default;
exports.KendoBaseInputComponent = _kendoBaseInputComponent2.default;
exports.KendoSharedMethods = _kendoSharedMethods2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        scrollableDistance: {
            type: Number,
            default: undefined,
            kComposite: 'scrollable.distance'
        }
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PaneProps = __webpack_require__(31);

var _PaneProps2 = _interopRequireDefault(_PaneProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KendoSplitterPane = {
    name: 'kendo-splitter-pane',
    render: function render() {
        return null;
    },

    mixins: [_PaneProps2.default]
};

exports.default = KendoSplitterPane;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

var _KendoMenuMixin = __webpack_require__(13);

var _KendoMenuMixin2 = _interopRequireDefault(_KendoMenuMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-menu',
    mixins: [_KendoMenuMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
        return h('ul', defaultSlot);
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        animationCloseEffects: {
            type: String,
            default: undefined,
            kComposite: 'animation.close.effects'
        },
        animationCloseDuration: {
            type: Number,
            default: undefined,
            kComposite: 'animation.close.duration'
        },
        animationOpenEffects: {
            type: String,
            default: undefined,
            kComposite: 'animation.open.effects'
        },
        animationOpenDuration: {
            type: Number,
            default: undefined,
            kComposite: 'animation.open.duration'
        }
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-menu-item',
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
        return h('span', defaultSlot);
    },

    mixins: [_kendoBaseComponentsVueWrapper.KendoSharedMethods],
    props: {
        text: {
            type: String,
            default: undefined
        },
        cssClass: {
            type: String,
            default: undefined
        },
        url: {
            type: String,
            default: undefined
        },
        attr: {
            type: Object,
            default: undefined
        },
        encoded: {
            type: Boolean,
            default: undefined
        },
        content: {
            type: String,
            default: undefined
        },
        contentAttr: {
            type: Object,
            default: undefined
        },
        imageAttr: {
            type: Object,
            default: undefined
        },
        imageUrl: {
            type: String,
            default: undefined
        },
        items: {
            type: Array,
            default: undefined
        },
        spriteCssClass: {
            type: String,
            default: undefined
        },
        select: Function
    },
    mounted: function mounted() {
        this._resolveInnerChildren();
    },

    methods: {
        _resolveInnerChildren: function _resolveInnerChildren() {
            var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
            var hasItems = this.v3 ? !this.$props.items : this.$options.propsData && !this.$options.propsData['items'];
            if (hasItems && defaultSlot) {
                var items = this.resolveInnerTags('kendo-menu-item');
                this.subitems = items;
            }
        }
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

var _KendoContextMenuMixin = __webpack_require__(20);

var _KendoContextMenuMixin2 = _interopRequireDefault(_KendoContextMenuMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-contextmenu',
    mixins: [_KendoContextMenuMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
        return h('ul', defaultSlot);
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

var _KendoPanelBarMixin = __webpack_require__(23);

var _KendoPanelBarMixin2 = _interopRequireDefault(_KendoPanelBarMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-panelbar',
    mixins: [_KendoPanelBarMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
        return h('div', defaultSlot);
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-panelbar-item',
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
        return h('span', defaultSlot);
    },

    mixins: [_kendoBaseComponentsVueWrapper.KendoSharedMethods],
    props: {
        text: {
            type: String,
            default: undefined
        },
        cssClass: {
            type: String,
            default: undefined
        },
        url: {
            type: String,
            default: undefined
        },
        encoded: {
            type: Boolean,
            default: undefined
        },
        content: {
            type: String,
            default: undefined
        },
        contentUrl: {
            type: String,
            default: undefined
        },
        imageUrl: {
            type: String,
            default: undefined
        },
        items: {
            type: Array,
            default: undefined
        },
        expanded: {
            type: Boolean,
            default: undefined
        },
        spriteCssClass: {
            type: String,
            default: undefined
        }
    },
    mounted: function mounted() {
        this._resolveInnerChildren();
    },

    methods: {
        _resolveInnerChildren: function _resolveInnerChildren() {
            var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
            var hasItems = this.v3 ? !this.$props.items : this.$options.propsData && !this.$options.propsData['items'];
            if (hasItems && defaultSlot) {
                var items = this.resolveInnerTags('kendo-panelbar-item');
                this.subitems = items;
            }
        }
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

var _KendoTabStripMixin = __webpack_require__(27);

var _KendoTabStripMixin2 = _interopRequireDefault(_KendoTabStripMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-tabstrip',
    mixins: [_KendoTabStripMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
        return h('div', defaultSlot);
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

var _KendoSplitterMixin = __webpack_require__(29);

var _KendoSplitterMixin2 = _interopRequireDefault(_KendoSplitterMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-splitter',
    mixins: [_KendoSplitterMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
        return h('div', defaultSlot);
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutInstaller = exports.KendoLayoutInstaller = exports.SplitterPane = exports.KendoSplitterPane = exports.Splitter = exports.KendoSplitter = exports.TabStrip = exports.KendoTabStrip = exports.PanelBarItem = exports.KendoPanelBarItem = exports.PanelBar = exports.KendoPanelBar = exports.MenuItem = exports.KendoMenuItem = exports.ContextMenu = exports.KendoContextMenu = exports.Menu = exports.KendoMenu = undefined;

var _KendoMenu = __webpack_require__(4);

var _KendoMenu2 = _interopRequireDefault(_KendoMenu);

var _KendoMenuItem = __webpack_require__(6);

var _KendoMenuItem2 = _interopRequireDefault(_KendoMenuItem);

var _KendoContextMenu = __webpack_require__(7);

var _KendoContextMenu2 = _interopRequireDefault(_KendoContextMenu);

var _KendoPanelBar = __webpack_require__(8);

var _KendoPanelBar2 = _interopRequireDefault(_KendoPanelBar);

var _KendoPanelBarItem = __webpack_require__(9);

var _KendoPanelBarItem2 = _interopRequireDefault(_KendoPanelBarItem);

var _KendoTabStrip = __webpack_require__(10);

var _KendoTabStrip2 = _interopRequireDefault(_KendoTabStrip);

var _KendoSplitter = __webpack_require__(11);

var _KendoSplitter2 = _interopRequireDefault(_KendoSplitter);

var _KendoSplitterPane = __webpack_require__(3);

var _KendoSplitterPane2 = _interopRequireDefault(_KendoSplitterPane);

var _kendoLayoutInstaller = __webpack_require__(32);

var _kendoLayoutInstaller2 = _interopRequireDefault(_kendoLayoutInstaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.KendoMenu = _KendoMenu2.default;
exports.Menu = _KendoMenu2.default;
exports.KendoContextMenu = _KendoContextMenu2.default;
exports.ContextMenu = _KendoContextMenu2.default;
exports.KendoMenuItem = _KendoMenuItem2.default;
exports.MenuItem = _KendoMenuItem2.default;
exports.KendoPanelBar = _KendoPanelBar2.default;
exports.PanelBar = _KendoPanelBar2.default;
exports.KendoPanelBarItem = _KendoPanelBarItem2.default;
exports.PanelBarItem = _KendoPanelBarItem2.default;
exports.KendoTabStrip = _KendoTabStrip2.default;
exports.TabStrip = _KendoTabStrip2.default;
exports.KendoSplitter = _KendoSplitter2.default;
exports.Splitter = _KendoSplitter2.default;
exports.KendoSplitterPane = _KendoSplitterPane2.default;
exports.SplitterPane = _KendoSplitterPane2.default;
exports.KendoLayoutInstaller = _kendoLayoutInstaller2.default;
exports.LayoutInstaller = _kendoLayoutInstaller2.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _MenuProps = __webpack_require__(18);

var _MenuProps2 = _interopRequireDefault(_MenuProps);

var _OpenOnClick = __webpack_require__(19);

var _OpenOnClick2 = _interopRequireDefault(_OpenOnClick);

var _Animation = __webpack_require__(5);

var _Animation2 = _interopRequireDefault(_Animation);

var _Scrollable = __webpack_require__(2);

var _Scrollable2 = _interopRequireDefault(_Scrollable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _MenuProps2.default,
    emits: {
        'kendowidgetready': null
    },
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _kendoBaseComponentsVueWrapper.KendoSharedMethods, _Animation2.default, _OpenOnClick2.default, _Scrollable2.default],
    mounted: function mounted() {
        this._resolveChildren();

        kendo.jQuery(this.$el).kendoMenu(this.widgetOptions);

        if (this.v3) {
            this.ready();
            this.$emit('kendowidgetready', this.kendoWidget());
        } else {
            this.$emit('kendowidgetready', this.kendoWidget());
        }
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return kendo.jQuery(this.$el).getKendoMenu();
        },
        _resolveChildren: function _resolveChildren() {
            var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
            var hasDataSource = this.v3 ? !this.$props.dataSource : this.$options.propsData && !this.$options.propsData['dataSource'];
            if (hasDataSource && defaultSlot) {
                var items = this.resolveInnerTags('kendo-menu-item');

                if (items.length) {
                    this.widgetOptions['dataSource'] = items;
                }
            }
        }
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vue = __webpack_require__(0);

var aVue = _interopRequireWildcard(_vue);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var allVue = aVue;
var gh = allVue.h;
var createApp = allVue.createApp;
exports.default = {
    name: 'baseComponent',
    props: {
        disabled: {
            type: Boolean,
            default: undefined
        },
        readonly: {
            type: Boolean,
            default: undefined
        }
    },
    render: function render(createElement) {
        var h = gh || createElement;
        return h('div');
    },
    created: function created() {
        this.createdMethod();
    },

    beforeDestroy: gh ? undefined : function () {
        this.destroyKendoWidget();
    },
    beforeUnmount: function beforeUnmount() {
        this.destroyKendoWidget();
    },
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },

    beforeMount: function beforeMount() {
        if (this.v3) {
            this.createdMethod();
            var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
            var hasDataSource = !this.$props.dataSource;
            if (hasDataSource && defaultSlot) {
                var innerDatasource = defaultSlot.find(function (slot) {
                    return slot.type && slot.type.name && slot.type.name.indexOf('datasource') !== -1;
                });
                if (innerDatasource) {
                    var dataSourceOptions = this.parseOptions(innerDatasource, innerDatasource.type.mixins[0].mixins);
                    this.widgetOptions.dataSource = dataSourceOptions;
                }
            }
        }
    },
    updated: function updated() {
        if (this.modelValue) {
            this.changeValue(this.modelValue);
        }
    },
    mounted: function mounted() {
        if (this.$el.classList && this.$el.classList.length > 0) {
            this.nativeClasses = [].concat(_toConsumableArray(this.$el.classList));
        } else {
            this.nativeClasses = [];
        }
        var props = this.v3 ? this.$props : this.$options.propsData;
        for (var key in props) {
            var that = this;

            if (key.toLowerCase().indexOf('template') !== -1) {
                var isFunction = this.widgetOptions[key] instanceof Function;

                if (isFunction) {
                    this.widgetOptions[key] = this.transformTemplate(key);
                }
            }

            if (key === 'value') {
                that.$watch(key, function (newValue) {
                    that.changeValue(newValue);
                });
            } else if (key === 'disabled') {
                that.$watch(key, function (newValue) {
                    that.makeDisabled(newValue);
                });
            } else if (key === 'readonly') {
                that.$watch(key, function (newValue) {
                    that.makeReadonly(newValue);
                });
            } else {
                that.$watch(key, function (newValue, oldValue) {
                    // Vue always dispatches a change when inline complex objects are bound
                    // https://github.com/telerik/kendo-ui-core/issues/3952
                    if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
                        that.updateWidget();
                    }
                });
            }
        }
    },

    watch: {
        $attrs: function $attrs() {
            this.toggleClasses();
        }
    },
    methods: {
        createdMethod: function createdMethod() {
            this.resolveWidgetOptions();
            this.$_nativeTemplates = [];
            if (!this.v3) {
                this.$on('kendowidgetready', this.ready);
            }
        },
        destroyKendoWidget: function destroyKendoWidget() {
            if (this.kendoWidget() && this.kendoWidget().destroy) {
                this.kendoWidget().destroy();
                if (this.$_nativeTemplates.length) {
                    for (var i = 0; i < this.$_nativeTemplates.length; i++) {
                        var currentTemplate = this.$_nativeTemplates[i];
                        if (currentTemplate.unmount) {
                            currentTemplate.unmount();
                        } else {
                            currentTemplate.$destroy();
                        }
                    }
                }
            }
        },
        toggleClasses: function toggleClasses() {
            var that = this;
            var $element = kendo.jQuery(that.$el);
            var $wrapper = that.kendoWidget().wrapper;

            if ($wrapper && $wrapper[0] !== $element[0]) {
                that.nativeClasses.forEach(function (item) {
                    $wrapper.removeClass(item);
                });

                // Add to wrapper only the custom classes without the default Kendo ones
                if (that.kendoClasses) {
                    that.nativeClasses = [].concat(_toConsumableArray(that.$el.classList)).filter(function (item) {
                        return that.kendoClasses.indexOf(item) < 0;
                    });
                } else {
                    that.nativeClasses = [].concat(_toConsumableArray(that.$el.classList));
                }

                that.nativeClasses.forEach(function (item) {
                    $wrapper.addClass(item);
                });
            }

            if (that.kendoClasses) {
                that.kendoClasses.forEach(function (item) {
                    $element.addClass(item);
                });
            }
        },
        updateWidget: function updateWidget() {
            var that = this;

            that.resolveWidgetOptions();

            if (that._resolveChildren) {
                that._resolveChildren();
            }

            var currentWidget = that.kendoWidget();

            if (currentWidget && currentWidget.setOptions) {
                currentWidget.setOptions(that.widgetOptions);
            }
        },

        transformTemplate: function transformTemplate(key, val) {
            var that = this;
            var object;
            var props = that.v3 ? that.$props : that.$options.propsData;
            var templateDefinition = val || props[key];
            try {
                object = templateDefinition.call(that, {});
            } catch (e) {
                return templateDefinition;
            }

            if (!object.template) {
                return templateDefinition;
            }

            return function () {
                object = templateDefinition.apply(this, arguments);
                var kendoguid;
                if (that.v3) {
                    var newTemplateArgs = typeof object.templateArgs === 'string' ? object.templateArgs : Object.assign({}, object.templateArgs);
                    var tempComponent = (0, createApp)(Object.assign({}, object.template, {
                        data: function data() {
                            return Object.assign({}, object.template.data ? object.template.data() : {}, {
                                templateArgs: newTemplateArgs
                            });
                        }
                    }));
                    kendoguid = 'kendo' + kendo.guid();

                    that.$nextTick(function () {
                        if (document.getElementById(kendoguid)) {
                            tempComponent.mount('#' + kendoguid);
                            that.$_nativeTemplates.push(tempComponent);
                        }
                    });
                } else {
                    var newVue = allVue.default.extend(object);
                    var vueObject = new newVue(object.template);
                    vueObject.$data.templateArgs = object.templateArgs;
                    kendoguid = 'kendo' + kendo.guid();
                    that.$nextTick(function () {
                        if (document.getElementById(kendoguid)) {
                            vueObject.$mount('#' + kendoguid);
                            that.$_nativeTemplates.push(vueObject);
                        }
                    });
                }

                return '<div id="' + kendoguid + '"></div>';
            };
        },
        resolveChildren: function resolveChildren(prop, name) {
            var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
            if (!this.widgetOptions[prop] && defaultSlot) {
                var items = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = defaultSlot[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var childSlot = _step.value;

                        if (childSlot.tag && childSlot.tag.indexOf(name) !== -1 || childSlot.type && childSlot.type.name && childSlot.type.name.toLowerCase().indexOf(name) !== -1) {
                            var childInstance = this.v3 ? childSlot : childSlot.componentInstance;
                            var itemOptions = this.parseOptions(childInstance);

                            if (itemOptions.dataSourceRef) {
                                this.setInnerDataSource('dataSourceRef', 'dataSource', itemOptions);
                            }

                            items.push(itemOptions);
                            this.handleWatcher(childInstance);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                if (items.length) {
                    this.widgetOptions[prop] = items;
                }
            }
        },
        handleWatcher: function handleWatcher(childInstance) {
            var that = this;
            childInstance.stashedPropsData = JSON.stringify(that.v3 ? childInstance.$props : childInstance.$options.propsData);

            if (!that.v3 && !childInstance._isWatchAttached) {
                childInstance.$watch('$props', function () {
                    var props = that.v3 ? childInstance.$props : childInstance.$options.propsData;
                    var propsAsJson = JSON.stringify(props);
                    var needsUpdate = childInstance.stashedPropsData !== propsAsJson;

                    if (that.updateWidget && needsUpdate) {
                        that.updateWidget();
                    } else if (that._resolveInnerChildren) {
                        that._resolveInnerChildren();
                    }

                    childInstance.stashedPropsData = propsAsJson;
                }, { deep: true });

                childInstance._isWatchAttached = true;
            }
        },
        makeDisabled: function makeDisabled(toDisable) {
            if (this.kendoWidget().enable) {
                this.kendoWidget().enable(!toDisable);
            }
        },
        makeReadonly: function makeReadonly(value) {
            if (this.kendoWidget().readonly) {
                this.kendoWidget().readonly(value);
            }
        },
        changeValue: function changeValue(newValue) {
            if (this.kendoWidget().value) {
                this.kendoWidget().value(newValue);
            }
        },
        resolveWidgetOptions: function resolveWidgetOptions() {
            this.widgetOptions = this.parseOptions();
        },
        getListeners: function getListeners() {
            if (this.v3) {
                var listeners = {};
                for (var key in this.$attrs) {
                    if (key.startsWith('on')) {
                        listeners[key] = this.$attrs[key];
                    }
                }

                return listeners;
            } else {
                return this.$listeners;
            }
        },
        parseOptions: function parseOptions(component, defaultMixins) {
            var _this = this;

            var that = component || this;
            var options = {};
            var props = this.v3 ? component ? that.props : that.$props : that.$options.propsData;

            var _loop = function _loop(_key) {
                propOptions = _this.v3 ? component ? undefined : that.$options.__props[0][_key] || that.$options.__props[0][0][_key] : that.$options.props[_key];
                val = props[_key];

                if (_this.v3 && _key.indexOf('-') !== -1) {
                    _key = _this.camelize(_key);
                }

                compositeProps = propOptions ? propOptions.kComposite : undefined;


                if (that.v3 || _this.v3) {
                    var mixins = component ? defaultMixins || component.type.mixins : that.$options.mixins;
                    if (mixins) {
                        mixins.forEach(function (mixin) {
                            if (mixin.props && mixin.name !== 'baseComponent' && mixin.name !== 'baseDataSourceComponent' && mixin.props[_key] !== undefined && (that.$props ? that.$props[_key] !== undefined : true)) {
                                compositeProps = mixin.props[_key].kComposite;
                            }
                        });
                    }
                }

                if (!compositeProps) {
                    if (_key.toLowerCase().indexOf('template') !== -1 && val instanceof Function) {
                        options[_key] = _this.transformTemplate(_key, val);
                    } else {
                        if (val !== undefined) {
                            options[_key] = val;
                        }
                    }
                } else {
                    if (val !== undefined) {
                        _this.addCompositeProperty(options, compositeProps.split('.'), val);
                    }
                }
                key = _key;
            };

            for (var key in props) {
                var propOptions;
                var val;
                var compositeProps;

                _loop(key);
            }

            if (that.getListeners) {
                if (this.v3) {
                    Object.keys(that.$attrs).forEach(function (event) {
                        var listeners = that.getListeners();
                        var eventName = _this.v3 ? event : event.toLowerCase();
                        if (listeners && listeners[eventName]) {
                            var kendoIndex = event.lastIndexOf('kendo');
                            var kendoEvent;
                            if (kendoIndex !== -1) {
                                kendoEvent = event.replace('kendo', '').toLowerCase();
                            }

                            if (_this.v3 && event.indexOf('onKendo') !== -1) {
                                kendoEvent = event.replace('onKendo', '').toLowerCase();
                            }
                            var kendoEventProp = Object.keys(that.$props).find(function (e) {
                                return e.toLowerCase() === _this.removeOn(event);
                            });
                            options[kendoEvent || kendoEventProp || _this.removeOn(event)] = listeners[eventName];
                        }
                    });
                } else {
                    Object.keys(that.$props).forEach(function (event) {
                        var listeners = that.getListeners();
                        if (listeners && listeners[event.toLowerCase()]) {
                            var kendoIndex = event.lastIndexOf('kendo');
                            var kendoEvent;
                            if (kendoIndex !== -1) {
                                kendoEvent = event.replace('kendo', '').toLowerCase();
                            }

                            options[kendoEvent || event] = listeners[event.toLowerCase()];
                        }
                    });
                }
            }

            if (this.v3 && this.$props.modelValue) {
                options.value = this.$props.modelValue;
            }

            return options;
        },
        addCompositeProperty: function addCompositeProperty(obj, keys, val) {
            var lastKey = keys.pop();
            var lastObj = keys.reduce(function (obj, key) {
                obj[key] = _typeof(obj[key]) === 'object' ? obj[key] || {} : {};
                return obj[key];
            }, obj);

            if (lastKey.toLowerCase().indexOf('template') !== -1 && val instanceof Function) {
                lastObj[lastKey] = this.transformTemplate(lastKey, val);
            } else {
                lastObj[lastKey] = val;
            }
        },
        resolveInnerTags: function resolveInnerTags(tagName) {
            var items = [];
            var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = defaultSlot[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var childSlot = _step2.value;

                    if (childSlot.tag && childSlot.tag.indexOf(tagName) !== -1 || childSlot.type && childSlot.type.name && childSlot.type.name.toLowerCase().indexOf(tagName) !== -1) {
                        var childOptions = childSlot.componentOptions;
                        var childInstance = this.v3 ? childSlot : childSlot.componentInstance;
                        var item = this.v3 ? childInstance.$props || childInstance.props : childOptions.propsData;

                        if (this.v3) {
                            var itemKeys = Object.keys(item);
                            var _iteratorNormalCompletion3 = true;
                            var _didIteratorError3 = false;
                            var _iteratorError3 = undefined;

                            try {
                                for (var _iterator3 = itemKeys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                    var propKey = _step3.value;

                                    if (propKey.indexOf('-') !== -1) {
                                        item[this.camelize(propKey)] = item[propKey];
                                    }
                                }
                            } catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                        _iterator3.return();
                                    }
                                } finally {
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                            }
                        }

                        if (!item.items) {
                            item.items = childInstance.subitems;
                        }

                        items.push(item);
                        this.handleWatcher(childInstance);
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return items;
        },
        ready: function ready() {
            var that = this;

            if (this.$el.classList.length > 0) {
                that.kendoClasses = [].concat(_toConsumableArray(that.$el.classList)).filter(function (item) {
                    return that.nativeClasses.indexOf(item) < 0;
                });
            }
            var props = that.v3 ? that.$props : that.$options.propsData;
            if (props && props.disabled) {
                that.makeDisabled(true);
            }

            if (props && props.readonly) {
                that.makeReadonly(true);
            }
        },
        camelize: function camelize(str) {
            var arr = str.split('-');
            var capital = arr.map(function (item, index) {
                return index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item;
            });
            var capitalString = capital.join('');

            return capitalString;
        },
        removeOn: function removeOn(str) {

            if (str.indexOf('onKendo') !== -1) {
                return str.replace('onKendo', '').toLowerCase();
            }

            return str.replace('on', '').toLowerCase();
        }
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'baseDataSourceComponent',
    props: {
        dataSourceRef: {
            type: String,
            default: undefined
        }
    },
    render: function render(h) {
        return h('div');
    },

    methods: {
        findDataSource: function findDataSource() {
            var dataSource;
            if (this.$children) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.$children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var a = _step.value;

                        if (this.$children.length && a.kendoDataSource) {
                            dataSource = a.kendoDataSource;
                            break;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            return dataSource;
        },
        setInnerDataSource: function setInnerDataSource() {
            var dataSourceRefProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dataSourceRef';
            var rootProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dataSource';
            var subProp = arguments[2];

            var innerDataSource = this.findDataSource();

            if (innerDataSource) {
                if (!subProp) {
                    this.widgetOptions[rootProp] = innerDataSource;
                } else {
                    subProp[rootProp] = innerDataSource;
                }
            } else {
                var refString = subProp ? subProp[dataSourceRefProp] : this[dataSourceRefProp];
                var referredDataSource = this.getParentsRef(refString);

                if (referredDataSource) {
                    this.attachEvents(referredDataSource);
                    if (!subProp) {
                        this.widgetOptions[rootProp] = referredDataSource.kendoDataSource;
                    } else {
                        subProp[rootProp] = referredDataSource.kendoDataSource;
                    }
                }
            }
        },
        getParentsRef: function getParentsRef(anchor) {
            var parent = this.$parent;

            while (parent && !parent.$refs[anchor]) {
                parent = parent.$parent;
            }

            return parent ? parent.$refs[anchor] : undefined;
        },
        setDataSource: function setDataSource(newValue) {
            var newDataSourceRef = this.getParentsRef(newValue);
            var kendoWidget = this.kendoWidget();

            if (kendoWidget.setDataSource && newDataSourceRef) {
                kendoWidget.setDataSource(newDataSourceRef.kendoDataSource);
            } else if (kendoWidget.setDataSource) {
                kendoWidget.setDataSource(newValue);
            }
        },
        attachEvents: function attachEvents(referredDataSource) {
            if (referredDataSource.kendoDataSource) {
                referredDataSource.kendoDataSource.bind('change', function (ev) {
                    if (referredDataSource.getListeners()['change']) {
                        referredDataSource.$emit('change', ev);
                    }
                });

                referredDataSource.kendoDataSource.bind('error', function (ev) {
                    if (referredDataSource.getListeners()['error']) {
                        referredDataSource.$emit('error', ev);
                    }
                });

                referredDataSource.kendoDataSource.bind('push', function (ev) {
                    if (referredDataSource.getListeners()['push']) {
                        referredDataSource.$emit('push', ev);
                    }
                });

                referredDataSource.kendoDataSource.bind('requestEnd', function (ev) {
                    if (referredDataSource.getListeners()['requestend']) {
                        referredDataSource.$emit('requestend', ev);
                    }
                });

                referredDataSource.kendoDataSource.bind('requestStart', function (ev) {
                    if (referredDataSource.getListeners()['requeststart']) {
                        referredDataSource.$emit('requeststart', ev);
                    }
                });

                referredDataSource.kendoDataSource.bind('sync', function (ev) {
                    if (referredDataSource.getListeners()['sync']) {
                        referredDataSource.$emit('sync', ev);
                    }
                });
            }
        }
    },
    mounted: function mounted() {
        var that = this;

        that.$watch('dataSourceRef', function (newValue) {
            that.setDataSource(newValue);
        });
        that.$watch('dataSource', function (newValue) {
            that.setDataSource(newValue);
        });

        that.setInnerDataSource();
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue; // @ts-ignore

var gh = allVue.h;
exports.default = {
    render: function render(createElement) {
        var h = gh || createElement;
        return h('input', {
            ref: 'valueInput',
            props: {
                value: this.value
            }
        });
    },

    model: {
        event: 'changemodel'
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        resolveInnerTags: function resolveInnerTags(tagName) {
            var items = [];
            var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = defaultSlot[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var childSlot = _step.value;

                    if (childSlot.tag && childSlot.tag.indexOf(tagName) !== -1 || childSlot.type && childSlot.type.name && childSlot.type.name.toLowerCase().indexOf(tagName) !== -1) {
                        var childOptions = childSlot.componentOptions;
                        var childInstance = this.v3 ? childSlot : childSlot.componentInstance;
                        var item = this.v3 ? childInstance.$props || childInstance.props : childOptions.propsData;

                        if (this.v3) {
                            var itemKeys = Object.keys(item);
                            var _iteratorNormalCompletion2 = true;
                            var _didIteratorError2 = false;
                            var _iteratorError2 = undefined;

                            try {
                                for (var _iterator2 = itemKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                    var propKey = _step2.value;

                                    if (propKey.indexOf('-') !== -1) {
                                        item[this.camelize(propKey)] = item[propKey];
                                    }
                                }
                            } catch (err) {
                                _didIteratorError2 = true;
                                _iteratorError2 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                        _iterator2.return();
                                    }
                                } finally {
                                    if (_didIteratorError2) {
                                        throw _iteratorError2;
                                    }
                                }
                            }
                        }

                        if (!item.items) {
                            item.items = childInstance.subitems;
                        }

                        items.push(item);
                        this.handleWatcher(childInstance);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return items;
        },
        handleWatcher: function handleWatcher(childInstance) {
            var that = this;

            if (!childInstance._isWatchAttached && childInstance.$watch) {
                childInstance.$watch('$props', function () {
                    if (that.updateWidget) {
                        that.updateWidget();
                    } else if (that._resolveInnerChildren) {
                        that._resolveInnerChildren();
                    }
                }, { deep: true });

                childInstance._isWatchAttached = true;
            }
        },
        camelize: function camelize(str) {
            var arr = str.split('-');
            var capital = arr.map(function (item, index) {
                return index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item;
            });
            var capitalString = capital.join('');

            return capitalString;
        }
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    animation: {
        type: [Boolean, Object],
        default: undefined
    },
    closeOnClick: {
        type: Boolean,
        default: undefined
    },
    dataImageUrlField: {
        type: String,
        default: undefined
    },
    dataSource: {
        type: [Object, Array],
        default: undefined
    },
    dataSpriteCssClassField: {
        type: String,
        default: undefined
    },
    dataTextField: {
        type: String,
        default: undefined
    },
    dataUrlField: {
        type: String,
        default: undefined
    },
    dataContentField: {
        type: String,
        default: undefined
    },
    direction: {
        type: String,
        default: undefined
    },
    hoverDelay: {
        type: Number,
        default: undefined
    },
    openOnClick: {
        type: [Boolean, Object],
        default: undefined
    },
    orientation: {
        type: String,
        default: undefined
    },
    popupCollision: {
        type: String,
        default: undefined
    },
    scrollable: {
        type: [Boolean, Object],
        default: undefined
    },

    // Events
    close: Function,
    open: Function,
    activate: Function,
    deactivate: Function,
    select: Function
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        openOnClickRootMenuItems: {
            type: Boolean,
            default: undefined,
            kComposite: 'openOnClick.rootMenuItems'
        },
        openOnClickSubMenuItems: {
            type: Boolean,
            default: undefined,
            kComposite: 'openOnClick.subMenuItems'
        }
    }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _ContextMenuProps = __webpack_require__(21);

var _ContextMenuProps2 = _interopRequireDefault(_ContextMenuProps);

var _Animation = __webpack_require__(22);

var _Animation2 = _interopRequireDefault(_Animation);

var _Scrollable = __webpack_require__(2);

var _Scrollable2 = _interopRequireDefault(_Scrollable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _ContextMenuProps2.default,
    emits: {
        'kendowidgetready': null
    },
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _kendoBaseComponentsVueWrapper.KendoSharedMethods, _Animation2.default, _Scrollable2.default],
    mounted: function mounted() {
        this._resolveChildren();

        kendo.jQuery(this.$el).kendoContextMenu(this.widgetOptions);

        if (this.v3) {
            this.ready();
            this.$emit('kendowidgetready', this.kendoWidget());
        } else {
            this.$emit('kendowidgetready', this.kendoWidget());
        }
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return kendo.jQuery(this.$el).getKendoContextMenu();
        },
        _resolveChildren: function _resolveChildren() {
            var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
            var hasDataSource = this.v3 ? !this.$props.dataSource : this.$options.propsData && !this.$options.propsData['dataSource'];
            if (hasDataSource && defaultSlot) {
                var items = this.resolveInnerTags('kendo-menu-item');

                if (items.length) {
                    this.widgetOptions['dataSource'] = items;
                }
            }
        }
    }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    alignToAnchor: {
        type: Boolean,
        default: undefined
    },
    animation: {
        type: [Boolean, Object],
        default: undefined
    },
    appendTo: {
        type: String,
        default: undefined
    },
    closeOnClick: {
        type: Boolean,
        default: undefined
    },
    copyAnchorStyles: {
        type: Boolean,
        default: undefined
    },
    dataImageUrlField: {
        type: String,
        default: undefined
    },
    dataSource: {
        type: [Object, Array],
        default: undefined
    },
    dataSpriteCssClassField: {
        type: String,
        default: undefined
    },
    dataTextField: {
        type: String,
        default: undefined
    },
    dataUrlField: {
        type: String,
        default: undefined
    },
    dataContentField: {
        type: String,
        default: undefined
    },
    direction: {
        type: String,
        default: undefined
    },
    filter: {
        type: String,
        default: undefined
    },
    hoverDelay: {
        type: Number,
        default: undefined
    },
    orientation: {
        type: String,
        default: undefined
    },
    popupCollision: {
        type: String,
        default: undefined
    },
    scrollable: {
        type: [Boolean, Object],
        default: undefined
    },
    showOn: {
        type: String,
        default: undefined
    },
    target: {
        type: String,
        default: undefined
    },

    // Events
    close: Function,
    open: Function,
    activate: Function,
    deactivate: Function,
    select: Function
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        animationCloseEffects: {
            type: String,
            default: undefined,
            kComposite: 'animation.close.effects'
        },
        animationCloseDuration: {
            type: Number,
            default: undefined,
            kComposite: 'animation.close.duration'
        },
        animationOpenEffects: {
            type: String,
            default: undefined,
            kComposite: 'animation.open.effects'
        },
        animationOpenDuration: {
            type: Number,
            default: undefined,
            kComposite: 'animation.open.duration'
        }
    }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _PanelBarProps = __webpack_require__(24);

var _PanelBarProps2 = _interopRequireDefault(_PanelBarProps);

var _Animation = __webpack_require__(25);

var _Animation2 = _interopRequireDefault(_Animation);

var _Messages = __webpack_require__(26);

var _Messages2 = _interopRequireDefault(_Messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _PanelBarProps2.default,
    emits: {
        'kendowidgetready': null
    },
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _kendoBaseComponentsVueWrapper.KendoSharedMethods, _Animation2.default, _Messages2.default],
    mounted: function mounted() {
        this._resolveChildren();

        kendo.jQuery(this.$el).kendoPanelBar(this.widgetOptions);
        if (this.v3) {
            this.ready();
            this.$emit('kendowidgetready', this.kendoWidget());
        } else {
            this.$emit('kendowidgetready', this.kendoWidget());
        }
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return kendo.jQuery(this.$el).getKendoPanelBar();
        },
        _resolveChildren: function _resolveChildren() {
            var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
            var hasDataSource = this.v3 ? !this.$props.dataSource : this.$options.propsData && !this.$options.propsData['dataSource'];
            if (hasDataSource && defaultSlot) {
                var items = this.resolveInnerTags('kendo-panelbar-item');

                if (items.length) {
                    this.widgetOptions['dataSource'] = items;
                }
            }
        }
    }
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    animation: {
        type: [Boolean, Object],
        default: undefined
    },
    autoBind: {
        type: Boolean,
        default: undefined
    },
    contentUrls: {
        type: Array,
        default: undefined
    },
    dataImageUrlField: {
        type: String,
        default: undefined
    },
    dataSource: {
        type: [Object, Array],
        default: undefined
    },
    dataSpriteCssClassField: {
        type: String,
        default: undefined
    },
    dataTextField: {
        type: [String, Array],
        default: undefined
    },
    dataUrlField: {
        type: String,
        default: undefined
    },
    expandMode: {
        type: String,
        default: undefined
    },
    loadOnDemand: {
        type: Boolean,
        default: undefined
    },
    messages: {
        type: Object,
        default: undefined
    },
    template: {
        type: [String, Function],
        default: undefined
    },

    // Events
    activate: Function,
    collapse: Function,
    contentLoad: {
        type: Function,
        default: undefined
    },
    dataBound: {
        type: Function,
        default: undefined
    },
    error: Function,
    expand: Function,
    select: Function
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        animationCollapseDuration: {
            type: Number,
            default: undefined,
            kComposite: 'animation.collapse.duration'
        },
        animationCollapseEffects: {
            type: String,
            default: undefined,
            kComposite: 'animation.collapse.effects'
        },
        animationExpandDuration: {
            type: Number,
            default: undefined,
            kComposite: 'animation.expand.duration'
        },
        animationExpandEffects: {
            type: String,
            default: undefined,
            kComposite: 'animation.expand.effects'
        }
    }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        messagesLoading: {
            type: String,
            default: undefined,
            kComposite: 'messages.loading'
        },
        messagesRequestFailed: {
            type: String,
            default: undefined,
            kComposite: 'messages.requestFailed'
        },
        messagesRetry: {
            type: String,
            default: undefined,
            kComposite: 'messages.retry'
        }
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _TabStripProps = __webpack_require__(28);

var _TabStripProps2 = _interopRequireDefault(_TabStripProps);

var _Animation = __webpack_require__(5);

var _Animation2 = _interopRequireDefault(_Animation);

var _Scrollable = __webpack_require__(2);

var _Scrollable2 = _interopRequireDefault(_Scrollable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _TabStripProps2.default,
    emits: {
        'kendowidgetready': null
    },
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _Animation2.default, _Scrollable2.default],
    mounted: function mounted() {
        kendo.jQuery(this.$el).kendoTabStrip(this.widgetOptions);

        if (this.v3) {
            this.ready();
            this.$emit('kendowidgetready', this.kendoWidget());
        } else {
            this.$emit('kendowidgetready', this.kendoWidget());
        }
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return kendo.jQuery(this.$el).getKendoTabStrip();
        }
    }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    animation: {
        type: [Boolean, Object],
        default: undefined
    },
    collapsible: {
        type: Boolean,
        default: undefined
    },
    contentUrls: {
        type: Array,
        default: undefined
    },
    dataContentField: {
        type: String,
        default: undefined
    },
    dataContentUrlField: {
        type: String,
        default: undefined
    },
    dataImageUrlField: {
        type: String,
        default: undefined
    },
    dataSource: {
        type: [Object, Array],
        default: undefined
    },
    dataSpriteCssClass: {
        type: String,
        default: undefined
    },
    dataTextField: {
        type: String,
        default: undefined
    },
    dataUrlField: {
        type: String,
        default: undefined
    },
    navigatable: {
        type: Boolean,
        default: undefined
    },
    scrollable: {
        type: [Boolean, Object],
        default: undefined
    },
    tabPosition: {
        type: String,
        default: undefined
    },
    value: {
        type: String,
        default: undefined
    },

    // Events
    activate: Function,
    contentLoad: {
        type: Function,
        default: undefined
    },
    error: Function,
    select: Function,
    show: Function
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _SplitterProps = __webpack_require__(30);

var _SplitterProps2 = _interopRequireDefault(_SplitterProps);

var _KendoSplitterPane = __webpack_require__(3);

var _KendoSplitterPane2 = _interopRequireDefault(_KendoSplitterPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _SplitterProps2.default,
    emits: {
        'kendowidgetready': null
    },
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent],
    mounted: function mounted() {
        this._resolveChildren();

        kendo.jQuery(this.$el).kendoSplitter(this.widgetOptions);
        if (this.v3) {
            this.ready();
            this.$emit('kendowidgetready', this.kendoWidget());
        } else {
            this.$emit('kendowidgetready', this.kendoWidget());
        }
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return kendo.jQuery(this.$el).getKendoSplitter();
        },
        _resolveChildren: function _resolveChildren() {
            this.resolveChildren('panes', _KendoSplitterPane2.default.name);
        }
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    orientation: {
        type: String,
        default: undefined
    },
    panes: {
        type: Array,
        default: undefined
    },

    // Events
    collapse: Function,
    contentLoad: {
        type: Function,
        default: undefined
    },
    error: Function,
    expand: Function,
    layoutChange: {
        type: Function,
        default: undefined
    },
    resize: Function
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        collapsed: {
            type: Boolean,
            default: undefined
        },
        collapsedSize: {
            type: String,
            default: undefined
        },
        collapsible: {
            type: Boolean,
            default: undefined
        },
        contentUrl: {
            type: String,
            default: undefined
        },
        max: {
            type: String,
            default: undefined
        },
        min: {
            type: String,
            default: undefined
        },
        resizable: {
            type: Boolean,
            default: undefined
        },
        scrollable: {
            type: Boolean,
            default: undefined
        },
        size: {
            type: String,
            default: undefined
        }
    }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KendoMenu = __webpack_require__(4);

var _KendoMenu2 = _interopRequireDefault(_KendoMenu);

var _KendoMenuItem = __webpack_require__(6);

var _KendoMenuItem2 = _interopRequireDefault(_KendoMenuItem);

var _KendoContextMenu = __webpack_require__(7);

var _KendoContextMenu2 = _interopRequireDefault(_KendoContextMenu);

var _KendoPanelBar = __webpack_require__(8);

var _KendoPanelBar2 = _interopRequireDefault(_KendoPanelBar);

var _KendoPanelBarItem = __webpack_require__(9);

var _KendoPanelBarItem2 = _interopRequireDefault(_KendoPanelBarItem);

var _KendoTabStrip = __webpack_require__(10);

var _KendoTabStrip2 = _interopRequireDefault(_KendoTabStrip);

var _KendoSplitter = __webpack_require__(11);

var _KendoSplitter2 = _interopRequireDefault(_KendoSplitter);

var _KendoSplitterPane = __webpack_require__(3);

var _KendoSplitterPane2 = _interopRequireDefault(_KendoSplitterPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KendoLayoutInstaller = function () {
    function KendoLayoutInstaller() {
        _classCallCheck(this, KendoLayoutInstaller);
    }

    _createClass(KendoLayoutInstaller, null, [{
        key: 'install',
        value: function install(Vue) {
            Vue.component(_KendoMenu2.default.name, _KendoMenu2.default);
            Vue.component(_KendoContextMenu2.default.name, _KendoContextMenu2.default);
            Vue.component(_KendoMenuItem2.default.name, _KendoMenuItem2.default);
            Vue.component(_KendoPanelBar2.default.name, _KendoPanelBar2.default);
            Vue.component(_KendoPanelBarItem2.default.name, _KendoPanelBarItem2.default);
            Vue.component(_KendoTabStrip2.default.name, _KendoTabStrip2.default);
            Vue.component(_KendoSplitter2.default.name, _KendoSplitter2.default);
            Vue.component(_KendoSplitterPane2.default.name, _KendoSplitterPane2.default);
        }
    }]);

    return KendoLayoutInstaller;
}();

exports.default = KendoLayoutInstaller;

// Automatic installation if Vue has been added to the global scope.

if (typeof window !== 'undefined' && window.Vue && window.Vue.use) {
    window.Vue.use(KendoLayoutInstaller);
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=kendo-layout-vue-wrapper.js.map