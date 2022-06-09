(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["KendoDropdownsVueWrapper"] = factory(require("vue"));
	else
		root["KendoDropdownsVueWrapper"] = factory(root["Vue"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

var _kendoBaseComponent = __webpack_require__(13);

var _kendoBaseComponent2 = _interopRequireDefault(_kendoBaseComponent);

var _kendoBaseDatasourceComponent = __webpack_require__(14);

var _kendoBaseDatasourceComponent2 = _interopRequireDefault(_kendoBaseDatasourceComponent);

var _kendoBaseInputComponent = __webpack_require__(15);

var _kendoBaseInputComponent2 = _interopRequireDefault(_kendoBaseInputComponent);

var _kendoSharedMethods = __webpack_require__(16);

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        virtualItemHeight: {
            type: Number,
            default: undefined,
            kComposite: 'virtual.itemHeight'
        },
        virtualMapValueTo: {
            type: String,
            default: undefined,
            kComposite: 'virtual.mapValueTo'
        },
        virtualValueMapper: {
            type: Function,
            default: undefined,
            kComposite: 'virtual.valueMapper'
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
        popupAppendTo: {
            type: String,
            default: undefined,
            kComposite: 'popup.appendTo'
        },
        popupOrigin: {
            type: String,
            default: undefined,
            kComposite: 'popup.origin'
        },
        popupPosition: {
            type: String,
            default: undefined,
            kComposite: 'popup.position'
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

var _Columns = __webpack_require__(24);

var _Columns2 = _interopRequireDefault(_Columns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KendoGridColumn = {
    name: 'kendo-multicolumncombobox-column',
    render: function render() {
        return null;
    },

    mixins: [_Columns2.default]
};

exports.default = KendoGridColumn;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var Vue = _interopRequireWildcard(_vue);

var _KendoAutoCompleteMixin = __webpack_require__(12);

var _KendoAutoCompleteMixin2 = _interopRequireDefault(_KendoAutoCompleteMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-autocomplete',
    mixins: [_KendoAutoCompleteMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        return h('input', [this.$slots['kendo-datasource']]);
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

var _KendoDropDownListMixin = __webpack_require__(18);

var _KendoDropDownListMixin2 = _interopRequireDefault(_KendoDropDownListMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-dropdownlist',
    mixins: [_KendoDropDownListMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        return h('input', [this.$slots['kendo-datasource']]);
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

var _KendoComboBoxMixin = __webpack_require__(20);

var _KendoComboBoxMixin2 = _interopRequireDefault(_KendoComboBoxMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-combobox',
    mixins: [_KendoComboBoxMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        return h('input', [this.$slots['kendo-datasource']]);
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

var _KendoMultiColumnComboBoxMixin = __webpack_require__(22);

var _KendoMultiColumnComboBoxMixin2 = _interopRequireDefault(_KendoMultiColumnComboBoxMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-multicolumncombobox',
    mixins: [_KendoMultiColumnComboBoxMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        var defaultSlot = this.v3 && this.$slots.default && typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default;
        return h('input', [this.$slots['kendo-datasource'], defaultSlot]);
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

var _KendoMultiSelectMixin = __webpack_require__(25);

var _KendoMultiSelectMixin2 = _interopRequireDefault(_KendoMultiSelectMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var allVue = Vue;
var gh = allVue.h;
exports.default = {
    name: 'kendo-multiselect',
    mixins: [_KendoMultiSelectMixin2.default],
    setup: function setup() {
        var v3 = !!gh;
        return {
            v3: v3
        };
    },
    render: function render(createElement) {
        var h = gh || createElement;
        return h('input', [this.$slots['kendo-datasource']]);
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiColumnComboBoxColumn = exports.KendoMultiColumnComboBoxColumn = exports.MultiColumnComboBox = exports.KendoMultiColumnComboBox = exports.DropdownsInstaller = exports.KendoDropdownsInstaller = exports.MultiSelect = exports.KendoMultiSelect = exports.ComboBox = exports.KendoComboBox = exports.DropDownList = exports.KendoDropDownList = exports.AutoComplete = exports.KendoAutoComplete = undefined;

var _KendoAutoComplete = __webpack_require__(6);

var _KendoAutoComplete2 = _interopRequireDefault(_KendoAutoComplete);

var _KendoDropDownList = __webpack_require__(7);

var _KendoDropDownList2 = _interopRequireDefault(_KendoDropDownList);

var _KendoComboBox = __webpack_require__(8);

var _KendoComboBox2 = _interopRequireDefault(_KendoComboBox);

var _KendoMultiColumnComboBox = __webpack_require__(9);

var _KendoMultiColumnComboBox2 = _interopRequireDefault(_KendoMultiColumnComboBox);

var _KendoMultiColumnComboBoxColumn = __webpack_require__(5);

var _KendoMultiColumnComboBoxColumn2 = _interopRequireDefault(_KendoMultiColumnComboBoxColumn);

var _KendoMultiSelect = __webpack_require__(10);

var _KendoMultiSelect2 = _interopRequireDefault(_KendoMultiSelect);

var _kendoDropdownsInstaller = __webpack_require__(27);

var _kendoDropdownsInstaller2 = _interopRequireDefault(_kendoDropdownsInstaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.KendoAutoComplete = _KendoAutoComplete2.default;
exports.AutoComplete = _KendoAutoComplete2.default;
exports.KendoDropDownList = _KendoDropDownList2.default;
exports.DropDownList = _KendoDropDownList2.default;
exports.KendoComboBox = _KendoComboBox2.default;
exports.ComboBox = _KendoComboBox2.default;
exports.KendoMultiSelect = _KendoMultiSelect2.default;
exports.MultiSelect = _KendoMultiSelect2.default;
exports.KendoDropdownsInstaller = _kendoDropdownsInstaller2.default;
exports.DropdownsInstaller = _kendoDropdownsInstaller2.default;
exports.KendoMultiColumnComboBox = _KendoMultiColumnComboBox2.default;
exports.MultiColumnComboBox = _KendoMultiColumnComboBox2.default;
exports.KendoMultiColumnComboBoxColumn = _KendoMultiColumnComboBoxColumn2.default;
exports.MultiColumnComboBoxColumn = _KendoMultiColumnComboBoxColumn2.default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _AutoCompleteProps = __webpack_require__(17);

var _AutoCompleteProps2 = _interopRequireDefault(_AutoCompleteProps);

var _Animation = __webpack_require__(2);

var _Animation2 = _interopRequireDefault(_Animation);

var _Virtual = __webpack_require__(3);

var _Virtual2 = _interopRequireDefault(_Virtual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    emits: {
        'update:modelValue': null,
        'kendowidgetready': null
    },
    props: _AutoCompleteProps2.default,
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _Animation2.default, _Virtual2.default],
    model: {
        event: 'changemodel'
    },
    mounted: function mounted() {
        var that = this;
        var widgetElement = that.$el;
        kendo.jQuery(widgetElement).kendoAutoComplete(that.widgetOptions);
        if (this.v3) {
            this.ready();
            this.$emit('kendowidgetready', this.kendoWidget());
        } else {
            this.$emit('kendowidgetready', this.kendoWidget());
        }

        that.kendoWidget().bind('change', function () {
            if (that.v3) {
                that.$emit('update:modelValue', widgetElement.value);
            } else {
                that.$emit('changemodel', widgetElement.value);
            }
        });
    },

    methods: {
        kendoWidget: function kendoWidget() {
            var widgetElement = this.$el;

            return kendo.jQuery(widgetElement).getKendoAutoComplete();
        }
    }
};

/***/ }),
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    modelValue: {
        type: [String, Number],
        default: undefined
    },
    animation: {
        type: [Boolean, Object],
        default: undefined
    },
    autoWidth: {
        type: Boolean,
        default: undefined
    },
    dataSource: {
        type: [Object, Array],
        default: undefined
    },
    clearButton: {
        type: Boolean,
        default: undefined
    },
    dataTextField: {
        type: String,
        default: undefined
    },
    delay: {
        type: Number,
        default: undefined
    },
    enable: {
        type: Boolean,
        default: undefined
    },
    enforceMinLength: {
        type: Boolean,
        default: undefined
    },
    filter: {
        type: String,
        default: undefined
    },
    fixedGroupTemplate: {
        type: [String, Function],
        default: undefined
    },
    footerTemplate: {
        type: [String, Function],
        default: undefined
    },
    groupTemplate: {
        type: [String, Function],
        default: undefined
    },
    height: {
        type: Number,
        default: undefined
    },
    highlightFirst: {
        type: Boolean,
        default: undefined
    },
    ignoreCase: {
        type: Boolean,
        default: undefined
    },
    minLength: {
        type: Number,
        default: undefined
    },
    noDataTemplate: {
        type: [String, Function],
        default: undefined
    },
    placeholder: {
        type: String,
        default: undefined
    },
    popup: {
        type: Object,
        default: undefined
    },
    separator: {
        type: [String, Array],
        default: undefined
    },
    suggest: {
        type: Boolean,
        default: undefined
    },
    headerTemplate: {
        type: [String, Function],
        default: undefined
    },
    template: {
        type: [String, Function],
        default: undefined
    },
    value: {
        type: [String, Number],
        default: undefined
    },
    valuePrimitive: {
        type: Boolean,
        default: undefined
    },
    virtual: {
        type: [Boolean, Object],
        default: undefined
    },

    // Events
    change: Function,
    close: Function,
    dataBound: {
        type: Function,
        default: undefined
    },
    filtering: Function,
    open: Function,
    select: Function
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _DropDownListProps = __webpack_require__(19);

var _DropDownListProps2 = _interopRequireDefault(_DropDownListProps);

var _Animation = __webpack_require__(2);

var _Animation2 = _interopRequireDefault(_Animation);

var _Popup = __webpack_require__(4);

var _Popup2 = _interopRequireDefault(_Popup);

var _Virtual = __webpack_require__(3);

var _Virtual2 = _interopRequireDefault(_Virtual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    emits: {
        'update:modelValue': null,
        'kendowidgetready': null
    },
    props: _DropDownListProps2.default,
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _Animation2.default, _Popup2.default, _Virtual2.default],
    model: {
        event: 'changemodel'
    },
    mounted: function mounted() {
        var that = this;
        var widgetElement = that.$el;

        kendo.jQuery(widgetElement).kendoDropDownList(that.widgetOptions);

        if (this.v3) {
            this.ready();
            this.$emit('kendowidgetready', this.kendoWidget());
        } else {
            this.$emit('kendowidgetready', this.kendoWidget());
        }

        that.kendoWidget().bind('change', function () {
            if (that.v3) {
                that.$emit('update:modelValue', widgetElement.value);
            } else {
                that.$emit('changemodel', widgetElement.value);
            }
        });
    },

    methods: {
        kendoWidget: function kendoWidget() {
            var widgetElement = this.$el;

            return kendo.jQuery(widgetElement).getKendoDropDownList();
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
    modelValue: {
        type: [String, Number],
        default: undefined
    },
    animation: {
        type: [Boolean, Object],
        default: undefined
    },
    autoBind: {
        type: Boolean,
        default: undefined
    },
    autoWidth: {
        type: Boolean,
        default: undefined
    },
    cascadeFrom: {
        type: String,
        default: undefined
    },
    cascadeFromField: {
        type: String,
        default: undefined
    },
    cascadeFromParentField: {
        type: String,
        default: undefined
    },
    dataSource: {
        type: [Object, Array],
        default: undefined
    },
    dataTextField: {
        type: String,
        default: undefined
    },
    dataValueField: {
        type: String,
        default: undefined
    },
    delay: {
        type: Number,
        default: undefined
    },
    enable: {
        type: Boolean,
        default: undefined
    },
    enforceMinLength: {
        type: Boolean,
        default: undefined
    },
    filter: {
        type: String,
        default: undefined
    },
    fixedGroupTemplate: {
        type: [String, Function],
        default: undefined
    },
    footerTemplate: {
        type: [String, Function],
        default: undefined
    },
    groupTemplate: {
        type: [String, Function],
        default: undefined
    },
    height: {
        type: Number,
        default: undefined
    },
    ignoreCase: {
        type: Boolean,
        default: undefined
    },
    index: {
        type: Number,
        default: undefined
    },
    minLength: {
        type: Number,
        default: undefined
    },
    noDataTemplate: {
        type: [String, Function],
        default: undefined
    },
    popup: {
        type: Object,
        default: undefined
    },
    optionLabel: {
        type: [String, Object],
        default: undefined
    },
    optionLabelTemplate: {
        type: [String, Function],
        default: undefined
    },
    headerTemplate: {
        type: [String, Function],
        default: undefined
    },
    template: {
        type: [String, Function],
        default: undefined
    },
    valueTemplate: {
        type: [String, Function],
        default: undefined
    },
    text: {
        type: String,
        default: undefined
    },
    value: {
        type: [String, Number],
        default: undefined
    },
    valuePrimitive: {
        type: Boolean,
        default: undefined
    },
    virtual: {
        type: [Boolean, Object],
        default: undefined
    },

    // Events
    change: Function,
    close: Function,
    dataBound: {
        type: Function,
        default: undefined
    },
    filtering: Function,
    open: Function,
    select: Function,
    cascade: Function
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _ComboBoxProps = __webpack_require__(21);

var _ComboBoxProps2 = _interopRequireDefault(_ComboBoxProps);

var _Animation = __webpack_require__(2);

var _Animation2 = _interopRequireDefault(_Animation);

var _Popup = __webpack_require__(4);

var _Popup2 = _interopRequireDefault(_Popup);

var _Virtual = __webpack_require__(3);

var _Virtual2 = _interopRequireDefault(_Virtual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    emits: {
        'update:modelValue': null,
        'kendowidgetready': null
    },
    props: _ComboBoxProps2.default,
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _Animation2.default, _Popup2.default, _Virtual2.default],
    model: {
        event: 'changemodel'
    },
    mounted: function mounted() {
        var that = this;
        var widgetElement = that.$el;

        kendo.jQuery(widgetElement).kendoComboBox(that.widgetOptions);

        if (this.v3) {
            this.ready();
            this.$emit('kendowidgetready', this.kendoWidget());
        } else {
            this.$emit('kendowidgetready', this.kendoWidget());
        }

        that.kendoWidget().bind('change', function () {
            if (that.v3) {
                that.$emit('update:modelValue', widgetElement.value);
            } else {
                that.$emit('changemodel', widgetElement.value);
            }
        });
    },

    methods: {
        kendoWidget: function kendoWidget() {
            var widgetElement = this.$el;

            return kendo.jQuery(widgetElement).getKendoComboBox();
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
    modelValue: {
        type: [String, Number],
        default: undefined
    },
    animation: {
        type: Object,
        default: undefined
    },
    autoBind: {
        type: Boolean,
        default: undefined
    },
    autoWidth: {
        type: Boolean,
        default: undefined
    },
    cascadeFrom: {
        type: String,
        default: undefined
    },
    cascadeFromField: {
        type: String,
        default: undefined
    },
    cascadeFromParentField: {
        type: String,
        default: undefined
    },
    clearButton: {
        type: Boolean,
        default: undefined
    },
    dataSource: {
        type: [Object, Array],
        default: undefined
    },
    dataTextField: {
        type: String,
        default: undefined
    },
    dataValueField: {
        type: String,
        default: undefined
    },
    delay: {
        type: Number,
        default: undefined
    },
    enable: {
        type: Boolean,
        default: undefined
    },
    enforceMinLength: {
        type: Boolean,
        default: undefined
    },
    filter: {
        type: String,
        default: undefined
    },
    fixedGroupTemplate: {
        type: [String, Function],
        default: undefined
    },
    footerTemplate: {
        type: [String, Function],
        default: undefined
    },
    groupTemplate: {
        type: [String, Function],
        default: undefined
    },
    height: {
        type: Number,
        default: undefined
    },
    highlightFirst: {
        type: Boolean,
        default: undefined
    },
    ignoreCase: {
        type: Boolean,
        default: undefined
    },
    index: {
        type: Number,
        default: undefined
    },
    minLength: {
        type: Number,
        default: undefined
    },
    noDataTemplate: {
        type: [String, Function],
        default: undefined
    },
    placeholder: {
        type: String,
        default: undefined
    },
    popup: {
        type: Object,
        default: undefined
    },
    suggest: {
        type: Boolean,
        default: undefined
    },
    syncValueAndText: {
        type: Boolean,
        default: undefined
    },
    headerTemplate: {
        type: [String, Function],
        default: undefined
    },
    template: {
        type: [String, Function],
        default: undefined
    },
    text: {
        type: String,
        default: undefined
    },
    value: {
        type: [String, Number],
        default: undefined
    },
    valuePrimitive: {
        type: Boolean,
        default: undefined
    },
    virtual: {
        type: [Boolean, Object],
        default: undefined
    },

    // Events
    change: {
        type: Function,
        default: undefined
    },
    close: {
        type: Function,
        default: undefined
    },
    dataBound: {
        type: Function,
        default: undefined
    },
    filtering: {
        type: Function,
        default: undefined
    },
    open: {
        type: Function,
        default: undefined
    },
    select: {
        type: Function,
        default: undefined
    },
    cascade: Function
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _MultiColumnComboBoxProps = __webpack_require__(23);

var _MultiColumnComboBoxProps2 = _interopRequireDefault(_MultiColumnComboBoxProps);

var _KendoMultiColumnComboBoxColumn = __webpack_require__(5);

var _KendoMultiColumnComboBoxColumn2 = _interopRequireDefault(_KendoMultiColumnComboBoxColumn);

var _Animation = __webpack_require__(2);

var _Animation2 = _interopRequireDefault(_Animation);

var _Popup = __webpack_require__(4);

var _Popup2 = _interopRequireDefault(_Popup);

var _Virtual = __webpack_require__(3);

var _Virtual2 = _interopRequireDefault(_Virtual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    emits: {
        'update:modelValue': null,
        'kendowidgetready': null
    },
    props: _MultiColumnComboBoxProps2.default,
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _Animation2.default, _Popup2.default, _Virtual2.default],
    model: {
        event: 'changemodel'
    },
    mounted: function mounted() {
        var that = this;
        var widgetElement = that.$el;
        that._resolveChildren();
        kendo.jQuery(this.$el).kendoMultiColumnComboBox(this.widgetOptions);

        if (this.v3) {
            this.ready();
            this.$emit('kendowidgetready', this.kendoWidget());
        } else {
            this.$emit('kendowidgetready', this.kendoWidget());
        }

        that.kendoWidget().bind('change', function () {
            if (that.v3) {
                that.$emit('update:modelValue', widgetElement.value);
            } else {
                that.$emit('changemodel', widgetElement.value);
            }
        });
    },

    methods: {
        kendoWidget: function kendoWidget() {
            var widgetElement = this.$el;
            return kendo.jQuery(widgetElement).getKendoMultiColumnComboBox();
        },
        _resolveChildren: function _resolveChildren() {
            this.resolveChildren('columns', _KendoMultiColumnComboBoxColumn2.default.name);
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
    modelValue: {
        type: String,
        default: undefined
    },
    animation: {
        type: Object,
        default: undefined
    },
    autoBind: {
        type: Boolean,
        default: undefined
    },
    cascadeFrom: {
        type: String,
        default: undefined
    },
    cascadeFromField: {
        type: String,
        default: undefined
    },
    cascadeFromParentField: {
        type: String,
        default: undefined
    },
    columns: {
        type: Array,
        default: undefined
    },
    clearButton: {
        type: Boolean,
        default: undefined
    },
    dataSource: {
        type: [Object, Array],
        default: undefined
    },
    dataTextField: {
        type: String,
        default: undefined
    },
    dataValueField: {
        type: String,
        default: undefined
    },
    dropDownWidth: {
        type: [String, Number],
        default: undefined
    },
    delay: {
        type: Number,
        default: undefined
    },
    enable: {
        type: Boolean,
        default: undefined
    },
    enforceMinLength: {
        type: Boolean,
        default: undefined
    },
    filter: {
        type: String,
        default: undefined
    },
    filterFields: {
        type: Array,
        default: undefined
    },
    fixedGroupTemplate: {
        type: [String, Function],
        default: undefined
    },
    footerTemplate: {
        type: [String, Function],
        default: undefined
    },
    groupTemplate: {
        type: [String, Function],
        default: undefined
    },
    height: {
        type: Number,
        default: undefined
    },
    highlightFirst: {
        type: Boolean,
        default: undefined
    },
    ignoreCase: {
        type: Boolean,
        default: undefined
    },
    index: {
        type: Number,
        default: undefined
    },
    minLength: {
        type: Number,
        default: undefined
    },
    noDataTemplate: {
        type: [String, Function],
        default: undefined
    },
    placeholder: {
        type: String,
        default: undefined
    },
    popup: {
        type: Object,
        default: undefined
    },
    suggest: {
        type: Boolean,
        default: undefined
    },
    syncValueAndText: {
        type: Boolean,
        default: undefined
    },
    headerTemplate: {
        type: [String, Function],
        default: undefined
    },
    text: {
        type: String,
        default: undefined
    },
    value: {
        type: String,
        default: undefined
    },
    valuePrimitive: {
        type: Boolean,
        default: undefined
    },
    virtual: {
        type: [Boolean, Object],
        default: undefined
    },

    // Events
    change: Function,
    close: Function,
    dataBound: {
        type: Function,
        default: undefined
    },
    filtering: Function,
    open: Function,
    select: Function,
    cascade: Function
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
        field: {
            type: String,
            default: undefined
        },
        title: {
            type: String,
            default: undefined
        },
        template: {
            type: [String, Function],
            default: undefined
        },
        headerTemplate: {
            type: [String, Function],
            default: undefined
        },
        width: {
            type: [String, Number],
            default: undefined
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

var _kendoBaseComponentsVueWrapper = __webpack_require__(1);

var _MultiSelectProps = __webpack_require__(26);

var _MultiSelectProps2 = _interopRequireDefault(_MultiSelectProps);

var _Animation = __webpack_require__(2);

var _Animation2 = _interopRequireDefault(_Animation);

var _Popup = __webpack_require__(4);

var _Popup2 = _interopRequireDefault(_Popup);

var _Virtual = __webpack_require__(3);

var _Virtual2 = _interopRequireDefault(_Virtual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: _MultiSelectProps2.default,
    emits: {
        'kendowidgetready': null
    },
    mixins: [_kendoBaseComponentsVueWrapper.KendoBaseComponent, _kendoBaseComponentsVueWrapper.KendoBaseDatasourceComponent, _Animation2.default, _Popup2.default, _Virtual2.default],
    mounted: function mounted() {
        var that = this;
        var widgetElement = that.$el;

        kendo.jQuery(widgetElement).kendoMultiSelect(that.widgetOptions);

        if (this.v3) {
            this.ready();
        }

        that.$emit('kendowidgetready', that.kendoWidget());

        that.kendoWidget().bind('change', function () {
            if (that.v3) {
                that.$emit('update:modelValue', that.kendoWidget().value());
            } else {
                that.$emit('changemodel', that.kendoWidget().value());
            }
        });
    },

    methods: {
        kendoWidget: function kendoWidget() {
            var widgetElement = this.$el;

            return kendo.jQuery(widgetElement).getKendoMultiSelect();
        }
    },
    model: {
        event: 'changemodel'
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
    modelValue: {
        type: [Array, Number],
        default: undefined
    },
    animation: {
        type: [Boolean, Object],
        default: undefined
    },
    autoBind: {
        type: Boolean,
        default: undefined
    },
    autoClose: {
        type: Boolean,
        default: undefined
    },
    autoWidth: {
        type: Boolean,
        default: undefined
    },
    clearButton: {
        type: Boolean,
        default: undefined
    },
    dataSource: {
        type: [Object, Array],
        default: undefined
    },
    dataTextField: {
        type: String,
        default: undefined
    },
    dataValueField: {
        type: String,
        default: undefined
    },
    delay: {
        type: Number,
        default: undefined
    },
    enable: {
        type: Boolean,
        default: undefined
    },
    enforceMinLength: {
        type: Boolean,
        default: undefined
    },
    filter: {
        type: String,
        default: undefined
    },
    fixedGroupTemplate: {
        type: [String, Function],
        default: undefined
    },
    footerTemplate: {
        type: [String, Function],
        default: undefined
    },
    groupTemplate: {
        type: [String, Function],
        default: undefined
    },
    height: {
        type: Number,
        default: undefined
    },
    highlightFirst: {
        type: Boolean,
        default: undefined
    },
    ignoreCase: {
        type: Boolean,
        default: undefined
    },
    minLength: {
        type: Number,
        default: undefined
    },
    maxSelectedItems: {
        type: Number,
        default: undefined
    },
    noDataTemplate: {
        type: [String, Function],
        default: undefined
    },
    placeholder: {
        type: String,
        default: undefined
    },
    popup: {
        type: Object,
        default: undefined
    },
    headerTemplate: {
        type: [String, Function],
        default: undefined
    },
    itemTemplate: {
        type: [String, Function],
        default: undefined
    },
    tagTemplate: {
        type: [String, Function],
        default: undefined
    },
    tagMode: {
        type: String,
        default: undefined
    },
    value: {
        type: [Array, Number],
        default: undefined
    },
    valuePrimitive: {
        type: Boolean,
        default: undefined
    },
    virtual: {
        type: [Boolean, Object],
        default: undefined
    },

    // Events
    change: Function,
    close: Function,
    dataBound: {
        type: Function,
        default: undefined
    },
    filtering: Function,
    open: Function,
    select: Function,
    deselect: Function
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KendoAutoComplete = __webpack_require__(6);

var _KendoAutoComplete2 = _interopRequireDefault(_KendoAutoComplete);

var _KendoDropDownList = __webpack_require__(7);

var _KendoDropDownList2 = _interopRequireDefault(_KendoDropDownList);

var _KendoComboBox = __webpack_require__(8);

var _KendoComboBox2 = _interopRequireDefault(_KendoComboBox);

var _KendoMultiSelect = __webpack_require__(10);

var _KendoMultiSelect2 = _interopRequireDefault(_KendoMultiSelect);

var _KendoMultiColumnComboBox = __webpack_require__(9);

var _KendoMultiColumnComboBox2 = _interopRequireDefault(_KendoMultiColumnComboBox);

var _KendoMultiColumnComboBoxColumn = __webpack_require__(5);

var _KendoMultiColumnComboBoxColumn2 = _interopRequireDefault(_KendoMultiColumnComboBoxColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KendoDropdownsInstaller = function () {
    function KendoDropdownsInstaller() {
        _classCallCheck(this, KendoDropdownsInstaller);
    }

    _createClass(KendoDropdownsInstaller, null, [{
        key: 'install',
        value: function install(Vue) {
            Vue.component(_KendoAutoComplete2.default.name, _KendoAutoComplete2.default);
            Vue.component(_KendoDropDownList2.default.name, _KendoDropDownList2.default);
            Vue.component(_KendoComboBox2.default.name, _KendoComboBox2.default);
            Vue.component(_KendoMultiSelect2.default.name, _KendoMultiSelect2.default);
            Vue.component(_KendoMultiColumnComboBox2.default.name, _KendoMultiColumnComboBox2.default);
            Vue.component(_KendoMultiColumnComboBoxColumn2.default.name, _KendoMultiColumnComboBoxColumn2.default);
        }
    }]);

    return KendoDropdownsInstaller;
}();

exports.default = KendoDropdownsInstaller;

// Automatic installation if Vue has been added to the global scope.

if (typeof window !== 'undefined' && window.Vue && window.Vue.use) {
    window.Vue.use(KendoDropdownsInstaller);
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=kendo-dropdowns-vue-wrapper.js.map