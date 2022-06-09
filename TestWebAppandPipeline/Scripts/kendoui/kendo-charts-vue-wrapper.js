(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["KendoChartsVueWrapper"] = factory(require("vue"));
	else
		root["KendoChartsVueWrapper"] = factory(root["Vue"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

var _Series = __webpack_require__(16);

var _Series2 = _interopRequireDefault(_Series);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KendoChartSeriesItem = {
    name: 'kendo-chart-series-item',
    render: function render() {
        return _vue2.default.prototype._e;
    },

    mixins: [_Series2.default]
};

exports.default = KendoChartSeriesItem;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _SeriesProps = __webpack_require__(38);

var _SeriesProps2 = _interopRequireDefault(_SeriesProps);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KendoSparklineSeriesItem = {
    name: 'kendo-sparkline-series-item',
    render: function render() {
        return _vue2.default.prototype._e;
    },

    mixins: [_SeriesProps2.default]
};

exports.default = KendoSparklineSeriesItem;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoChartMixin = __webpack_require__(9);

var _KendoChartMixin2 = _interopRequireDefault(_KendoChartMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-chart',
    mixins: [_KendoChartMixin2.default]
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoChartMixinBase = __webpack_require__(10);

var _KendoChartMixinBase2 = _interopRequireDefault(_KendoChartMixinBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-chart',
    mixins: [_KendoChartMixinBase2.default]
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KendoSharedMethods = exports.KendoBaseInputComponent = exports.KendoBaseDatasourceComponent = exports.KendoBaseComponent = undefined;

var _kendoBaseComponent = __webpack_require__(11);

var _kendoBaseComponent2 = _interopRequireDefault(_kendoBaseComponent);

var _kendoBaseDatasourceComponent = __webpack_require__(12);

var _kendoBaseDatasourceComponent2 = _interopRequireDefault(_kendoBaseDatasourceComponent);

var _kendoBaseInputComponent = __webpack_require__(13);

var _kendoBaseInputComponent2 = _interopRequireDefault(_kendoBaseInputComponent);

var _kendoSharedMethods = __webpack_require__(14);

var _kendoSharedMethods2 = _interopRequireDefault(_kendoSharedMethods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.KendoBaseComponent = _kendoBaseComponent2.default;
exports.KendoBaseDatasourceComponent = _kendoBaseDatasourceComponent2.default;
exports.KendoBaseInputComponent = _kendoBaseInputComponent2.default;
exports.KendoSharedMethods = _kendoSharedMethods2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoStockChartMixin = __webpack_require__(33);

var _KendoStockChartMixin2 = _interopRequireDefault(_KendoStockChartMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-stockchart',
    mixins: [_KendoStockChartMixin2.default]
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoSparklineMixin = __webpack_require__(36);

var _KendoSparklineMixin2 = _interopRequireDefault(_KendoSparklineMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'kendo-sparkline',
    mixins: [_KendoSparklineMixin2.default]
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartInstaller = exports.KendoChartInstaller = exports.SparklineSeriesItem = exports.KendoSparklineSeriesItem = exports.Sparkline = exports.KendoSparkline = exports.StockChart = exports.KendoStockChart = exports.ChartSeriesItem = exports.KendoChartSeriesItem = exports.Chart = exports.KendoChart = undefined;

var _KendoChart = __webpack_require__(3);

var _KendoChart2 = _interopRequireDefault(_KendoChart);

var _KendoChartSeriesItem = __webpack_require__(1);

var _KendoChartSeriesItem2 = _interopRequireDefault(_KendoChartSeriesItem);

var _KendoStockChart = __webpack_require__(6);

var _KendoStockChart2 = _interopRequireDefault(_KendoStockChart);

var _KendoSparkline = __webpack_require__(7);

var _KendoSparkline2 = _interopRequireDefault(_KendoSparkline);

var _KendoSparklineSeriesItem = __webpack_require__(2);

var _KendoSparklineSeriesItem2 = _interopRequireDefault(_KendoSparklineSeriesItem);

var _kendoChartInstaller = __webpack_require__(45);

var _kendoChartInstaller2 = _interopRequireDefault(_kendoChartInstaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.KendoChart = _KendoChart2.default;
exports.Chart = _KendoChart2.default;
exports.KendoChartSeriesItem = _KendoChartSeriesItem2.default;
exports.ChartSeriesItem = _KendoChartSeriesItem2.default;
exports.KendoStockChart = _KendoStockChart2.default;
exports.StockChart = _KendoStockChart2.default;
exports.KendoSparkline = _KendoSparkline2.default;
exports.Sparkline = _KendoSparkline2.default;
exports.KendoSparklineSeriesItem = _KendoSparklineSeriesItem2.default;
exports.SparklineSeriesItem = _KendoSparklineSeriesItem2.default;
exports.KendoChartInstaller = _kendoChartInstaller2.default;
exports.ChartInstaller = _kendoChartInstaller2.default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _KendoChartBase = __webpack_require__(4);

var _KendoChartBase2 = _interopRequireDefault(_KendoChartBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_KendoChartBase2.default],
    mounted: function mounted() {
        kendo.jQuery(this.$el).kendoChart(this.widgetOptions);

        this.$emit('kendowidgetready', this.kendoWidget());
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(5);

var _ChartProps = __webpack_require__(15);

var _ChartProps2 = _interopRequireDefault(_ChartProps);

var _KendoChartSeriesItem = __webpack_require__(1);

var _KendoChartSeriesItem2 = _interopRequireDefault(_KendoChartSeriesItem);

var _AxisDefaults = __webpack_require__(17);

var _AxisDefaults2 = _interopRequireDefault(_AxisDefaults);

var _CategoryAxis = __webpack_require__(18);

var _CategoryAxis2 = _interopRequireDefault(_CategoryAxis);

var _ChartArea = __webpack_require__(19);

var _ChartArea2 = _interopRequireDefault(_ChartArea);

var _Legend = __webpack_require__(20);

var _Legend2 = _interopRequireDefault(_Legend);

var _Panes = __webpack_require__(21);

var _Panes2 = _interopRequireDefault(_Panes);

var _Pannable = __webpack_require__(22);

var _Pannable2 = _interopRequireDefault(_Pannable);

var _Pdf = __webpack_require__(23);

var _Pdf2 = _interopRequireDefault(_Pdf);

var _PlotArea = __webpack_require__(24);

var _PlotArea2 = _interopRequireDefault(_PlotArea);

var _Series = __webpack_require__(25);

var _Series2 = _interopRequireDefault(_Series);

var _SeriesDefaults = __webpack_require__(26);

var _SeriesDefaults2 = _interopRequireDefault(_SeriesDefaults);

var _Title = __webpack_require__(27);

var _Title2 = _interopRequireDefault(_Title);

var _Tooltip = __webpack_require__(28);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _ValueAxis = __webpack_require__(29);

var _ValueAxis2 = _interopRequireDefault(_ValueAxis);

var _XAxis = __webpack_require__(30);

var _XAxis2 = _interopRequireDefault(_XAxis);

var _YAxis = __webpack_require__(31);

var _YAxis2 = _interopRequireDefault(_YAxis);

var _Zoomable = __webpack_require__(32);

var _Zoomable2 = _interopRequireDefault(_Zoomable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _ChartProps2.default,
    render: function render(h) {
        return h('div', this.$slots.default);
    },

    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _AxisDefaults2.default, _CategoryAxis2.default, _ChartArea2.default, _Legend2.default, _Panes2.default, _Pannable2.default, _Pdf2.default, _PlotArea2.default, _Series2.default, _SeriesDefaults2.default, _Title2.default, _Tooltip2.default, _ValueAxis2.default, _XAxis2.default, _YAxis2.default, _Zoomable2.default],
    mounted: function mounted() {
        this._resolveChildren();
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return kendo.jQuery(this.$el).getKendoChart();
        },
        _resolveChildren: function _resolveChildren() {
            this.resolveChildren('series', _KendoChartSeriesItem2.default.name);
        }
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
    props: {
        disabled: Boolean,
        readonly: Boolean
    },
    render: function render(h) {
        return h('div');
    },
    created: function created() {
        this.resolveWidgetOptions();
        this.$_nativeTemplates = [];
        this.$on('kendowidgetready', this.ready);
    },
    beforeDestroy: function beforeDestroy() {
        if (this.kendoWidget() && this.kendoWidget().destroy) {
            this.kendoWidget().destroy();
            if (this.$_nativeTemplates.length) {
                for (var i = 0; i < this.$_nativeTemplates.length; i++) {
                    this.$_nativeTemplates[i].$destroy();
                }
            }
        }
    },
    mounted: function mounted() {
        if (this.$el.classList.length > 0) {
            this.nativeClasses = [].concat(_toConsumableArray(this.$el.classList));
        } else {
            this.nativeClasses = [];
        }

        for (var key in this.$options.propsData) {
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
        toggleClasses: function toggleClasses() {
            var that = this;
            var $element = kendo.jQuery(that.$el);
            var $wrapper = that.kendoWidget().wrapper;

            if ($wrapper && $wrapper[0] !== $element[0]) {
                that.nativeClasses.forEach(function (item) {
                    $wrapper.removeClass(item);
                });

                that.nativeClasses = [].concat(_toConsumableArray(that.$el.classList));

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

            if (that.kendoWidget().setOptions) {
                that.kendoWidget().setOptions(that.widgetOptions);
            }
        },

        transformTemplate: function transformTemplate(key, val) {
            var that = this;
            var object;
            var templateDefinition = val || that.$options.propsData[key];
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
                var vueObject = new _vue2.default(object.template);
                vueObject.$data.templateArgs = object.templateArgs;

                var kendoguid = 'kendo' + kendo.guid();

                that.$nextTick(function () {
                    vueObject.$mount('#' + kendoguid);
                    that.$_nativeTemplates.push(vueObject);
                });

                return '<div id="' + kendoguid + '"></div>';
            };
        },
        resolveChildren: function resolveChildren(prop, name) {
            if (!this.widgetOptions[prop] && this.$slots.default) {
                var items = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.$slots.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var childSlot = _step.value;

                        if (childSlot.tag && childSlot.tag.indexOf(name) !== -1) {
                            var itemOptions = this.parseOptions(childSlot.componentInstance);

                            if (itemOptions.dataSourceRef) {
                                this.setInnerDataSource('dataSourceRef', 'dataSource', itemOptions);
                            }

                            items.push(itemOptions);
                            this.handleWatcher(childSlot.componentInstance);
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
            childInstance.stashedPropsData = JSON.stringify(childInstance.$options.propsData);

            if (!childInstance._isWatchAttached) {
                childInstance.$watch('$props', function () {
                    var propsAsJson = JSON.stringify(childInstance.$options.propsData);
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
        parseOptions: function parseOptions(component) {
            var that = component || this;
            var options = {};
            for (var key in that.$options.propsData) {
                var propOptions = that.$options.props[key];
                var val = that.$options.propsData[key];

                var compositeProps = propOptions.kComposite;

                if (!compositeProps) {
                    if (key.toLowerCase().indexOf('template') !== -1 && val instanceof Function) {
                        options[key] = this.transformTemplate(key, val);
                    } else {
                        options[key] = val;
                    }
                } else {
                    this.addCompositeProperty(options, compositeProps.split('.'), that.$props[key]);
                }
            }

            Object.keys(that.$props).forEach(function (event) {
                if (that.$listeners && that.$listeners[event.toLowerCase()]) {
                    var kendoIndex = event.lastIndexOf('kendo');
                    var kendoEvent;
                    if (kendoIndex !== -1) {
                        kendoEvent = event.replace('kendo', '').toLowerCase();
                    }

                    options[kendoEvent || event] = that.$listeners[event.toLowerCase()];
                }
            });

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
        ready: function ready() {
            var that = this;

            if (this.$el.classList.length > 0) {
                that.kendoClasses = [].concat(_toConsumableArray(that.$el.classList)).filter(function (item) {
                    return that.nativeClasses.indexOf(item) < 0;
                });
            }

            if (that.$options.propsData.disabled) {
                that.makeDisabled(true);
            }

            if (that.$options.propsData.readonly) {
                that.makeReadonly(true);
            }
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
exports.default = {
    props: {
        dataSourceRef: String
    },
    render: function render(h) {
        return h('div');
    },

    methods: {
        findDataSource: function findDataSource() {
            var dataSource;
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
                    referredDataSource.$emit('change', ev);
                });

                referredDataSource.kendoDataSource.bind('error', function (ev) {
                    referredDataSource.$emit('error', ev);
                });

                referredDataSource.kendoDataSource.bind('push', function (ev) {
                    referredDataSource.$emit('push', ev);
                });

                referredDataSource.kendoDataSource.bind('requestEnd', function (ev) {
                    referredDataSource.$emit('requestend', ev);
                });

                referredDataSource.kendoDataSource.bind('requestStart', function (ev) {
                    referredDataSource.$emit('requeststart', ev);
                });

                referredDataSource.kendoDataSource.bind('sync', function (ev) {
                    referredDataSource.$emit('sync', ev);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    render: function render(h) {
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        resolveInnerTags: function resolveInnerTags(tagName) {
            var items = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.$slots.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var childSlot = _step.value;

                    if (childSlot.tag && childSlot.tag.indexOf(tagName) !== -1) {
                        var childOptions = childSlot.componentOptions;
                        var item = childOptions.propsData;

                        if (!childOptions.propsData.items) {
                            item.items = childSlot.componentInstance.subitems;
                        }

                        items.push(item);
                        this.handleWatcher(childSlot.componentInstance);
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

            if (!childInstance._isWatchAttached) {
                childInstance.$watch('$props', function () {
                    if (that.updateWidget) {
                        that.updateWidget();
                    } else if (that._resolveInnerChildren) {
                        that._resolveInnerChildren();
                    }
                }, { deep: true });

                childInstance._isWatchAttached = true;
            }
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
    autoBind: Boolean,
    axisDefaults: Object,
    categoryAxis: Array | Object,
    chartArea: Object,
    dataSource: Object | Array,
    legend: Object,
    panes: Array | Object,
    pannable: Boolean | Object,
    pdf: Object,
    plotArea: Object,
    renderAs: String,
    series: Array,
    seriesColors: Array,
    seriesDefaults: Object,
    theme: String,
    title: String | Object,
    tooltip: Object,
    transitions: Boolean,
    valueAxis: Array | Object,
    xAxis: Array | Object,
    yAxis: Array | Object,
    zoomable: Boolean | Object,

    // Events
    axisLabelClick: Function,
    dataBound: Function,
    drag: Function,
    dragEnd: Function,
    dragStart: Function,
    legendItemClick: Function,
    legendItemHover: Function,
    noteClick: Function,
    noteHover: Function,
    plotAreaClick: Function,
    plotAreaHover: Function,
    render: Function,
    select: Function,
    selectEnd: Function,
    selectStart: Function,
    seriesClick: Function,
    seriesHover: Function,
    zoom: Function,
    zoomEnd: Function,
    zoomStart: Function
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        aggregate: {
            type: String | Function,
            kComposite: 'aggregate'
        },
        axis: {
            type: String,
            kComposite: 'axis'
        },
        borderColor: {
            type: String | Function,
            kComposite: 'border.color'
        },
        borderDashType: {
            type: String | Function,
            kComposite: 'border.dashType'
        },
        borderOpacity: {
            type: Number | Function,
            kComposite: 'border.opacity'
        },
        borderWidth: {
            type: Number | Function,
            kComposite: 'border.width'
        },
        categoryAxis: {
            type: String,
            kComposite: 'categoryAxis'
        },
        categoryField: {
            type: String,
            kComposite: 'categoryField'
        },
        closeField: {
            type: String,
            kComposite: 'closeField'
        },
        color: {
            type: String | Function,
            kComposite: 'color'
        },
        colorField: {
            type: String,
            kComposite: 'colorField'
        },
        connectorsColor: {
            type: String | Function,
            kComposite: 'connectors.color'
        },
        connectorsPadding: {
            type: Number,
            kComposite: 'connectors.padding'
        },
        connectorsWidth: {
            type: Number,
            kComposite: 'connectors.width'
        },
        currentField: {
            type: String,
            kComposite: 'currentField'
        },
        dashType: {
            type: String,
            kComposite: 'dashType'
        },
        data: {
            type: Array,
            kComposite: 'data'
        },
        downColor: {
            type: String | Function,
            kComposite: 'downColor'
        },
        downColorField: {
            type: String,
            kComposite: 'downColorField'
        },
        segmentSpacing: {
            type: Number,
            kComposite: 'segmentSpacing'
        },
        summaryField: {
            type: String,
            kComposite: 'summaryField'
        },
        neckRatio: {
            type: Number,
            kComposite: 'neckRatio'
        },
        dynamicSlope: {
            type: Boolean,
            kComposite: 'dynamicSlope'
        },
        dynamicHeight: {
            type: Boolean,
            kComposite: 'dynamicHeight'
        },
        errorBarsValue: {
            type: String | Number | Array | Function,
            kComposite: 'errorBars.value'
        },
        errorBarsVisual: {
            type: Function,
            kComposite: 'errorBars.visual'
        },
        errorBarsXValue: {
            type: String | Number | Array | Function,
            kComposite: 'errorBars.xValue'
        },
        errorBarsYValue: {
            type: String | Number | Array | Function,
            kComposite: 'errorBars.yValue'
        },
        errorBarsEndCaps: {
            type: Boolean,
            kComposite: 'errorBars.endCaps'
        },
        errorBarsColor: {
            type: String,
            kComposite: 'errorBars.color'
        },
        errorBarslineWidth: {
            type: Number,
            kComposite: 'errorBars.line.width'
        },
        errorBarslineDashType: {
            type: String,
            kComposite: 'errorBars.line.dashType'
        },
        errorLowField: {
            type: String,
            kComposite: 'errorLowField'
        },
        errorHighField: {
            type: String,
            kComposite: 'errorHighField'
        },
        xErrorLowField: {
            type: String,
            kComposite: 'xErrorLowField'
        },
        xErrorHighField: {
            type: String,
            kComposite: 'xErrorHighField'
        },
        yErrorLowField: {
            type: String,
            kComposite: 'yErrorLowField'
        },
        yErrorHighField: {
            type: String,
            kComposite: 'yErrorHighField'
        },
        explodeField: {
            type: String,
            kComposite: 'explodeField'
        },
        field: {
            type: String,
            kComposite: 'field'
        },
        fromField: {
            type: String,
            kComposite: 'fromField'
        },
        toField: {
            type: String,
            kComposite: 'toField'
        },
        noteTextField: {
            type: String,
            kComposite: 'noteTextField'
        },
        lowerField: {
            type: String,
            kComposite: 'lowerField'
        },
        q1Field: {
            type: String,
            kComposite: 'q1Field'
        },
        medianField: {
            type: String,
            kComposite: 'medianField'
        },
        q3Field: {
            type: String,
            kComposite: 'q3Field'
        },
        upperField: {
            type: String,
            kComposite: 'upperField'
        },
        meanField: {
            type: String,
            kComposite: 'meanField'
        },
        outliersField: {
            type: String,
            kComposite: 'outliersField'
        },
        gap: {
            type: Number,
            kComposite: 'gap'
        },
        highField: {
            type: String,
            kComposite: 'highField'
        },
        highlightBorderColor: {
            type: String,
            kComposite: 'highlight.border.color'
        },
        highlightBorderOpacity: {
            type: Number,
            kComposite: 'highlight.border.opacity'
        },
        highlightBorderWidth: {
            type: Number,
            kComposite: 'highlight.border.width'
        },
        highlightColor: {
            type: String,
            kComposite: 'highlight.color'
        },
        highlightlineDashType: {
            type: String,
            kComposite: 'highlight.line.dashType'
        },
        highlightlineColor: {
            type: String,
            kComposite: 'highlight.line.color'
        },
        highlightlineOpacity: {
            type: Number,
            kComposite: 'highlight.line.opacity'
        },
        highlightlineWidth: {
            type: Number,
            kComposite: 'highlight.line.width'
        },
        highlightOpacity: {
            type: Number,
            kComposite: 'highlight.opacity'
        },
        highlightToggle: {
            type: Function,
            kComposite: 'highlight.toggle'
        },
        highlightVisible: {
            type: Boolean,
            kComposite: 'highlight.visible'
        },
        highlightVisual: {
            type: Function,
            kComposite: 'highlight.visual'
        },
        holeSize: {
            type: Number,
            kComposite: 'holeSize'
        },
        labelsAlign: {
            type: String,
            kComposite: 'labels.align'
        },
        labelsBackground: {
            type: String | Function,
            kComposite: 'labels.background'
        },
        labelsBorderColor: {
            type: String | Function,
            kComposite: 'labels.border.color'
        },
        labelsBorderDashType: {
            type: String | Function,
            kComposite: 'labels.border.dashType'
        },
        labelsBorderWidth: {
            type: Number | Function,
            kComposite: 'labels.border.width'
        },
        labelsColor: {
            type: String | Function,
            kComposite: 'labels.color'
        },
        labelsDistance: {
            type: Number,
            kComposite: 'labels.distance'
        },
        labelsFont: {
            type: String | Function,
            kComposite: 'labels.font'
        },
        labelsFormat: {
            type: String | Function,
            kComposite: 'labels.format'
        },
        labelsmargin: {
            type: Number,
            kComposite: 'labels.margin'
        },
        labelsmarginBottom: {
            type: Number,
            kComposite: 'labels.margin.bottom'
        },
        labelsmarginLeft: {
            type: Number,
            kComposite: 'labels.margin.left'
        },
        labelsmarginRight: {
            type: Number,
            kComposite: 'labels.margin.right'
        },
        labelsmarginTop: {
            type: Number,
            kComposite: 'labels.margin.top'
        },
        labelsPadding: {
            type: Number,
            kComposite: 'labels.padding'
        },
        labelsPaddingBottom: {
            type: Number,
            kComposite: 'labels.padding.bottom'
        },
        labelsPaddingLeft: {
            type: Number,
            kComposite: 'labels.padding.left'
        },
        labelsPaddingRight: {
            type: Number,
            kComposite: 'labels.padding.right'
        },
        labelsPaddingTop: {
            type: Number,
            kComposite: 'labels.padding.top'
        },
        labelsPosition: {
            type: String | Function,
            kComposite: 'labels.position'
        },
        labelsRotation: {
            type: String | Number,
            kComposite: 'labels.rotation'
        },
        labelsTemplate: {
            type: String | Function,
            kComposite: 'labels.template'
        },
        labelsVisible: {
            type: Boolean | Function,
            kComposite: 'labels.visible'
        },
        labelsVisual: {
            type: Function,
            kComposite: 'labels.visual'
        },
        labelsFromBackground: {
            type: String | Function,
            kComposite: 'labels.from.background'
        },
        labelsFromBorderColor: {
            type: String | Function,
            kComposite: 'labels.from.border.color'
        },
        labelsFromBorderDashType: {
            type: String | Function,
            kComposite: 'labels.from.border.dashType'
        },
        labelsFromBorderWidth: {
            type: Number | Function,
            kComposite: 'labels.from.border.width'
        },
        labelsFromColor: {
            type: String | Function,
            kComposite: 'labels.from.color'
        },
        labelsFromFont: {
            type: String | Function,
            kComposite: 'labels.from.font'
        },
        labelsFromFormat: {
            type: String | Function,
            kComposite: 'labels.from.format'
        },
        labelsFrommargin: {
            type: Number,
            kComposite: 'labels.from.margin'
        },
        labelsFrommarginBottom: {
            type: Number,
            kComposite: 'labels.from.margin.bottom'
        },
        labelsFrommarginLeft: {
            type: Number,
            kComposite: 'labels.from.margin.left'
        },
        labelsFrommarginRight: {
            type: Number,
            kComposite: 'labels.from.margin.right'
        },
        labelsFrommarginTop: {
            type: Number,
            kComposite: 'labels.from.margin.top'
        },
        labelsFromPadding: {
            type: Number,
            kComposite: 'labels.from.padding'
        },
        labelsFromPaddingBottom: {
            type: Number,
            kComposite: 'labels.from.padding.bottom'
        },
        labelsFromPaddingLeft: {
            type: Number,
            kComposite: 'labels.from.padding.left'
        },
        labelsFromPaddingRight: {
            type: Number,
            kComposite: 'labels.from.padding.right'
        },
        labelsFromPaddingTop: {
            type: Number,
            kComposite: 'labels.from.padding.top'
        },
        labelsFromPosition: {
            type: String | Function,
            kComposite: 'labels.from.position'
        },
        labelsFromTemplate: {
            type: String | Function,
            kComposite: 'labels.from.template'
        },
        labelsFromVisible: {
            type: Boolean | Function,
            kComposite: 'labels.from.visible'
        },
        labelsToBackground: {
            type: String | Function,
            kComposite: 'labels.to.background'
        },
        labelsToBorderColor: {
            type: String | Function,
            kComposite: 'labels.to.border.color'
        },
        labelsToBorderDashType: {
            type: String | Function,
            kComposite: 'labels.to.border.dashType'
        },
        labelsToBorderWidth: {
            type: Number | Function,
            kComposite: 'labels.to.border.width'
        },
        labelsToColor: {
            type: String | Function,
            kComposite: 'labels.to.color'
        },
        labelsToFont: {
            type: String | Function,
            kComposite: 'labels.to.font'
        },
        labelsToFormat: {
            type: String | Function,
            kComposite: 'labels.to.format'
        },
        labelsTomargin: {
            type: Number,
            kComposite: 'labels.to.margin'
        },
        labelsTomarginBottom: {
            type: Number,
            kComposite: 'labels.to.margin.bottom'
        },
        labelsTomarginLeft: {
            type: Number,
            kComposite: 'labels.to.margin.left'
        },
        labelsTomarginRight: {
            type: Number,
            kComposite: 'labels.to.margin.right'
        },
        labelsTomarginTop: {
            type: Number,
            kComposite: 'labels.to.margin.top'
        },
        labelsToPadding: {
            type: Number,
            kComposite: 'labels.to.padding'
        },
        labelsToPaddingBottom: {
            type: Number,
            kComposite: 'labels.to.padding.bottom'
        },
        labelsToPaddingLeft: {
            type: Number,
            kComposite: 'labels.to.padding.left'
        },
        labelsToPaddingRight: {
            type: Number,
            kComposite: 'labels.to.padding.right'
        },
        labelsToPaddingTop: {
            type: Number,
            kComposite: 'labels.to.padding.top'
        },
        labelsToPosition: {
            type: String | Function,
            kComposite: 'labels.to.position'
        },
        labelsToTemplate: {
            type: String | Function,
            kComposite: 'labels.to.template'
        },
        labelsToVisible: {
            type: Boolean | Function,
            kComposite: 'labels.to.visible'
        },
        line: {
            type: String,
            kComposite: 'line'
        },
        lineColor: {
            type: String,
            kComposite: 'line.color'
        },
        lineOpacity: {
            type: Number,
            kComposite: 'line.opacity'
        },
        lineWidth: {
            type: String,
            kComposite: 'line.width'
        },
        lineStyle: {
            type: String,
            kComposite: 'line.style'
        },
        lowField: {
            type: String,
            kComposite: 'lowField'
        },
        margin: {
            type: Number,
            kComposite: 'margin'
        },
        marginBottom: {
            type: Number,
            kComposite: 'margin.bottom'
        },
        marginLeft: {
            type: Number,
            kComposite: 'margin.left'
        },
        marginRight: {
            type: Number,
            kComposite: 'margin.right'
        },
        marginTop: {
            type: Number,
            kComposite: 'margin.top'
        },
        markersBackground: {
            type: String | Function,
            kComposite: 'markers.background'
        },
        markersBorder: {
            type: Function,
            kComposite: 'markers.border'
        },
        markersBorderColor: {
            type: String | Function,
            kComposite: 'markers.border.color'
        },
        markersBorderWidth: {
            type: Number | Function,
            kComposite: 'markers.border.width'
        },
        markersFromBackground: {
            type: String | Function,
            kComposite: 'markers.from.background'
        },
        markersFromBorder: {
            type: Function,
            kComposite: 'markers.from.border'
        },
        markersFromBorderColor: {
            type: String | Function,
            kComposite: 'markers.from.border.color'
        },
        markersFromBorderWidth: {
            type: Number | Function,
            kComposite: 'markers.from.border.width'
        },
        markersFromSize: {
            type: Number | Function,
            kComposite: 'markers.from.size'
        },
        markersFromType: {
            type: String | Function,
            kComposite: 'markers.from.type'
        },
        markersFromVisible: {
            type: Boolean | Function,
            kComposite: 'markers.from.visible'
        },
        markersFromVisual: {
            type: Function,
            kComposite: 'markers.from.visual'
        },
        markersFromRotation: {
            type: Number | Function,
            kComposite: 'markers.from.rotation'
        },
        markersSize: {
            type: Number | Function,
            kComposite: 'markers.size'
        },
        markersToBackground: {
            type: String | Function,
            kComposite: 'markers.to.background'
        },
        markersToBorder: {
            type: Function,
            kComposite: 'markers.to.border'
        },
        markersToBorderColor: {
            type: String | Function,
            kComposite: 'markers.to.border.color'
        },
        markersToBorderWidth: {
            type: Number | Function,
            kComposite: 'markers.to.border.width'
        },
        markersToSize: {
            type: Number | Function,
            kComposite: 'markers.to.size'
        },
        markersToType: {
            type: String | Function,
            kComposite: 'markers.to.type'
        },
        markersToVisible: {
            type: Boolean | Function,
            kComposite: 'markers.to.visible'
        },
        markersToVisual: {
            type: Function,
            kComposite: 'markers.to.visual'
        },
        markersToRotation: {
            type: Number | Function,
            kComposite: 'markers.to.rotation'
        },
        markersType: {
            type: String | Function,
            kComposite: 'markers.type'
        },
        markersVisible: {
            type: Boolean | Function,
            kComposite: 'markers.visible'
        },
        markersVisual: {
            type: Function,
            kComposite: 'markers.visual'
        },
        markersRotation: {
            type: Number | Function,
            kComposite: 'markers.rotation'
        },
        outliersBackground: {
            type: String | Function,
            kComposite: 'outliers.background'
        },
        outliersBorder: {
            type: Function,
            kComposite: 'outliers.border'
        },
        outliersBorderColor: {
            type: String | Function,
            kComposite: 'outliers.border.color'
        },
        outliersBorderWidth: {
            type: Number | Function,
            kComposite: 'outliers.border.width'
        },
        outliersSize: {
            type: Number | Function,
            kComposite: 'outliers.size'
        },
        outliersType: {
            type: String | Function,
            kComposite: 'outliers.type'
        },
        outliersRotation: {
            type: Number | Function,
            kComposite: 'outliers.rotation'
        },
        extremesBackground: {
            type: String | Function,
            kComposite: 'extremes.background'
        },
        extremesBorder: {
            type: Function,
            kComposite: 'extremes.border'
        },
        extremesBorderColor: {
            type: String | Function,
            kComposite: 'extremes.border.color'
        },
        extremesBorderWidth: {
            type: Number | Function,
            kComposite: 'extremes.border.width'
        },
        extremesSize: {
            type: Number | Function,
            kComposite: 'extremes.size'
        },
        extremesType: {
            type: String | Function,
            kComposite: 'extremes.type'
        },
        extremesRotation: {
            type: Number | Function,
            kComposite: 'extremes.rotation'
        },
        maxSize: {
            type: Number,
            kComposite: 'maxSize'
        },
        minSize: {
            type: Number,
            kComposite: 'minSize'
        },
        missingValues: {
            type: String,
            kComposite: 'missingValues'
        },
        kStyle: {
            type: String,
            kComposite: 'style'
        },
        name: {
            type: String,
            kComposite: 'name'
        },
        negativeColor: {
            type: String,
            kComposite: 'negativeColor'
        },
        negativeValuesColor: {
            type: String,
            kComposite: 'negativeValues.color'
        },
        negativeValuesVisible: {
            type: Boolean,
            kComposite: 'negativeValues.visible'
        },
        opacity: {
            type: Number,
            kComposite: 'opacity'
        },
        openField: {
            type: String,
            kComposite: 'openField'
        },
        overlayGradient: {
            type: String,
            kComposite: 'overlay.gradient'
        },
        padding: {
            type: Number,
            kComposite: 'padding'
        },
        size: {
            type: Number,
            kComposite: 'size'
        },
        sizeField: {
            type: String,
            kComposite: 'sizeField'
        },
        spacing: {
            type: Number,
            kComposite: 'spacing'
        },
        stack: {
            type: Boolean | String,
            kComposite: 'stack'
        },
        stackType: {
            type: String,
            kComposite: 'stack.type'
        },
        stackGroup: {
            type: String,
            kComposite: 'stack.group'
        },
        startAngle: {
            type: Number,
            kComposite: 'startAngle'
        },
        targetBorder: {
            type: Function,
            kComposite: 'target.border'
        },
        targetBorderColor: {
            type: String | Function,
            kComposite: 'target.border.color'
        },
        targetBorderDashType: {
            type: String | Function,
            kComposite: 'target.border.dashType'
        },
        targetBorderWidth: {
            type: Number | Function,
            kComposite: 'target.border.width'
        },
        targetColor: {
            type: String | Function,
            kComposite: 'target.color'
        },
        targetlineWidth: {
            type: Object | Function,
            kComposite: 'target.line.width'
        },
        targetField: {
            type: String,
            kComposite: 'targetField'
        },
        tooltipBackground: {
            type: String,
            kComposite: 'tooltip.background'
        },
        tooltipBorderColor: {
            type: String,
            kComposite: 'tooltip.border.color'
        },
        tooltipBorderWidth: {
            type: Number,
            kComposite: 'tooltip.border.width'
        },
        tooltipColor: {
            type: String,
            kComposite: 'tooltip.color'
        },
        tooltipFont: {
            type: String,
            kComposite: 'tooltip.font'
        },
        tooltipFormat: {
            type: String,
            kComposite: 'tooltip.format'
        },
        tooltipPadding: {
            type: Number,
            kComposite: 'tooltip.padding'
        },
        tooltipPaddingBottom: {
            type: Number,
            kComposite: 'tooltip.padding.bottom'
        },
        tooltipPaddingLeft: {
            type: Number,
            kComposite: 'tooltip.padding.left'
        },
        tooltipPaddingRight: {
            type: Number,
            kComposite: 'tooltip.padding.right'
        },
        tooltipPaddingTop: {
            type: Number,
            kComposite: 'tooltip.padding.top'
        },
        tooltipTemplate: {
            type: String | Function,
            kComposite: 'tooltip.template'
        },
        tooltipVisible: {
            type: Boolean,
            kComposite: 'tooltip.visible'
        },
        type: {
            type: String,
            kComposite: 'type'
        },
        visible: {
            type: Boolean,
            kComposite: 'visible'
        },
        visibleInLegend: {
            type: Boolean,
            kComposite: 'visibleInLegend'
        },
        visibleInLegendField: {
            type: String,
            kComposite: 'visibleInLegendField'
        },
        visual: {
            type: Function,
            kComposite: 'visual'
        },
        width: {
            type: Number,
            kComposite: 'width'
        },
        xAxis: {
            type: String,
            kComposite: 'xAxis'
        },
        xField: {
            type: String,
            kComposite: 'xField'
        },
        yAxis: {
            type: String,
            kComposite: 'yAxis'
        },
        yField: {
            type: String,
            kComposite: 'yField'
        },
        notesPosition: {
            type: String,
            kComposite: 'notes.position'
        },
        notesIconBackground: {
            type: String,
            kComposite: 'notes.icon.background'
        },
        notesIconBorderColor: {
            type: String,
            kComposite: 'notes.icon.border.color'
        },
        notesIconBorderWidth: {
            type: Number,
            kComposite: 'notes.icon.border.width'
        },
        notesIconSize: {
            type: Number,
            kComposite: 'notes.icon.size'
        },
        notesIconType: {
            type: String,
            kComposite: 'notes.icon.type'
        },
        notesIconVisible: {
            type: Boolean,
            kComposite: 'notes.icon.visible'
        },
        notesLabelBackground: {
            type: String,
            kComposite: 'notes.label.background'
        },
        notesLabelBorderColor: {
            type: String,
            kComposite: 'notes.label.border.color'
        },
        notesLabelBorderDashType: {
            type: String,
            kComposite: 'notes.label.border.dashType'
        },
        notesLabelBorderWidth: {
            type: Number,
            kComposite: 'notes.label.border.width'
        },
        notesLabelColor: {
            type: String,
            kComposite: 'notes.label.color'
        },
        notesLabelFont: {
            type: String,
            kComposite: 'notes.label.font'
        },
        notesLabelTemplate: {
            type: String | Function,
            kComposite: 'notes.label.template'
        },
        notesLabelVisible: {
            type: Boolean,
            kComposite: 'notes.label.visible'
        },
        notesLabelRotation: {
            type: Number,
            kComposite: 'notes.label.rotation'
        },
        notesLabelFormat: {
            type: String,
            kComposite: 'notes.label.format'
        },
        notesLabelPosition: {
            type: String,
            kComposite: 'notes.label.position'
        },
        noteslineDashType: {
            type: String,
            kComposite: 'notes.line.dashType'
        },
        noteslineWidth: {
            type: Number,
            kComposite: 'notes.line.width'
        },
        noteslineColor: {
            type: String,
            kComposite: 'notes.line.color'
        },
        noteslineLength: {
            type: Number,
            kComposite: 'notes.line.length'
        },
        notesVisual: {
            type: Function,
            kComposite: 'notes.visual'
        },
        zIndex: {
            type: Number,
            kComposite: 'zIndex'
        }
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
    props: {
        axisDefaultsBackground: {
            type: String,
            kComposite: 'axisDefaults.background'
        },
        axisDefaultsColor: {
            type: String,
            kComposite: 'axisDefaults.color'
        },
        axisDefaultsCrosshairColor: {
            type: String,
            kComposite: 'axisDefaults.crosshair.color'
        },
        axisDefaultsCrosshairDashType: {
            type: String,
            kComposite: 'axisDefaults.crosshair.dashType'
        },
        axisDefaultsCrosshairOpacity: {
            type: Number,
            kComposite: 'axisDefaults.crosshair.opacity'
        },
        axisDefaultsCrosshairTooltipBackground: {
            type: String,
            kComposite: 'axisDefaults.crosshair.tooltip.background'
        },
        axisDefaultsCrosshairTooltipBorderColor: {
            type: String,
            kComposite: 'axisDefaults.crosshair.tooltip.border.color'
        },
        axisDefaultsCrosshairTooltipBorderDashType: {
            type: String,
            kComposite: 'axisDefaults.crosshair.tooltip.border.dashType'
        },
        axisDefaultsCrosshairTooltipBorderWidth: {
            type: Number,
            kComposite: 'axisDefaults.crosshair.tooltip.border.width'
        },
        axisDefaultsCrosshairTooltipColor: {
            type: String,
            kComposite: 'axisDefaults.crosshair.tooltip.color'
        },
        axisDefaultsCrosshairTooltipFont: {
            type: String,
            kComposite: 'axisDefaults.crosshair.tooltip.font'
        },
        axisDefaultsCrosshairTooltipFormat: {
            type: String,
            kComposite: 'axisDefaults.crosshair.tooltip.format'
        },
        axisDefaultsCrosshairTooltipPadding: {
            type: Number,
            kComposite: 'axisDefaults.crosshair.tooltip.padding'
        },
        axisDefaultsCrosshairTooltipPaddingBottom: {
            type: Number,
            kComposite: 'axisDefaults.crosshair.tooltip.padding.bottom'
        },
        axisDefaultsCrosshairTooltipPaddingLeft: {
            type: Number,
            kComposite: 'axisDefaults.crosshair.tooltip.padding.left'
        },
        axisDefaultsCrosshairTooltipPaddingRight: {
            type: Number,
            kComposite: 'axisDefaults.crosshair.tooltip.padding.right'
        },
        axisDefaultsCrosshairTooltipPaddingTop: {
            type: Number,
            kComposite: 'axisDefaults.crosshair.tooltip.padding.top'
        },
        axisDefaultsCrosshairTooltipTemplate: {
            type: String | Function,
            kComposite: 'axisDefaults.crosshair.tooltip.template'
        },
        axisDefaultsCrosshairTooltipVisible: {
            type: Boolean,
            kComposite: 'axisDefaults.crosshair.tooltip.visible'
        },
        axisDefaultsCrosshairVisible: {
            type: Boolean,
            kComposite: 'axisDefaults.crosshair.visible'
        },
        axisDefaultsCrosshairWidth: {
            type: Number,
            kComposite: 'axisDefaults.crosshair.width'
        },
        axisDefaultsLabelsFont: {
            type: String,
            kComposite: 'axisDefaults.labels.font'
        },
        axisDefaultsLabelsFormat: {
            type: String,
            kComposite: 'axisDefaults.labels.format'
        },
        axisDefaultsLabelsMargin: {
            type: Number,
            kComposite: 'axisDefaults.labels.margin'
        },
        axisDefaultsLabelsMarginBottom: {
            type: Number,
            kComposite: 'axisDefaults.labels.margin.bottom'
        },
        axisDefaultsLabelsMarginLeft: {
            type: Number,
            kComposite: 'axisDefaults.labels.margin.left'
        },
        axisDefaultsLabelsMarginRight: {
            type: Number,
            kComposite: 'axisDefaults.labels.margin.right'
        },
        axisDefaultsLabelsMarginTop: {
            type: Number,
            kComposite: 'axisDefaults.labels.margin.top'
        },
        axisDefaultsLabelsMirror: {
            type: Boolean,
            kComposite: 'axisDefaults.labels.mirror'
        },
        axisDefaultsLabelsPadding: {
            type: Number,
            kComposite: 'axisDefaults.labels.padding'
        },
        axisDefaultsLabelsPaddingBottom: {
            type: Number,
            kComposite: 'axisDefaults.labels.padding.bottom'
        },
        axisDefaultsLabelsPaddingLeft: {
            type: Number,
            kComposite: 'axisDefaults.labels.padding.left'
        },
        axisDefaultsLabelsPaddingRight: {
            type: Number,
            kComposite: 'axisDefaults.labels.padding.right'
        },
        axisDefaultsLabelsPaddingTop: {
            type: Number,
            kComposite: 'axisDefaults.labels.padding.top'
        },
        axisDefaultsLabelsRotation: {
            type: Number | String,
            kComposite: 'axisDefaults.labels.rotation'
        },
        axisDefaultsLabelsRotationAlign: {
            type: String,
            kComposite: 'axisDefaults.labels.rotation.align'
        },
        axisDefaultsLabelsRotationAngle: {
            type: Number | String,
            kComposite: 'axisDefaults.labels.rotation.angle'
        },
        axisDefaultsLabelsSkip: {
            type: Number,
            kComposite: 'axisDefaults.labels.skip'
        },
        axisDefaultsLabelsStep: {
            type: Number,
            kComposite: 'axisDefaults.labels.step'
        },
        axisDefaultsLabelsTemplate: {
            type: String | Function,
            kComposite: 'axisDefaults.labels.template'
        },
        axisDefaultsLabelsVisible: {
            type: Boolean,
            kComposite: 'axisDefaults.labels.visible'
        },
        axisDefaultsLabelsVisual: {
            type: Function,
            kComposite: 'axisDefaults.labels.visual'
        },
        axisDefaultsLineColor: {
            type: String,
            kComposite: 'axisDefaults.line.color'
        },
        axisDefaultsLineDashType: {
            type: String,
            kComposite: 'axisDefaults.line.dashType'
        },
        axisDefaultsLineVisible: {
            type: Boolean,
            kComposite: 'axisDefaults.line.visible'
        },
        axisDefaultsLineWidth: {
            type: Number,
            kComposite: 'axisDefaults.line.width'
        },
        axisDefaultsMajorGridLinesColor: {
            type: String,
            kComposite: 'axisDefaults.majorGridLines.color'
        },
        axisDefaultsMajorGridLinesDashType: {
            type: String,
            kComposite: 'axisDefaults.majorGridLines.dashType'
        },
        axisDefaultsMajorGridLinesVisible: {
            type: Boolean,
            kComposite: 'axisDefaults.majorGridLines.visible'
        },
        axisDefaultsMajorGridLinesWidth: {
            type: Number,
            kComposite: 'axisDefaults.majorGridLines.width'
        },
        axisDefaultsMajorGridLinesStep: {
            type: Number,
            kComposite: 'axisDefaults.majorGridLines.step'
        },
        axisDefaultsMajorGridLinesSkip: {
            type: Number,
            kComposite: 'axisDefaults.majorGridLines.skip'
        },
        axisDefaultsMajorTicksColor: {
            type: String,
            kComposite: 'axisDefaults.majorTicks.color'
        },
        axisDefaultsMajorTicksSize: {
            type: Number,
            kComposite: 'axisDefaults.majorTicks.size'
        },
        axisDefaultsMajorTicksVisible: {
            type: Boolean,
            kComposite: 'axisDefaults.majorTicks.visible'
        },
        axisDefaultsMajorTicksWidth: {
            type: Number,
            kComposite: 'axisDefaults.majorTicks.width'
        },
        axisDefaultsMajorTicksStep: {
            type: Number,
            kComposite: 'axisDefaults.majorTicks.step'
        },
        axisDefaultsMajorTicksSkip: {
            type: Number,
            kComposite: 'axisDefaults.majorTicks.skip'
        },
        axisDefaultsMinorGridLinesColor: {
            type: String,
            kComposite: 'axisDefaults.minorGridLines.color'
        },
        axisDefaultsMinorGridLinesDashType: {
            type: String,
            kComposite: 'axisDefaults.minorGridLines.dashType'
        },
        axisDefaultsMinorGridLinesVisible: {
            type: Boolean,
            kComposite: 'axisDefaults.minorGridLines.visible'
        },
        axisDefaultsMinorGridLinesWidth: {
            type: Number,
            kComposite: 'axisDefaults.minorGridLines.width'
        },
        axisDefaultsMinorGridLinesStep: {
            type: Number,
            kComposite: 'axisDefaults.minorGridLines.step'
        },
        axisDefaultsMinorGridLinesSkip: {
            type: Number,
            kComposite: 'axisDefaults.minorGridLines.skip'
        },
        axisDefaultsMinorTicksColor: {
            type: String,
            kComposite: 'axisDefaults.minorTicks.color'
        },
        axisDefaultsMinorTicksSize: {
            type: Number,
            kComposite: 'axisDefaults.minorTicks.size'
        },
        axisDefaultsMinorTicksVisible: {
            type: Boolean,
            kComposite: 'axisDefaults.minorTicks.visible'
        },
        axisDefaultsMinorTicksWidth: {
            type: Number,
            kComposite: 'axisDefaults.minorTicks.width'
        },
        axisDefaultsMinorTicksStep: {
            type: Number,
            kComposite: 'axisDefaults.minorTicks.step'
        },
        axisDefaultsMinorTicksSkip: {
            type: Number,
            kComposite: 'axisDefaults.minorTicks.skip'
        },
        axisDefaultsNarrowRange: {
            type: Boolean,
            kComposite: 'axisDefaults.narrowRange'
        },
        axisDefaultsPane: {
            type: String,
            kComposite: 'axisDefaults.pane'
        },
        axisDefaultsPlotBands: {
            type: Array,
            kComposite: 'axisDefaults.plotBands'
        }, axisDefaultsReverse: {
            type: Boolean,
            kComposite: 'axisDefaults.reverse'
        },
        axisDefaultsStartAngle: {
            type: Number,
            kComposite: 'axisDefaults.startAngle'
        },
        axisDefaultsTitleBackground: {
            type: String,
            kComposite: 'axisDefaults.title.background'
        },
        axisDefaultsTitleBorderColor: {
            type: String,
            kComposite: 'axisDefaults.title.border.color'
        },
        axisDefaultsTitleBorderDashType: {
            type: String,
            kComposite: 'axisDefaults.title.border.dashType'
        },
        axisDefaultsTitleBorderWidth: {
            type: Number,
            kComposite: 'axisDefaults.title.border.width'
        },
        axisDefaultsTitleColor: {
            type: String,
            kComposite: 'axisDefaults.title.color'
        },
        axisDefaultsTitleFont: {
            type: String,
            kComposite: 'axisDefaults.title.font'
        },
        axisDefaultsTitleMargin: {
            type: Number,
            kComposite: 'axisDefaults.title.margin'
        },
        axisDefaultsTitleMarginBottom: {
            type: Number,
            kComposite: 'axisDefaults.title.margin.bottom'
        },
        axisDefaultsTitleMarginLeft: {
            type: Number,
            kComposite: 'axisDefaults.title.margin.left'
        },
        axisDefaultsTitleMarginRight: {
            type: Number,
            kComposite: 'axisDefaults.title.margin.right'
        },
        axisDefaultsTitleMarginTop: {
            type: Number,
            kComposite: 'axisDefaults.title.margin.top'
        },
        axisDefaultsTitlePadding: {
            type: Number,
            kComposite: 'axisDefaults.title.padding'
        },
        axisDefaultsTitlePaddingBottom: {
            type: Number,
            kComposite: 'axisDefaults.title.padding.bottom'
        },
        axisDefaultsTitlePaddingLeft: {
            type: Number,
            kComposite: 'axisDefaults.title.padding.left'
        },
        axisDefaultsTitlePaddingRight: {
            type: Number,
            kComposite: 'axisDefaults.title.padding.right'
        },
        axisDefaultsTitlePaddingTop: {
            type: Number,
            kComposite: 'axisDefaults.title.padding.top'
        },
        axisDefaultsTitlePosition: {
            type: String,
            kComposite: 'axisDefaults.title.position'
        },
        axisDefaultsTitleRotation: {
            type: Number,
            kComposite: 'axisDefaults.title.rotation'
        },
        axisDefaultsTitleText: {
            type: String,
            kComposite: 'axisDefaults.title.text'
        },
        axisDefaultsTitleVisible: {
            type: Boolean,
            kComposite: 'axisDefaults.title.visible'
        },
        axisDefaultsTitleVisual: {
            type: Function,
            kComposite: 'axisDefaults.title.visual'
        },
        axisDefaultsVisible: {
            type: Boolean,
            kComposite: 'axisDefaults.visible'
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
    props: {
        categoryAxisAutoBaseUnitStepsMilliseconds: {
            type: Array,
            kComposite: 'categoryAxis.autoBaseUnitSteps.milliseconds'
        },
        categoryAxisAutoBaseUnitStepsSeconds: {
            type: Array,
            kComposite: 'categoryAxis.autoBaseUnitSteps.seconds'
        },
        categoryAxisAutoBaseUnitStepsMinutes: {
            type: Array,
            kComposite: 'categoryAxis.autoBaseUnitSteps.minutes'
        },
        categoryAxisAutoBaseUnitStepsHours: {
            type: Array,
            kComposite: 'categoryAxis.autoBaseUnitSteps.hours'
        },
        categoryAxisAutoBaseUnitStepsDays: {
            type: Array,
            kComposite: 'categoryAxis.autoBaseUnitSteps.days'
        },
        categoryAxisAutoBaseUnitStepsWeeks: {
            type: Array,
            kComposite: 'categoryAxis.autoBaseUnitSteps.weeks'
        },
        categoryAxisAutoBaseUnitStepsMonths: {
            type: Array,
            kComposite: 'categoryAxis.autoBaseUnitSteps.months'
        },
        categoryAxisAutoBaseUnitStepsYears: {
            type: Array,
            kComposite: 'categoryAxis.autoBaseUnitSteps.years'
        },
        categoryAxisAxisCrossingValue: {
            type: Object | Date | Array,
            kComposite: 'categoryAxis.axisCrossingValue'
        },
        categoryAxisBackground: {
            type: String,
            kComposite: 'categoryAxis.background'
        },
        categoryAxisBaseUnit: {
            type: String,
            kComposite: 'categoryAxis.baseUnit'
        },
        categoryAxisBaseUnitStep: {
            type: Object,
            kComposite: 'categoryAxis.baseUnitStep'
        },
        categoryAxisCategories: {
            type: Array,
            kComposite: 'categoryAxis.categories'
        },
        categoryAxisColor: {
            type: String,
            kComposite: 'categoryAxis.color'
        },
        categoryAxisCrosshairColor: {
            type: String,
            kComposite: 'categoryAxis.crosshair.color'
        },
        categoryAxisCrosshairDashType: {
            type: String,
            kComposite: 'categoryAxis.crosshair.dashType'
        },
        categoryAxisCrosshairOpacity: {
            type: Number,
            kComposite: 'categoryAxis.crosshair.opacity'
        },
        categoryAxisCrosshairTooltipBackground: {
            type: String,
            kComposite: 'categoryAxis.crosshair.tooltip.background'
        },
        categoryAxisCrosshairTooltipBorderColor: {
            type: String,
            kComposite: 'categoryAxis.crosshair.tooltip.border.color'
        },
        categoryAxisCrosshairTooltipBorderDashType: {
            type: String,
            kComposite: 'categoryAxis.crosshair.tooltip.border.dashType'
        },
        categoryAxisCrosshairTooltipBorderWidth: {
            type: Number,
            kComposite: 'categoryAxis.crosshair.tooltip.border.width'
        },
        categoryAxisCrosshairTooltipColor: {
            type: String,
            kComposite: 'categoryAxis.crosshair.tooltip.color'
        },
        categoryAxisCrosshairTooltipFont: {
            type: String,
            kComposite: 'categoryAxis.crosshair.tooltip.font'
        },
        categoryAxisCrosshairTooltipFormat: {
            type: String,
            kComposite: 'categoryAxis.crosshair.tooltip.format'
        },
        categoryAxisCrosshairTooltipPadding: {
            type: Number,
            kComposite: 'categoryAxis.crosshair.tooltip.padding'
        },
        categoryAxisCrosshairTooltipPaddingBottom: {
            type: Number,
            kComposite: 'categoryAxis.crosshair.tooltip.padding.bottom'
        },
        categoryAxisCrosshairTooltipPaddingLeft: {
            type: Number,
            kComposite: 'categoryAxis.crosshair.tooltip.padding.left'
        },
        categoryAxisCrosshairTooltipPaddingRight: {
            type: Number,
            kComposite: 'categoryAxis.crosshair.tooltip.padding.right'
        },
        categoryAxisCrosshairTooltipPaddingTop: {
            type: Number,
            kComposite: 'categoryAxis.crosshair.tooltip.padding.top'
        },
        categoryAxisCrosshairTooltipTemplate: {
            type: String | Function,
            kComposite: 'categoryAxis.crosshair.tooltip.template'
        },
        categoryAxisCrosshairTooltipVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.crosshair.tooltip.visible'
        },
        categoryAxisCrosshairVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.crosshair.visible'
        },
        categoryAxisCrosshairWidth: {
            type: Number,
            kComposite: 'categoryAxis.crosshair.width'
        },
        categoryAxisField: {
            type: String,
            kComposite: 'categoryAxis.field'
        },
        categoryAxisJustified: {
            type: Boolean,
            kComposite: 'categoryAxis.justified'
        },
        categoryAxisLabelsBackground: {
            type: String,
            kComposite: 'categoryAxis.labels.background'
        },
        categoryAxisLabelsBorderColor: {
            type: String,
            kComposite: 'categoryAxis.labels.border.color'
        },
        categoryAxisLabelsBorderDashType: {
            type: String,
            kComposite: 'categoryAxis.labels.border.dashType'
        },
        categoryAxisLabelsBorderWidth: {
            type: Number,
            kComposite: 'categoryAxis.labels.border.width'
        },
        categoryAxisLabelsColor: {
            type: String,
            kComposite: 'categoryAxis.labels.color'
        },
        categoryAxisLabelsCulture: {
            type: String,
            kComposite: 'categoryAxis.labels.culture'
        },
        categoryAxisLabelsDateFormatsDays: {
            type: String,
            kComposite: 'categoryAxis.labels.dateFormats.days'
        },
        categoryAxisLabelsDateFormatsHours: {
            type: String,
            kComposite: 'categoryAxis.labels.dateFormats.hours'
        },
        categoryAxisLabelsDateFormatsMonths: {
            type: String,
            kComposite: 'categoryAxis.labels.dateFormats.months'
        },
        categoryAxisLabelsDateFormatsWeeks: {
            type: String,
            kComposite: 'categoryAxis.labels.dateFormats.weeks'
        },
        categoryAxisLabelsDateFormatsYears: {
            type: String,
            kComposite: 'categoryAxis.labels.dateFormats.years'
        },
        categoryAxisLabelsFont: {
            type: String,
            kComposite: 'categoryAxis.labels.font'
        },
        categoryAxisLabelsFormat: {
            type: String,
            kComposite: 'categoryAxis.labels.format'
        },
        categoryAxisLabelsMargin: {
            type: Number,
            kComposite: 'categoryAxis.labels.margin'
        },
        categoryAxisLabelsMarginBottom: {
            type: Number,
            kComposite: 'categoryAxis.labels.margin.bottom'
        },
        categoryAxisLabelsMarginLeft: {
            type: Number,
            kComposite: 'categoryAxis.labels.margin.left'
        },
        categoryAxisLabelsMarginRight: {
            type: Number,
            kComposite: 'categoryAxis.labels.margin.right'
        },
        categoryAxisLabelsMarginTop: {
            type: Number,
            kComposite: 'categoryAxis.labels.margin.top'
        },
        categoryAxisLabelsMirror: {
            type: Boolean,
            kComposite: 'categoryAxis.labels.mirror'
        },
        categoryAxisLabelsPadding: {
            type: Number,
            kComposite: 'categoryAxis.labels.padding'
        },
        categoryAxisLabelsPaddingBottom: {
            type: Number,
            kComposite: 'categoryAxis.labels.padding.bottom'
        },
        categoryAxisLabelsPaddingLeft: {
            type: Number,
            kComposite: 'categoryAxis.labels.padding.left'
        },
        categoryAxisLabelsPaddingRight: {
            type: Number,
            kComposite: 'categoryAxis.labels.padding.right'
        },
        categoryAxisLabelsPaddingTop: {
            type: Number,
            kComposite: 'categoryAxis.labels.padding.top'
        },
        categoryAxisLabelsRotation: {
            type: Number | String,
            kComposite: 'categoryAxis.labels.rotation'
        },
        categoryAxisLabelsRotationAlign: {
            type: String,
            kComposite: 'categoryAxis.labels.rotation.align'
        },
        categoryAxisLabelsRotationAngle: {
            type: Number | String,
            kComposite: 'categoryAxis.labels.rotation.angle'
        },
        categoryAxisLabelsSkip: {
            type: Number,
            kComposite: 'categoryAxis.labels.skip'
        },
        categoryAxisLabelsStep: {
            type: Number,
            kComposite: 'categoryAxis.labels.step'
        },
        categoryAxisLabelsTemplate: {
            type: String | Function,
            kComposite: 'categoryAxis.labels.template'
        },
        categoryAxisLabelsVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.labels.visible'
        },
        categoryAxisLabelsVisual: {
            type: Function,
            kComposite: 'categoryAxis.labels.visual'
        },
        categoryAxisLineColor: {
            type: String,
            kComposite: 'categoryAxis.line.color'
        },
        categoryAxisLineDashType: {
            type: String,
            kComposite: 'categoryAxis.line.dashType'
        },
        categoryAxisLineVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.line.visible'
        },
        categoryAxisLineWidth: {
            type: Number,
            kComposite: 'categoryAxis.line.width'
        },
        categoryAxisMajorGridLinesColor: {
            type: String,
            kComposite: 'categoryAxis.majorGridLines.color'
        },
        categoryAxisMajorGridLinesDashType: {
            type: String,
            kComposite: 'categoryAxis.majorGridLines.dashType'
        },
        categoryAxisMajorGridLinesVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.majorGridLines.visible'
        },
        categoryAxisMajorGridLinesWidth: {
            type: Number,
            kComposite: 'categoryAxis.majorGridLines.width'
        },
        categoryAxisMajorGridLinesStep: {
            type: Number,
            kComposite: 'categoryAxis.majorGridLines.step'
        },
        categoryAxisMajorGridLinesSkip: {
            type: Number,
            kComposite: 'categoryAxis.majorGridLines.skip'
        },
        categoryAxisMajorTicksColor: {
            type: String,
            kComposite: 'categoryAxis.majorTicks.color'
        },
        categoryAxisMajorTicksSize: {
            type: Number,
            kComposite: 'categoryAxis.majorTicks.size'
        },
        categoryAxisMajorTicksVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.majorTicks.visible'
        },
        categoryAxisMajorTicksWidth: {
            type: Number,
            kComposite: 'categoryAxis.majorTicks.width'
        },
        categoryAxisMajorTicksStep: {
            type: Number,
            kComposite: 'categoryAxis.majorTicks.step'
        },
        categoryAxisMajorTicksSkip: {
            type: Number,
            kComposite: 'categoryAxis.majorTicks.skip'
        },
        categoryAxisMax: {
            type: Object,
            kComposite: 'categoryAxis.max'
        },
        categoryAxisMaxDateGroups: {
            type: Number,
            kComposite: 'categoryAxis.maxDateGroups'
        },
        categoryAxisMin: {
            type: Object,
            kComposite: 'categoryAxis.min'
        },
        categoryAxisMinorGridLinesColor: {
            type: String,
            kComposite: 'categoryAxis.minorGridLines.color'
        },
        categoryAxisMinorGridLinesDashType: {
            type: String,
            kComposite: 'categoryAxis.minorGridLines.dashType'
        },
        categoryAxisMinorGridLinesVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.minorGridLines.visible'
        },
        categoryAxisMinorGridLinesWidth: {
            type: Number,
            kComposite: 'categoryAxis.minorGridLines.width'
        },
        categoryAxisMinorGridLinesStep: {
            type: Number,
            kComposite: 'categoryAxis.minorGridLines.step'
        },
        categoryAxisMinorGridLinesSkip: {
            type: Number,
            kComposite: 'categoryAxis.minorGridLines.skip'
        },
        categoryAxisMinorTicksColor: {
            type: String,
            kComposite: 'categoryAxis.minorTicks.color'
        },
        categoryAxisMinorTicksSize: {
            type: Number,
            kComposite: 'categoryAxis.minorTicks.size'
        },
        categoryAxisMinorTicksVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.minorTicks.visible'
        },
        categoryAxisMinorTicksWidth: {
            type: Number,
            kComposite: 'categoryAxis.minorTicks.width'
        },
        categoryAxisMinorTicksStep: {
            type: Number,
            kComposite: 'categoryAxis.minorTicks.step'
        },
        categoryAxisMinorTicksSkip: {
            type: Number,
            kComposite: 'categoryAxis.minorTicks.skip'
        },
        categoryAxisName: {
            type: String,
            kComposite: 'categoryAxis.name'
        },
        categoryAxisPane: {
            type: String,
            kComposite: 'categoryAxis.pane'
        },
        categoryAxisPlotBands: {
            type: Array,
            kComposite: 'categoryAxis.plotBands'
        }, categoryAxisReverse: {
            type: Boolean,
            kComposite: 'categoryAxis.reverse'
        },
        categoryAxisRoundToBaseUnit: {
            type: Boolean,
            kComposite: 'categoryAxis.roundToBaseUnit'
        },
        categoryAxisSelectFrom: {
            type: Object,
            kComposite: 'categoryAxis.select.from'
        },
        categoryAxisSelectMax: {
            type: Object,
            kComposite: 'categoryAxis.select.max'
        },
        categoryAxisSelectMin: {
            type: Object,
            kComposite: 'categoryAxis.select.min'
        },
        categoryAxisSelectMousewheelReverse: {
            type: Boolean,
            kComposite: 'categoryAxis.select.mousewheel.reverse'
        },
        categoryAxisSelectMousewheelZoom: {
            type: String,
            kComposite: 'categoryAxis.select.mousewheel.zoom'
        },
        categoryAxisSelectTo: {
            type: Object,
            kComposite: 'categoryAxis.select.to'
        },
        categoryAxisStartAngle: {
            type: Number,
            kComposite: 'categoryAxis.startAngle'
        },
        categoryAxisTitleBackground: {
            type: String,
            kComposite: 'categoryAxis.title.background'
        },
        categoryAxisTitleBorderColor: {
            type: String,
            kComposite: 'categoryAxis.title.border.color'
        },
        categoryAxisTitleBorderDashType: {
            type: String,
            kComposite: 'categoryAxis.title.border.dashType'
        },
        categoryAxisTitleBorderWidth: {
            type: Number,
            kComposite: 'categoryAxis.title.border.width'
        },
        categoryAxisTitleColor: {
            type: String,
            kComposite: 'categoryAxis.title.color'
        },
        categoryAxisTitleFont: {
            type: String,
            kComposite: 'categoryAxis.title.font'
        },
        categoryAxisTitleMargin: {
            type: Number,
            kComposite: 'categoryAxis.title.margin'
        },
        categoryAxisTitleMarginBottom: {
            type: Number,
            kComposite: 'categoryAxis.title.margin.bottom'
        },
        categoryAxisTitleMarginLeft: {
            type: Number,
            kComposite: 'categoryAxis.title.margin.left'
        },
        categoryAxisTitleMarginRight: {
            type: Number,
            kComposite: 'categoryAxis.title.margin.right'
        },
        categoryAxisTitleMarginTop: {
            type: Number,
            kComposite: 'categoryAxis.title.margin.top'
        },
        categoryAxisTitlePadding: {
            type: Number,
            kComposite: 'categoryAxis.title.padding'
        },
        categoryAxisTitlePaddingBottom: {
            type: Number,
            kComposite: 'categoryAxis.title.padding.bottom'
        },
        categoryAxisTitlePaddingLeft: {
            type: Number,
            kComposite: 'categoryAxis.title.padding.left'
        },
        categoryAxisTitlePaddingRight: {
            type: Number,
            kComposite: 'categoryAxis.title.padding.right'
        },
        categoryAxisTitlePaddingTop: {
            type: Number,
            kComposite: 'categoryAxis.title.padding.top'
        },
        categoryAxisTitlePosition: {
            type: String,
            kComposite: 'categoryAxis.title.position'
        },
        categoryAxisTitleRotation: {
            type: Number,
            kComposite: 'categoryAxis.title.rotation'
        },
        categoryAxisTitleText: {
            type: String,
            kComposite: 'categoryAxis.title.text'
        },
        categoryAxisTitleVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.title.visible'
        },
        categoryAxisTitleVisual: {
            type: Function,
            kComposite: 'categoryAxis.title.visual'
        },
        categoryAxisType: {
            type: String,
            kComposite: 'categoryAxis.type'
        },
        categoryAxisVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.visible'
        },
        categoryAxisWeekStartDay: {
            type: Number,
            kComposite: 'categoryAxis.weekStartDay'
        },
        categoryAxisNotesPosition: {
            type: String,
            kComposite: 'categoryAxis.notes.position'
        },
        categoryAxisNotesIconBackground: {
            type: String,
            kComposite: 'categoryAxis.notes.icon.background'
        },
        categoryAxisNotesIconBorderColor: {
            type: String,
            kComposite: 'categoryAxis.notes.icon.border.color'
        },
        categoryAxisNotesIconBorderWidth: {
            type: Number,
            kComposite: 'categoryAxis.notes.icon.border.width'
        },
        categoryAxisNotesIconSize: {
            type: Number,
            kComposite: 'categoryAxis.notes.icon.size'
        },
        categoryAxisNotesIconType: {
            type: String,
            kComposite: 'categoryAxis.notes.icon.type'
        },
        categoryAxisNotesIconVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.notes.icon.visible'
        },
        categoryAxisNotesLabelBackground: {
            type: String,
            kComposite: 'categoryAxis.notes.label.background'
        },
        categoryAxisNotesLabelBorderColor: {
            type: String,
            kComposite: 'categoryAxis.notes.label.border.color'
        },
        categoryAxisNotesLabelBorderDashType: {
            type: String,
            kComposite: 'categoryAxis.notes.label.border.dashType'
        },
        categoryAxisNotesLabelBorderWidth: {
            type: Number,
            kComposite: 'categoryAxis.notes.label.border.width'
        },
        categoryAxisNotesLabelColor: {
            type: String,
            kComposite: 'categoryAxis.notes.label.color'
        },
        categoryAxisNotesLabelFont: {
            type: String,
            kComposite: 'categoryAxis.notes.label.font'
        },
        categoryAxisNotesLabelTemplate: {
            type: String | Function,
            kComposite: 'categoryAxis.notes.label.template'
        },
        categoryAxisNotesLabelVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.notes.label.visible'
        },
        categoryAxisNotesLabelRotation: {
            type: Number,
            kComposite: 'categoryAxis.notes.label.rotation'
        },
        categoryAxisNotesLabelFormat: {
            type: String,
            kComposite: 'categoryAxis.notes.label.format'
        },
        categoryAxisNotesLabelPosition: {
            type: String,
            kComposite: 'categoryAxis.notes.label.position'
        },
        categoryAxisNotesLineDashType: {
            type: String,
            kComposite: 'categoryAxis.notes.line.dashType'
        },
        categoryAxisNotesLineWidth: {
            type: Number,
            kComposite: 'categoryAxis.notes.line.width'
        },
        categoryAxisNotesLineColor: {
            type: String,
            kComposite: 'categoryAxis.notes.line.color'
        },
        categoryAxisNotesLineLength: {
            type: Number,
            kComposite: 'categoryAxis.notes.line.length'
        },
        categoryAxisNotesData: {
            type: Array,
            kComposite: 'categoryAxis.notes.data'
        }, categoryAxisNotesVisual: {
            type: Function,
            kComposite: 'categoryAxis.notes.visual'
        }
    }
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
        chartAreaBackground: {
            type: String,
            kComposite: 'chartArea.background'
        },
        chartAreaBorderColor: {
            type: String,
            kComposite: 'chartArea.border.color'
        },
        chartAreaBorderDashType: {
            type: String,
            kComposite: 'chartArea.border.dashType'
        },
        chartAreaBorderWidth: {
            type: Number,
            kComposite: 'chartArea.border.width'
        },
        chartAreaHeight: {
            type: Number,
            kComposite: 'chartArea.height'
        },
        chartAreaMargin: {
            type: Number,
            kComposite: 'chartArea.margin'
        },
        chartAreaMarginBottom: {
            type: Number,
            kComposite: 'chartArea.margin.bottom'
        },
        chartAreaMarginLeft: {
            type: Number,
            kComposite: 'chartArea.margin.left'
        },
        chartAreaMarginRight: {
            type: Number,
            kComposite: 'chartArea.margin.right'
        },
        chartAreaMarginTop: {
            type: Number,
            kComposite: 'chartArea.margin.top'
        },
        chartAreaOpacity: {
            type: Number,
            kComposite: 'chartArea.opacity'
        },
        chartAreaWidth: {
            type: Number,
            kComposite: 'chartArea.width'
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
exports.default = {
    props: {
        legendAlign: {
            type: String,
            kComposite: 'legend.align'
        },
        legendBackground: {
            type: String,
            kComposite: 'legend.background'
        },
        legendBorderColor: {
            type: String,
            kComposite: 'legend.border.color'
        },
        legendBorderDashType: {
            type: String,
            kComposite: 'legend.border.dashType'
        },
        legendBorderWidth: {
            type: Number,
            kComposite: 'legend.border.width'
        },
        legendHeight: {
            type: Number,
            kComposite: 'legend.height'
        },
        legendInactiveItemsLabelsColor: {
            type: String,
            kComposite: 'legend.inactiveItems.labels.color'
        },
        legendInactiveItemsLabelsFont: {
            type: String,
            kComposite: 'legend.inactiveItems.labels.font'
        },
        legendInactiveItemsLabelsTemplate: {
            type: String | Function,
            kComposite: 'legend.inactiveItems.labels.template'
        },
        legendItemCursor: {
            type: String,
            kComposite: 'legend.item.cursor'
        },
        legendItemVisual: {
            type: Function,
            kComposite: 'legend.item.visual'
        },
        legendLabelsColor: {
            type: String,
            kComposite: 'legend.labels.color'
        },
        legendLabelsFont: {
            type: String,
            kComposite: 'legend.labels.font'
        },
        legendLabelsMargin: {
            type: Number,
            kComposite: 'legend.labels.margin'
        },
        legendLabelsMarginBottom: {
            type: Number,
            kComposite: 'legend.labels.margin.bottom'
        },
        legendLabelsMarginLeft: {
            type: Number,
            kComposite: 'legend.labels.margin.left'
        },
        legendLabelsMarginRight: {
            type: Number,
            kComposite: 'legend.labels.margin.right'
        },
        legendLabelsMarginTop: {
            type: Number,
            kComposite: 'legend.labels.margin.top'
        },
        legendLabelsPadding: {
            type: Number,
            kComposite: 'legend.labels.padding'
        },
        legendLabelsPaddingBottom: {
            type: Number,
            kComposite: 'legend.labels.padding.bottom'
        },
        legendLabelsPaddingLeft: {
            type: Number,
            kComposite: 'legend.labels.padding.left'
        },
        legendLabelsPaddingRight: {
            type: Number,
            kComposite: 'legend.labels.padding.right'
        },
        legendLabelsPaddingTop: {
            type: Number,
            kComposite: 'legend.labels.padding.top'
        },
        legendLabelsTemplate: {
            type: String | Function,
            kComposite: 'legend.labels.template'
        },
        legendMargin: {
            type: Number,
            kComposite: 'legend.margin'
        },
        legendMarginBottom: {
            type: Number,
            kComposite: 'legend.margin.bottom'
        },
        legendMarginLeft: {
            type: Number,
            kComposite: 'legend.margin.left'
        },
        legendMarginRight: {
            type: Number,
            kComposite: 'legend.margin.right'
        },
        legendMarginTop: {
            type: Number,
            kComposite: 'legend.margin.top'
        },
        legendOffsetX: {
            type: Number,
            kComposite: 'legend.offsetX'
        },
        legendOffsetY: {
            type: Number,
            kComposite: 'legend.offsetY'
        },
        legendOrientation: {
            type: String,
            kComposite: 'legend.orientation'
        },
        legendPadding: {
            type: Number,
            kComposite: 'legend.padding'
        },
        legendPaddingBottom: {
            type: Number,
            kComposite: 'legend.padding.bottom'
        },
        legendPaddingLeft: {
            type: Number,
            kComposite: 'legend.padding.left'
        },
        legendPaddingRight: {
            type: Number,
            kComposite: 'legend.padding.right'
        },
        legendPaddingTop: {
            type: Number,
            kComposite: 'legend.padding.top'
        },
        legendPosition: {
            type: String,
            kComposite: 'legend.position'
        },
        legendReverse: {
            type: Boolean,
            kComposite: 'legend.reverse'
        },
        legendVisible: {
            type: Boolean,
            kComposite: 'legend.visible'
        },
        legendWidth: {
            type: Number,
            kComposite: 'legend.width'
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
    props: {
        panesBackground: {
            type: String,
            kComposite: 'panes.background'
        },
        panesBorderColor: {
            type: String,
            kComposite: 'panes.border.color'
        },
        panesBorderDashType: {
            type: String,
            kComposite: 'panes.border.dashType'
        },
        panesBorderWidth: {
            type: Number,
            kComposite: 'panes.border.width'
        },
        panesClip: {
            type: Boolean,
            kComposite: 'panes.clip'
        },
        panesHeight: {
            type: Number,
            kComposite: 'panes.height'
        },
        panesMargin: {
            type: Number,
            kComposite: 'panes.margin'
        },
        panesMarginBottom: {
            type: Number,
            kComposite: 'panes.margin.bottom'
        },
        panesMarginLeft: {
            type: Number,
            kComposite: 'panes.margin.left'
        },
        panesMarginRight: {
            type: Number,
            kComposite: 'panes.margin.right'
        },
        panesMarginTop: {
            type: Number,
            kComposite: 'panes.margin.top'
        },
        panesName: {
            type: String,
            kComposite: 'panes.name'
        },
        panesPadding: {
            type: Number,
            kComposite: 'panes.padding'
        },
        panesPaddingBottom: {
            type: Number,
            kComposite: 'panes.padding.bottom'
        },
        panesPaddingLeft: {
            type: Number,
            kComposite: 'panes.padding.left'
        },
        panesPaddingRight: {
            type: Number,
            kComposite: 'panes.padding.right'
        },
        panesPaddingTop: {
            type: Number,
            kComposite: 'panes.padding.top'
        },
        panesTitle: {
            type: String,
            kComposite: 'panes.title'
        },
        panesTitleBackground: {
            type: String,
            kComposite: 'panes.title.background'
        },
        panesTitleBorderColor: {
            type: String,
            kComposite: 'panes.title.border.color'
        },
        panesTitleBorderDashType: {
            type: String,
            kComposite: 'panes.title.border.dashType'
        },
        panesTitleBorderWidth: {
            type: Number,
            kComposite: 'panes.title.border.width'
        },
        panesTitleColor: {
            type: String,
            kComposite: 'panes.title.color'
        },
        panesTitleFont: {
            type: String,
            kComposite: 'panes.title.font'
        },
        panesTitleMargin: {
            type: Number,
            kComposite: 'panes.title.margin'
        },
        panesTitleMarginBottom: {
            type: Number,
            kComposite: 'panes.title.margin.bottom'
        },
        panesTitleMarginLeft: {
            type: Number,
            kComposite: 'panes.title.margin.left'
        },
        panesTitleMarginRight: {
            type: Number,
            kComposite: 'panes.title.margin.right'
        },
        panesTitleMarginTop: {
            type: Number,
            kComposite: 'panes.title.margin.top'
        },
        panesTitlePosition: {
            type: String,
            kComposite: 'panes.title.position'
        },
        panesTitleText: {
            type: String,
            kComposite: 'panes.title.text'
        },
        panesTitleVisible: {
            type: Boolean,
            kComposite: 'panes.title.visible'
        },
        panesTitleVisual: {
            type: Function,
            kComposite: 'panes.title.visual'
        }
    }
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
        pannableKey: {
            type: String,
            kComposite: 'pannable.key'
        },
        pannableLock: {
            type: String,
            kComposite: 'pannable.lock'
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
exports.default = {
    props: {
        pdfAuthor: {
            type: String,
            kComposite: 'pdf.author'
        },
        pdfCreator: {
            type: String,
            kComposite: 'pdf.creator'
        },
        pdfDate: {
            type: Date,
            kComposite: 'pdf.date'
        },
        pdfForceProxy: {
            type: Boolean,
            kComposite: 'pdf.forceProxy'
        },
        pdfFileName: {
            type: String,
            kComposite: 'pdf.fileName'
        },
        pdfKeywords: {
            type: String,
            kComposite: 'pdf.keywords'
        },
        pdfLandscape: {
            type: Boolean,
            kComposite: 'pdf.landscape'
        },
        pdfMarginBottom: {
            type: Number | String,
            kComposite: 'pdf.margin.bottom'
        },
        pdfMarginLeft: {
            type: Number | String,
            kComposite: 'pdf.margin.left'
        },
        pdfMarginRight: {
            type: Number | String,
            kComposite: 'pdf.margin.right'
        },
        pdfMarginTop: {
            type: Number | String,
            kComposite: 'pdf.margin.top'
        },
        pdfPaperSize: {
            type: String | Array,
            kComposite: 'pdf.paperSize'
        },
        pdfProxyURL: {
            type: String,
            kComposite: 'pdf.proxyURL'
        },
        pdfProxyTarget: {
            type: String,
            kComposite: 'pdf.proxyTarget'
        },
        pdfSubject: {
            type: String,
            kComposite: 'pdf.subject'
        },
        pdfTitle: {
            type: String,
            kComposite: 'pdf.title'
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
    props: {
        plotAreaBackground: {
            type: String,
            kComposite: 'plotArea.background'
        },
        plotAreaBorderColor: {
            type: String,
            kComposite: 'plotArea.border.color'
        },
        plotAreaBorderDashType: {
            type: String,
            kComposite: 'plotArea.border.dashType'
        },
        plotAreaBorderWidth: {
            type: Number,
            kComposite: 'plotArea.border.width'
        },
        plotAreaMargin: {
            type: Number,
            kComposite: 'plotArea.margin'
        },
        plotAreaMarginBottom: {
            type: Number,
            kComposite: 'plotArea.margin.bottom'
        },
        plotAreaMarginLeft: {
            type: Number,
            kComposite: 'plotArea.margin.left'
        },
        plotAreaMarginRight: {
            type: Number,
            kComposite: 'plotArea.margin.right'
        },
        plotAreaMarginTop: {
            type: Number,
            kComposite: 'plotArea.margin.top'
        },
        plotAreaOpacity: {
            type: Number,
            kComposite: 'plotArea.opacity'
        },
        plotAreaPadding: {
            type: Number,
            kComposite: 'plotArea.padding'
        },
        plotAreaPaddingBottom: {
            type: Number,
            kComposite: 'plotArea.padding.bottom'
        },
        plotAreaPaddingLeft: {
            type: Number,
            kComposite: 'plotArea.padding.left'
        },
        plotAreaPaddingRight: {
            type: Number,
            kComposite: 'plotArea.padding.right'
        },
        plotAreaPaddingTop: {
            type: Number,
            kComposite: 'plotArea.padding.top'
        }
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
    props: {
        seriesAggregate: {
            type: String | Function,
            kComposite: 'series.aggregate'
        },
        seriesAxis: {
            type: String,
            kComposite: 'series.axis'
        },
        seriesBorderColor: {
            type: String | Function,
            kComposite: 'series.border.color'
        },
        seriesBorderDashType: {
            type: String | Function,
            kComposite: 'series.border.dashType'
        },
        seriesBorderOpacity: {
            type: Number | Function,
            kComposite: 'series.border.opacity'
        },
        seriesBorderWidth: {
            type: Number | Function,
            kComposite: 'series.border.width'
        },
        seriesCategoryAxis: {
            type: String,
            kComposite: 'series.categoryAxis'
        },
        seriesCategoryField: {
            type: String,
            kComposite: 'series.categoryField'
        },
        seriesCloseField: {
            type: String,
            kComposite: 'series.closeField'
        },
        seriesColor: {
            type: String | Function,
            kComposite: 'series.color'
        },
        seriesColorField: {
            type: String,
            kComposite: 'series.colorField'
        },
        seriesConnectorsColor: {
            type: String | Function,
            kComposite: 'series.connectors.color'
        },
        seriesConnectorsPadding: {
            type: Number,
            kComposite: 'series.connectors.padding'
        },
        seriesConnectorsWidth: {
            type: Number,
            kComposite: 'series.connectors.width'
        },
        seriesCurrentField: {
            type: String,
            kComposite: 'series.currentField'
        },
        seriesDashType: {
            type: String,
            kComposite: 'series.dashType'
        },
        seriesData: {
            type: Array,
            kComposite: 'series.data'
        },
        seriesDownColor: {
            type: String | Function,
            kComposite: 'series.downColor'
        },
        seriesDownColorField: {
            type: String,
            kComposite: 'series.downColorField'
        },
        seriesSegmentSpacing: {
            type: Number,
            kComposite: 'series.segmentSpacing'
        },
        seriesSummaryField: {
            type: String,
            kComposite: 'series.summaryField'
        },
        seriesNeckRatio: {
            type: Number,
            kComposite: 'series.neckRatio'
        },
        seriesDynamicSlope: {
            type: Boolean,
            kComposite: 'series.dynamicSlope'
        },
        seriesDynamicHeight: {
            type: Boolean,
            kComposite: 'series.dynamicHeight'
        },
        seriesErrorBarsValue: {
            type: String | Number | Array | Function,
            kComposite: 'series.errorBars.value'
        },
        seriesErrorBarsVisual: {
            type: Function,
            kComposite: 'series.errorBars.visual'
        },
        seriesErrorBarsXValue: {
            type: String | Number | Array | Function,
            kComposite: 'series.errorBars.xValue'
        },
        seriesErrorBarsYValue: {
            type: String | Number | Array | Function,
            kComposite: 'series.errorBars.yValue'
        },
        seriesErrorBarsEndCaps: {
            type: Boolean,
            kComposite: 'series.errorBars.endCaps'
        },
        seriesErrorBarsColor: {
            type: String,
            kComposite: 'series.errorBars.color'
        },
        seriesErrorBarsLineWidth: {
            type: Number,
            kComposite: 'series.errorBars.line.width'
        },
        seriesErrorBarsLineDashType: {
            type: String,
            kComposite: 'series.errorBars.line.dashType'
        },
        seriesErrorLowField: {
            type: String,
            kComposite: 'series.errorLowField'
        },
        seriesErrorHighField: {
            type: String,
            kComposite: 'series.errorHighField'
        },
        seriesXErrorLowField: {
            type: String,
            kComposite: 'series.xErrorLowField'
        },
        seriesXErrorHighField: {
            type: String,
            kComposite: 'series.xErrorHighField'
        },
        seriesYErrorLowField: {
            type: String,
            kComposite: 'series.yErrorLowField'
        },
        seriesYErrorHighField: {
            type: String,
            kComposite: 'series.yErrorHighField'
        },
        seriesExplodeField: {
            type: String,
            kComposite: 'series.explodeField'
        },
        seriesField: {
            type: String,
            kComposite: 'series.field'
        },
        seriesFromField: {
            type: String,
            kComposite: 'series.fromField'
        },
        seriesToField: {
            type: String,
            kComposite: 'series.toField'
        },
        seriesNoteTextField: {
            type: String,
            kComposite: 'series.noteTextField'
        },
        seriesLowerField: {
            type: String,
            kComposite: 'series.lowerField'
        },
        seriesQ1Field: {
            type: String,
            kComposite: 'series.q1Field'
        },
        seriesMedianField: {
            type: String,
            kComposite: 'series.medianField'
        },
        seriesQ3Field: {
            type: String,
            kComposite: 'series.q3Field'
        },
        seriesUpperField: {
            type: String,
            kComposite: 'series.upperField'
        },
        seriesMeanField: {
            type: String,
            kComposite: 'series.meanField'
        },
        seriesOutliersField: {
            type: String,
            kComposite: 'series.outliersField'
        },
        seriesGap: {
            type: Number,
            kComposite: 'series.gap'
        },
        seriesHighField: {
            type: String,
            kComposite: 'series.highField'
        },
        seriesHighlightBorderColor: {
            type: String,
            kComposite: 'series.highlight.border.color'
        },
        seriesHighlightBorderOpacity: {
            type: Number,
            kComposite: 'series.highlight.border.opacity'
        },
        seriesHighlightBorderWidth: {
            type: Number,
            kComposite: 'series.highlight.border.width'
        },
        seriesHighlightColor: {
            type: String,
            kComposite: 'series.highlight.color'
        },
        seriesHighlightLineDashType: {
            type: String,
            kComposite: 'series.highlight.line.dashType'
        },
        seriesHighlightLineColor: {
            type: String,
            kComposite: 'series.highlight.line.color'
        },
        seriesHighlightLineOpacity: {
            type: Number,
            kComposite: 'series.highlight.line.opacity'
        },
        seriesHighlightLineWidth: {
            type: Number,
            kComposite: 'series.highlight.line.width'
        },
        seriesHighlightOpacity: {
            type: Number,
            kComposite: 'series.highlight.opacity'
        },
        seriesHighlightToggle: {
            type: Function,
            kComposite: 'series.highlight.toggle'
        },
        seriesHighlightVisible: {
            type: Boolean,
            kComposite: 'series.highlight.visible'
        },
        seriesHighlightVisual: {
            type: Function,
            kComposite: 'series.highlight.visual'
        },
        seriesHoleSize: {
            type: Number,
            kComposite: 'series.holeSize'
        },
        seriesLabelsAlign: {
            type: String,
            kComposite: 'series.labels.align'
        },
        seriesLabelsBackground: {
            type: String | Function,
            kComposite: 'series.labels.background'
        },
        seriesLabelsBorderColor: {
            type: String | Function,
            kComposite: 'series.labels.border.color'
        },
        seriesLabelsBorderDashType: {
            type: String | Function,
            kComposite: 'series.labels.border.dashType'
        },
        seriesLabelsBorderWidth: {
            type: Number | Function,
            kComposite: 'series.labels.border.width'
        },
        seriesLabelsColor: {
            type: String | Function,
            kComposite: 'series.labels.color'
        },
        seriesLabelsDistance: {
            type: Number,
            kComposite: 'series.labels.distance'
        },
        seriesLabelsFont: {
            type: String | Function,
            kComposite: 'series.labels.font'
        },
        seriesLabelsFormat: {
            type: String | Function,
            kComposite: 'series.labels.format'
        },
        seriesLabelsMargin: {
            type: Number,
            kComposite: 'series.labels.margin'
        },
        seriesLabelsMarginBottom: {
            type: Number,
            kComposite: 'series.labels.margin.bottom'
        },
        seriesLabelsMarginLeft: {
            type: Number,
            kComposite: 'series.labels.margin.left'
        },
        seriesLabelsMarginRight: {
            type: Number,
            kComposite: 'series.labels.margin.right'
        },
        seriesLabelsMarginTop: {
            type: Number,
            kComposite: 'series.labels.margin.top'
        },
        seriesLabelsPadding: {
            type: Number,
            kComposite: 'series.labels.padding'
        },
        seriesLabelsPaddingBottom: {
            type: Number,
            kComposite: 'series.labels.padding.bottom'
        },
        seriesLabelsPaddingLeft: {
            type: Number,
            kComposite: 'series.labels.padding.left'
        },
        seriesLabelsPaddingRight: {
            type: Number,
            kComposite: 'series.labels.padding.right'
        },
        seriesLabelsPaddingTop: {
            type: Number,
            kComposite: 'series.labels.padding.top'
        },
        seriesLabelsPosition: {
            type: String | Function,
            kComposite: 'series.labels.position'
        },
        seriesLabelsRotation: {
            type: String | Number,
            kComposite: 'series.labels.rotation'
        },
        seriesLabelsTemplate: {
            type: String | Function,
            kComposite: 'series.labels.template'
        },
        seriesLabelsVisible: {
            type: Boolean | Function,
            kComposite: 'series.labels.visible'
        },
        seriesLabelsVisual: {
            type: Function,
            kComposite: 'series.labels.visual'
        },
        seriesLabelsFromBackground: {
            type: String | Function,
            kComposite: 'series.labels.from.background'
        },
        seriesLabelsFromBorderColor: {
            type: String | Function,
            kComposite: 'series.labels.from.border.color'
        },
        seriesLabelsFromBorderDashType: {
            type: String | Function,
            kComposite: 'series.labels.from.border.dashType'
        },
        seriesLabelsFromBorderWidth: {
            type: Number | Function,
            kComposite: 'series.labels.from.border.width'
        },
        seriesLabelsFromColor: {
            type: String | Function,
            kComposite: 'series.labels.from.color'
        },
        seriesLabelsFromFont: {
            type: String | Function,
            kComposite: 'series.labels.from.font'
        },
        seriesLabelsFromFormat: {
            type: String | Function,
            kComposite: 'series.labels.from.format'
        },
        seriesLabelsFromMargin: {
            type: Number,
            kComposite: 'series.labels.from.margin'
        },
        seriesLabelsFromMarginBottom: {
            type: Number,
            kComposite: 'series.labels.from.margin.bottom'
        },
        seriesLabelsFromMarginLeft: {
            type: Number,
            kComposite: 'series.labels.from.margin.left'
        },
        seriesLabelsFromMarginRight: {
            type: Number,
            kComposite: 'series.labels.from.margin.right'
        },
        seriesLabelsFromMarginTop: {
            type: Number,
            kComposite: 'series.labels.from.margin.top'
        },
        seriesLabelsFromPadding: {
            type: Number,
            kComposite: 'series.labels.from.padding'
        },
        seriesLabelsFromPaddingBottom: {
            type: Number,
            kComposite: 'series.labels.from.padding.bottom'
        },
        seriesLabelsFromPaddingLeft: {
            type: Number,
            kComposite: 'series.labels.from.padding.left'
        },
        seriesLabelsFromPaddingRight: {
            type: Number,
            kComposite: 'series.labels.from.padding.right'
        },
        seriesLabelsFromPaddingTop: {
            type: Number,
            kComposite: 'series.labels.from.padding.top'
        },
        seriesLabelsFromPosition: {
            type: String | Function,
            kComposite: 'series.labels.from.position'
        },
        seriesLabelsFromTemplate: {
            type: String | Function,
            kComposite: 'series.labels.from.template'
        },
        seriesLabelsFromVisible: {
            type: Boolean | Function,
            kComposite: 'series.labels.from.visible'
        },
        seriesLabelsToBackground: {
            type: String | Function,
            kComposite: 'series.labels.to.background'
        },
        seriesLabelsToBorderColor: {
            type: String | Function,
            kComposite: 'series.labels.to.border.color'
        },
        seriesLabelsToBorderDashType: {
            type: String | Function,
            kComposite: 'series.labels.to.border.dashType'
        },
        seriesLabelsToBorderWidth: {
            type: Number | Function,
            kComposite: 'series.labels.to.border.width'
        },
        seriesLabelsToColor: {
            type: String | Function,
            kComposite: 'series.labels.to.color'
        },
        seriesLabelsToFont: {
            type: String | Function,
            kComposite: 'series.labels.to.font'
        },
        seriesLabelsToFormat: {
            type: String | Function,
            kComposite: 'series.labels.to.format'
        },
        seriesLabelsToMargin: {
            type: Number,
            kComposite: 'series.labels.to.margin'
        },
        seriesLabelsToMarginBottom: {
            type: Number,
            kComposite: 'series.labels.to.margin.bottom'
        },
        seriesLabelsToMarginLeft: {
            type: Number,
            kComposite: 'series.labels.to.margin.left'
        },
        seriesLabelsToMarginRight: {
            type: Number,
            kComposite: 'series.labels.to.margin.right'
        },
        seriesLabelsToMarginTop: {
            type: Number,
            kComposite: 'series.labels.to.margin.top'
        },
        seriesLabelsToPadding: {
            type: Number,
            kComposite: 'series.labels.to.padding'
        },
        seriesLabelsToPaddingBottom: {
            type: Number,
            kComposite: 'series.labels.to.padding.bottom'
        },
        seriesLabelsToPaddingLeft: {
            type: Number,
            kComposite: 'series.labels.to.padding.left'
        },
        seriesLabelsToPaddingRight: {
            type: Number,
            kComposite: 'series.labels.to.padding.right'
        },
        seriesLabelsToPaddingTop: {
            type: Number,
            kComposite: 'series.labels.to.padding.top'
        },
        seriesLabelsToPosition: {
            type: String | Function,
            kComposite: 'series.labels.to.position'
        },
        seriesLabelsToTemplate: {
            type: String | Function,
            kComposite: 'series.labels.to.template'
        },
        seriesLabelsToVisible: {
            type: Boolean | Function,
            kComposite: 'series.labels.to.visible'
        },
        seriesLine: {
            type: String,
            kComposite: 'series.line'
        },
        seriesLineColor: {
            type: String,
            kComposite: 'series.line.color'
        },
        seriesLineOpacity: {
            type: Number,
            kComposite: 'series.line.opacity'
        },
        seriesLineWidth: {
            type: String,
            kComposite: 'series.line.width'
        },
        seriesLineStyle: {
            type: String,
            kComposite: 'series.line.style'
        },
        seriesLowField: {
            type: String,
            kComposite: 'series.lowField'
        },
        seriesMargin: {
            type: Number,
            kComposite: 'series.margin'
        },
        seriesMarginBottom: {
            type: Number,
            kComposite: 'series.margin.bottom'
        },
        seriesMarginLeft: {
            type: Number,
            kComposite: 'series.margin.left'
        },
        seriesMarginRight: {
            type: Number,
            kComposite: 'series.margin.right'
        },
        seriesMarginTop: {
            type: Number,
            kComposite: 'series.margin.top'
        },
        seriesMarkersBackground: {
            type: String | Function,
            kComposite: 'series.markers.background'
        },
        seriesMarkersBorder: {
            type: Function,
            kComposite: 'series.markers.border'
        },
        seriesMarkersBorderColor: {
            type: String | Function,
            kComposite: 'series.markers.border.color'
        },
        seriesMarkersBorderWidth: {
            type: Number | Function,
            kComposite: 'series.markers.border.width'
        },
        seriesMarkersFromBackground: {
            type: String | Function,
            kComposite: 'series.markers.from.background'
        },
        seriesMarkersFromBorder: {
            type: Function,
            kComposite: 'series.markers.from.border'
        },
        seriesMarkersFromBorderColor: {
            type: String | Function,
            kComposite: 'series.markers.from.border.color'
        },
        seriesMarkersFromBorderWidth: {
            type: Number | Function,
            kComposite: 'series.markers.from.border.width'
        },
        seriesMarkersFromSize: {
            type: Number | Function,
            kComposite: 'series.markers.from.size'
        },
        seriesMarkersFromType: {
            type: String | Function,
            kComposite: 'series.markers.from.type'
        },
        seriesMarkersFromVisible: {
            type: Boolean | Function,
            kComposite: 'series.markers.from.visible'
        },
        seriesMarkersFromVisual: {
            type: Function,
            kComposite: 'series.markers.from.visual'
        },
        seriesMarkersFromRotation: {
            type: Number | Function,
            kComposite: 'series.markers.from.rotation'
        },
        seriesMarkersSize: {
            type: Number | Function,
            kComposite: 'series.markers.size'
        },
        seriesMarkersToBackground: {
            type: String | Function,
            kComposite: 'series.markers.to.background'
        },
        seriesMarkersToBorder: {
            type: Function,
            kComposite: 'series.markers.to.border'
        },
        seriesMarkersToBorderColor: {
            type: String | Function,
            kComposite: 'series.markers.to.border.color'
        },
        seriesMarkersToBorderWidth: {
            type: Number | Function,
            kComposite: 'series.markers.to.border.width'
        },
        seriesMarkersToSize: {
            type: Number | Function,
            kComposite: 'series.markers.to.size'
        },
        seriesMarkersToType: {
            type: String | Function,
            kComposite: 'series.markers.to.type'
        },
        seriesMarkersToVisible: {
            type: Boolean | Function,
            kComposite: 'series.markers.to.visible'
        },
        seriesMarkersToVisual: {
            type: Function,
            kComposite: 'series.markers.to.visual'
        },
        seriesMarkersToRotation: {
            type: Number | Function,
            kComposite: 'series.markers.to.rotation'
        },
        seriesMarkersType: {
            type: String | Function,
            kComposite: 'series.markers.type'
        },
        seriesMarkersVisible: {
            type: Boolean | Function,
            kComposite: 'series.markers.visible'
        },
        seriesMarkersVisual: {
            type: Function,
            kComposite: 'series.markers.visual'
        },
        seriesMarkersRotation: {
            type: Number | Function,
            kComposite: 'series.markers.rotation'
        },
        seriesOutliersBackground: {
            type: String | Function,
            kComposite: 'series.outliers.background'
        },
        seriesOutliersBorder: {
            type: Function,
            kComposite: 'series.outliers.border'
        },
        seriesOutliersBorderColor: {
            type: String | Function,
            kComposite: 'series.outliers.border.color'
        },
        seriesOutliersBorderWidth: {
            type: Number | Function,
            kComposite: 'series.outliers.border.width'
        },
        seriesOutliersSize: {
            type: Number | Function,
            kComposite: 'series.outliers.size'
        },
        seriesOutliersType: {
            type: String | Function,
            kComposite: 'series.outliers.type'
        },
        seriesOutliersRotation: {
            type: Number | Function,
            kComposite: 'series.outliers.rotation'
        },
        seriesExtremesBackground: {
            type: String | Function,
            kComposite: 'series.extremes.background'
        },
        seriesExtremesBorder: {
            type: Function,
            kComposite: 'series.extremes.border'
        },
        seriesExtremesBorderColor: {
            type: String | Function,
            kComposite: 'series.extremes.border.color'
        },
        seriesExtremesBorderWidth: {
            type: Number | Function,
            kComposite: 'series.extremes.border.width'
        },
        seriesExtremesSize: {
            type: Number | Function,
            kComposite: 'series.extremes.size'
        },
        seriesExtremesType: {
            type: String | Function,
            kComposite: 'series.extremes.type'
        },
        seriesExtremesRotation: {
            type: Number | Function,
            kComposite: 'series.extremes.rotation'
        },
        seriesMaxSize: {
            type: Number,
            kComposite: 'series.maxSize'
        },
        seriesMinSize: {
            type: Number,
            kComposite: 'series.minSize'
        },
        seriesMissingValues: {
            type: String,
            kComposite: 'series.missingValues'
        },
        seriesStyle: {
            type: String,
            kComposite: 'series.style'
        },
        seriesName: {
            type: String,
            kComposite: 'series.name'
        },
        seriesNegativeColor: {
            type: String,
            kComposite: 'series.negativeColor'
        },
        seriesNegativeValuesColor: {
            type: String,
            kComposite: 'series.negativeValues.color'
        },
        seriesNegativeValuesVisible: {
            type: Boolean,
            kComposite: 'series.negativeValues.visible'
        },
        seriesOpacity: {
            type: Number,
            kComposite: 'series.opacity'
        },
        seriesOpenField: {
            type: String,
            kComposite: 'series.openField'
        },
        seriesOverlayGradient: {
            type: String,
            kComposite: 'series.overlay.gradient'
        },
        seriesPadding: {
            type: Number,
            kComposite: 'series.padding'
        },
        seriesSize: {
            type: Number,
            kComposite: 'series.size'
        },
        seriesSizeField: {
            type: String,
            kComposite: 'series.sizeField'
        },
        seriesSpacing: {
            type: Number,
            kComposite: 'series.spacing'
        },
        seriesStack: {
            type: Boolean | String,
            kComposite: 'series.stack'
        },
        seriesStackType: {
            type: String,
            kComposite: 'series.stack.type'
        },
        seriesStackGroup: {
            type: String,
            kComposite: 'series.stack.group'
        },
        seriesStartAngle: {
            type: Number,
            kComposite: 'series.startAngle'
        },
        seriesTargetBorder: {
            type: Function,
            kComposite: 'series.target.border'
        },
        seriesTargetBorderColor: {
            type: String | Function,
            kComposite: 'series.target.border.color'
        },
        seriesTargetBorderDashType: {
            type: String | Function,
            kComposite: 'series.target.border.dashType'
        },
        seriesTargetBorderWidth: {
            type: Number | Function,
            kComposite: 'series.target.border.width'
        },
        seriesTargetColor: {
            type: String | Function,
            kComposite: 'series.target.color'
        },
        seriesTargetLineWidth: {
            type: Object | Function,
            kComposite: 'series.target.line.width'
        },
        seriesTargetField: {
            type: String,
            kComposite: 'series.targetField'
        },
        seriesTooltipBackground: {
            type: String,
            kComposite: 'series.tooltip.background'
        },
        seriesTooltipBorderColor: {
            type: String,
            kComposite: 'series.tooltip.border.color'
        },
        seriesTooltipBorderWidth: {
            type: Number,
            kComposite: 'series.tooltip.border.width'
        },
        seriesTooltipColor: {
            type: String,
            kComposite: 'series.tooltip.color'
        },
        seriesTooltipFont: {
            type: String,
            kComposite: 'series.tooltip.font'
        },
        seriesTooltipFormat: {
            type: String,
            kComposite: 'series.tooltip.format'
        },
        seriesTooltipPadding: {
            type: Number,
            kComposite: 'series.tooltip.padding'
        },
        seriesTooltipPaddingBottom: {
            type: Number,
            kComposite: 'series.tooltip.padding.bottom'
        },
        seriesTooltipPaddingLeft: {
            type: Number,
            kComposite: 'series.tooltip.padding.left'
        },
        seriesTooltipPaddingRight: {
            type: Number,
            kComposite: 'series.tooltip.padding.right'
        },
        seriesTooltipPaddingTop: {
            type: Number,
            kComposite: 'series.tooltip.padding.top'
        },
        seriesTooltipTemplate: {
            type: String | Function,
            kComposite: 'series.tooltip.template'
        },
        seriesTooltipVisible: {
            type: Boolean,
            kComposite: 'series.tooltip.visible'
        },
        seriesType: {
            type: String,
            kComposite: 'series.type'
        },
        seriesVisible: {
            type: Boolean,
            kComposite: 'series.visible'
        },
        seriesVisibleInLegend: {
            type: Boolean,
            kComposite: 'series.visibleInLegend'
        },
        seriesVisibleInLegendField: {
            type: String,
            kComposite: 'series.visibleInLegendField'
        },
        seriesVisual: {
            type: Function,
            kComposite: 'series.visual'
        },
        seriesWidth: {
            type: Number,
            kComposite: 'series.width'
        },
        seriesXAxis: {
            type: String,
            kComposite: 'series.xAxis'
        },
        seriesXField: {
            type: String,
            kComposite: 'series.xField'
        },
        seriesYAxis: {
            type: String,
            kComposite: 'series.yAxis'
        },
        seriesYField: {
            type: String,
            kComposite: 'series.yField'
        },
        seriesNotesPosition: {
            type: String,
            kComposite: 'series.notes.position'
        },
        seriesNotesIconBackground: {
            type: String,
            kComposite: 'series.notes.icon.background'
        },
        seriesNotesIconBorderColor: {
            type: String,
            kComposite: 'series.notes.icon.border.color'
        },
        seriesNotesIconBorderWidth: {
            type: Number,
            kComposite: 'series.notes.icon.border.width'
        },
        seriesNotesIconSize: {
            type: Number,
            kComposite: 'series.notes.icon.size'
        },
        seriesNotesIconType: {
            type: String,
            kComposite: 'series.notes.icon.type'
        },
        seriesNotesIconVisible: {
            type: Boolean,
            kComposite: 'series.notes.icon.visible'
        },
        seriesNotesLabelBackground: {
            type: String,
            kComposite: 'series.notes.label.background'
        },
        seriesNotesLabelBorderColor: {
            type: String,
            kComposite: 'series.notes.label.border.color'
        },
        seriesNotesLabelBorderDashType: {
            type: String,
            kComposite: 'series.notes.label.border.dashType'
        },
        seriesNotesLabelBorderWidth: {
            type: Number,
            kComposite: 'series.notes.label.border.width'
        },
        seriesNotesLabelColor: {
            type: String,
            kComposite: 'series.notes.label.color'
        },
        seriesNotesLabelFont: {
            type: String,
            kComposite: 'series.notes.label.font'
        },
        seriesNotesLabelTemplate: {
            type: String | Function,
            kComposite: 'series.notes.label.template'
        },
        seriesNotesLabelVisible: {
            type: Boolean,
            kComposite: 'series.notes.label.visible'
        },
        seriesNotesLabelRotation: {
            type: Number,
            kComposite: 'series.notes.label.rotation'
        },
        seriesNotesLabelFormat: {
            type: String,
            kComposite: 'series.notes.label.format'
        },
        seriesNotesLabelPosition: {
            type: String,
            kComposite: 'series.notes.label.position'
        },
        seriesNotesLineDashType: {
            type: String,
            kComposite: 'series.notes.line.dashType'
        },
        seriesNotesLineWidth: {
            type: Number,
            kComposite: 'series.notes.line.width'
        },
        seriesNotesLineColor: {
            type: String,
            kComposite: 'series.notes.line.color'
        },
        seriesNotesLineLength: {
            type: Number,
            kComposite: 'series.notes.line.length'
        },
        seriesNotesVisual: {
            type: Function,
            kComposite: 'series.notes.visual'
        },
        seriesZIndex: {
            type: Number,
            kComposite: 'series.zIndex'
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
        seriesDefaultsArea: {
            type: Object,
            kComposite: 'seriesDefaults.area'
        },
        seriesDefaultsBar: {
            type: Object,
            kComposite: 'seriesDefaults.bar'
        },
        seriesDefaultsBorderColor: {
            type: String,
            kComposite: 'seriesDefaults.border.color'
        },
        seriesDefaultsBorderDashType: {
            type: String,
            kComposite: 'seriesDefaults.border.dashType'
        },
        seriesDefaultsBorderWidth: {
            type: Number,
            kComposite: 'seriesDefaults.border.width'
        },
        seriesDefaultsBubble: {
            type: Object,
            kComposite: 'seriesDefaults.bubble'
        },
        seriesDefaultsCandlestick: {
            type: Object,
            kComposite: 'seriesDefaults.candlestick'
        },
        seriesDefaultsColumn: {
            type: Object,
            kComposite: 'seriesDefaults.column'
        },
        seriesDefaultsDonut: {
            type: Object,
            kComposite: 'seriesDefaults.donut'
        },
        seriesDefaultsGap: {
            type: Number,
            kComposite: 'seriesDefaults.gap'
        },
        seriesDefaultsLabelsBackground: {
            type: String,
            kComposite: 'seriesDefaults.labels.background'
        },
        seriesDefaultsLabelsBorderColor: {
            type: String,
            kComposite: 'seriesDefaults.labels.border.color'
        },
        seriesDefaultsLabelsBorderDashType: {
            type: String,
            kComposite: 'seriesDefaults.labels.border.dashType'
        },
        seriesDefaultsLabelsBorderWidth: {
            type: Number,
            kComposite: 'seriesDefaults.labels.border.width'
        },
        seriesDefaultsLabelsColor: {
            type: String,
            kComposite: 'seriesDefaults.labels.color'
        },
        seriesDefaultsLabelsFont: {
            type: String,
            kComposite: 'seriesDefaults.labels.font'
        },
        seriesDefaultsLabelsFormat: {
            type: String,
            kComposite: 'seriesDefaults.labels.format'
        },
        seriesDefaultsLabelsMargin: {
            type: Number,
            kComposite: 'seriesDefaults.labels.margin'
        },
        seriesDefaultsLabelsMarginBottom: {
            type: Number,
            kComposite: 'seriesDefaults.labels.margin.bottom'
        },
        seriesDefaultsLabelsMarginLeft: {
            type: Number,
            kComposite: 'seriesDefaults.labels.margin.left'
        },
        seriesDefaultsLabelsMarginRight: {
            type: Number,
            kComposite: 'seriesDefaults.labels.margin.right'
        },
        seriesDefaultsLabelsMarginTop: {
            type: Number,
            kComposite: 'seriesDefaults.labels.margin.top'
        },
        seriesDefaultsLabelsPadding: {
            type: Number,
            kComposite: 'seriesDefaults.labels.padding'
        },
        seriesDefaultsLabelsPaddingBottom: {
            type: Number,
            kComposite: 'seriesDefaults.labels.padding.bottom'
        },
        seriesDefaultsLabelsPaddingLeft: {
            type: Number,
            kComposite: 'seriesDefaults.labels.padding.left'
        },
        seriesDefaultsLabelsPaddingRight: {
            type: Number,
            kComposite: 'seriesDefaults.labels.padding.right'
        },
        seriesDefaultsLabelsPaddingTop: {
            type: Number,
            kComposite: 'seriesDefaults.labels.padding.top'
        },
        seriesDefaultsLabelsRotation: {
            type: String | Number,
            kComposite: 'seriesDefaults.labels.rotation'
        },
        seriesDefaultsLabelsTemplate: {
            type: String | Function,
            kComposite: 'seriesDefaults.labels.template'
        },
        seriesDefaultsLabelsVisible: {
            type: Boolean,
            kComposite: 'seriesDefaults.labels.visible'
        },
        seriesDefaultsLabelsVisual: {
            type: Function,
            kComposite: 'seriesDefaults.labels.visual'
        },
        seriesDefaultsLabelsFromBackground: {
            type: String,
            kComposite: 'seriesDefaults.labels.from.background'
        },
        seriesDefaultsLabelsFromBorderColor: {
            type: String,
            kComposite: 'seriesDefaults.labels.from.border.color'
        },
        seriesDefaultsLabelsFromBorderDashType: {
            type: String,
            kComposite: 'seriesDefaults.labels.from.border.dashType'
        },
        seriesDefaultsLabelsFromBorderWidth: {
            type: Number,
            kComposite: 'seriesDefaults.labels.from.border.width'
        },
        seriesDefaultsLabelsFromColor: {
            type: String,
            kComposite: 'seriesDefaults.labels.from.color'
        },
        seriesDefaultsLabelsFromFont: {
            type: String,
            kComposite: 'seriesDefaults.labels.from.font'
        },
        seriesDefaultsLabelsFromFormat: {
            type: String,
            kComposite: 'seriesDefaults.labels.from.format'
        },
        seriesDefaultsLabelsFromMargin: {
            type: Number,
            kComposite: 'seriesDefaults.labels.from.margin'
        },
        seriesDefaultsLabelsFromMarginBottom: {
            type: Number,
            kComposite: 'seriesDefaults.labels.from.margin.bottom'
        },
        seriesDefaultsLabelsFromMarginLeft: {
            type: Number,
            kComposite: 'seriesDefaults.labels.from.margin.left'
        },
        seriesDefaultsLabelsFromMarginRight: {
            type: Number,
            kComposite: 'seriesDefaults.labels.from.margin.right'
        },
        seriesDefaultsLabelsFromMarginTop: {
            type: Number,
            kComposite: 'seriesDefaults.labels.from.margin.top'
        },
        seriesDefaultsLabelsFromPadding: {
            type: Number,
            kComposite: 'seriesDefaults.labels.from.padding'
        },
        seriesDefaultsLabelsFromPaddingBottom: {
            type: Number,
            kComposite: 'seriesDefaults.labels.from.padding.bottom'
        },
        seriesDefaultsLabelsFromPaddingLeft: {
            type: Number,
            kComposite: 'seriesDefaults.labels.from.padding.left'
        },
        seriesDefaultsLabelsFromPaddingRight: {
            type: Number,
            kComposite: 'seriesDefaults.labels.from.padding.right'
        },
        seriesDefaultsLabelsFromPaddingTop: {
            type: Number,
            kComposite: 'seriesDefaults.labels.from.padding.top'
        },
        seriesDefaultsLabelsFromTemplate: {
            type: String | Function,
            kComposite: 'seriesDefaults.labels.from.template'
        },
        seriesDefaultsLabelsFromVisible: {
            type: Boolean,
            kComposite: 'seriesDefaults.labels.from.visible'
        },
        seriesDefaultsLabelsToBackground: {
            type: String,
            kComposite: 'seriesDefaults.labels.to.background'
        },
        seriesDefaultsLabelsToBorderColor: {
            type: String,
            kComposite: 'seriesDefaults.labels.to.border.color'
        },
        seriesDefaultsLabelsToBorderDashType: {
            type: String,
            kComposite: 'seriesDefaults.labels.to.border.dashType'
        },
        seriesDefaultsLabelsToBorderWidth: {
            type: Number,
            kComposite: 'seriesDefaults.labels.to.border.width'
        },
        seriesDefaultsLabelsToColor: {
            type: String,
            kComposite: 'seriesDefaults.labels.to.color'
        },
        seriesDefaultsLabelsToFont: {
            type: String,
            kComposite: 'seriesDefaults.labels.to.font'
        },
        seriesDefaultsLabelsToFormat: {
            type: String,
            kComposite: 'seriesDefaults.labels.to.format'
        },
        seriesDefaultsLabelsToMargin: {
            type: Number,
            kComposite: 'seriesDefaults.labels.to.margin'
        },
        seriesDefaultsLabelsToMarginBottom: {
            type: Number,
            kComposite: 'seriesDefaults.labels.to.margin.bottom'
        },
        seriesDefaultsLabelsToMarginLeft: {
            type: Number,
            kComposite: 'seriesDefaults.labels.to.margin.left'
        },
        seriesDefaultsLabelsToMarginRight: {
            type: Number,
            kComposite: 'seriesDefaults.labels.to.margin.right'
        },
        seriesDefaultsLabelsToMarginTop: {
            type: Number,
            kComposite: 'seriesDefaults.labels.to.margin.top'
        },
        seriesDefaultsLabelsToPadding: {
            type: Number,
            kComposite: 'seriesDefaults.labels.to.padding'
        },
        seriesDefaultsLabelsToPaddingBottom: {
            type: Number,
            kComposite: 'seriesDefaults.labels.to.padding.bottom'
        },
        seriesDefaultsLabelsToPaddingLeft: {
            type: Number,
            kComposite: 'seriesDefaults.labels.to.padding.left'
        },
        seriesDefaultsLabelsToPaddingRight: {
            type: Number,
            kComposite: 'seriesDefaults.labels.to.padding.right'
        },
        seriesDefaultsLabelsToPaddingTop: {
            type: Number,
            kComposite: 'seriesDefaults.labels.to.padding.top'
        },
        seriesDefaultsLabelsToTemplate: {
            type: String | Function,
            kComposite: 'seriesDefaults.labels.to.template'
        },
        seriesDefaultsLabelsToVisible: {
            type: Boolean,
            kComposite: 'seriesDefaults.labels.to.visible'
        },
        seriesDefaultsLine: {
            type: Object,
            kComposite: 'seriesDefaults.line'
        },
        seriesDefaultsOhlc: {
            type: Object,
            kComposite: 'seriesDefaults.ohlc'
        },
        seriesDefaultsOverlayGradient: {
            type: String,
            kComposite: 'seriesDefaults.overlay.gradient'
        },
        seriesDefaultsPie: {
            type: Object,
            kComposite: 'seriesDefaults.pie'
        },
        seriesDefaultsRangeArea: {
            type: Object,
            kComposite: 'seriesDefaults.rangeArea'
        },
        seriesDefaultsScatter: {
            type: Object,
            kComposite: 'seriesDefaults.scatter'
        },
        seriesDefaultsScatterLine: {
            type: Object,
            kComposite: 'seriesDefaults.scatterLine'
        },
        seriesDefaultsSpacing: {
            type: Number,
            kComposite: 'seriesDefaults.spacing'
        },
        seriesDefaultsStack: {
            type: Boolean,
            kComposite: 'seriesDefaults.stack'
        },
        seriesDefaultsStackType: {
            type: String,
            kComposite: 'seriesDefaults.stack.type'
        },
        seriesDefaultsType: {
            type: String,
            kComposite: 'seriesDefaults.type'
        },
        seriesDefaultsTooltipBackground: {
            type: String,
            kComposite: 'seriesDefaults.tooltip.background'
        },
        seriesDefaultsTooltipBorderColor: {
            type: String,
            kComposite: 'seriesDefaults.tooltip.border.color'
        },
        seriesDefaultsTooltipBorderWidth: {
            type: Number,
            kComposite: 'seriesDefaults.tooltip.border.width'
        },
        seriesDefaultsTooltipColor: {
            type: String,
            kComposite: 'seriesDefaults.tooltip.color'
        },
        seriesDefaultsTooltipFont: {
            type: String,
            kComposite: 'seriesDefaults.tooltip.font'
        },
        seriesDefaultsTooltipFormat: {
            type: String,
            kComposite: 'seriesDefaults.tooltip.format'
        },
        seriesDefaultsTooltipPadding: {
            type: Number,
            kComposite: 'seriesDefaults.tooltip.padding'
        },
        seriesDefaultsTooltipPaddingBottom: {
            type: Number,
            kComposite: 'seriesDefaults.tooltip.padding.bottom'
        },
        seriesDefaultsTooltipPaddingLeft: {
            type: Number,
            kComposite: 'seriesDefaults.tooltip.padding.left'
        },
        seriesDefaultsTooltipPaddingRight: {
            type: Number,
            kComposite: 'seriesDefaults.tooltip.padding.right'
        },
        seriesDefaultsTooltipPaddingTop: {
            type: Number,
            kComposite: 'seriesDefaults.tooltip.padding.top'
        },
        seriesDefaultsTooltipTemplate: {
            type: String | Function,
            kComposite: 'seriesDefaults.tooltip.template'
        },
        seriesDefaultsTooltipVisible: {
            type: Boolean,
            kComposite: 'seriesDefaults.tooltip.visible'
        },
        seriesDefaultsVerticalArea: {
            type: Object,
            kComposite: 'seriesDefaults.verticalArea'
        },
        seriesDefaultsVerticalLine: {
            type: Object,
            kComposite: 'seriesDefaults.verticalLine'
        },
        seriesDefaultsVerticalRangeArea: {
            type: Object,
            kComposite: 'seriesDefaults.verticalRangeArea'
        },
        seriesDefaultsVisual: {
            type: Function,
            kComposite: 'seriesDefaults.visual'
        },
        seriesDefaultsNotesIconBackground: {
            type: String,
            kComposite: 'seriesDefaults.notes.icon.background'
        },
        seriesDefaultsNotesIconBorderColor: {
            type: String,
            kComposite: 'seriesDefaults.notes.icon.border.color'
        },
        seriesDefaultsNotesIconBorderWidth: {
            type: Number,
            kComposite: 'seriesDefaults.notes.icon.border.width'
        },
        seriesDefaultsNotesIconSize: {
            type: Number,
            kComposite: 'seriesDefaults.notes.icon.size'
        },
        seriesDefaultsNotesIconType: {
            type: String,
            kComposite: 'seriesDefaults.notes.icon.type'
        },
        seriesDefaultsNotesIconVisible: {
            type: Boolean,
            kComposite: 'seriesDefaults.notes.icon.visible'
        },
        seriesDefaultsNotesLabelBackground: {
            type: String,
            kComposite: 'seriesDefaults.notes.label.background'
        },
        seriesDefaultsNotesLabelBorderColor: {
            type: String,
            kComposite: 'seriesDefaults.notes.label.border.color'
        },
        seriesDefaultsNotesLabelBorderDashType: {
            type: String,
            kComposite: 'seriesDefaults.notes.label.border.dashType'
        },
        seriesDefaultsNotesLabelBorderWidth: {
            type: Number,
            kComposite: 'seriesDefaults.notes.label.border.width'
        },
        seriesDefaultsNotesLabelColor: {
            type: String,
            kComposite: 'seriesDefaults.notes.label.color'
        },
        seriesDefaultsNotesLabelFont: {
            type: String,
            kComposite: 'seriesDefaults.notes.label.font'
        },
        seriesDefaultsNotesLabelTemplate: {
            type: String | Function,
            kComposite: 'seriesDefaults.notes.label.template'
        },
        seriesDefaultsNotesLabelVisible: {
            type: Boolean,
            kComposite: 'seriesDefaults.notes.label.visible'
        },
        seriesDefaultsNotesLabelRotation: {
            type: Number,
            kComposite: 'seriesDefaults.notes.label.rotation'
        },
        seriesDefaultsNotesLabelFormat: {
            type: String,
            kComposite: 'seriesDefaults.notes.label.format'
        },
        seriesDefaultsNotesLabelPosition: {
            type: String,
            kComposite: 'seriesDefaults.notes.label.position'
        },
        seriesDefaultsNotesLineDashType: {
            type: String,
            kComposite: 'seriesDefaults.notes.line.dashType'
        },
        seriesDefaultsNotesLineWidth: {
            type: Number,
            kComposite: 'seriesDefaults.notes.line.width'
        },
        seriesDefaultsNotesLineColor: {
            type: String,
            kComposite: 'seriesDefaults.notes.line.color'
        },
        seriesDefaultsNotesLineLength: {
            type: Number,
            kComposite: 'seriesDefaults.notes.line.length'
        },
        seriesDefaultsNotesVisual: {
            type: Function,
            kComposite: 'seriesDefaults.notes.visual'
        },
        seriesDefaultsDynamicSlope: {
            type: Boolean,
            kComposite: 'seriesDefaults.dynamicSlope'
        },
        seriesDefaultsDynamicHeight: {
            type: Boolean,
            kComposite: 'seriesDefaults.dynamicHeight'
        },
        seriesDefaultsStartAngle: {
            type: Number,
            kComposite: 'seriesDefaults.startAngle'
        },
        seriesDefaultsStyle: {
            type: String,
            kComposite: 'seriesDefaults.style'
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
        titleAlign: {
            type: String,
            kComposite: 'title.align'
        },
        titleBackground: {
            type: String,
            kComposite: 'title.background'
        },
        titleBorderColor: {
            type: String,
            kComposite: 'title.border.color'
        },
        titleBorderDashType: {
            type: String,
            kComposite: 'title.border.dashType'
        },
        titleBorderWidth: {
            type: Number,
            kComposite: 'title.border.width'
        },
        titleColor: {
            type: String,
            kComposite: 'title.color'
        },
        titleFont: {
            type: String,
            kComposite: 'title.font'
        },
        titleMargin: {
            type: Number,
            kComposite: 'title.margin'
        },
        titleMarginBottom: {
            type: Number,
            kComposite: 'title.margin.bottom'
        },
        titleMarginLeft: {
            type: Number,
            kComposite: 'title.margin.left'
        },
        titleMarginRight: {
            type: Number,
            kComposite: 'title.margin.right'
        },
        titleMarginTop: {
            type: Number,
            kComposite: 'title.margin.top'
        },
        titlePadding: {
            type: Number,
            kComposite: 'title.padding'
        },
        titlePaddingBottom: {
            type: Number,
            kComposite: 'title.padding.bottom'
        },
        titlePaddingLeft: {
            type: Number,
            kComposite: 'title.padding.left'
        },
        titlePaddingRight: {
            type: Number,
            kComposite: 'title.padding.right'
        },
        titlePaddingTop: {
            type: Number,
            kComposite: 'title.padding.top'
        },
        titlePosition: {
            type: String,
            kComposite: 'title.position'
        },
        titleText: {
            type: String,
            kComposite: 'title.text'
        },
        titleVisible: {
            type: Boolean,
            kComposite: 'title.visible'
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
    props: {
        tooltipBackground: {
            type: String,
            kComposite: 'tooltip.background'
        },
        tooltipBorderColor: {
            type: String,
            kComposite: 'tooltip.border.color'
        },
        tooltipBorderWidth: {
            type: Number,
            kComposite: 'tooltip.border.width'
        },
        tooltipColor: {
            type: String,
            kComposite: 'tooltip.color'
        },
        tooltipFont: {
            type: String,
            kComposite: 'tooltip.font'
        },
        tooltipFormat: {
            type: String,
            kComposite: 'tooltip.format'
        },
        tooltipOpacity: {
            type: Number,
            kComposite: 'tooltip.opacity'
        },
        tooltipPadding: {
            type: Number,
            kComposite: 'tooltip.padding'
        },
        tooltipPaddingBottom: {
            type: Number,
            kComposite: 'tooltip.padding.bottom'
        },
        tooltipPaddingLeft: {
            type: Number,
            kComposite: 'tooltip.padding.left'
        },
        tooltipPaddingRight: {
            type: Number,
            kComposite: 'tooltip.padding.right'
        },
        tooltipPaddingTop: {
            type: Number,
            kComposite: 'tooltip.padding.top'
        },
        tooltipShared: {
            type: Boolean,
            kComposite: 'tooltip.shared'
        },
        tooltipSharedTemplate: {
            type: String | Function,
            kComposite: 'tooltip.sharedTemplate'
        },
        tooltipTemplate: {
            type: String | Function,
            kComposite: 'tooltip.template'
        },
        tooltipVisible: {
            type: Boolean,
            kComposite: 'tooltip.visible'
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
        valueAxisAxisCrossingValue: {
            type: Object | Date | Array,
            kComposite: 'valueAxis.axisCrossingValue'
        },
        valueAxisBackground: {
            type: String,
            kComposite: 'valueAxis.background'
        },
        valueAxisColor: {
            type: String,
            kComposite: 'valueAxis.color'
        },
        valueAxisCrosshairColor: {
            type: String,
            kComposite: 'valueAxis.crosshair.color'
        },
        valueAxisCrosshairOpacity: {
            type: Number,
            kComposite: 'valueAxis.crosshair.opacity'
        },
        valueAxisCrosshairTooltipBackground: {
            type: String,
            kComposite: 'valueAxis.crosshair.tooltip.background'
        },
        valueAxisCrosshairTooltipBorderColor: {
            type: String,
            kComposite: 'valueAxis.crosshair.tooltip.border.color'
        },
        valueAxisCrosshairTooltipBorderDashType: {
            type: String,
            kComposite: 'valueAxis.crosshair.tooltip.border.dashType'
        },
        valueAxisCrosshairTooltipBorderWidth: {
            type: Number,
            kComposite: 'valueAxis.crosshair.tooltip.border.width'
        },
        valueAxisCrosshairTooltipColor: {
            type: String,
            kComposite: 'valueAxis.crosshair.tooltip.color'
        },
        valueAxisCrosshairTooltipFont: {
            type: String,
            kComposite: 'valueAxis.crosshair.tooltip.font'
        },
        valueAxisCrosshairTooltipFormat: {
            type: String,
            kComposite: 'valueAxis.crosshair.tooltip.format'
        },
        valueAxisCrosshairTooltipPadding: {
            type: Number,
            kComposite: 'valueAxis.crosshair.tooltip.padding'
        },
        valueAxisCrosshairTooltipPaddingBottom: {
            type: Number,
            kComposite: 'valueAxis.crosshair.tooltip.padding.bottom'
        },
        valueAxisCrosshairTooltipPaddingLeft: {
            type: Number,
            kComposite: 'valueAxis.crosshair.tooltip.padding.left'
        },
        valueAxisCrosshairTooltipPaddingRight: {
            type: Number,
            kComposite: 'valueAxis.crosshair.tooltip.padding.right'
        },
        valueAxisCrosshairTooltipPaddingTop: {
            type: Number,
            kComposite: 'valueAxis.crosshair.tooltip.padding.top'
        },
        valueAxisCrosshairTooltipTemplate: {
            type: String | Function,
            kComposite: 'valueAxis.crosshair.tooltip.template'
        },
        valueAxisCrosshairTooltipVisible: {
            type: Boolean,
            kComposite: 'valueAxis.crosshair.tooltip.visible'
        },
        valueAxisCrosshairVisible: {
            type: Boolean,
            kComposite: 'valueAxis.crosshair.visible'
        },
        valueAxisCrosshairWidth: {
            type: Number,
            kComposite: 'valueAxis.crosshair.width'
        },
        valueAxisLabelsBackground: {
            type: String,
            kComposite: 'valueAxis.labels.background'
        },
        valueAxisLabelsBorderColor: {
            type: String,
            kComposite: 'valueAxis.labels.border.color'
        },
        valueAxisLabelsBorderDashType: {
            type: String,
            kComposite: 'valueAxis.labels.border.dashType'
        },
        valueAxisLabelsBorderWidth: {
            type: Number,
            kComposite: 'valueAxis.labels.border.width'
        },
        valueAxisLabelsColor: {
            type: String,
            kComposite: 'valueAxis.labels.color'
        },
        valueAxisLabelsFont: {
            type: String,
            kComposite: 'valueAxis.labels.font'
        },
        valueAxisLabelsFormat: {
            type: String,
            kComposite: 'valueAxis.labels.format'
        },
        valueAxisLabelsMargin: {
            type: Number,
            kComposite: 'valueAxis.labels.margin'
        },
        valueAxisLabelsMarginBottom: {
            type: Number,
            kComposite: 'valueAxis.labels.margin.bottom'
        },
        valueAxisLabelsMarginLeft: {
            type: Number,
            kComposite: 'valueAxis.labels.margin.left'
        },
        valueAxisLabelsMarginRight: {
            type: Number,
            kComposite: 'valueAxis.labels.margin.right'
        },
        valueAxisLabelsMarginTop: {
            type: Number,
            kComposite: 'valueAxis.labels.margin.top'
        },
        valueAxisLabelsMirror: {
            type: Boolean,
            kComposite: 'valueAxis.labels.mirror'
        },
        valueAxisLabelsPadding: {
            type: Number,
            kComposite: 'valueAxis.labels.padding'
        },
        valueAxisLabelsPaddingBottom: {
            type: Number,
            kComposite: 'valueAxis.labels.padding.bottom'
        },
        valueAxisLabelsPaddingLeft: {
            type: Number,
            kComposite: 'valueAxis.labels.padding.left'
        },
        valueAxisLabelsPaddingRight: {
            type: Number,
            kComposite: 'valueAxis.labels.padding.right'
        },
        valueAxisLabelsPaddingTop: {
            type: Number,
            kComposite: 'valueAxis.labels.padding.top'
        },
        valueAxisLabelsRotation: {
            type: Number | String,
            kComposite: 'valueAxis.labels.rotation'
        },
        valueAxisLabelsRotationAlign: {
            type: String,
            kComposite: 'valueAxis.labels.rotation.align'
        },
        valueAxisLabelsRotationAngle: {
            type: Number | String,
            kComposite: 'valueAxis.labels.rotation.angle'
        },
        valueAxisLabelsSkip: {
            type: Number,
            kComposite: 'valueAxis.labels.skip'
        },
        valueAxisLabelsStep: {
            type: Number,
            kComposite: 'valueAxis.labels.step'
        },
        valueAxisLabelsTemplate: {
            type: String | Function,
            kComposite: 'valueAxis.labels.template'
        },
        valueAxisLabelsVisible: {
            type: Boolean,
            kComposite: 'valueAxis.labels.visible'
        },
        valueAxisLabelsVisual: {
            type: Function,
            kComposite: 'valueAxis.labels.visual'
        },
        valueAxisLineColor: {
            type: String,
            kComposite: 'valueAxis.line.color'
        },
        valueAxisLineDashType: {
            type: String,
            kComposite: 'valueAxis.line.dashType'
        },
        valueAxisLineVisible: {
            type: Boolean,
            kComposite: 'valueAxis.line.visible'
        },
        valueAxisLineWidth: {
            type: Number,
            kComposite: 'valueAxis.line.width'
        },
        valueAxisMajorGridLinesColor: {
            type: String,
            kComposite: 'valueAxis.majorGridLines.color'
        },
        valueAxisMajorGridLinesDashType: {
            type: String,
            kComposite: 'valueAxis.majorGridLines.dashType'
        },
        valueAxisMajorGridLinesType: {
            type: String,
            kComposite: 'valueAxis.majorGridLines.type'
        },
        valueAxisMajorGridLinesVisible: {
            type: Boolean,
            kComposite: 'valueAxis.majorGridLines.visible'
        },
        valueAxisMajorGridLinesWidth: {
            type: Number,
            kComposite: 'valueAxis.majorGridLines.width'
        },
        valueAxisMajorGridLinesStep: {
            type: Number,
            kComposite: 'valueAxis.majorGridLines.step'
        },
        valueAxisMajorGridLinesSkip: {
            type: Number,
            kComposite: 'valueAxis.majorGridLines.skip'
        },
        valueAxisMajorUnit: {
            type: Number,
            kComposite: 'valueAxis.majorUnit'
        },
        valueAxisMax: {
            type: Number,
            kComposite: 'valueAxis.max'
        },
        valueAxisMin: {
            type: Number,
            kComposite: 'valueAxis.min'
        },
        valueAxisMinorGridLinesColor: {
            type: String,
            kComposite: 'valueAxis.minorGridLines.color'
        },
        valueAxisMinorGridLinesDashType: {
            type: String,
            kComposite: 'valueAxis.minorGridLines.dashType'
        },
        valueAxisMinorGridLinesType: {
            type: String,
            kComposite: 'valueAxis.minorGridLines.type'
        },
        valueAxisMinorGridLinesVisible: {
            type: Boolean,
            kComposite: 'valueAxis.minorGridLines.visible'
        },
        valueAxisMinorGridLinesWidth: {
            type: Number,
            kComposite: 'valueAxis.minorGridLines.width'
        },
        valueAxisMinorGridLinesStep: {
            type: Number,
            kComposite: 'valueAxis.minorGridLines.step'
        },
        valueAxisMinorGridLinesSkip: {
            type: Number,
            kComposite: 'valueAxis.minorGridLines.skip'
        },
        valueAxisMajorTicksColor: {
            type: String,
            kComposite: 'valueAxis.majorTicks.color'
        },
        valueAxisMajorTicksSize: {
            type: Number,
            kComposite: 'valueAxis.majorTicks.size'
        },
        valueAxisMajorTicksVisible: {
            type: Boolean,
            kComposite: 'valueAxis.majorTicks.visible'
        },
        valueAxisMajorTicksStep: {
            type: Number,
            kComposite: 'valueAxis.majorTicks.step'
        },
        valueAxisMajorTicksSkip: {
            type: Number,
            kComposite: 'valueAxis.majorTicks.skip'
        },
        valueAxisMinorTicksColor: {
            type: String,
            kComposite: 'valueAxis.minorTicks.color'
        },
        valueAxisMinorTicksSize: {
            type: Number,
            kComposite: 'valueAxis.minorTicks.size'
        },
        valueAxisMinorTicksVisible: {
            type: Boolean,
            kComposite: 'valueAxis.minorTicks.visible'
        },
        valueAxisMinorTicksWidth: {
            type: Number,
            kComposite: 'valueAxis.minorTicks.width'
        },
        valueAxisMinorTicksStep: {
            type: Number,
            kComposite: 'valueAxis.minorTicks.step'
        },
        valueAxisMinorTicksSkip: {
            type: Number,
            kComposite: 'valueAxis.minorTicks.skip'
        },
        valueAxisMinorUnit: {
            type: Number,
            kComposite: 'valueAxis.minorUnit'
        },
        valueAxisName: {
            type: String,
            kComposite: 'valueAxis.name'
        },
        valueAxisNarrowRange: {
            type: Boolean,
            kComposite: 'valueAxis.narrowRange'
        },
        valueAxisPane: {
            type: String,
            kComposite: 'valueAxis.pane'
        },
        valueAxisPlotBands: {
            type: Array,
            kComposite: 'valueAxis.plotBands'
        }, valueAxisReverse: {
            type: Boolean,
            kComposite: 'valueAxis.reverse'
        },
        valueAxisTitleBackground: {
            type: String,
            kComposite: 'valueAxis.title.background'
        },
        valueAxisTitleBorderColor: {
            type: String,
            kComposite: 'valueAxis.title.border.color'
        },
        valueAxisTitleBorderDashType: {
            type: String,
            kComposite: 'valueAxis.title.border.dashType'
        },
        valueAxisTitleBorderWidth: {
            type: Number,
            kComposite: 'valueAxis.title.border.width'
        },
        valueAxisTitleColor: {
            type: String,
            kComposite: 'valueAxis.title.color'
        },
        valueAxisTitleFont: {
            type: String,
            kComposite: 'valueAxis.title.font'
        },
        valueAxisTitleMargin: {
            type: Number,
            kComposite: 'valueAxis.title.margin'
        },
        valueAxisTitleMarginBottom: {
            type: Number,
            kComposite: 'valueAxis.title.margin.bottom'
        },
        valueAxisTitleMarginLeft: {
            type: Number,
            kComposite: 'valueAxis.title.margin.left'
        },
        valueAxisTitleMarginRight: {
            type: Number,
            kComposite: 'valueAxis.title.margin.right'
        },
        valueAxisTitleMarginTop: {
            type: Number,
            kComposite: 'valueAxis.title.margin.top'
        },
        valueAxisTitlePadding: {
            type: Number,
            kComposite: 'valueAxis.title.padding'
        },
        valueAxisTitlePaddingBottom: {
            type: Number,
            kComposite: 'valueAxis.title.padding.bottom'
        },
        valueAxisTitlePaddingLeft: {
            type: Number,
            kComposite: 'valueAxis.title.padding.left'
        },
        valueAxisTitlePaddingRight: {
            type: Number,
            kComposite: 'valueAxis.title.padding.right'
        },
        valueAxisTitlePaddingTop: {
            type: Number,
            kComposite: 'valueAxis.title.padding.top'
        },
        valueAxisTitlePosition: {
            type: String,
            kComposite: 'valueAxis.title.position'
        },
        valueAxisTitleRotation: {
            type: Number,
            kComposite: 'valueAxis.title.rotation'
        },
        valueAxisTitleText: {
            type: String,
            kComposite: 'valueAxis.title.text'
        },
        valueAxisTitleVisible: {
            type: Boolean,
            kComposite: 'valueAxis.title.visible'
        },
        valueAxisTitleVisual: {
            type: Function,
            kComposite: 'valueAxis.title.visual'
        },
        valueAxisType: {
            type: String,
            kComposite: 'valueAxis.type'
        },
        valueAxisVisible: {
            type: Boolean,
            kComposite: 'valueAxis.visible'
        },
        valueAxisNotesPosition: {
            type: String,
            kComposite: 'valueAxis.notes.position'
        },
        valueAxisNotesIconBackground: {
            type: String,
            kComposite: 'valueAxis.notes.icon.background'
        },
        valueAxisNotesIconBorderColor: {
            type: String,
            kComposite: 'valueAxis.notes.icon.border.color'
        },
        valueAxisNotesIconBorderWidth: {
            type: Number,
            kComposite: 'valueAxis.notes.icon.border.width'
        },
        valueAxisNotesIconSize: {
            type: Number,
            kComposite: 'valueAxis.notes.icon.size'
        },
        valueAxisNotesIconType: {
            type: String,
            kComposite: 'valueAxis.notes.icon.type'
        },
        valueAxisNotesIconVisible: {
            type: Boolean,
            kComposite: 'valueAxis.notes.icon.visible'
        },
        valueAxisNotesLabelBackground: {
            type: String,
            kComposite: 'valueAxis.notes.label.background'
        },
        valueAxisNotesLabelBorderColor: {
            type: String,
            kComposite: 'valueAxis.notes.label.border.color'
        },
        valueAxisNotesLabelBorderDashType: {
            type: String,
            kComposite: 'valueAxis.notes.label.border.dashType'
        },
        valueAxisNotesLabelBorderWidth: {
            type: Number,
            kComposite: 'valueAxis.notes.label.border.width'
        },
        valueAxisNotesLabelColor: {
            type: String,
            kComposite: 'valueAxis.notes.label.color'
        },
        valueAxisNotesLabelFont: {
            type: String,
            kComposite: 'valueAxis.notes.label.font'
        },
        valueAxisNotesLabelTemplate: {
            type: String | Function,
            kComposite: 'valueAxis.notes.label.template'
        },
        valueAxisNotesLabelVisible: {
            type: Boolean,
            kComposite: 'valueAxis.notes.label.visible'
        },
        valueAxisNotesLabelRotation: {
            type: Number,
            kComposite: 'valueAxis.notes.label.rotation'
        },
        valueAxisNotesLabelFormat: {
            type: String,
            kComposite: 'valueAxis.notes.label.format'
        },
        valueAxisNotesLabelPosition: {
            type: String,
            kComposite: 'valueAxis.notes.label.position'
        },
        valueAxisNotesLineDashType: {
            type: String,
            kComposite: 'valueAxis.notes.line.dashType'
        },
        valueAxisNotesLineWidth: {
            type: Number,
            kComposite: 'valueAxis.notes.line.width'
        },
        valueAxisNotesLineColor: {
            type: String,
            kComposite: 'valueAxis.notes.line.color'
        },
        valueAxisNotesLineLength: {
            type: Number,
            kComposite: 'valueAxis.notes.line.length'
        },
        valueAxisNotesData: {
            type: Array,
            kComposite: 'valueAxis.notes.data'
        }, valueAxisNotesVisual: {
            type: Function,
            kComposite: 'valueAxis.notes.visual'
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
    props: {
        xAxisAxisCrossingValue: {
            type: Object | Date | Array,
            kComposite: 'xAxis.axisCrossingValue'
        },
        xAxisBackground: {
            type: String,
            kComposite: 'xAxis.background'
        },
        xAxisBaseUnit: {
            type: String,
            kComposite: 'xAxis.baseUnit'
        },
        xAxisColor: {
            type: String,
            kComposite: 'xAxis.color'
        },
        xAxisCrosshairColor: {
            type: String,
            kComposite: 'xAxis.crosshair.color'
        },
        xAxisCrosshairOpacity: {
            type: Number,
            kComposite: 'xAxis.crosshair.opacity'
        },
        xAxisCrosshairTooltipBackground: {
            type: String,
            kComposite: 'xAxis.crosshair.tooltip.background'
        },
        xAxisCrosshairTooltipBorderColor: {
            type: String,
            kComposite: 'xAxis.crosshair.tooltip.border.color'
        },
        xAxisCrosshairTooltipBorderDashType: {
            type: String,
            kComposite: 'xAxis.crosshair.tooltip.border.dashType'
        },
        xAxisCrosshairTooltipBorderWidth: {
            type: Number,
            kComposite: 'xAxis.crosshair.tooltip.border.width'
        },
        xAxisCrosshairTooltipColor: {
            type: String,
            kComposite: 'xAxis.crosshair.tooltip.color'
        },
        xAxisCrosshairTooltipFont: {
            type: String,
            kComposite: 'xAxis.crosshair.tooltip.font'
        },
        xAxisCrosshairTooltipFormat: {
            type: String,
            kComposite: 'xAxis.crosshair.tooltip.format'
        },
        xAxisCrosshairTooltipPadding: {
            type: Number,
            kComposite: 'xAxis.crosshair.tooltip.padding'
        },
        xAxisCrosshairTooltipPaddingBottom: {
            type: Number,
            kComposite: 'xAxis.crosshair.tooltip.padding.bottom'
        },
        xAxisCrosshairTooltipPaddingLeft: {
            type: Number,
            kComposite: 'xAxis.crosshair.tooltip.padding.left'
        },
        xAxisCrosshairTooltipPaddingRight: {
            type: Number,
            kComposite: 'xAxis.crosshair.tooltip.padding.right'
        },
        xAxisCrosshairTooltipPaddingTop: {
            type: Number,
            kComposite: 'xAxis.crosshair.tooltip.padding.top'
        },
        xAxisCrosshairTooltipTemplate: {
            type: String | Function,
            kComposite: 'xAxis.crosshair.tooltip.template'
        },
        xAxisCrosshairTooltipVisible: {
            type: Boolean,
            kComposite: 'xAxis.crosshair.tooltip.visible'
        },
        xAxisCrosshairVisible: {
            type: Boolean,
            kComposite: 'xAxis.crosshair.visible'
        },
        xAxisCrosshairWidth: {
            type: Number,
            kComposite: 'xAxis.crosshair.width'
        },
        xAxisLabelsBackground: {
            type: String,
            kComposite: 'xAxis.labels.background'
        },
        xAxisLabelsBorderColor: {
            type: String,
            kComposite: 'xAxis.labels.border.color'
        },
        xAxisLabelsBorderDashType: {
            type: String,
            kComposite: 'xAxis.labels.border.dashType'
        },
        xAxisLabelsBorderWidth: {
            type: Number,
            kComposite: 'xAxis.labels.border.width'
        },
        xAxisLabelsColor: {
            type: String,
            kComposite: 'xAxis.labels.color'
        },
        xAxisLabelsCulture: {
            type: String,
            kComposite: 'xAxis.labels.culture'
        },
        xAxisLabelsDateFormatsDays: {
            type: String,
            kComposite: 'xAxis.labels.dateFormats.days'
        },
        xAxisLabelsDateFormatsHours: {
            type: String,
            kComposite: 'xAxis.labels.dateFormats.hours'
        },
        xAxisLabelsDateFormatsMonths: {
            type: String,
            kComposite: 'xAxis.labels.dateFormats.months'
        },
        xAxisLabelsDateFormatsWeeks: {
            type: String,
            kComposite: 'xAxis.labels.dateFormats.weeks'
        },
        xAxisLabelsDateFormatsYears: {
            type: String,
            kComposite: 'xAxis.labels.dateFormats.years'
        },
        xAxisLabelsFont: {
            type: String,
            kComposite: 'xAxis.labels.font'
        },
        xAxisLabelsFormat: {
            type: String,
            kComposite: 'xAxis.labels.format'
        },
        xAxisLabelsMargin: {
            type: Number,
            kComposite: 'xAxis.labels.margin'
        },
        xAxisLabelsMarginBottom: {
            type: Number,
            kComposite: 'xAxis.labels.margin.bottom'
        },
        xAxisLabelsMarginLeft: {
            type: Number,
            kComposite: 'xAxis.labels.margin.left'
        },
        xAxisLabelsMarginRight: {
            type: Number,
            kComposite: 'xAxis.labels.margin.right'
        },
        xAxisLabelsMarginTop: {
            type: Number,
            kComposite: 'xAxis.labels.margin.top'
        },
        xAxisLabelsMirror: {
            type: Boolean,
            kComposite: 'xAxis.labels.mirror'
        },
        xAxisLabelsPadding: {
            type: Number,
            kComposite: 'xAxis.labels.padding'
        },
        xAxisLabelsPaddingBottom: {
            type: Number,
            kComposite: 'xAxis.labels.padding.bottom'
        },
        xAxisLabelsPaddingLeft: {
            type: Number,
            kComposite: 'xAxis.labels.padding.left'
        },
        xAxisLabelsPaddingRight: {
            type: Number,
            kComposite: 'xAxis.labels.padding.right'
        },
        xAxisLabelsPaddingTop: {
            type: Number,
            kComposite: 'xAxis.labels.padding.top'
        },
        xAxisLabelsRotation: {
            type: Number | String,
            kComposite: 'xAxis.labels.rotation'
        },
        xAxisLabelsRotationAlign: {
            type: String,
            kComposite: 'xAxis.labels.rotation.align'
        },
        xAxisLabelsRotationAngle: {
            type: Number | String,
            kComposite: 'xAxis.labels.rotation.angle'
        },
        xAxisLabelsSkip: {
            type: Number,
            kComposite: 'xAxis.labels.skip'
        },
        xAxisLabelsStep: {
            type: Number,
            kComposite: 'xAxis.labels.step'
        },
        xAxisLabelsTemplate: {
            type: String | Function,
            kComposite: 'xAxis.labels.template'
        },
        xAxisLabelsVisible: {
            type: Boolean,
            kComposite: 'xAxis.labels.visible'
        },
        xAxisLabelsVisual: {
            type: Function,
            kComposite: 'xAxis.labels.visual'
        },
        xAxisLineColor: {
            type: String,
            kComposite: 'xAxis.line.color'
        },
        xAxisLineDashType: {
            type: String,
            kComposite: 'xAxis.line.dashType'
        },
        xAxisLineVisible: {
            type: Boolean,
            kComposite: 'xAxis.line.visible'
        },
        xAxisLineWidth: {
            type: Number,
            kComposite: 'xAxis.line.width'
        },
        xAxisMajorGridLinesColor: {
            type: String,
            kComposite: 'xAxis.majorGridLines.color'
        },
        xAxisMajorGridLinesDashType: {
            type: String,
            kComposite: 'xAxis.majorGridLines.dashType'
        },
        xAxisMajorGridLinesVisible: {
            type: Boolean,
            kComposite: 'xAxis.majorGridLines.visible'
        },
        xAxisMajorGridLinesWidth: {
            type: Number,
            kComposite: 'xAxis.majorGridLines.width'
        },
        xAxisMajorGridLinesStep: {
            type: Number,
            kComposite: 'xAxis.majorGridLines.step'
        },
        xAxisMajorGridLinesSkip: {
            type: Number,
            kComposite: 'xAxis.majorGridLines.skip'
        },
        xAxisMinorGridLinesColor: {
            type: String,
            kComposite: 'xAxis.minorGridLines.color'
        },
        xAxisMinorGridLinesDashType: {
            type: String,
            kComposite: 'xAxis.minorGridLines.dashType'
        },
        xAxisMinorGridLinesVisible: {
            type: Boolean,
            kComposite: 'xAxis.minorGridLines.visible'
        },
        xAxisMinorGridLinesWidth: {
            type: Number,
            kComposite: 'xAxis.minorGridLines.width'
        },
        xAxisMinorGridLinesStep: {
            type: Number,
            kComposite: 'xAxis.minorGridLines.step'
        },
        xAxisMinorGridLinesSkip: {
            type: Number,
            kComposite: 'xAxis.minorGridLines.skip'
        },
        xAxisMinorTicksColor: {
            type: String,
            kComposite: 'xAxis.minorTicks.color'
        },
        xAxisMinorTicksSize: {
            type: Number,
            kComposite: 'xAxis.minorTicks.size'
        },
        xAxisMinorTicksVisible: {
            type: Boolean,
            kComposite: 'xAxis.minorTicks.visible'
        },
        xAxisMinorTicksWidth: {
            type: Number,
            kComposite: 'xAxis.minorTicks.width'
        },
        xAxisMinorTicksStep: {
            type: Number,
            kComposite: 'xAxis.minorTicks.step'
        },
        xAxisMinorTicksSkip: {
            type: Number,
            kComposite: 'xAxis.minorTicks.skip'
        },
        xAxisMajorTicksColor: {
            type: String,
            kComposite: 'xAxis.majorTicks.color'
        },
        xAxisMajorTicksSize: {
            type: Number,
            kComposite: 'xAxis.majorTicks.size'
        },
        xAxisMajorTicksVisible: {
            type: Boolean,
            kComposite: 'xAxis.majorTicks.visible'
        },
        xAxisMajorTicksWidth: {
            type: Number,
            kComposite: 'xAxis.majorTicks.width'
        },
        xAxisMajorTicksStep: {
            type: Number,
            kComposite: 'xAxis.majorTicks.step'
        },
        xAxisMajorTicksSkip: {
            type: Number,
            kComposite: 'xAxis.majorTicks.skip'
        },
        xAxisMajorUnit: {
            type: Number,
            kComposite: 'xAxis.majorUnit'
        },
        xAxisMax: {
            type: Number,
            kComposite: 'xAxis.max'
        },
        xAxisMin: {
            type: Number,
            kComposite: 'xAxis.min'
        },
        xAxisMinorUnit: {
            type: Number,
            kComposite: 'xAxis.minorUnit'
        },
        xAxisName: {
            type: String,
            kComposite: 'xAxis.name'
        },
        xAxisNarrowRange: {
            type: Boolean,
            kComposite: 'xAxis.narrowRange'
        },
        xAxisPane: {
            type: String,
            kComposite: 'xAxis.pane'
        },
        xAxisPlotBands: {
            type: Array,
            kComposite: 'xAxis.plotBands'
        },
        xAxisReverse: {
            type: Boolean,
            kComposite: 'xAxis.reverse'
        },
        xAxisStartAngle: {
            type: Number,
            kComposite: 'xAxis.startAngle'
        },
        xAxisTitleBackground: {
            type: String,
            kComposite: 'xAxis.title.background'
        },
        xAxisTitleBorderColor: {
            type: String,
            kComposite: 'xAxis.title.border.color'
        },
        xAxisTitleBorderDashType: {
            type: String,
            kComposite: 'xAxis.title.border.dashType'
        },
        xAxisTitleBorderWidth: {
            type: Number,
            kComposite: 'xAxis.title.border.width'
        },
        xAxisTitleColor: {
            type: String,
            kComposite: 'xAxis.title.color'
        },
        xAxisTitleFont: {
            type: String,
            kComposite: 'xAxis.title.font'
        },
        xAxisTitleMargin: {
            type: Number,
            kComposite: 'xAxis.title.margin'
        },
        xAxisTitleMarginBottom: {
            type: Number,
            kComposite: 'xAxis.title.margin.bottom'
        },
        xAxisTitleMarginLeft: {
            type: Number,
            kComposite: 'xAxis.title.margin.left'
        },
        xAxisTitleMarginRight: {
            type: Number,
            kComposite: 'xAxis.title.margin.right'
        },
        xAxisTitleMarginTop: {
            type: Number,
            kComposite: 'xAxis.title.margin.top'
        },
        xAxisTitlePadding: {
            type: Number,
            kComposite: 'xAxis.title.padding'
        },
        xAxisTitlePaddingBottom: {
            type: Number,
            kComposite: 'xAxis.title.padding.bottom'
        },
        xAxisTitlePaddingLeft: {
            type: Number,
            kComposite: 'xAxis.title.padding.left'
        },
        xAxisTitlePaddingRight: {
            type: Number,
            kComposite: 'xAxis.title.padding.right'
        },
        xAxisTitlePaddingTop: {
            type: Number,
            kComposite: 'xAxis.title.padding.top'
        },
        xAxisTitlePosition: {
            type: String,
            kComposite: 'xAxis.title.position'
        },
        xAxisTitleRotation: {
            type: Number,
            kComposite: 'xAxis.title.rotation'
        },
        xAxisTitleText: {
            type: String,
            kComposite: 'xAxis.title.text'
        },
        xAxisTitleVisible: {
            type: Boolean,
            kComposite: 'xAxis.title.visible'
        },
        xAxisTitleVisual: {
            type: Function,
            kComposite: 'xAxis.title.visual'
        },
        xAxisType: {
            type: String,
            kComposite: 'xAxis.type'
        },
        xAxisVisible: {
            type: Boolean,
            kComposite: 'xAxis.visible'
        },
        xAxisNotesPosition: {
            type: String,
            kComposite: 'xAxis.notes.position'
        },
        xAxisNotesIconBackground: {
            type: String,
            kComposite: 'xAxis.notes.icon.background'
        },
        xAxisNotesIconBorderColor: {
            type: String,
            kComposite: 'xAxis.notes.icon.border.color'
        },
        xAxisNotesIconBorderWidth: {
            type: Number,
            kComposite: 'xAxis.notes.icon.border.width'
        },
        xAxisNotesIconSize: {
            type: Number,
            kComposite: 'xAxis.notes.icon.size'
        },
        xAxisNotesIconType: {
            type: String,
            kComposite: 'xAxis.notes.icon.type'
        },
        xAxisNotesIconVisible: {
            type: Boolean,
            kComposite: 'xAxis.notes.icon.visible'
        },
        xAxisNotesLabelBackground: {
            type: String,
            kComposite: 'xAxis.notes.label.background'
        },
        xAxisNotesLabelBorderColor: {
            type: String,
            kComposite: 'xAxis.notes.label.border.color'
        },
        xAxisNotesLabelBorderDashType: {
            type: String,
            kComposite: 'xAxis.notes.label.border.dashType'
        },
        xAxisNotesLabelBorderWidth: {
            type: Number,
            kComposite: 'xAxis.notes.label.border.width'
        },
        xAxisNotesLabelColor: {
            type: String,
            kComposite: 'xAxis.notes.label.color'
        },
        xAxisNotesLabelFont: {
            type: String,
            kComposite: 'xAxis.notes.label.font'
        },
        xAxisNotesLabelTemplate: {
            type: String | Function,
            kComposite: 'xAxis.notes.label.template'
        },
        xAxisNotesLabelVisible: {
            type: Boolean,
            kComposite: 'xAxis.notes.label.visible'
        },
        xAxisNotesLabelRotation: {
            type: Number,
            kComposite: 'xAxis.notes.label.rotation'
        },
        xAxisNotesLabelFormat: {
            type: String,
            kComposite: 'xAxis.notes.label.format'
        },
        xAxisNotesLabelPosition: {
            type: String,
            kComposite: 'xAxis.notes.label.position'
        },
        xAxisNotesLineDashType: {
            type: String,
            kComposite: 'xAxis.notes.line.dashType'
        },
        xAxisNotesLineWidth: {
            type: Number,
            kComposite: 'xAxis.notes.line.width'
        },
        xAxisNotesLineColor: {
            type: String,
            kComposite: 'xAxis.notes.line.color'
        },
        xAxisNotesLineLength: {
            type: Number,
            kComposite: 'xAxis.notes.line.length'
        },
        xAxisNotesData: {
            type: Array,
            kComposite: 'xAxis.notes.data'
        }, xAxisNotesVisual: {
            type: Function,
            kComposite: 'xAxis.notes.visual'
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
    props: {
        yAxisAxisCrossingValue: {
            type: Object | Date | Array,
            kComposite: 'yAxis.axisCrossingValue'
        },
        yAxisBackground: {
            type: String,
            kComposite: 'yAxis.background'
        },
        yAxisBaseUnit: {
            type: String,
            kComposite: 'yAxis.baseUnit'
        },
        yAxisColor: {
            type: String,
            kComposite: 'yAxis.color'
        },
        yAxisCrosshairColor: {
            type: String,
            kComposite: 'yAxis.crosshair.color'
        },
        yAxisCrosshairOpacity: {
            type: Number,
            kComposite: 'yAxis.crosshair.opacity'
        },
        yAxisCrosshairTooltipBackground: {
            type: String,
            kComposite: 'yAxis.crosshair.tooltip.background'
        },
        yAxisCrosshairTooltipBorderColor: {
            type: String,
            kComposite: 'yAxis.crosshair.tooltip.border.color'
        },
        yAxisCrosshairTooltipBorderDashType: {
            type: String,
            kComposite: 'yAxis.crosshair.tooltip.border.dashType'
        },
        yAxisCrosshairTooltipBorderWidth: {
            type: Number,
            kComposite: 'yAxis.crosshair.tooltip.border.width'
        },
        yAxisCrosshairTooltipColor: {
            type: String,
            kComposite: 'yAxis.crosshair.tooltip.color'
        },
        yAxisCrosshairTooltipFont: {
            type: String,
            kComposite: 'yAxis.crosshair.tooltip.font'
        },
        yAxisCrosshairTooltipFormat: {
            type: String,
            kComposite: 'yAxis.crosshair.tooltip.format'
        },
        yAxisCrosshairTooltipPadding: {
            type: Number,
            kComposite: 'yAxis.crosshair.tooltip.padding'
        },
        yAxisCrosshairTooltipPaddingBottom: {
            type: Number,
            kComposite: 'yAxis.crosshair.tooltip.padding.bottom'
        },
        yAxisCrosshairTooltipPaddingLeft: {
            type: Number,
            kComposite: 'yAxis.crosshair.tooltip.padding.left'
        },
        yAxisCrosshairTooltipPaddingRight: {
            type: Number,
            kComposite: 'yAxis.crosshair.tooltip.padding.right'
        },
        yAxisCrosshairTooltipPaddingTop: {
            type: Number,
            kComposite: 'yAxis.crosshair.tooltip.padding.top'
        },
        yAxisCrosshairTooltipTemplate: {
            type: String | Function,
            kComposite: 'yAxis.crosshair.tooltip.template'
        },
        yAxisCrosshairTooltipVisible: {
            type: Boolean,
            kComposite: 'yAxis.crosshair.tooltip.visible'
        },
        yAxisCrosshairVisible: {
            type: Boolean,
            kComposite: 'yAxis.crosshair.visible'
        },
        yAxisCrosshairWidth: {
            type: Number,
            kComposite: 'yAxis.crosshair.width'
        },
        yAxisLabelsBackground: {
            type: String,
            kComposite: 'yAxis.labels.background'
        },
        yAxisLabelsBorderColor: {
            type: String,
            kComposite: 'yAxis.labels.border.color'
        },
        yAxisLabelsBorderDashType: {
            type: String,
            kComposite: 'yAxis.labels.border.dashType'
        },
        yAxisLabelsBorderWidth: {
            type: Number,
            kComposite: 'yAxis.labels.border.width'
        },
        yAxisLabelsColor: {
            type: String,
            kComposite: 'yAxis.labels.color'
        },
        yAxisLabelsCulture: {
            type: String,
            kComposite: 'yAxis.labels.culture'
        },
        yAxisLabelsDateFormatsDays: {
            type: String,
            kComposite: 'yAxis.labels.dateFormats.days'
        },
        yAxisLabelsDateFormatsHours: {
            type: String,
            kComposite: 'yAxis.labels.dateFormats.hours'
        },
        yAxisLabelsDateFormatsMonths: {
            type: String,
            kComposite: 'yAxis.labels.dateFormats.months'
        },
        yAxisLabelsDateFormatsWeeks: {
            type: String,
            kComposite: 'yAxis.labels.dateFormats.weeks'
        },
        yAxisLabelsDateFormatsYears: {
            type: String,
            kComposite: 'yAxis.labels.dateFormats.years'
        },
        yAxisLabelsFont: {
            type: String,
            kComposite: 'yAxis.labels.font'
        },
        yAxisLabelsFormat: {
            type: String,
            kComposite: 'yAxis.labels.format'
        },
        yAxisLabelsMargin: {
            type: Number,
            kComposite: 'yAxis.labels.margin'
        },
        yAxisLabelsMarginBottom: {
            type: Number,
            kComposite: 'yAxis.labels.margin.bottom'
        },
        yAxisLabelsMarginLeft: {
            type: Number,
            kComposite: 'yAxis.labels.margin.left'
        },
        yAxisLabelsMarginRight: {
            type: Number,
            kComposite: 'yAxis.labels.margin.right'
        },
        yAxisLabelsMarginTop: {
            type: Number,
            kComposite: 'yAxis.labels.margin.top'
        },
        yAxisLabelsMirror: {
            type: Boolean,
            kComposite: 'yAxis.labels.mirror'
        },
        yAxisLabelsPadding: {
            type: Number,
            kComposite: 'yAxis.labels.padding'
        },
        yAxisLabelsPaddingBottom: {
            type: Number,
            kComposite: 'yAxis.labels.padding.bottom'
        },
        yAxisLabelsPaddingLeft: {
            type: Number,
            kComposite: 'yAxis.labels.padding.left'
        },
        yAxisLabelsPaddingRight: {
            type: Number,
            kComposite: 'yAxis.labels.padding.right'
        },
        yAxisLabelsPaddingTop: {
            type: Number,
            kComposite: 'yAxis.labels.padding.top'
        },
        yAxisLabelsRotation: {
            type: Number,
            kComposite: 'yAxis.labels.rotation'
        },
        yAxisLabelsRotationAlign: {
            type: String,
            kComposite: 'yAxis.labels.rotation.align'
        },
        yAxisLabelsRotationAngle: {
            type: Number,
            kComposite: 'yAxis.labels.rotation.angle'
        },
        yAxisLabelsSkip: {
            type: Number,
            kComposite: 'yAxis.labels.skip'
        },
        yAxisLabelsStep: {
            type: Number,
            kComposite: 'yAxis.labels.step'
        },
        yAxisLabelsTemplate: {
            type: String | Function,
            kComposite: 'yAxis.labels.template'
        },
        yAxisLabelsVisible: {
            type: Boolean,
            kComposite: 'yAxis.labels.visible'
        },
        yAxisLabelsVisual: {
            type: Function,
            kComposite: 'yAxis.labels.visual'
        },
        yAxisLineColor: {
            type: String,
            kComposite: 'yAxis.line.color'
        },
        yAxisLineDashType: {
            type: String,
            kComposite: 'yAxis.line.dashType'
        },
        yAxisLineVisible: {
            type: Boolean,
            kComposite: 'yAxis.line.visible'
        },
        yAxisLineWidth: {
            type: Number,
            kComposite: 'yAxis.line.width'
        },
        yAxisMajorGridLinesColor: {
            type: String,
            kComposite: 'yAxis.majorGridLines.color'
        },
        yAxisMajorGridLinesDashType: {
            type: String,
            kComposite: 'yAxis.majorGridLines.dashType'
        },
        yAxisMajorGridLinesVisible: {
            type: Boolean,
            kComposite: 'yAxis.majorGridLines.visible'
        },
        yAxisMajorGridLinesWidth: {
            type: Number,
            kComposite: 'yAxis.majorGridLines.width'
        },
        yAxisMajorGridLinesStep: {
            type: Number,
            kComposite: 'yAxis.majorGridLines.step'
        },
        yAxisMajorGridLinesSkip: {
            type: Number,
            kComposite: 'yAxis.majorGridLines.skip'
        },
        yAxisMinorGridLinesColor: {
            type: String,
            kComposite: 'yAxis.minorGridLines.color'
        },
        yAxisMinorGridLinesDashType: {
            type: String,
            kComposite: 'yAxis.minorGridLines.dashType'
        },
        yAxisMinorGridLinesVisible: {
            type: Boolean,
            kComposite: 'yAxis.minorGridLines.visible'
        },
        yAxisMinorGridLinesWidth: {
            type: Number,
            kComposite: 'yAxis.minorGridLines.width'
        },
        yAxisMinorGridLinesStep: {
            type: Number,
            kComposite: 'yAxis.minorGridLines.step'
        },
        yAxisMinorGridLinesSkip: {
            type: Number,
            kComposite: 'yAxis.minorGridLines.skip'
        },
        yAxisMinorTicksColor: {
            type: String,
            kComposite: 'yAxis.minorTicks.color'
        },
        yAxisMinorTicksSize: {
            type: Number,
            kComposite: 'yAxis.minorTicks.size'
        },
        yAxisMinorTicksVisible: {
            type: Boolean,
            kComposite: 'yAxis.minorTicks.visible'
        },
        yAxisMinorTicksWidth: {
            type: Number,
            kComposite: 'yAxis.minorTicks.width'
        },
        yAxisMinorTicksStep: {
            type: Number,
            kComposite: 'yAxis.minorTicks.step'
        },
        yAxisMinorTicksSkip: {
            type: Number,
            kComposite: 'yAxis.minorTicks.skip'
        },
        yAxisMajorTicksColor: {
            type: String,
            kComposite: 'yAxis.majorTicks.color'
        },
        yAxisMajorTicksSize: {
            type: Number,
            kComposite: 'yAxis.majorTicks.size'
        },
        yAxisMajorTicksVisible: {
            type: Boolean,
            kComposite: 'yAxis.majorTicks.visible'
        },
        yAxisMajorTicksWidth: {
            type: Number,
            kComposite: 'yAxis.majorTicks.width'
        },
        yAxisMajorTicksStep: {
            type: Number,
            kComposite: 'yAxis.majorTicks.step'
        },
        yAxisMajorTicksSkip: {
            type: Number,
            kComposite: 'yAxis.majorTicks.skip'
        },
        yAxisMajorUnit: {
            type: Number,
            kComposite: 'yAxis.majorUnit'
        },
        yAxisMax: {
            type: Number,
            kComposite: 'yAxis.max'
        },
        yAxisMin: {
            type: Number,
            kComposite: 'yAxis.min'
        },
        yAxisMinorUnit: {
            type: Number,
            kComposite: 'yAxis.minorUnit'
        },
        yAxisName: {
            type: String,
            kComposite: 'yAxis.name'
        },
        yAxisNarrowRange: {
            type: Boolean,
            kComposite: 'yAxis.narrowRange'
        },
        yAxisPane: {
            type: String,
            kComposite: 'yAxis.pane'
        },
        yAxisPlotBands: {
            type: Array,
            kComposite: 'yAxis.plotBands'
        }, yAxisReverse: {
            type: Boolean,
            kComposite: 'yAxis.reverse'
        },
        yAxisTitleBackground: {
            type: String,
            kComposite: 'yAxis.title.background'
        },
        yAxisTitleBorderColor: {
            type: String,
            kComposite: 'yAxis.title.border.color'
        },
        yAxisTitleBorderDashType: {
            type: String,
            kComposite: 'yAxis.title.border.dashType'
        },
        yAxisTitleBorderWidth: {
            type: Number,
            kComposite: 'yAxis.title.border.width'
        },
        yAxisTitleColor: {
            type: String,
            kComposite: 'yAxis.title.color'
        },
        yAxisTitleFont: {
            type: String,
            kComposite: 'yAxis.title.font'
        },
        yAxisTitleMargin: {
            type: Number,
            kComposite: 'yAxis.title.margin'
        },
        yAxisTitleMarginBottom: {
            type: Number,
            kComposite: 'yAxis.title.margin.bottom'
        },
        yAxisTitleMarginLeft: {
            type: Number,
            kComposite: 'yAxis.title.margin.left'
        },
        yAxisTitleMarginRight: {
            type: Number,
            kComposite: 'yAxis.title.margin.right'
        },
        yAxisTitleMarginTop: {
            type: Number,
            kComposite: 'yAxis.title.margin.top'
        },
        yAxisTitlePadding: {
            type: Number,
            kComposite: 'yAxis.title.padding'
        },
        yAxisTitlePaddingBottom: {
            type: Number,
            kComposite: 'yAxis.title.padding.bottom'
        },
        yAxisTitlePaddingLeft: {
            type: Number,
            kComposite: 'yAxis.title.padding.left'
        },
        yAxisTitlePaddingRight: {
            type: Number,
            kComposite: 'yAxis.title.padding.right'
        },
        yAxisTitlePaddingTop: {
            type: Number,
            kComposite: 'yAxis.title.padding.top'
        },
        yAxisTitlePosition: {
            type: String,
            kComposite: 'yAxis.title.position'
        },
        yAxisTitleRotation: {
            type: Number,
            kComposite: 'yAxis.title.rotation'
        },
        yAxisTitleText: {
            type: String,
            kComposite: 'yAxis.title.text'
        },
        yAxisTitleVisible: {
            type: Boolean,
            kComposite: 'yAxis.title.visible'
        },
        yAxisTitleVisual: {
            type: Function,
            kComposite: 'yAxis.title.visual'
        },
        yAxisType: {
            type: String,
            kComposite: 'yAxis.type'
        },
        yAxisVisible: {
            type: Boolean,
            kComposite: 'yAxis.visible'
        },
        yAxisNotesPosition: {
            type: String,
            kComposite: 'yAxis.notes.position'
        },
        yAxisNotesIconBackground: {
            type: String,
            kComposite: 'yAxis.notes.icon.background'
        },
        yAxisNotesIconBorderColor: {
            type: String,
            kComposite: 'yAxis.notes.icon.border.color'
        },
        yAxisNotesIconBorderWidth: {
            type: Number,
            kComposite: 'yAxis.notes.icon.border.width'
        },
        yAxisNotesIconSize: {
            type: Number,
            kComposite: 'yAxis.notes.icon.size'
        },
        yAxisNotesIconType: {
            type: String,
            kComposite: 'yAxis.notes.icon.type'
        },
        yAxisNotesIconVisible: {
            type: Boolean,
            kComposite: 'yAxis.notes.icon.visible'
        },
        yAxisNotesLabelBackground: {
            type: String,
            kComposite: 'yAxis.notes.label.background'
        },
        yAxisNotesLabelBorderColor: {
            type: String,
            kComposite: 'yAxis.notes.label.border.color'
        },
        yAxisNotesLabelBorderDashType: {
            type: String,
            kComposite: 'yAxis.notes.label.border.dashType'
        },
        yAxisNotesLabelBorderWidth: {
            type: Number,
            kComposite: 'yAxis.notes.label.border.width'
        },
        yAxisNotesLabelColor: {
            type: String,
            kComposite: 'yAxis.notes.label.color'
        },
        yAxisNotesLabelFont: {
            type: String,
            kComposite: 'yAxis.notes.label.font'
        },
        yAxisNotesLabelTemplate: {
            type: String | Function,
            kComposite: 'yAxis.notes.label.template'
        },
        yAxisNotesLabelVisible: {
            type: Boolean,
            kComposite: 'yAxis.notes.label.visible'
        },
        yAxisNotesLabelRotation: {
            type: Number,
            kComposite: 'yAxis.notes.label.rotation'
        },
        yAxisNotesLabelFormat: {
            type: String,
            kComposite: 'yAxis.notes.label.format'
        },
        yAxisNotesLabelPosition: {
            type: String,
            kComposite: 'yAxis.notes.label.position'
        },
        yAxisNotesLineDashType: {
            type: String,
            kComposite: 'yAxis.notes.line.dashType'
        },
        yAxisNotesLineWidth: {
            type: Number,
            kComposite: 'yAxis.notes.line.width'
        },
        yAxisNotesLineColor: {
            type: String,
            kComposite: 'yAxis.notes.line.color'
        },
        yAxisNotesLineLength: {
            type: Number,
            kComposite: 'yAxis.notes.line.length'
        },
        yAxisNotesData: {
            type: Array,
            kComposite: 'yAxis.notes.data'
        }, yAxisNotesVisual: {
            type: Function,
            kComposite: 'yAxis.notes.visual'
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
exports.default = {
    props: {
        zoomableMousewheel: {
            type: Boolean,
            kComposite: 'zoomable.mousewheel'
        },
        zoomableMousewheelLock: {
            type: String,
            kComposite: 'zoomable.mousewheel.lock'
        },
        zoomableSelection: {
            type: Boolean,
            kComposite: 'zoomable.selection'
        },
        zoomableSelectionKey: {
            type: String,
            kComposite: 'zoomable.selection.key'
        },
        zoomableSelectionLock: {
            type: String,
            kComposite: 'zoomable.selection.lock'
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

var _KendoChartBase = __webpack_require__(4);

var _KendoChartBase2 = _interopRequireDefault(_KendoChartBase);

var _StockChartProps = __webpack_require__(34);

var _StockChartProps2 = _interopRequireDefault(_StockChartProps);

var _Navigator = __webpack_require__(35);

var _Navigator2 = _interopRequireDefault(_Navigator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _StockChartProps2.default,
    mixins: [_KendoChartBase2.default, _Navigator2.default],
    mounted: function mounted() {
        kendo.jQuery(this.$el).kendoStockChart(this.widgetOptions);

        this.$emit('kendowidgetready', this.kendoWidget());
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return kendo.jQuery(this.$el).getKendoStockChart();
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
    dateField: String,
    navigator: Object
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
        navigatorCategoryAxisAutoBaseUnitStepsSeconds: {
            type: Array,
            kComposite: 'navigator.categoryAxis.autoBaseUnitSteps.seconds'
        },
        navigatorCategoryAxisAutoBaseUnitStepsMinutes: {
            type: Array,
            kComposite: 'navigator.categoryAxis.autoBaseUnitSteps.minutes'
        },
        navigatorCategoryAxisAutoBaseUnitStepsHours: {
            type: Array,
            kComposite: 'navigator.categoryAxis.autoBaseUnitSteps.hours'
        },
        navigatorCategoryAxisAutoBaseUnitStepsDays: {
            type: Array,
            kComposite: 'navigator.categoryAxis.autoBaseUnitSteps.days'
        },
        navigatorCategoryAxisAutoBaseUnitStepsWeeks: {
            type: Array,
            kComposite: 'navigator.categoryAxis.autoBaseUnitSteps.weeks'
        },
        navigatorCategoryAxisAutoBaseUnitStepsMonths: {
            type: Array,
            kComposite: 'navigator.categoryAxis.autoBaseUnitSteps.months'
        },
        navigatorCategoryAxisAutoBaseUnitStepsYears: {
            type: Array,
            kComposite: 'navigator.categoryAxis.autoBaseUnitSteps.years'
        },
        navigatorCategoryAxisAxisCrossingValue: {
            type: Object | Date | Array,
            kComposite: 'navigator.categoryAxis.axisCrossingValue'
        },
        navigatorCategoryAxisBackground: {
            type: String,
            kComposite: 'navigator.categoryAxis.background'
        },
        navigatorCategoryAxisBaseUnit: {
            type: String,
            kComposite: 'navigator.categoryAxis.baseUnit'
        },
        navigatorCategoryAxisBaseUnitStep: {
            type: Object,
            kComposite: 'navigator.categoryAxis.baseUnitStep'
        },
        navigatorCategoryAxisCategories: {
            type: Array,
            kComposite: 'navigator.categoryAxis.categories'
        },
        navigatorCategoryAxisColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.color'
        },
        navigatorCategoryAxisCrosshairColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.crosshair.color'
        },
        navigatorCategoryAxisCrosshairOpacity: {
            type: Number,
            kComposite: 'navigator.categoryAxis.crosshair.opacity'
        },
        navigatorCategoryAxisCrosshairTooltipBackground: {
            type: String,
            kComposite: 'navigator.categoryAxis.crosshair.tooltip.background'
        },
        navigatorCategoryAxisCrosshairTooltipBorderColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.crosshair.tooltip.border.color'
        },
        navigatorCategoryAxisCrosshairTooltipBorderDashType: {
            type: String,
            kComposite: 'navigator.categoryAxis.crosshair.tooltip.border.dashType'
        },
        navigatorCategoryAxisCrosshairTooltipBorderWidth: {
            type: Number,
            kComposite: 'navigator.categoryAxis.crosshair.tooltip.border.width'
        },
        navigatorCategoryAxisCrosshairTooltipColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.crosshair.tooltip.color'
        },
        navigatorCategoryAxisCrosshairTooltipFont: {
            type: String,
            kComposite: 'navigator.categoryAxis.crosshair.tooltip.font'
        },
        navigatorCategoryAxisCrosshairTooltipFormat: {
            type: String,
            kComposite: 'navigator.categoryAxis.crosshair.tooltip.format'
        },
        navigatorCategoryAxisCrosshairTooltipPadding: {
            type: Number,
            kComposite: 'navigator.categoryAxis.crosshair.tooltip.padding'
        },
        navigatorCategoryAxisCrosshairTooltipPaddingBottom: {
            type: Number,
            kComposite: 'navigator.categoryAxis.crosshair.tooltip.padding.bottom'
        },
        navigatorCategoryAxisCrosshairTooltipPaddingLeft: {
            type: Number,
            kComposite: 'navigator.categoryAxis.crosshair.tooltip.padding.left'
        },
        navigatorCategoryAxisCrosshairTooltipPaddingRight: {
            type: Number,
            kComposite: 'navigator.categoryAxis.crosshair.tooltip.padding.right'
        },
        navigatorCategoryAxisCrosshairTooltipPaddingTop: {
            type: Number,
            kComposite: 'navigator.categoryAxis.crosshair.tooltip.padding.top'
        },
        navigatorCategoryAxisCrosshairTooltipTemplate: {
            type: String | Function,
            kComposite: 'navigator.categoryAxis.crosshair.tooltip.template'
        },
        navigatorCategoryAxisCrosshairTooltipVisible: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.crosshair.tooltip.visible'
        },
        navigatorCategoryAxisCrosshairVisible: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.crosshair.visible'
        },
        navigatorCategoryAxisCrosshairWidth: {
            type: Number,
            kComposite: 'navigator.categoryAxis.crosshair.width'
        },
        navigatorCategoryAxisField: {
            type: String,
            kComposite: 'navigator.categoryAxis.field'
        },
        navigatorCategoryAxisJustified: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.justified'
        },
        navigatorCategoryAxisLabelsBackground: {
            type: String,
            kComposite: 'navigator.categoryAxis.labels.background'
        },
        navigatorCategoryAxisLabelsBorderColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.labels.border.color'
        },
        navigatorCategoryAxisLabelsBorderDashType: {
            type: String,
            kComposite: 'navigator.categoryAxis.labels.border.dashType'
        },
        navigatorCategoryAxisLabelsBorderWidth: {
            type: Number,
            kComposite: 'navigator.categoryAxis.labels.border.width'
        },
        navigatorCategoryAxisLabelsColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.labels.color'
        },
        navigatorCategoryAxisLabelsCulture: {
            type: String,
            kComposite: 'navigator.categoryAxis.labels.culture'
        },
        navigatorCategoryAxisLabelsDateFormatsDays: {
            type: String,
            kComposite: 'navigator.categoryAxis.labels.dateFormats.days'
        },
        navigatorCategoryAxisLabelsDateFormatsHours: {
            type: String,
            kComposite: 'navigator.categoryAxis.labels.dateFormats.hours'
        },
        navigatorCategoryAxisLabelsDateFormatsMonths: {
            type: String,
            kComposite: 'navigator.categoryAxis.labels.dateFormats.months'
        },
        navigatorCategoryAxisLabelsDateFormatsWeeks: {
            type: String,
            kComposite: 'navigator.categoryAxis.labels.dateFormats.weeks'
        },
        navigatorCategoryAxisLabelsDateFormatsYears: {
            type: String,
            kComposite: 'navigator.categoryAxis.labels.dateFormats.years'
        },
        navigatorCategoryAxisLabelsFont: {
            type: String,
            kComposite: 'navigator.categoryAxis.labels.font'
        },
        navigatorCategoryAxisLabelsFormat: {
            type: String,
            kComposite: 'navigator.categoryAxis.labels.format'
        },
        navigatorCategoryAxisLabelsMargin: {
            type: Number,
            kComposite: 'navigator.categoryAxis.labels.margin'
        },
        navigatorCategoryAxisLabelsMarginBottom: {
            type: Number,
            kComposite: 'navigator.categoryAxis.labels.margin.bottom'
        },
        navigatorCategoryAxisLabelsMarginLeft: {
            type: Number,
            kComposite: 'navigator.categoryAxis.labels.margin.left'
        },
        navigatorCategoryAxisLabelsMarginRight: {
            type: Number,
            kComposite: 'navigator.categoryAxis.labels.margin.right'
        },
        navigatorCategoryAxisLabelsMarginTop: {
            type: Number,
            kComposite: 'navigator.categoryAxis.labels.margin.top'
        },
        navigatorCategoryAxisLabelsMirror: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.labels.mirror'
        },
        navigatorCategoryAxisLabelsPadding: {
            type: Number,
            kComposite: 'navigator.categoryAxis.labels.padding'
        },
        navigatorCategoryAxisLabelsPaddingBottom: {
            type: Number,
            kComposite: 'navigator.categoryAxis.labels.padding.bottom'
        },
        navigatorCategoryAxisLabelsPaddingLeft: {
            type: Number,
            kComposite: 'navigator.categoryAxis.labels.padding.left'
        },
        navigatorCategoryAxisLabelsPaddingRight: {
            type: Number,
            kComposite: 'navigator.categoryAxis.labels.padding.right'
        },
        navigatorCategoryAxisLabelsPaddingTop: {
            type: Number,
            kComposite: 'navigator.categoryAxis.labels.padding.top'
        },
        navigatorCategoryAxisLabelsRotation: {
            type: Number | String,
            kComposite: 'navigator.categoryAxis.labels.rotation'
        },
        navigatorCategoryAxisLabelsSkip: {
            type: Number,
            kComposite: 'navigator.categoryAxis.labels.skip'
        },
        navigatorCategoryAxisLabelsStep: {
            type: Number,
            kComposite: 'navigator.categoryAxis.labels.step'
        },
        navigatorCategoryAxisLabelsTemplate: {
            type: String | Function,
            kComposite: 'navigator.categoryAxis.labels.template'
        },
        navigatorCategoryAxisLabelsVisible: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.labels.visible'
        },
        navigatorCategoryAxisLineColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.line.color'
        },
        navigatorCategoryAxisLineDashType: {
            type: String,
            kComposite: 'navigator.categoryAxis.line.dashType'
        },
        navigatorCategoryAxisLineVisible: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.line.visible'
        },
        navigatorCategoryAxisLineWidth: {
            type: Number,
            kComposite: 'navigator.categoryAxis.line.width'
        },
        navigatorCategoryAxisMajorGridLinesColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.majorGridLines.color'
        },
        navigatorCategoryAxisMajorGridLinesDashType: {
            type: String,
            kComposite: 'navigator.categoryAxis.majorGridLines.dashType'
        },
        navigatorCategoryAxisMajorGridLinesVisible: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.majorGridLines.visible'
        },
        navigatorCategoryAxisMajorGridLinesWidth: {
            type: Number,
            kComposite: 'navigator.categoryAxis.majorGridLines.width'
        },
        navigatorCategoryAxisMajorGridLinesStep: {
            type: Number,
            kComposite: 'navigator.categoryAxis.majorGridLines.step'
        },
        navigatorCategoryAxisMajorGridLinesSkip: {
            type: Number,
            kComposite: 'navigator.categoryAxis.majorGridLines.skip'
        },
        navigatorCategoryAxisMajorTicksColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.majorTicks.color'
        },
        navigatorCategoryAxisMajorTicksSize: {
            type: Number,
            kComposite: 'navigator.categoryAxis.majorTicks.size'
        },
        navigatorCategoryAxisMajorTicksVisible: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.majorTicks.visible'
        },
        navigatorCategoryAxisMajorTicksWidth: {
            type: Number,
            kComposite: 'navigator.categoryAxis.majorTicks.width'
        },
        navigatorCategoryAxisMajorTicksStep: {
            type: Number,
            kComposite: 'navigator.categoryAxis.majorTicks.step'
        },
        navigatorCategoryAxisMajorTicksSkip: {
            type: Number,
            kComposite: 'navigator.categoryAxis.majorTicks.skip'
        },
        navigatorCategoryAxisMax: {
            type: Object,
            kComposite: 'navigator.categoryAxis.max'
        },
        navigatorCategoryAxisMaxDateGroups: {
            type: Number,
            kComposite: 'navigator.categoryAxis.maxDateGroups'
        },
        navigatorCategoryAxisMin: {
            type: Object,
            kComposite: 'navigator.categoryAxis.min'
        },
        navigatorCategoryAxisMinorGridLinesColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.minorGridLines.color'
        },
        navigatorCategoryAxisMinorGridLinesDashType: {
            type: String,
            kComposite: 'navigator.categoryAxis.minorGridLines.dashType'
        },
        navigatorCategoryAxisMinorGridLinesVisible: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.minorGridLines.visible'
        },
        navigatorCategoryAxisMinorGridLinesWidth: {
            type: Number,
            kComposite: 'navigator.categoryAxis.minorGridLines.width'
        },
        navigatorCategoryAxisMinorGridLinesStep: {
            type: Number,
            kComposite: 'navigator.categoryAxis.minorGridLines.step'
        },
        navigatorCategoryAxisMinorGridLinesSkip: {
            type: Number,
            kComposite: 'navigator.categoryAxis.minorGridLines.skip'
        },
        navigatorCategoryAxisMinorTicksColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.minorTicks.color'
        },
        navigatorCategoryAxisMinorTicksSize: {
            type: Number,
            kComposite: 'navigator.categoryAxis.minorTicks.size'
        },
        navigatorCategoryAxisMinorTicksVisible: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.minorTicks.visible'
        },
        navigatorCategoryAxisMinorTicksWidth: {
            type: Number,
            kComposite: 'navigator.categoryAxis.minorTicks.width'
        },
        navigatorCategoryAxisMinorTicksStep: {
            type: Number,
            kComposite: 'navigator.categoryAxis.minorTicks.step'
        },
        navigatorCategoryAxisMinorTicksSkip: {
            type: Number,
            kComposite: 'navigator.categoryAxis.minorTicks.skip'
        },
        navigatorCategoryAxisPlotBands: {
            type: Array,
            kComposite: 'navigator.categoryAxis.plotBands'
        }, navigatorCategoryAxisReverse: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.reverse'
        },
        navigatorCategoryAxisRoundToBaseUnit: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.roundToBaseUnit'
        },
        navigatorCategoryAxisTitleBackground: {
            type: String,
            kComposite: 'navigator.categoryAxis.title.background'
        },
        navigatorCategoryAxisTitleBorderColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.title.border.color'
        },
        navigatorCategoryAxisTitleBorderDashType: {
            type: String,
            kComposite: 'navigator.categoryAxis.title.border.dashType'
        },
        navigatorCategoryAxisTitleBorderWidth: {
            type: Number,
            kComposite: 'navigator.categoryAxis.title.border.width'
        },
        navigatorCategoryAxisTitleColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.title.color'
        },
        navigatorCategoryAxisTitleFont: {
            type: String,
            kComposite: 'navigator.categoryAxis.title.font'
        },
        navigatorCategoryAxisTitleMargin: {
            type: Number,
            kComposite: 'navigator.categoryAxis.title.margin'
        },
        navigatorCategoryAxisTitleMarginBottom: {
            type: Number,
            kComposite: 'navigator.categoryAxis.title.margin.bottom'
        },
        navigatorCategoryAxisTitleMarginLeft: {
            type: Number,
            kComposite: 'navigator.categoryAxis.title.margin.left'
        },
        navigatorCategoryAxisTitleMarginRight: {
            type: Number,
            kComposite: 'navigator.categoryAxis.title.margin.right'
        },
        navigatorCategoryAxisTitleMarginTop: {
            type: Number,
            kComposite: 'navigator.categoryAxis.title.margin.top'
        },
        navigatorCategoryAxisTitlePadding: {
            type: Number,
            kComposite: 'navigator.categoryAxis.title.padding'
        },
        navigatorCategoryAxisTitlePaddingBottom: {
            type: Number,
            kComposite: 'navigator.categoryAxis.title.padding.bottom'
        },
        navigatorCategoryAxisTitlePaddingLeft: {
            type: Number,
            kComposite: 'navigator.categoryAxis.title.padding.left'
        },
        navigatorCategoryAxisTitlePaddingRight: {
            type: Number,
            kComposite: 'navigator.categoryAxis.title.padding.right'
        },
        navigatorCategoryAxisTitlePaddingTop: {
            type: Number,
            kComposite: 'navigator.categoryAxis.title.padding.top'
        },
        navigatorCategoryAxisTitlePosition: {
            type: String,
            kComposite: 'navigator.categoryAxis.title.position'
        },
        navigatorCategoryAxisTitleRotation: {
            type: Number,
            kComposite: 'navigator.categoryAxis.title.rotation'
        },
        navigatorCategoryAxisTitleText: {
            type: String,
            kComposite: 'navigator.categoryAxis.title.text'
        },
        navigatorCategoryAxisTitleVisible: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.title.visible'
        },
        navigatorCategoryAxisVisible: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.visible'
        },
        navigatorCategoryAxisWeekStartDay: {
            type: Number,
            kComposite: 'navigator.categoryAxis.weekStartDay'
        },
        navigatorCategoryAxisNotesPosition: {
            type: String,
            kComposite: 'navigator.categoryAxis.notes.position'
        },
        navigatorCategoryAxisNotesIconBackground: {
            type: String,
            kComposite: 'navigator.categoryAxis.notes.icon.background'
        },
        navigatorCategoryAxisNotesIconBorderColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.notes.icon.border.color'
        },
        navigatorCategoryAxisNotesIconBorderWidth: {
            type: Number,
            kComposite: 'navigator.categoryAxis.notes.icon.border.width'
        },
        navigatorCategoryAxisNotesIconSize: {
            type: Number,
            kComposite: 'navigator.categoryAxis.notes.icon.size'
        },
        navigatorCategoryAxisNotesIconType: {
            type: String,
            kComposite: 'navigator.categoryAxis.notes.icon.type'
        },
        navigatorCategoryAxisNotesIconVisible: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.notes.icon.visible'
        },
        navigatorCategoryAxisNotesLabelBackground: {
            type: String,
            kComposite: 'navigator.categoryAxis.notes.label.background'
        },
        navigatorCategoryAxisNotesLabelBorderColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.notes.label.border.color'
        },
        navigatorCategoryAxisNotesLabelBorderDashType: {
            type: String,
            kComposite: 'navigator.categoryAxis.notes.label.border.dashType'
        },
        navigatorCategoryAxisNotesLabelBorderWidth: {
            type: Number,
            kComposite: 'navigator.categoryAxis.notes.label.border.width'
        },
        navigatorCategoryAxisNotesLabelColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.notes.label.color'
        },
        navigatorCategoryAxisNotesLabelFont: {
            type: String,
            kComposite: 'navigator.categoryAxis.notes.label.font'
        },
        navigatorCategoryAxisNotesLabelTemplate: {
            type: String | Function,
            kComposite: 'navigator.categoryAxis.notes.label.template'
        },
        navigatorCategoryAxisNotesLabelVisible: {
            type: Boolean,
            kComposite: 'navigator.categoryAxis.notes.label.visible'
        },
        navigatorCategoryAxisNotesLabelRotation: {
            type: Number,
            kComposite: 'navigator.categoryAxis.notes.label.rotation'
        },
        navigatorCategoryAxisNotesLabelFormat: {
            type: String,
            kComposite: 'navigator.categoryAxis.notes.label.format'
        },
        navigatorCategoryAxisNotesLabelPosition: {
            type: String,
            kComposite: 'navigator.categoryAxis.notes.label.position'
        },
        navigatorCategoryAxisNotesLineWidth: {
            type: Number,
            kComposite: 'navigator.categoryAxis.notes.line.width'
        },
        navigatorCategoryAxisNotesLineColor: {
            type: String,
            kComposite: 'navigator.categoryAxis.notes.line.color'
        },
        navigatorCategoryAxisNotesLineLength: {
            type: Number,
            kComposite: 'navigator.categoryAxis.notes.line.length'
        },
        navigatorCategoryAxisNotesData: {
            type: Array,
            kComposite: 'navigator.categoryAxis.notes.data'
        },
        navigatorDataSource: {
            type: Object,
            kComposite: 'navigator.dataSource'
        },
        navigatorAutoBind: {
            type: Boolean,
            kComposite: 'navigator.autoBind'
        },
        navigatorDateField: {
            type: String,
            kComposite: 'navigator.dateField'
        },
        navigatorPaneBackground: {
            type: String,
            kComposite: 'navigator.pane.background'
        },
        navigatorPaneBorderColor: {
            type: String,
            kComposite: 'navigator.pane.border.color'
        },
        navigatorPaneBorderDashType: {
            type: String,
            kComposite: 'navigator.pane.border.dashType'
        },
        navigatorPaneBorderWidth: {
            type: Number,
            kComposite: 'navigator.pane.border.width'
        },
        navigatorPaneHeight: {
            type: Number,
            kComposite: 'navigator.pane.height'
        },
        navigatorPaneMargin: {
            type: Number,
            kComposite: 'navigator.pane.margin'
        },
        navigatorPaneMarginBottom: {
            type: Number,
            kComposite: 'navigator.pane.margin.bottom'
        },
        navigatorPaneMarginLeft: {
            type: Number,
            kComposite: 'navigator.pane.margin.left'
        },
        navigatorPaneMarginRight: {
            type: Number,
            kComposite: 'navigator.pane.margin.right'
        },
        navigatorPaneMarginTop: {
            type: Number,
            kComposite: 'navigator.pane.margin.top'
        },
        navigatorPaneName: {
            type: String,
            kComposite: 'navigator.pane.name'
        },
        navigatorPanePadding: {
            type: Number,
            kComposite: 'navigator.pane.padding'
        },
        navigatorPanePaddingBottom: {
            type: Number,
            kComposite: 'navigator.pane.padding.bottom'
        },
        navigatorPanePaddingLeft: {
            type: Number,
            kComposite: 'navigator.pane.padding.left'
        },
        navigatorPanePaddingRight: {
            type: Number,
            kComposite: 'navigator.pane.padding.right'
        },
        navigatorPanePaddingTop: {
            type: Number,
            kComposite: 'navigator.pane.padding.top'
        },
        navigatorPaneTitle: {
            type: String,
            kComposite: 'navigator.pane.title'
        },
        navigatorPaneTitleBackground: {
            type: String,
            kComposite: 'navigator.pane.title.background'
        },
        navigatorPaneTitleBorderColor: {
            type: String,
            kComposite: 'navigator.pane.title.border.color'
        },
        navigatorPaneTitleBorderDashType: {
            type: String,
            kComposite: 'navigator.pane.title.border.dashType'
        },
        navigatorPaneTitleBorderWidth: {
            type: Number,
            kComposite: 'navigator.pane.title.border.width'
        },
        navigatorPaneTitleColor: {
            type: String,
            kComposite: 'navigator.pane.title.color'
        },
        navigatorPaneTitleFont: {
            type: String,
            kComposite: 'navigator.pane.title.font'
        },
        navigatorPaneTitleMargin: {
            type: Number,
            kComposite: 'navigator.pane.title.margin'
        },
        navigatorPaneTitleMarginBottom: {
            type: Number,
            kComposite: 'navigator.pane.title.margin.bottom'
        },
        navigatorPaneTitleMarginLeft: {
            type: Number,
            kComposite: 'navigator.pane.title.margin.left'
        },
        navigatorPaneTitleMarginRight: {
            type: Number,
            kComposite: 'navigator.pane.title.margin.right'
        },
        navigatorPaneTitleMarginTop: {
            type: Number,
            kComposite: 'navigator.pane.title.margin.top'
        },
        navigatorPaneTitlePosition: {
            type: String,
            kComposite: 'navigator.pane.title.position'
        },
        navigatorPaneTitleText: {
            type: String,
            kComposite: 'navigator.pane.title.text'
        },
        navigatorPaneTitleVisible: {
            type: Boolean,
            kComposite: 'navigator.pane.title.visible'
        },
        navigatorVisible: {
            type: Boolean,
            kComposite: 'navigator.visible'
        },
        navigatorSeries: {
            type: Array | Object,
            kComposite: 'navigator.series'
        },
        navigatorSelectFrom: {
            type: Date | String,
            kComposite: 'navigator.select.from'
        },
        navigatorSelectMousewheel: {
            type: Boolean,
            kComposite: 'navigator.select.mousewheel'
        },
        navigatorSelectMousewheelReverse: {
            type: Boolean,
            kComposite: 'navigator.select.mousewheel.reverse'
        },
        navigatorSelectMousewheelZoom: {
            type: String,
            kComposite: 'navigator.select.mousewheel.zoom'
        },
        navigatorSelectTo: {
            type: Date | String,
            kComposite: 'navigator.select.to'
        },
        navigatorHintVisible: {
            type: Boolean,
            kComposite: 'navigator.hint.visible'
        },
        navigatorHintTemplate: {
            type: String | Function,
            kComposite: 'navigator.hint.template'
        },
        navigatorHintFormat: {
            type: String,
            kComposite: 'navigator.hint.format'
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

var _kendoBaseComponentsVueWrapper = __webpack_require__(5);

var _SparklineProps = __webpack_require__(37);

var _SparklineProps2 = _interopRequireDefault(_SparklineProps);

var _KendoSparklineSeriesItem = __webpack_require__(2);

var _KendoSparklineSeriesItem2 = _interopRequireDefault(_KendoSparklineSeriesItem);

var _CategoryAxis = __webpack_require__(39);

var _CategoryAxis2 = _interopRequireDefault(_CategoryAxis);

var _ChartArea = __webpack_require__(40);

var _ChartArea2 = _interopRequireDefault(_ChartArea);

var _PlotArea = __webpack_require__(41);

var _PlotArea2 = _interopRequireDefault(_PlotArea);

var _SeriesDefaults = __webpack_require__(42);

var _SeriesDefaults2 = _interopRequireDefault(_SeriesDefaults);

var _Tooltip = __webpack_require__(43);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _ValueAxis = __webpack_require__(44);

var _ValueAxis2 = _interopRequireDefault(_ValueAxis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _SparklineProps2.default,
    render: function render(h) {
        return h('span', this.$slots.default);
    },

    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _CategoryAxis2.default, _ChartArea2.default, _PlotArea2.default, _SeriesDefaults2.default, _Tooltip2.default, _ValueAxis2.default],
    mounted: function mounted() {
        this._resolveChildren();

        kendo.jQuery(this.$el).kendoSparkline(this.widgetOptions);

        this.$emit('kendowidgetready', this.kendoWidget());
    },

    methods: {
        kendoWidget: function kendoWidget() {
            return kendo.jQuery(this.$el).getKendoSparkline();
        },
        _resolveChildren: function _resolveChildren() {
            this.resolveChildren('series', _KendoSparklineSeriesItem2.default.name);
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
    axisDefaults: Object,
    categoryAxis: Array | Object,
    chartArea: Object,
    data: Array,
    dataSource: Object,
    autoBind: Boolean,
    plotArea: Object,
    pointWidth: Number,
    renderAs: String,
    series: Array,
    seriesColors: Array,
    seriesDefaults: Object,
    theme: String,
    tooltip: Object,
    transitions: Boolean,
    type: String,
    valueAxis: Array | Object,

    // Events
    axisLabelClick: Function,
    dataBound: Function,
    dragStart: Function,
    drag: Function,
    dragEnd: Function,
    plotAreaClick: Function,
    seriesClick: Function,
    seriesHover: Function,
    zoomStart: Function,
    zoom: Function,
    zoomEnd: Function
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
        type: String,
        dashType: String,
        data: Array,
        explodeField: String,
        currentField: String,
        targetField: String,
        field: String,
        name: String,
        highlightBorderWidth: {
            type: Number,
            kComposite: 'highlight.border.width'
        },
        highlightBorderColor: {
            type: String,
            kComposite: 'highlight.border.color'
        },
        highlightBorderOpacity: {
            type: Number,
            kComposite: 'highlight.border.opacity'
        },
        highlightColor: {
            type: String,
            kComposite: 'highlight.color'
        },
        highlightOpacity: {
            type: Number,
            kComposite: 'highlight.opacity'
        },
        highlightVisible: {
            type: Boolean,
            kComposite: 'highlight.visible'
        },
        aggregate: String | Function,
        axis: String,
        borderColor: { type: String | Function, kComposite: 'border.color' },
        borderDashType: { type: String | Function, kComposite: 'border.dashType' },
        borderOpacity: { type: Number | Function, kComposite: 'border.opacity' },
        borderWidth: { type: Number | Function, kComposite: 'border.width' },
        categoryField: String,
        color: String | Function,
        colorField: String,
        connectorsColor: { type: String, kComposite: 'connectors.color' },
        connectorsPadding: { type: Number, kComposite: 'connectors.padding' },
        connectorsWidth: { type: Number, kComposite: 'connectors.width' },
        gap: Number,
        labelsAlign: { type: String, kComposite: 'labels.align' },
        labelsBackground: { type: String | Function, kComposite: 'labels.background' },
        labelsBorderColor: { type: String | Function, kComposite: 'labels.border.color' },
        labelsBorderDashType: { type: String | Function, kComposite: 'labels.border.dashType' },
        labelsBorderWidth: { type: Number | Function, kComposite: 'labels.border.width' },
        labelsColor: { type: String | Function, kComposite: 'labels.color' },
        labelsDistance: { type: Number, kComposite: 'labels.distance' },
        labelsFont: { type: String | Function, kComposite: 'labels.font' },
        labelsFormat: { type: String | Function, kComposite: 'labels.format' },
        labelsMargin: { type: Number | Object, kComposite: 'labels.margin' },
        labelsPadding: { type: Number | Object, kComposite: 'labels.padding' },
        labelsPosition: { type: String | Function, kComposite: 'labels.position' },
        labelsTemplate: { type: String | Function, kComposite: 'labels.template' },
        labelsVisible: { type: Boolean | Function, kComposite: 'labels.visible' },
        line: String,
        lineColor: { type: String, kComposite: 'line.color' },
        lineOpacity: { type: Number, kComposite: 'line.opacity' },
        lineWidth: { type: String, kComposite: 'line.width' },
        lineStyle: { type: String, kComposite: 'line.style' },
        markersBackground: { type: String | Function, kComposite: 'markers.background' },
        markersBorder: { type: Function, kComposite: 'markers.border' },
        markersBorderColor: { type: String | Function, kComposite: 'markers.border.color' },
        markersBorderWidth: { type: Number | Function, kComposite: 'markers.border.width' },
        markersSize: { type: Number | Function, kComposite: 'markers.size' },
        markersType: { type: String | Function, kComposite: 'markers.type' },
        markersVisible: { type: Boolean | Function, kComposite: 'markers.visible' },
        markersRotation: { type: Number | Function, kComposite: 'markers.rotation' },
        missingValues: String,
        kStyle: String,
        negativeColor: String,
        opacity: Number,
        overlayGradient: { type: String, kComposite: 'overlay.gradient' },
        padding: Number,
        size: Number,
        startAngle: Number,
        spacing: Number,
        stack: Boolean | String,
        stackType: { type: String, kComposite: 'stack.type' },
        stackGroup: { type: String, kComposite: 'stack.group' },
        tooltipBackground: { type: String, kComposite: 'tooltip.background' },
        tooltipBorderColor: { type: String, kComposite: 'tooltip.border.color' },
        tooltipBorderWidth: { type: Number, kComposite: 'tooltip.border.width' },
        tooltipColor: { type: String, kComposite: 'tooltip.color' },
        tooltipFont: { type: String, kComposite: 'tooltip.font' },
        tooltipFormat: { type: String, kComposite: 'tooltip.format' },
        tooltipPadding: { type: Number | Object, kComposite: 'tooltip.padding' },
        tooltipTemplate: { type: String | Function, kComposite: 'tooltip.template' },
        tooltipVisible: { type: Boolean, kComposite: 'tooltip.visible' },
        width: Number,
        targetLineWidth: { type: Object | Function, kComposite: 'target.line.width' },
        targetColor: { type: String | Function, kComposite: 'target.color' },
        targetBorder: { type: Function, kComposite: 'target.border' },
        targetBorderColor: { type: String | Function, kComposite: 'target.border.color' },
        targetBorderDashType: { type: String | Function, kComposite: 'target.border.dashType' },
        targetBorderWidth: { type: Number, kComposite: 'target.border.width' },
        notesPosition: { type: String, kComposite: 'notes.position' },
        notesIconBackground: { type: String, kComposite: 'notes.icon.background' },
        notesIconBorderColor: { type: String, kComposite: 'notes.icon.border.color' },
        notesIconBorderWidth: { type: Number, kComposite: 'notes.icon.border.width' },
        notesIconSize: { type: Number, kComposite: 'notes.icon.size' },
        notesIconType: { type: String, kComposite: 'notes.icon.type' },
        notesIconVisible: { type: Boolean, kComposite: 'notes.icon.visible' },
        notesLabelBackground: { type: String, kComposite: 'notes.label.background' },
        notesLabelBorderColor: { type: String, kComposite: 'notes.label.border.color' },
        notesLabelBorderDashType: { type: String, kComposite: 'notes.label.border.dashType' },
        notesLabelBorderWidth: { type: Number, kComposite: 'notes.label.border.width' },
        notesLabelColor: { type: String, kComposite: 'notes.label.color' },
        notesLabelFont: { type: String, kComposite: 'notes.label.font' },
        notesLabelTemplate: { type: String | Function, kComposite: 'notes.label.template' },
        notesLabelVisible: { type: Boolean, kComposite: 'notes.label.visible' },
        notesLabelRotation: { type: Number, kComposite: 'notes.label.rotation' },
        notesLabelFormat: { type: String, kComposite: 'notes.label.format' },
        notesLabelPosition: { type: String, kComposite: 'notes.label.position' },
        notesLineWidth: { type: Number, kComposite: 'notes.line.width' },
        notesLineColor: { type: String, kComposite: 'notes.line.color' },
        notesLineLength: { type: Number, kComposite: 'notes.line.length' },
        zIndex: Number
    }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        categoryAxisCategoryAxisItemAxisCrossingValue: {
            type: Object | Date | Array,
            kComposite: 'categoryAxis.categoryAxisItem.axisCrossingValue'
        },
        categoryAxisCategoryAxisItemCategories: {
            type: Array,
            kComposite: 'categoryAxis.categoryAxisItem.categories'
        },
        categoryAxisCategoryAxisItemColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.color'
        },
        categoryAxisCategoryAxisItemField: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.field'
        },
        categoryAxisCategoryAxisItemJustified: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.justified'
        },
        categoryAxisCategoryAxisItemLabelsBackground: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.labels.background'
        },
        categoryAxisCategoryAxisItemLabelsBorderColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.labels.border.color'
        },
        categoryAxisCategoryAxisItemLabelsBorderDashType: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.labels.border.dashType'
        },
        categoryAxisCategoryAxisItemLabelsBorderWidth: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.labels.border.width'
        },
        categoryAxisCategoryAxisItemLabelsColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.labels.color'
        },
        categoryAxisCategoryAxisItemLabelsFont: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.labels.font'
        },
        categoryAxisCategoryAxisItemLabelsFormat: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.labels.format'
        },
        categoryAxisCategoryAxisItemLabelsMargin: {
            type: Number | Object,
            kComposite: 'categoryAxis.categoryAxisItem.labels.margin'
        },
        categoryAxisCategoryAxisItemLabelsMirror: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.labels.mirror'
        },
        categoryAxisCategoryAxisItemLabelsPadding: {
            type: Number | Object,
            kComposite: 'categoryAxis.categoryAxisItem.labels.padding'
        },
        categoryAxisCategoryAxisItemLabelsRotation: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.labels.rotation'
        },
        categoryAxisCategoryAxisItemLabelsSkip: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.labels.skip'
        },
        categoryAxisCategoryAxisItemLabelsStep: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.labels.step'
        },
        categoryAxisCategoryAxisItemLabelsTemplate: {
            type: String | Function,
            kComposite: 'categoryAxis.categoryAxisItem.labels.template'
        },
        categoryAxisCategoryAxisItemLabelsVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.labels.visible'
        },
        categoryAxisCategoryAxisItemLabelsCulture: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.labels.culture'
        },
        categoryAxisCategoryAxisItemLabelsDateFormats: {
            type: Object,
            kComposite: 'categoryAxis.categoryAxisItem.labels.dateFormats'
        },
        categoryAxisCategoryAxisItemLineColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.line.color'
        },
        categoryAxisCategoryAxisItemLineDashType: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.line.dashType'
        },
        categoryAxisCategoryAxisItemLineVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.line.visible'
        },
        categoryAxisCategoryAxisItemLineWidth: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.line.width'
        },
        categoryAxisCategoryAxisItemMajorGridLinesColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.majorGridLines.color'
        },
        categoryAxisCategoryAxisItemMajorGridLinesDashType: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.majorGridLines.dashType'
        },
        categoryAxisCategoryAxisItemMajorGridLinesVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.majorGridLines.visible'
        },
        categoryAxisCategoryAxisItemMajorGridLinesWidth: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.majorGridLines.width'
        },
        categoryAxisCategoryAxisItemMajorGridLinesStep: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.majorGridLines.step'
        },
        categoryAxisCategoryAxisItemMajorGridLinesSkip: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.majorGridLines.skip'
        },
        categoryAxisCategoryAxisItemMajorTicksSize: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.majorTicks.size'
        },
        categoryAxisCategoryAxisItemMajorTicksVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.majorTicks.visible'
        },
        categoryAxisCategoryAxisItemMajorTicksColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.majorTicks.color'
        },
        categoryAxisCategoryAxisItemMajorTicksWidth: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.majorTicks.width'
        },
        categoryAxisCategoryAxisItemMajorTicksStep: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.majorTicks.step'
        },
        categoryAxisCategoryAxisItemMajorTicksSkip: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.majorTicks.skip'
        },
        categoryAxisCategoryAxisItemMinorGridLinesColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.minorGridLines.color'
        },
        categoryAxisCategoryAxisItemMinorGridLinesDashType: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.minorGridLines.dashType'
        },
        categoryAxisCategoryAxisItemMinorGridLinesVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.minorGridLines.visible'
        },
        categoryAxisCategoryAxisItemMinorGridLinesWidth: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.minorGridLines.width'
        },
        categoryAxisCategoryAxisItemMinorGridLinesStep: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.minorGridLines.step'
        },
        categoryAxisCategoryAxisItemMinorGridLinesSkip: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.minorGridLines.skip'
        },
        categoryAxisCategoryAxisItemMinorTicksSize: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.minorTicks.size'
        },
        categoryAxisCategoryAxisItemMinorTicksVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.minorTicks.visible'
        },
        categoryAxisCategoryAxisItemMinorTicksColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.minorTicks.color'
        },
        categoryAxisCategoryAxisItemMinorTicksWidth: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.minorTicks.width'
        },
        categoryAxisCategoryAxisItemMinorTicksStep: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.minorTicks.step'
        },
        categoryAxisCategoryAxisItemMinorTicksSkip: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.minorTicks.skip'
        },
        categoryAxisCategoryAxisItemName: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.name'
        },
        categoryAxisCategoryAxisItemPlotBands: {
            type: Array,
            kComposite: 'categoryAxis.categoryAxisItem.plotBands'
        }, categoryAxisCategoryAxisItemReverse: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.reverse'
        },
        categoryAxisCategoryAxisItemTitleBackground: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.title.background'
        },
        categoryAxisCategoryAxisItemTitleBorderColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.title.border.color'
        },
        categoryAxisCategoryAxisItemTitleBorderDashType: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.title.border.dashType'
        },
        categoryAxisCategoryAxisItemTitleBorderWidth: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.title.border.width'
        },
        categoryAxisCategoryAxisItemTitleColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.title.color'
        },
        categoryAxisCategoryAxisItemTitleFont: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.title.font'
        },
        categoryAxisCategoryAxisItemTitleMargin: {
            type: Number | Object,
            kComposite: 'categoryAxis.categoryAxisItem.title.margin'
        },
        categoryAxisCategoryAxisItemTitlePosition: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.title.position'
        },
        categoryAxisCategoryAxisItemTitleRotation: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.title.rotation'
        },
        categoryAxisCategoryAxisItemTitleText: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.title.text'
        },
        categoryAxisCategoryAxisItemTitleVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.title.visible'
        },
        categoryAxisCategoryAxisItemType: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.type'
        },
        categoryAxisCategoryAxisItemAutoBaseUnitSteps: {
            type: Object,
            kComposite: 'categoryAxis.categoryAxisItem.autoBaseUnitSteps'
        },
        categoryAxisCategoryAxisItemBaseUnit: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.baseUnit'
        },
        categoryAxisCategoryAxisItemBaseUnitStep: {
            type: Object,
            kComposite: 'categoryAxis.categoryAxisItem.baseUnitStep'
        },
        categoryAxisCategoryAxisItemMax: {
            type: Object,
            kComposite: 'categoryAxis.categoryAxisItem.max'
        },
        categoryAxisCategoryAxisItemMin: {
            type: Object,
            kComposite: 'categoryAxis.categoryAxisItem.min'
        },
        categoryAxisCategoryAxisItemRoundToBaseUnit: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.roundToBaseUnit'
        },
        categoryAxisCategoryAxisItemWeekStartDay: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.weekStartDay'
        },
        categoryAxisCategoryAxisItemMaxDateGroups: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.maxDateGroups'
        },
        categoryAxisCategoryAxisItemVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.visible'
        },
        categoryAxisCategoryAxisItemCrosshairColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.crosshair.color'
        },
        categoryAxisCategoryAxisItemCrosshairWidth: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.crosshair.width'
        },
        categoryAxisCategoryAxisItemCrosshairOpacity: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.crosshair.opacity'
        },
        categoryAxisCategoryAxisItemCrosshairDashType: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.crosshair.dashType'
        },
        categoryAxisCategoryAxisItemCrosshairVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.crosshair.visible'
        },
        categoryAxisCategoryAxisItemCrosshairTooltipBackground: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.crosshair.tooltip.background'
        },
        categoryAxisCategoryAxisItemCrosshairTooltipBorderColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.crosshair.tooltip.border.color'
        },
        categoryAxisCategoryAxisItemCrosshairTooltipBorderWidth: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.crosshair.tooltip.border.width'
        },
        categoryAxisCategoryAxisItemCrosshairTooltipColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.crosshair.tooltip.color'
        },
        categoryAxisCategoryAxisItemCrosshairTooltipFont: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.crosshair.tooltip.font'
        },
        categoryAxisCategoryAxisItemCrosshairTooltipFormat: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.crosshair.tooltip.format'
        },
        categoryAxisCategoryAxisItemCrosshairTooltipPadding: {
            type: Number | Object,
            kComposite: 'categoryAxis.categoryAxisItem.crosshair.tooltip.padding'
        },
        categoryAxisCategoryAxisItemCrosshairTooltipTemplate: {
            type: String | Function,
            kComposite: 'categoryAxis.categoryAxisItem.crosshair.tooltip.template'
        },
        categoryAxisCategoryAxisItemCrosshairTooltipVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.crosshair.tooltip.visible'
        },
        categoryAxisCategoryAxisItemNotesPosition: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.notes.position'
        },
        categoryAxisCategoryAxisItemNotesIconBackground: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.notes.icon.background'
        },
        categoryAxisCategoryAxisItemNotesIconBorderColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.notes.icon.border.color'
        },
        categoryAxisCategoryAxisItemNotesIconBorderWidth: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.notes.icon.border.width'
        },
        categoryAxisCategoryAxisItemNotesIconSize: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.notes.icon.size'
        },
        categoryAxisCategoryAxisItemNotesIconType: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.notes.icon.type'
        },
        categoryAxisCategoryAxisItemNotesIconVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.notes.icon.visible'
        },
        categoryAxisCategoryAxisItemNotesLabelBackground: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.notes.label.background'
        },
        categoryAxisCategoryAxisItemNotesLabelBorderColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.notes.label.border.color'
        },
        categoryAxisCategoryAxisItemNotesLabelBorderDashType: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.notes.label.border.dashType'
        },
        categoryAxisCategoryAxisItemNotesLabelBorderWidth: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.notes.label.border.width'
        },
        categoryAxisCategoryAxisItemNotesLabelColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.notes.label.color'
        },
        categoryAxisCategoryAxisItemNotesLabelFont: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.notes.label.font'
        },
        categoryAxisCategoryAxisItemNotesLabelTemplate: {
            type: String | Function,
            kComposite: 'categoryAxis.categoryAxisItem.notes.label.template'
        },
        categoryAxisCategoryAxisItemNotesLabelVisible: {
            type: Boolean,
            kComposite: 'categoryAxis.categoryAxisItem.notes.label.visible'
        },
        categoryAxisCategoryAxisItemNotesLabelRotation: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.notes.label.rotation'
        },
        categoryAxisCategoryAxisItemNotesLabelFormat: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.notes.label.format'
        },
        categoryAxisCategoryAxisItemNotesLabelPosition: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.notes.label.position'
        },
        categoryAxisCategoryAxisItemNotesLineWidth: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.notes.line.width'
        },
        categoryAxisCategoryAxisItemNotesLineColor: {
            type: String,
            kComposite: 'categoryAxis.categoryAxisItem.notes.line.color'
        },
        categoryAxisCategoryAxisItemNotesLineLength: {
            type: Number,
            kComposite: 'categoryAxis.categoryAxisItem.notes.line.length'
        },
        categoryAxisCategoryAxisItemNotesData: {
            type: Array,
            kComposite: 'categoryAxis.categoryAxisItem.notes.data'
        } }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        chartAreaBackground: {
            type: String,
            kComposite: 'chartArea.background'
        },
        chartAreaOpacity: {
            type: Number,
            kComposite: 'chartArea.opacity'
        },
        chartAreaBorderColor: {
            type: String,
            kComposite: 'chartArea.border.color'
        },
        chartAreaBorderDashType: {
            type: String,
            kComposite: 'chartArea.border.dashType'
        },
        chartAreaBorderWidth: {
            type: Number,
            kComposite: 'chartArea.border.width'
        },
        chartAreaHeight: {
            type: Number,
            kComposite: 'chartArea.height'
        },
        chartAreaMargin: {
            type: Number | Object,
            kComposite: 'chartArea.margin'
        },
        chartAreaWidth: {
            type: Number,
            kComposite: 'chartArea.width'
        }
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
        plotAreaBackground: {
            type: String,
            kComposite: 'plotArea.background'
        },
        plotAreaOpacity: {
            type: Number,
            kComposite: 'plotArea.opacity'
        },
        plotAreaBorderColor: {
            type: String,
            kComposite: 'plotArea.border.color'
        },
        plotAreaBorderDashType: {
            type: String,
            kComposite: 'plotArea.border.dashType'
        },
        plotAreaBorderWidth: {
            type: Number,
            kComposite: 'plotArea.border.width'
        },
        plotAreaMargin: {
            type: Number | Object,
            kComposite: 'plotArea.margin'
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
        seriesDefaultsArea: {
            type: Object,
            kComposite: 'seriesDefaults.area'
        },
        seriesDefaultsBar: {
            type: Object,
            kComposite: 'seriesDefaults.bar'
        },
        seriesDefaultsBorderColor: {
            type: String,
            kComposite: 'seriesDefaults.border.color'
        },
        seriesDefaultsBorderDashType: {
            type: String,
            kComposite: 'seriesDefaults.border.dashType'
        },
        seriesDefaultsBorderWidth: {
            type: Number,
            kComposite: 'seriesDefaults.border.width'
        },
        seriesDefaultsColumn: {
            type: Object,
            kComposite: 'seriesDefaults.column'
        },
        seriesDefaultsGap: {
            type: Number,
            kComposite: 'seriesDefaults.gap'
        },
        seriesDefaultsLabelsBackground: {
            type: String,
            kComposite: 'seriesDefaults.labels.background'
        },
        seriesDefaultsLabelsBorderColor: {
            type: String,
            kComposite: 'seriesDefaults.labels.border.color'
        },
        seriesDefaultsLabelsBorderDashType: {
            type: String,
            kComposite: 'seriesDefaults.labels.border.dashType'
        },
        seriesDefaultsLabelsBorderWidth: {
            type: Number,
            kComposite: 'seriesDefaults.labels.border.width'
        },
        seriesDefaultsLabelsColor: {
            type: String,
            kComposite: 'seriesDefaults.labels.color'
        },
        seriesDefaultsLabelsFont: {
            type: String,
            kComposite: 'seriesDefaults.labels.font'
        },
        seriesDefaultsLabelsFormat: {
            type: String,
            kComposite: 'seriesDefaults.labels.format'
        },
        seriesDefaultsLabelsMargin: {
            type: Number | Object,
            kComposite: 'seriesDefaults.labels.margin'
        },
        seriesDefaultsLabelsPadding: {
            type: Number | Object,
            kComposite: 'seriesDefaults.labels.padding'
        },
        seriesDefaultsLabelsTemplate: {
            type: String | Function,
            kComposite: 'seriesDefaults.labels.template'
        },
        seriesDefaultsLabelsVisible: {
            type: Boolean,
            kComposite: 'seriesDefaults.labels.visible'
        },
        seriesDefaultsLine: {
            type: Object,
            kComposite: 'seriesDefaults.line'
        },
        seriesDefaultsOverlay: {
            type: Object,
            kComposite: 'seriesDefaults.overlay'
        },
        seriesDefaultsPie: {
            type: Object,
            kComposite: 'seriesDefaults.pie'
        },
        seriesDefaultsSpacing: {
            type: Number,
            kComposite: 'seriesDefaults.spacing'
        },
        seriesDefaultsStack: {
            type: Boolean,
            kComposite: 'seriesDefaults.stack'
        },
        seriesDefaultsStackType: {
            type: String,
            kComposite: 'seriesDefaults.stack.type'
        },
        seriesDefaultsType: {
            type: String,
            kComposite: 'seriesDefaults.type'
        },
        seriesDefaultsTooltipBackground: {
            type: String,
            kComposite: 'seriesDefaults.tooltip.background'
        },
        seriesDefaultsTooltipBorderColor: {
            type: String,
            kComposite: 'seriesDefaults.tooltip.border.color'
        },
        seriesDefaultsTooltipBorderWidth: {
            type: Number,
            kComposite: 'seriesDefaults.tooltip.border.width'
        },
        seriesDefaultsTooltipColor: {
            type: String,
            kComposite: 'seriesDefaults.tooltip.color'
        },
        seriesDefaultsTooltipFont: {
            type: String,
            kComposite: 'seriesDefaults.tooltip.font'
        },
        seriesDefaultsTooltipFormat: {
            type: String,
            kComposite: 'seriesDefaults.tooltip.format'
        },
        seriesDefaultsTooltipPadding: {
            type: Number | Object,
            kComposite: 'seriesDefaults.tooltip.padding'
        },
        seriesDefaultsTooltipTemplate: {
            type: String | Function,
            kComposite: 'seriesDefaults.tooltip.template'
        },
        seriesDefaultsTooltipVisible: {
            type: Boolean,
            kComposite: 'seriesDefaults.tooltip.visible'
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
        tooltipBackground: {
            type: String,
            kComposite: 'tooltip.background'
        },
        tooltipBorderColor: {
            type: String,
            kComposite: 'tooltip.border.color'
        },
        tooltipBorderWidth: {
            type: Number,
            kComposite: 'tooltip.border.width'
        },
        tooltipColor: {
            type: String,
            kComposite: 'tooltip.color'
        },
        tooltipFont: {
            type: String,
            kComposite: 'tooltip.font'
        },
        tooltipFormat: {
            type: String,
            kComposite: 'tooltip.format'
        },
        tooltipPadding: {
            type: Number | Object,
            kComposite: 'tooltip.padding'
        },
        tooltipTemplate: {
            type: String | Function,
            kComposite: 'tooltip.template'
        },
        tooltipVisible: {
            type: Boolean,
            kComposite: 'tooltip.visible'
        },
        tooltipShared: {
            type: Boolean,
            kComposite: 'tooltip.shared'
        },
        tooltipSharedTemplate: {
            type: String,
            kComposite: 'tooltip.sharedTemplate'
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
        valueAxisValueAxisItemAxisCrossingValue: {
            type: Object | Date | Array,
            kComposite: 'valueAxis.valueAxisItem.axisCrossingValue'
        },
        valueAxisValueAxisItemColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.color'
        },
        valueAxisValueAxisItemLabelsBackground: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.labels.background'
        },
        valueAxisValueAxisItemLabelsBorderColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.labels.border.color'
        },
        valueAxisValueAxisItemLabelsBorderDashType: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.labels.border.dashType'
        },
        valueAxisValueAxisItemLabelsBorderWidth: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.labels.border.width'
        },
        valueAxisValueAxisItemLabelsColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.labels.color'
        },
        valueAxisValueAxisItemLabelsFont: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.labels.font'
        },
        valueAxisValueAxisItemLabelsFormat: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.labels.format'
        },
        valueAxisValueAxisItemLabelsMargin: {
            type: Number | Object,
            kComposite: 'valueAxis.valueAxisItem.labels.margin'
        },
        valueAxisValueAxisItemLabelsMirror: {
            type: Boolean,
            kComposite: 'valueAxis.valueAxisItem.labels.mirror'
        },
        valueAxisValueAxisItemLabelsPadding: {
            type: Number | Object,
            kComposite: 'valueAxis.valueAxisItem.labels.padding'
        },
        valueAxisValueAxisItemLabelsRotation: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.labels.rotation'
        },
        valueAxisValueAxisItemLabelsSkip: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.labels.skip'
        },
        valueAxisValueAxisItemLabelsStep: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.labels.step'
        },
        valueAxisValueAxisItemLabelsTemplate: {
            type: String | Function,
            kComposite: 'valueAxis.valueAxisItem.labels.template'
        },
        valueAxisValueAxisItemLabelsVisible: {
            type: Boolean,
            kComposite: 'valueAxis.valueAxisItem.labels.visible'
        },
        valueAxisValueAxisItemLineColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.line.color'
        },
        valueAxisValueAxisItemLineDashType: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.line.dashType'
        },
        valueAxisValueAxisItemLineVisible: {
            type: Boolean,
            kComposite: 'valueAxis.valueAxisItem.line.visible'
        },
        valueAxisValueAxisItemLineWidth: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.line.width'
        },
        valueAxisValueAxisItemMajorGridLinesColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.majorGridLines.color'
        },
        valueAxisValueAxisItemMajorGridLinesVisible: {
            type: Boolean,
            kComposite: 'valueAxis.valueAxisItem.majorGridLines.visible'
        },
        valueAxisValueAxisItemMajorGridLinesWidth: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.majorGridLines.width'
        },
        valueAxisValueAxisItemMajorGridLinesStep: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.majorGridLines.step'
        },
        valueAxisValueAxisItemMajorGridLinesSkip: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.majorGridLines.skip'
        },
        valueAxisValueAxisItemMajorTicksSize: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.majorTicks.size'
        },
        valueAxisValueAxisItemMajorTicksVisible: {
            type: Boolean,
            kComposite: 'valueAxis.valueAxisItem.majorTicks.visible'
        },
        valueAxisValueAxisItemMajorTicksColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.majorTicks.color'
        },
        valueAxisValueAxisItemMajorTicksWidth: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.majorTicks.width'
        },
        valueAxisValueAxisItemMajorTicksStep: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.majorTicks.step'
        },
        valueAxisValueAxisItemMajorTicksSkip: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.majorTicks.skip'
        },
        valueAxisValueAxisItemMajorUnit: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.majorUnit'
        },
        valueAxisValueAxisItemMax: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.max'
        },
        valueAxisValueAxisItemMin: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.min'
        },
        valueAxisValueAxisItemMinorGridLinesColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.minorGridLines.color'
        },
        valueAxisValueAxisItemMinorGridLinesDashType: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.minorGridLines.dashType'
        },
        valueAxisValueAxisItemMinorGridLinesVisible: {
            type: Boolean,
            kComposite: 'valueAxis.valueAxisItem.minorGridLines.visible'
        },
        valueAxisValueAxisItemMinorGridLinesWidth: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.minorGridLines.width'
        },
        valueAxisValueAxisItemMinorGridLinesStep: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.minorGridLines.step'
        },
        valueAxisValueAxisItemMinorGridLinesSkip: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.minorGridLines.skip'
        },
        valueAxisValueAxisItemMinorTicksSize: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.minorTicks.size'
        },
        valueAxisValueAxisItemMinorTicksColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.minorTicks.color'
        },
        valueAxisValueAxisItemMinorTicksWidth: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.minorTicks.width'
        },
        valueAxisValueAxisItemMinorTicksVisible: {
            type: Boolean,
            kComposite: 'valueAxis.valueAxisItem.minorTicks.visible'
        },
        valueAxisValueAxisItemMinorTicksStep: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.minorTicks.step'
        },
        valueAxisValueAxisItemMinorTicksSkip: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.minorTicks.skip'
        },
        valueAxisValueAxisItemMinorUnit: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.minorUnit'
        },
        valueAxisValueAxisItemName: {
            type: Object,
            kComposite: 'valueAxis.valueAxisItem.name'
        },
        valueAxisValueAxisItemNarrowRange: {
            type: Boolean,
            kComposite: 'valueAxis.valueAxisItem.narrowRange'
        },
        valueAxisValueAxisItemPlotBands: {
            type: Array,
            kComposite: 'valueAxis.valueAxisItem.plotBands'
        }, valueAxisValueAxisItemReverse: {
            type: Boolean,
            kComposite: 'valueAxis.valueAxisItem.reverse'
        },
        valueAxisValueAxisItemTitleBackground: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.title.background'
        },
        valueAxisValueAxisItemTitleBorderColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.title.border.color'
        },
        valueAxisValueAxisItemTitleBorderDashType: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.title.border.dashType'
        },
        valueAxisValueAxisItemTitleBorderWidth: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.title.border.width'
        },
        valueAxisValueAxisItemTitleColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.title.color'
        },
        valueAxisValueAxisItemTitleFont: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.title.font'
        },
        valueAxisValueAxisItemTitleMargin: {
            type: Number | Object,
            kComposite: 'valueAxis.valueAxisItem.title.margin'
        },
        valueAxisValueAxisItemTitlePadding: {
            type: Number | Object,
            kComposite: 'valueAxis.valueAxisItem.title.padding'
        },
        valueAxisValueAxisItemTitlePosition: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.title.position'
        },
        valueAxisValueAxisItemTitleRotation: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.title.rotation'
        },
        valueAxisValueAxisItemTitleText: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.title.text'
        },
        valueAxisValueAxisItemTitleVisible: {
            type: Boolean,
            kComposite: 'valueAxis.valueAxisItem.title.visible'
        },
        valueAxisValueAxisItemVisible: {
            type: Boolean,
            kComposite: 'valueAxis.valueAxisItem.visible'
        },
        valueAxisValueAxisItemCrosshairColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.crosshair.color'
        },
        valueAxisValueAxisItemCrosshairWidth: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.crosshair.width'
        },
        valueAxisValueAxisItemCrosshairOpacity: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.crosshair.opacity'
        },
        valueAxisValueAxisItemCrosshairDashType: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.crosshair.dashType'
        },
        valueAxisValueAxisItemCrosshairVisible: {
            type: Boolean,
            kComposite: 'valueAxis.valueAxisItem.crosshair.visible'
        },
        valueAxisValueAxisItemCrosshairTooltipBackground: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.crosshair.tooltip.background'
        },
        valueAxisValueAxisItemCrosshairTooltipBorderColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.crosshair.tooltip.border.color'
        },
        valueAxisValueAxisItemCrosshairTooltipBorderWidth: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.crosshair.tooltip.border.width'
        },
        valueAxisValueAxisItemCrosshairTooltipColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.crosshair.tooltip.color'
        },
        valueAxisValueAxisItemCrosshairTooltipFont: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.crosshair.tooltip.font'
        },
        valueAxisValueAxisItemCrosshairTooltipFormat: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.crosshair.tooltip.format'
        },
        valueAxisValueAxisItemCrosshairTooltipPadding: {
            type: Number | Object,
            kComposite: 'valueAxis.valueAxisItem.crosshair.tooltip.padding'
        },
        valueAxisValueAxisItemCrosshairTooltipTemplate: {
            type: String | Function,
            kComposite: 'valueAxis.valueAxisItem.crosshair.tooltip.template'
        },
        valueAxisValueAxisItemCrosshairTooltipVisible: {
            type: Boolean,
            kComposite: 'valueAxis.valueAxisItem.crosshair.tooltip.visible'
        },
        valueAxisValueAxisItemNotesPosition: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.notes.position'
        },
        valueAxisValueAxisItemNotesIconBackground: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.notes.icon.background'
        },
        valueAxisValueAxisItemNotesIconBorderColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.notes.icon.border.color'
        },
        valueAxisValueAxisItemNotesIconBorderWidth: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.notes.icon.border.width'
        },
        valueAxisValueAxisItemNotesIconSize: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.notes.icon.size'
        },
        valueAxisValueAxisItemNotesIconType: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.notes.icon.type'
        },
        valueAxisValueAxisItemNotesIconVisible: {
            type: Boolean,
            kComposite: 'valueAxis.valueAxisItem.notes.icon.visible'
        },
        valueAxisValueAxisItemNotesLabelBackground: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.notes.label.background'
        },
        valueAxisValueAxisItemNotesLabelBorderColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.notes.label.border.color'
        },
        valueAxisValueAxisItemNotesLabelBorderDashType: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.notes.label.border.dashType'
        },
        valueAxisValueAxisItemNotesLabelBorderWidth: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.notes.label.border.width'
        },
        valueAxisValueAxisItemNotesLabelColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.notes.label.color'
        },
        valueAxisValueAxisItemNotesLabelFont: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.notes.label.font'
        },
        valueAxisValueAxisItemNotesLabelTemplate: {
            type: String | Function,
            kComposite: 'valueAxis.valueAxisItem.notes.label.template'
        },
        valueAxisValueAxisItemNotesLabelVisible: {
            type: Boolean,
            kComposite: 'valueAxis.valueAxisItem.notes.label.visible'
        },
        valueAxisValueAxisItemNotesLabelRotation: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.notes.label.rotation'
        },
        valueAxisValueAxisItemNotesLabelFormat: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.notes.label.format'
        },
        valueAxisValueAxisItemNotesLabelPosition: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.notes.label.position'
        },
        valueAxisValueAxisItemNotesLineWidth: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.notes.line.width'
        },
        valueAxisValueAxisItemNotesLineColor: {
            type: String,
            kComposite: 'valueAxis.valueAxisItem.notes.line.color'
        },
        valueAxisValueAxisItemNotesLineLength: {
            type: Number,
            kComposite: 'valueAxis.valueAxisItem.notes.line.length'
        },
        valueAxisValueAxisItemNotesData: {
            type: Array,
            kComposite: 'valueAxis.valueAxisItem.notes.data'
        } }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KendoChart = __webpack_require__(3);

