"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var index_component_1 = require('./index.component');
var line_component_1 = require('../../components/line/line.component');
var bar_module_1 = require('../../components/bar/bar.module');
var index_routing_1 = require('./index.routing');
var IndexModule = (function () {
    function IndexModule() {
    }
    IndexModule = __decorate([
        core_1.NgModule({
            imports: [index_routing_1.indexRouting, bar_module_1.BarModule.forRoot({ url: "../../../data/bar-option.json" })],
            //	imports: [indexRouting, BarModule],
            declarations: [index_component_1.IndexComponent, line_component_1.LineComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], IndexModule);
    return IndexModule;
}());
exports.IndexModule = IndexModule;
//# sourceMappingURL=index.module.js.map