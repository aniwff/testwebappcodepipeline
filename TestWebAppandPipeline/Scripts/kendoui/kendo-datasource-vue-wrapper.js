(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["KendoDatasourceVueWrapper"] = factory(require("vue"));
	else
		root["KendoDatasourceVueWrapper"] = factory(root["Vue"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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

var _kendoBaseComponent = __webpack_require__(20);

var _kendoBaseComponent2 = _interopRequireDefault(_kendoBaseComponent);

var _kendoBaseDatasourceComponent = __webpack_require__(21);

var _kendoBaseDatasourceComponent2 = _interopRequireDefault(_kendoBaseDatasourceComponent);

var _kendoBaseInputComponent = __webpack_require__(22);

var _kendoBaseInputComponent2 = _interopRequireDefault(_kendoBaseInputComponent);

var _kendoSharedMethods = __webpack_require__(23);

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
        filterField: {
            type: String,
            default: undefined,
            kComposite: 'filter.field'
        },
        filterFilters: {
            type: Array,
            default: undefined,
            kComposite: 'filter.filters'
        },
        filterLogic: {
            type: String,
            default: undefined,
            kComposite: 'filter.logic'
        },
        filterOperator: {
            type: [String, Function],
            default: undefined,
            kComposite: 'filter.operator'
        },
        filterValue: {
            type: [Object, Date, Number, String],
            default: undefined,
            kComposite: 'filter.value'
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
exports.default = {
    props: {
        groupAggregates: {
            type: Array,
            default: undefined,
            kComposite: 'group.aggregates'
        },
        groupDir: {
            type: String,
            default: undefined,
            kComposite: 'group.dir'
        },
        groupField: {
            type: String,
            default: undefined,
            kComposite: 'group.field'
        }
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        sortDir: {
            type: String,
            default: undefined,
            kComposite: 'sort.dir'
        },
        sortField: {
            type: String,
            default: undefined,
            kComposite: 'sort.field'
        },
        sortCompare: {
            type: Function,
            default: undefined,
            kComposite: 'sort.compare'
        }
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

var _KendoDataSourceBaseMixin = __webpack_require__(24);

var _KendoDataSourceBaseMixin2 = _interopRequireDefault(_KendoDataSourceBaseMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-datasource',
    mixins: [_KendoDataSourceBaseMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        return h('div');
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        transportCreate: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.create'
        },
        transportCreateCache: {
            type: Boolean,
            default: undefined,
            kComposite: 'transport.create.cache'
        },
        transportCreateContentType: {
            type: String,
            default: undefined,
            kComposite: 'transport.create.contentType'
        },
        transportCreateData: {
            type: [Object, Function],
            default: undefined,
            kComposite: 'transport.create.data'
        },
        transportCreateDataType: {
            type: String,
            default: undefined,
            kComposite: 'transport.create.dataType'
        },
        transportCreateType: {
            type: String,
            default: undefined,
            kComposite: 'transport.create.type'
        },
        transportCreateUrl: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.create.url'
        },
        transportDestroy: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.destroy'
        },
        transportDestroyCache: {
            type: Boolean,
            default: undefined,
            kComposite: 'transport.destroy.cache'
        },
        transportDestroyContentType: {
            type: String,
            default: undefined,
            kComposite: 'transport.destroy.contentType'
        },
        transportDestroyData: {
            type: [Object, Function],
            default: undefined,
            kComposite: 'transport.destroy.data'
        },
        transportDestroyDataType: {
            type: String,
            default: undefined,
            kComposite: 'transport.destroy.dataType'
        },
        transportDestroyType: {
            type: String,
            default: undefined,
            kComposite: 'transport.destroy.type'
        },
        transportDestroyUrl: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.destroy.url'
        },
        transportParameterMap: {
            type: Function,
            default: undefined,
            kComposite: 'transport.parameterMap'
        },
        transportPush: {
            type: Function,
            default: undefined,
            kComposite: 'transport.push'
        },
        transportRead: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.read'
        },
        transportReadCache: {
            type: Boolean,
            default: undefined,
            kComposite: 'transport.read.cache'
        },
        transportReadContentType: {
            type: String,
            default: undefined,
            kComposite: 'transport.read.contentType'
        },
        transportReadData: {
            type: [Object, Function],
            default: undefined,
            kComposite: 'transport.read.data'
        },
        transportReadDataType: {
            type: String,
            default: undefined,
            kComposite: 'transport.read.dataType'
        },
        transportReadType: {
            type: String,
            default: undefined,
            kComposite: 'transport.read.type'
        },
        transportReadUrl: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.read.url'
        },
        transportSignalrClientCreate: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.client.create'
        },
        transportSignalrClientDestroy: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.client.destroy'
        },
        transportSignalrClientRead: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.client.read'
        },
        transportSignalrClientUpdate: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.client.update'
        },
        transportSignalrHub: {
            type: Object,
            default: undefined,
            kComposite: 'transport.signalr.hub'
        },
        transportSignalrPromise: {
            type: Object,
            default: undefined,
            kComposite: 'transport.signalr.promise'
        },
        transportSignalrServerCreate: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.server.create'
        },
        transportSignalrServerDestroy: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.server.destroy'
        },
        transportSignalrServerRead: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.server.read'
        },
        transportSignalrServerUpdate: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.server.update'
        },
        transportSubmit: {
            type: Function,
            default: undefined,
            kComposite: 'transport.submit'
        },
        transportUpdate: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.update'
        },
        transportUpdateCache: {
            type: Boolean,
            default: undefined,
            kComposite: 'transport.update.cache'
        },
        transportUpdateContentType: {
            type: String,
            default: undefined,
            kComposite: 'transport.update.contentType'
        },
        transportUpdateData: {
            type: [Object, Function],
            default: undefined,
            kComposite: 'transport.update.data'
        },
        transportUpdateDataType: {
            type: String,
            default: undefined,
            kComposite: 'transport.update.dataType'
        },
        transportUpdateType: {
            type: String,
            default: undefined,
            kComposite: 'transport.update.type'
        },
        transportUpdateUrl: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.update.url'
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

