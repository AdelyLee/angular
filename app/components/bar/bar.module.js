/**
 * 该模块为 Share Module, 通过ShareModule 来让多个模块使用 BarComponent 组件。
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var bar_component_1 = require('../../components/bar/bar.component');
var bar_service_1 = require('./bar.service');
var bar_service_2 = require('./bar.service');
var BarModule = (function () {
    function BarModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    BarModule.forRoot = function (config) {
        //TODO: 可以在此处设置相关用户值,不同的用户请求不同的url
        return {
            ngModule: BarModule,
            providers: [
                { provide: bar_service_2.BarOptionConfig, useValue: config }
            ]
        };
    };
    BarModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [bar_component_1.BarComponent],
            exports: [bar_component_1.BarComponent, common_1.CommonModule],
            providers: [bar_service_1.BarOptionService]
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [BarModule])
    ], BarModule);
    return BarModule;
}());
exports.BarModule = BarModule;
//# sourceMappingURL=bar.module.js.map