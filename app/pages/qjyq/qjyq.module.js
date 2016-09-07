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
var qjyq_component_1 = require('./qjyq.component');
var pie_component_1 = require('../../components/pie/pie.component');
var bar_module_1 = require('../../components/bar/bar.module');
var qjyq_routing_1 = require('./qjyq.routing');
var qjyqModule = (function () {
    function qjyqModule() {
    }
    qjyqModule = __decorate([
        core_1.NgModule({
            imports: [qjyq_routing_1.qjyqRouting, bar_module_1.BarModule],
            declarations: [qjyq_component_1.QjyqComponent, pie_component_1.PieComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], qjyqModule);
    return qjyqModule;
}());
exports.qjyqModule = qjyqModule;
//# sourceMappingURL=qjyq.module.js.map