var _Columns = __webpack_require__(41);

var _Columns2 = _interopRequireDefault(_Columns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KendoPivotGridColumn = {
    name: 'kendo-pivot-column',
    render: function render() {
        return null;
    },

    mixins: [_Columns2.default]
};

exports.default = KendoPivotGridColumn;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Measures = __webpack_require__(42);

var _Measures2 = _interopRequireDefault(_Measures);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KendoPivotGridMeasure = {
    name: 'kendo-pivot-measure',
    render: function render() {
        return null;
    },

    mixins: [_Measures2.default]
};

exports.default = KendoPivotGridMeasure;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Rows = __webpack_require__(43);

var _Rows2 = _interopRequireDefault(_Rows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KendoPivotGridRow = {
    name: 'kendo-pivot-row',
    render: function render() {
        return null;
    },

    mixins: [_Rows2.default]
};

exports.default = KendoPivotGridRow;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

var _KendoDataSourceMixin = __webpack_require__(19);

var _KendoDataSourceMixin2 = _interopRequireDefault(_KendoDataSourceMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-datasource',
    mixins: [_KendoDataSourceMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        return h('div');
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        schemaAggregates: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.aggregates'
        },
        schemaData: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.data'
        },
        schemaErrors: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.errors'
        },
        schemaGroups: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.groups'
        },
        schemaModel: {
            type: Object,
            default: undefined,
            kComposite: 'schema.model'
        },
        schemaModelId: {
            type: String,
            default: undefined,
            kComposite: 'schema.model.id'
        },
        schemaModelFields: {
            type: Object,
            default: undefined,
            kComposite: 'schema.model.fields'
        },
        schemaParse: {
            type: Function,
            default: undefined,
            kComposite: 'schema.parse'
        },
        schemaTotal: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.total'
        },
        schemaType: {
            type: String,
            default: undefined,
            kComposite: 'schema.type'
        }
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

var _KendoHierarchicalDataSourceMixin = __webpack_require__(26);