var _KendoChart2 = _interopRequireDefault(_KendoChart);

var _KendoChartSeriesItem = __webpack_require__(1);

var _KendoChartSeriesItem2 = _interopRequireDefault(_KendoChartSeriesItem);

var _KendoStockChart = __webpack_require__(6);

var _KendoStockChart2 = _interopRequireDefault(_KendoStockChart);

var _KendoSparkline = __webpack_require__(7);

var _KendoSparkline2 = _interopRequireDefault(_KendoSparkline);

var _KendoSparklineSeriesItem = __webpack_require__(2);

var _KendoSparklineSeriesItem2 = _interopRequireDefault(_KendoSparklineSeriesItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KendoChartInstaller = function () {
    function KendoChartInstaller() {
        _classCallCheck(this, KendoChartInstaller);
    }

    _createClass(KendoChartInstaller, null, [{
        key: 'install',
        value: function install(Vue) {
            Vue.component(_KendoChart2.default.name, _KendoChart2.default);
            Vue.component(_KendoChartSeriesItem2.default.name, _KendoChartSeriesItem2.default);
            Vue.component(_KendoStockChart2.default.name, _KendoStockChart2.default);
            Vue.component(_KendoSparkline2.default.name, _KendoSparkline2.default);
            Vue.component(_KendoSparklineSeriesItem2.default.name, _KendoSparklineSeriesItem2.default);
        }
    }]);

    return KendoChartInstaller;
}();

exports.default = KendoChartInstaller;

// Automatic installation if Vue has been added to the global scope.

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(KendoChartInstaller);
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=kendo-charts-vue-wrapper.js.map