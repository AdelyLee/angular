/**
 * 该模块为 Share Module, 。
 * 调用模块时向模块传递参数，根据不同的参数来渲染模块
 * 参见：https://angular.io/docs/ts/latest/guide/ngmodule.html
 * 	Configure core services with CoreModule.forRoot
 * @author Lyc
 * @Time 2016年9月6日
 */
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
var common_1 = require('@angular/common');
var navigate_component_1 = require('./navigate.component');
var NavigateModule = (function () {
    function NavigateModule() {
    }
    NavigateModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [navigate_component_1.NavigateComponent],
            exports: [navigate_component_1.NavigateComponent, common_1.CommonModule]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigateModule);
    return NavigateModule;
}());
exports.NavigateModule = NavigateModule;
//# sourceMappingURL=navigate.module.js.map