var _KendoHierarchicalDataSourceMixin2 = _interopRequireDefault(_KendoHierarchicalDataSourceMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-hierarchicaldatasource',
    mixins: [_KendoHierarchicalDataSourceMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        return h('div');
    }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

var _KendoSchedulerDataSourceMixin = __webpack_require__(28);

var _KendoSchedulerDataSourceMixin2 = _interopRequireDefault(_KendoSchedulerDataSourceMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-schedulerdatasource',
    mixins: [_KendoSchedulerDataSourceMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        return h('div');
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

var _KendoTreeListDataSourceMixin = __webpack_require__(30);

var _KendoTreeListDataSourceMixin2 = _interopRequireDefault(_KendoTreeListDataSourceMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-treelistdatasource',
    mixins: [_KendoTreeListDataSourceMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        return h('div');
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

var _KendoGanttDataSourceMixin = __webpack_require__(33);

var _KendoGanttDataSourceMixin2 = _interopRequireDefault(_KendoGanttDataSourceMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-ganttdatasource',
    mixins: [_KendoGanttDataSourceMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        return h('div');
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

var _KendoGanttDependencyDataSourceMixin = __webpack_require__(36);

var _KendoGanttDependencyDataSourceMixin2 = _interopRequireDefault(_KendoGanttDependencyDataSourceMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-ganttdependencydatasource',
    mixins: [_KendoGanttDependencyDataSourceMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        return h('div');
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

var _KendoPivotDataSourceMixin = __webpack_require__(39);

var _KendoPivotDataSourceMixin2 = _interopRequireDefault(_KendoPivotDataSourceMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-pivotdatasource',
    mixins: [_KendoPivotDataSourceMixin2.default],
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DataSourceInstaller = exports.KendoDataSourceInstaller = exports.PivotRow = exports.KendoPivotRow = exports.PivotMeasure = exports.KendoPivotMeasure = exports.PivotColumn = exports.KendoPivotColumn = exports.PivotDataSource = exports.KendoPivotDataSource = exports.GanttDependencyDataSource = exports.KendoGanttDependencyDataSource = exports.GanttDataSource = exports.KendoGanttDataSource = exports.TreeListDataSource = exports.KendoTreeListDataSource = exports.SchedulerDataSource = exports.KendoSchedulerDataSource = exports.HierarchicalDataSource = exports.KendoHierarchicalDataSource = exports.DataSource = exports.KendoDataSource = undefined;

var _KendoDataSource = __webpack_require__(10);

var _KendoDataSource2 = _interopRequireDefault(_KendoDataSource);

var _KendoHierarchicalDataSource = __webpack_require__(12);

var _KendoHierarchicalDataSource2 = _interopRequireDefault(_KendoHierarchicalDataSource);

var _KendoSchedulerDataSource = __webpack_require__(13);

var _KendoSchedulerDataSource2 = _interopRequireDefault(_KendoSchedulerDataSource);

var _KendoTreeListDataSource = __webpack_require__(14);

var _KendoTreeListDataSource2 = _interopRequireDefault(_KendoTreeListDataSource);

var _KendoGanttDataSource = __webpack_require__(15);

var _KendoGanttDataSource2 = _interopRequireDefault(_KendoGanttDataSource);

var _KendoGanttDependencyDataSource = __webpack_require__(16);

var _KendoGanttDependencyDataSource2 = _interopRequireDefault(_KendoGanttDependencyDataSource);

var _KendoPivotDataSource = __webpack_require__(17);

var _KendoPivotDataSource2 = _interopRequireDefault(_KendoPivotDataSource);

var _KendoPivotColumn = __webpack_require__(7);

var _KendoPivotColumn2 = _interopRequireDefault(_KendoPivotColumn);

var _KendoPivotMeasure = __webpack_require__(8);

var _KendoPivotMeasure2 = _interopRequireDefault(_KendoPivotMeasure);

var _KendoPivotRow = __webpack_require__(9);

var _KendoPivotRow2 = _interopRequireDefault(_KendoPivotRow);

var _kendoDatasourceInstaller = __webpack_require__(46);

var _kendoDatasourceInstaller2 = _interopRequireDefault(_kendoDatasourceInstaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.KendoDataSource = _KendoDataSource2.default;
exports.DataSource = _KendoDataSource2.default;
exports.KendoHierarchicalDataSource = _KendoHierarchicalDataSource2.default;
exports.HierarchicalDataSource = _KendoHierarchicalDataSource2.default;
exports.KendoSchedulerDataSource = _KendoSchedulerDataSource2.default;
exports.SchedulerDataSource = _KendoSchedulerDataSource2.default;
exports.KendoTreeListDataSource = _KendoTreeListDataSource2.default;
exports.TreeListDataSource = _KendoTreeListDataSource2.default;
exports.KendoGanttDataSource = _KendoGanttDataSource2.default;
exports.GanttDataSource = _KendoGanttDataSource2.default;
exports.KendoGanttDependencyDataSource = _KendoGanttDependencyDataSource2.default;
exports.GanttDependencyDataSource = _KendoGanttDependencyDataSource2.default;
exports.KendoPivotDataSource = _KendoPivotDataSource2.default;
exports.PivotDataSource = _KendoPivotDataSource2.default;
exports.KendoPivotColumn = _KendoPivotColumn2.default;
exports.PivotColumn = _KendoPivotColumn2.default;
exports.KendoPivotMeasure = _KendoPivotMeasure2.default;
exports.PivotMeasure = _KendoPivotMeasure2.default;
exports.KendoPivotRow = _KendoPivotRow2.default;
exports.PivotRow = _KendoPivotRow2.default;
exports.KendoDataSourceInstaller = _kendoDatasourceInstaller2.default;
exports.DataSourceInstaller = _kendoDatasourceInstaller2.default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _KendoDataSourceBase = __webpack_require__(5);

var _KendoDataSourceBase2 = _interopRequireDefault(_KendoDataSourceBase);

var _Filter = __webpack_require__(2);

var _Filter2 = _interopRequireDefault(_Filter);

var _Group = __webpack_require__(3);

var _Group2 = _interopRequireDefault(_Group);

var _Schema = __webpack_require__(11);

var _Schema2 = _interopRequireDefault(_Schema);

var _Sort = __webpack_require__(4);

var _Sort2 = _interopRequireDefault(_Sort);

var _Transport = __webpack_require__(6);

var _Transport2 = _interopRequireDefault(_Transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_KendoDataSourceBase2.default, _kendoBaseComponentsVueWrapper.KendoBaseComponent, _Filter2.default, _Group2.default, _Schema2.default, _Sort2.default, _Transport2.default],
    mounted: function mounted() {
        this.kendoDataSource = new kendo.data.DataSource(this.widgetOptions);
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return this.kendoDataSource || new kendo.data.DataSource(this.widgetOptions);
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _DataSourceProps = __webpack_require__(25);

var _DataSourceProps2 = _interopRequireDefault(_DataSourceProps);

var _Filter = __webpack_require__(2);

var _Filter2 = _interopRequireDefault(_Filter);

var _Group = __webpack_require__(3);

var _Group2 = _interopRequireDefault(_Group);

var _Schema = __webpack_require__(11);

var _Schema2 = _interopRequireDefault(_Schema);

var _Sort = __webpack_require__(4);

var _Sort2 = _interopRequireDefault(_Sort);

var _Transport = __webpack_require__(6);

var _Transport2 = _interopRequireDefault(_Transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _DataSourceProps2.default,
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _Filter2.default, _Group2.default, _Schema2.default, _Sort2.default, _Transport2.default],
    mounted: function mounted() {
        var _this = this;

        this.$watch(function () {
            return [_this.filter, _this.filterValue, _this.filterField, _this.filterFilters, _this.filterLogic, _this.filterOperator].join();
        }, function () {
            _this.kendoDataSource.filter(_this.widgetOptions.filter);
        }, { deep: true });

        this.$watch(function () {
            return [_this.group, _this.groupField, _this.groupDir, _this.groupAggregates].join();
        }, function () {
            _this.kendoDataSource.group(_this.widgetOptions.group);
        }, { deep: true });

        this.$watch(function () {
            return [_this.aggregate, _this.aggregateAggregate, _this.aggregateField].join();
        }, function () {
            _this.kendoDataSource.aggregate(_this.widgetOptions.aggregate);
        }, { deep: true });

        this.$watch(function () {
            return [_this.sort, _this.sortDir, _this.sortField, _this.sortCompare].join();
        }, function () {
            _this.kendoDataSource.sort(_this.widgetOptions.sort);
        }, { deep: true });

        this.$watch(function () {
            return [_this.page].join();
        }, function () {
            _this.kendoDataSource.page(_this.widgetOptions.page);
        }, { deep: true });

        this.$watch(function () {
            return [_this.pageSize].join();
        }, function () {
            _this.kendoDataSource.pageSize(_this.widgetOptions.pageSize);
        }, { deep: true });

        this.$watch(function () {
            return [_this.data].join();
        }, function () {
            _this.kendoDataSource.data(_this.widgetOptions.data);
        }, { deep: true });
    }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    aggregate: {
        type: Array,
        default: undefined
    },
    autoSync: {
        type: Boolean,
        default: undefined
    },
    batch: {
        type: Boolean,
        default: undefined
    },
    data: {
        type: [Array, String],
        default: undefined
    },
    filter: {
        type: [Array, Object],
        default: undefined
    },
    group: {
        type: [Array, Object],
        default: undefined
    },
    inPlaceSort: {
        type: Boolean,
        default: undefined
    },
    offlineStorage: {
        type: [String, Object],
        default: undefined
    },
    page: {
        type: [String, Number],
        default: undefined
    },
    pageSize: {
        type: [String, Number],
        default: undefined
    },
    schema: {
        type: Object,
        default: undefined
    },
    serverAggregates: {
        type: Boolean,
        default: undefined
    },
    serverFiltering: {
        type: Boolean,
        default: undefined
    },
    serverGrouping: {
        type: Boolean,
        default: undefined
    },
    serverPaging: {
        type: Boolean,
        default: undefined
    },
    serverSorting: {
        type: Boolean,
        default: undefined
    },
    sort: {
        type: [Array, Object],
        default: undefined
    },
    transport: {
        type: Object,
        default: undefined
    },
    type: {
        type: String,
        default: undefined
    },

    // Events
    change: {
        type: Function,
        default: undefined
    },
    error: {
        type: Function,
        default: undefined
    },
    push: {
        type: Function,
        default: undefined
    },
    requestEnd: {
        type: Function,
        default: undefined
    },
    requestStart: {
        type: Function,
        default: undefined
    },
    sync: Function
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _KendoDataSourceBase = __webpack_require__(5);

var _KendoDataSourceBase2 = _interopRequireDefault(_KendoDataSourceBase);

var _Schema = __webpack_require__(27);

var _Schema2 = _interopRequireDefault(_Schema);

var _Filter = __webpack_require__(2);

var _Filter2 = _interopRequireDefault(_Filter);

var _Group = __webpack_require__(3);

var _Group2 = _interopRequireDefault(_Group);

var _Sort = __webpack_require__(4);

var _Sort2 = _interopRequireDefault(_Sort);

var _Transport = __webpack_require__(6);

var _Transport2 = _interopRequireDefault(_Transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _KendoDataSourceBase2.default, _Schema2.default, _Filter2.default, _Group2.default, _Sort2.default, _Transport2.default],
    mounted: function mounted() {
        this.kendoDataSource = new kendo.data.HierarchicalDataSource(this.widgetOptions);
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return this.kendoDataSource || new kendo.data.HierarchicalDataSource(this.widgetOptions);
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
exports.default = {
    props: {
        schemaModel: {
            type: Object,
            default: undefined,
            kComposite: 'schema.model'
        },
        schemaModelHasChildren: {
            type: [Boolean, String, Function],
            default: undefined,
            kComposite: 'schema.model.hasChildren'
        },
        schemaModelChildren: {
            type: [String, Object],
            default: undefined,
            kComposite: 'schema.model.children'
        },
        schemaAggregates: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.aggregates'
        },
        schemaData: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.data'
        },
        schemaErrors: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.errors'
        },
        schemaGroups: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.groups'
        },
        schemaModelId: {
            type: String,
            default: undefined,
            kComposite: 'schema.model.id'
        },
        schemaModelFields: {
            type: Object,
            default: undefined,
            kComposite: 'schema.model.fields'
        },
        schemaParse: {
            type: Function,
            default: undefined,
            kComposite: 'schema.parse'
        },
        schemaTotal: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.total'
        },
        schemaType: {
            type: String,
            default: undefined,
            kComposite: 'schema.type'
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

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _KendoDataSourceBase = __webpack_require__(5);

var _KendoDataSourceBase2 = _interopRequireDefault(_KendoDataSourceBase);

var _Schema = __webpack_require__(29);

var _Schema2 = _interopRequireDefault(_Schema);

var _Filter = __webpack_require__(2);

var _Filter2 = _interopRequireDefault(_Filter);

var _Group = __webpack_require__(3);

var _Group2 = _interopRequireDefault(_Group);

var _Sort = __webpack_require__(4);

var _Sort2 = _interopRequireDefault(_Sort);

var _Transport = __webpack_require__(6);

var _Transport2 = _interopRequireDefault(_Transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _KendoDataSourceBase2.default, _Filter2.default, _Group2.default, _Schema2.default, _Sort2.default, _Transport2.default],
    mounted: function mounted() {
        this.kendoDataSource = new kendo.data.SchedulerDataSource(this.widgetOptions);
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return this.kendoDataSource || new kendo.data.SchedulerDataSource(this.widgetOptions);
        }
    }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        schemaModel: {
            type: Object,
            default: undefined,
            kComposite: 'schema.model'
        },
        schemaTimezone: {
            type: String,
            default: undefined,
            kComposite: 'schema.timezone'
        },
        schemaAggregates: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.aggregates'
        },
        schemaData: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.data'
        },
        schemaErrors: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.errors'
        },
        schemaGroups: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.groups'
        },
        schemaModelId: {
            type: String,
            default: undefined,
            kComposite: 'schema.model.id'
        },
        schemaModelFields: {
            type: Object,
            default: undefined,
            kComposite: 'schema.model.fields'
        },
        schemaParse: {
            type: Function,
            default: undefined,
            kComposite: 'schema.parse'
        },
        schemaTotal: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.total'
        },
        schemaType: {
            type: String,
            default: undefined,
            kComposite: 'schema.type'
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

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _KendoDataSourceBase = __webpack_require__(5);

var _KendoDataSourceBase2 = _interopRequireDefault(_KendoDataSourceBase);

var _TreeListDataSourceProps = __webpack_require__(31);

var _TreeListDataSourceProps2 = _interopRequireDefault(_TreeListDataSourceProps);

var _Schema = __webpack_require__(32);

var _Schema2 = _interopRequireDefault(_Schema);

var _Filter = __webpack_require__(2);

var _Filter2 = _interopRequireDefault(_Filter);

var _Group = __webpack_require__(3);

var _Group2 = _interopRequireDefault(_Group);

var _Sort = __webpack_require__(4);

var _Sort2 = _interopRequireDefault(_Sort);

var _Transport = __webpack_require__(6);

var _Transport2 = _interopRequireDefault(_Transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _TreeListDataSourceProps2.default,
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _KendoDataSourceBase2.default, _Filter2.default, _Group2.default, _Schema2.default, _Sort2.default, _Transport2.default],
    mounted: function mounted() {
        this.kendoDataSource = new kendo.data.TreeListDataSource(this.widgetOptions);
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return this.kendoDataSource || new kendo.dataTreeListDataSource(this.widgetOptions);
        }
    }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    schema: {
        type: Object,
        default: undefined
    }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        schemaModel: {
            type: Object,
            default: undefined,
            kComposite: 'schema.model'
        },
        schemaAggregates: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.aggregates'
        },
        schemaData: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.data'
        },
        schemaErrors: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.errors'
        },
        schemaGroups: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.groups'
        },
        schemaModelId: {
            type: String,
            default: undefined,
            kComposite: 'schema.model.id'
        },
        schemaModelFields: {
            type: Object,
            default: undefined,
            kComposite: 'schema.model.fields'
        },
        schemaParse: {
            type: Function,
            default: undefined,
            kComposite: 'schema.parse'
        },
        schemaTotal: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.total'
        },
        schemaType: {
            type: String,
            default: undefined,
            kComposite: 'schema.type'
        }
    }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _KendoDataSourceBase = __webpack_require__(5);

var _KendoDataSourceBase2 = _interopRequireDefault(_KendoDataSourceBase);

var _GanttDataSourceProps = __webpack_require__(34);

var _GanttDataSourceProps2 = _interopRequireDefault(_GanttDataSourceProps);

var _Schema = __webpack_require__(35);

var _Schema2 = _interopRequireDefault(_Schema);

var _Filter = __webpack_require__(2);

var _Filter2 = _interopRequireDefault(_Filter);

var _Group = __webpack_require__(3);

var _Group2 = _interopRequireDefault(_Group);

var _Sort = __webpack_require__(4);

var _Sort2 = _interopRequireDefault(_Sort);

var _Transport = __webpack_require__(6);

var _Transport2 = _interopRequireDefault(_Transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _GanttDataSourceProps2.default,
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _KendoDataSourceBase2.default, _Filter2.default, _Group2.default, _Schema2.default, _Sort2.default, _Transport2.default],
    mounted: function mounted() {
        this.kendoDataSource = new kendo.data.GanttDataSource(this.widgetOptions);
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return this.kendoDataSource || new kendo.data.GanttDataSource(this.widgetOptions);
        }
    }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    schema: {
        type: Object,
        default: undefined
    }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        schemaModel: {
            type: Object,
            default: undefined,
            kComposite: 'schema.model'
        },
        schemaAggregates: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.aggregates'
        },
        schemaData: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.data'
        },
        schemaErrors: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.errors'
        },
        schemaGroups: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.groups'
        },
        schemaModelId: {
            type: String,
            default: undefined,
            kComposite: 'schema.model.id'
        },
        schemaModelFields: {
            type: Object,
            default: undefined,
            kComposite: 'schema.model.fields'
        },
        schemaParse: {
            type: Function,
            default: undefined,
            kComposite: 'schema.parse'
        },
        schemaTotal: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.total'
        },
        schemaType: {
            type: String,
            default: undefined,
            kComposite: 'schema.type'
        }
    }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _KendoDataSourceBase = __webpack_require__(5);

var _KendoDataSourceBase2 = _interopRequireDefault(_KendoDataSourceBase);

var _GanttDependencyDataSourceProps = __webpack_require__(37);

var _GanttDependencyDataSourceProps2 = _interopRequireDefault(_GanttDependencyDataSourceProps);

var _Schema = __webpack_require__(38);

var _Schema2 = _interopRequireDefault(_Schema);

var _Filter = __webpack_require__(2);

var _Filter2 = _interopRequireDefault(_Filter);

var _Group = __webpack_require__(3);

var _Group2 = _interopRequireDefault(_Group);

var _Sort = __webpack_require__(4);

var _Sort2 = _interopRequireDefault(_Sort);

var _Transport = __webpack_require__(6);

var _Transport2 = _interopRequireDefault(_Transport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _GanttDependencyDataSourceProps2.default,
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _KendoDataSourceBase2.default, _Filter2.default, _Group2.default, _Schema2.default, _Sort2.default, _Transport2.default],
    mounted: function mounted() {
        this.kendoDataSource = new kendo.data.GanttDependencyDataSource(this.widgetOptions);
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return this.kendoDataSource || new kendo.data.GanttDependencyDataSource(this.widgetOptions);
        }
    }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    schema: {
        type: Object,
        default: undefined
    }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        schemaModel: {
            type: Object,
            default: undefined,
            kComposite: 'schema.model'
        },
        schemaAggregates: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.aggregates'
        },
        schemaData: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.data'
        },
        schemaErrors: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.errors'
        },
        schemaGroups: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.groups'
        },
        schemaModelId: {
            type: String,
            default: undefined,
            kComposite: 'schema.model.id'
        },
        schemaModelFields: {
            type: Object,
            default: undefined,
            kComposite: 'schema.model.fields'
        },
        schemaParse: {
            type: Function,
            default: undefined,
            kComposite: 'schema.parse'
        },
        schemaTotal: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.total'
        },
        schemaType: {
            type: String,
            default: undefined,
            kComposite: 'schema.type'
        }
    }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _KendoDataSourceBase = __webpack_require__(5);

var _KendoDataSourceBase2 = _interopRequireDefault(_KendoDataSourceBase);

var _PivotDataSourceProps = __webpack_require__(40);

var _PivotDataSourceProps2 = _interopRequireDefault(_PivotDataSourceProps);

var _KendoPivotColumn = __webpack_require__(7);

var _KendoPivotColumn2 = _interopRequireDefault(_KendoPivotColumn);

var _KendoPivotMeasure = __webpack_require__(8);

var _KendoPivotMeasure2 = _interopRequireDefault(_KendoPivotMeasure);

var _KendoPivotRow = __webpack_require__(9);

var _KendoPivotRow2 = _interopRequireDefault(_KendoPivotRow);

var _Schema = __webpack_require__(44);

var _Schema2 = _interopRequireDefault(_Schema);

var _Transport = __webpack_require__(45);

var _Transport2 = _interopRequireDefault(_Transport);

var _Filter = __webpack_require__(2);

var _Filter2 = _interopRequireDefault(_Filter);

var _Group = __webpack_require__(3);

var _Group2 = _interopRequireDefault(_Group);

var _Sort = __webpack_require__(4);

var _Sort2 = _interopRequireDefault(_Sort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _PivotDataSourceProps2.default,
    mixins: [_KendoDataSourceBase2.default, _kendoBaseComponentsVueWrapper.KendoBaseComponent, _Filter2.default, _Group2.default, _Schema2.default, _Sort2.default, _Transport2.default],
    mounted: function mounted() {
        this._resolveChildren();

        this.kendoDataSource = new kendo.data.PivotDataSource(this.widgetOptions);
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return this.kendoDataSource || new kendo.data.PivotDataSource(this.widgetOptions);
        },
        _resolveChildren: function _resolveChildren() {
            this.resolveChildren('columns', _KendoPivotColumn2.default.name);
            this.resolveChildren('measures', _KendoPivotMeasure2.default.name);
            this.resolveChildren('rows', _KendoPivotRow2.default.name);
        }
    }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    columns: {
        type: Array,
        default: undefined
    },
    measures: {
        type: Array,
        default: undefined
    },
    rows: {
        type: Array,
        default: undefined
    },
    transport: {
        type: Object,
        default: undefined
    },
    schema: {
        type: Object,
        default: undefined
    }
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        expand: {
            type: Boolean,
            default: undefined,
            kComposite: 'expand'
        },
        name: {
            type: String,
            default: undefined,
            kComposite: 'name'
        }
    }
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        values: {
            type: Array,
            default: undefined,
            kComposite: 'values'
        },
        axis: {
            type: String,
            default: undefined,
            kComposite: 'axis'
        }
    }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        expand: {
            type: Boolean,
            default: undefined,
            kComposite: 'expand'
        },
        name: {
            type: String,
            default: undefined,
            kComposite: 'name'
        }
    }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        schemaAxes: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.axes'
        },
        schemaCatalogs: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.catalogs'
        },
        schemaCubes: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.cubes'
        },
        schemaCube: {
            type: Object,
            default: undefined,
            kComposite: 'schema.cube'
        },
        schemaData: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.data'
        },
        schemaDimensions: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.dimensions'
        },
        schemaHierarchies: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.hierarchies'
        },
        schemaLevels: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.levels'
        },
        schemaMeasures: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.measures'
        },
        schemaAggregates: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.aggregates'
        },
        schemaErrors: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.errors'
        },
        schemaGroups: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.groups'
        },
        schemaModelId: {
            type: String,
            default: undefined,
            kComposite: 'schema.model.id'
        },
        schemaModelFields: {
            type: Object,
            default: undefined,
            kComposite: 'schema.model.fields'
        },
        schemaParse: {
            type: Function,
            default: undefined,
            kComposite: 'schema.parse'
        },
        schemaTotal: {
            type: [Function, String],
            default: undefined,
            kComposite: 'schema.total'
        },
        schemaType: {
            type: String,
            default: undefined,
            kComposite: 'schema.type'
        }
    }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        transportDiscover: {
            type: [Object, String, Function],
            default: undefined,
            kComposite: 'transport.discover'
        },
        transportConnectionCatalog: {
            type: String,
            default: undefined,
            kComposite: 'transport.connection.catalog'
        },
        transportConnectionCube: {
            type: String,
            default: undefined,
            kComposite: 'transport.connection.cube'
        },
        transportCreate: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.create'
        },
        transportCreateCache: {
            type: Boolean,
            default: undefined,
            kComposite: 'transport.create.cache'
        },
        transportCreateContentType: {
            type: String,
            default: undefined,
            kComposite: 'transport.create.contentType'
        },
        transportCreateData: {
            type: [Object, Function],
            default: undefined,
            kComposite: 'transport.create.data'
        },
        transportCreateDataType: {
            type: String,
            default: undefined,
            kComposite: 'transport.create.dataType'
        },
        transportCreateType: {
            type: String,
            default: undefined,
            kComposite: 'transport.create.type'
        },
        transportCreateUrl: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.create.url'
        },
        transportDestroy: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.destroy'
        },
        transportDestroyCache: {
            type: Boolean,
            default: undefined,
            kComposite: 'transport.destroy.cache'
        },
        transportDestroyContentType: {
            type: String,
            default: undefined,
            kComposite: 'transport.destroy.contentType'
        },
        transportDestroyData: {
            type: [Object, Function],
            default: undefined,
            kComposite: 'transport.destroy.data'
        },
        transportDestroyDataType: {
            type: String,
            default: undefined,
            kComposite: 'transport.destroy.dataType'
        },
        transportDestroyType: {
            type: String,
            default: undefined,
            kComposite: 'transport.destroy.type'
        },
        transportDestroyUrl: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.destroy.url'
        },
        transportParameterMap: {
            type: Function,
            default: undefined,
            kComposite: 'transport.parameterMap'
        },
        transportPush: {
            type: Function,
            default: undefined,
            kComposite: 'transport.push'
        },
        transportRead: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.read'
        },
        transportReadCache: {
            type: Boolean,
            default: undefined,
            kComposite: 'transport.read.cache'
        },
        transportReadContentType: {
            type: String,
            default: undefined,
            kComposite: 'transport.read.contentType'
        },
        transportReadData: {
            type: [Object, Function],
            default: undefined,
            kComposite: 'transport.read.data'
        },
        transportReadDataType: {
            type: String,
            default: undefined,
            kComposite: 'transport.read.dataType'
        },
        transportReadType: {
            type: String,
            default: undefined,
            kComposite: 'transport.read.type'
        },
        transportReadUrl: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.read.url'
        },
        transportSignalrClientCreate: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.client.create'
        },
        transportSignalrClientDestroy: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.client.destroy'
        },
        transportSignalrClientRead: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.client.read'
        },
        transportSignalrClientUpdate: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.client.update'
        },
        transportSignalrHub: {
            type: Object,
            default: undefined,
            kComposite: 'transport.signalr.hub'
        },
        transportSignalrPromise: {
            type: Object,
            default: undefined,
            kComposite: 'transport.signalr.promise'
        },
        transportSignalrServerCreate: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.server.create'
        },
        transportSignalrServerDestroy: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.server.destroy'
        },
        transportSignalrServerRead: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.server.read'
        },
        transportSignalrServerUpdate: {
            type: String,
            default: undefined,
            kComposite: 'transport.signalr.server.update'
        },
        transportSubmit: {
            type: Function,
            default: undefined,
            kComposite: 'transport.submit'
        },
        transportUpdate: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.update'
        },
        transportUpdateCache: {
            type: Boolean,
            default: undefined,
            kComposite: 'transport.update.cache'
        },
        transportUpdateContentType: {
            type: String,
            default: undefined,
            kComposite: 'transport.update.contentType'
        },
        transportUpdateData: {
            type: [Object, Function],
            default: undefined,
            kComposite: 'transport.update.data'
        },
        transportUpdateDataType: {
            type: String,
            default: undefined,
            kComposite: 'transport.update.dataType'
        },
        transportUpdateType: {
            type: String,
            default: undefined,
            kComposite: 'transport.update.type'
        },
        transportUpdateUrl: {
            type: [String, Function],
            default: undefined,
            kComposite: 'transport.update.url'
        }
    }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KendoDataSource = __webpack_require__(10);

var _KendoDataSource2 = _interopRequireDefault(_KendoDataSource);

var _KendoHierarchicalDataSource = __webpack_require__(12);

var _KendoHierarchicalDataSource2 = _interopRequireDefault(_KendoHierarchicalDataSource);

var _KendoSchedulerDataSource = __webpack_require__(13);

var _KendoSchedulerDataSource2 = _interopRequireDefault(_KendoSchedulerDataSource);

var _KendoTreeListDataSource = __webpack_require__(14);

var _KendoTreeListDataSource2 = _interopRequireDefault(_KendoTreeListDataSource);

var _KendoGanttDataSource = __webpack_require__(15);

var _KendoGanttDataSource2 = _interopRequireDefault(_KendoGanttDataSource);

var _KendoGanttDependencyDataSource = __webpack_require__(16);

var _KendoGanttDependencyDataSource2 = _interopRequireDefault(_KendoGanttDependencyDataSource);

var _KendoPivotDataSource = __webpack_require__(17);

var _KendoPivotDataSource2 = _interopRequireDefault(_KendoPivotDataSource);

var _KendoPivotColumn = __webpack_require__(7);

var _KendoPivotColumn2 = _interopRequireDefault(_KendoPivotColumn);

var _KendoPivotMeasure = __webpack_require__(8);

var _KendoPivotMeasure2 = _interopRequireDefault(_KendoPivotMeasure);

var _KendoPivotRow = __webpack_require__(9);

var _KendoPivotRow2 = _interopRequireDefault(_KendoPivotRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KendoDataSourceInstaller = function () {
    function KendoDataSourceInstaller() {
        _classCallCheck(this, KendoDataSourceInstaller);
    }

    _createClass(KendoDataSourceInstaller, null, [{
        key: 'install',
        value: function install(Vue) {
            Vue.component(_KendoDataSource2.default.name, _KendoDataSource2.default);
            Vue.component(_KendoHierarchicalDataSource2.default.name, _KendoHierarchicalDataSource2.default);
            Vue.component(_KendoSchedulerDataSource2.default.name, _KendoSchedulerDataSource2.default);
            Vue.component(_KendoTreeListDataSource2.default.name, _KendoTreeListDataSource2.default);
            Vue.component(_KendoGanttDataSource2.default.name, _KendoGanttDataSource2.default);
            Vue.component(_KendoGanttDependencyDataSource2.default.name, _KendoGanttDependencyDataSource2.default);
            Vue.component(_KendoPivotDataSource2.default.name, _KendoPivotDataSource2.default);
            Vue.component(_KendoPivotColumn2.default.name, _KendoPivotColumn2.default);
            Vue.component(_KendoPivotMeasure2.default.name, _KendoPivotMeasure2.default);
            Vue.component(_KendoPivotRow2.default.name, _KendoPivotRow2.default);
        }
    }]);

    return KendoDataSourceInstaller;
}();

exports.default = KendoDataSourceInstaller;

// Automatic installation if Vue has been added to the global scope.

if (typeof window !== 'undefined' && window.Vue && window.Vue.use) {
    window.Vue.use(KendoDataSourceInstaller);
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=kendo-datasource-vue-wrapper.js.map