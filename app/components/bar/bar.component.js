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
var bar_service_1 = require('./bar.service');
var BarComponent = (function () {
    function BarComponent(barOptionService, elementRef) {
        this.barOptionService = barOptionService;
        this.elementRef = elementRef;
    }
    BarComponent.prototype.ngOnInit = function () {
        this.getBarOption();
    };
    BarComponent.prototype.drawBarChart = function () {
        if (this.option) {
            // this.elementRef.nativeElement 获取当前选择器元素
            $(this.elementRef.nativeElement).find("div").attr("id", this.option.containerId);
            var echart = echarts.init($('#' + this.option.containerId)[0]);
            echart.setOption(this.option);
        }
    };
    BarComponent.prototype.getBarOption = function () {
        var _this = this;
        this.barOptionService.getOption().subscribe(function (res) {
            _this.option = res;
            _this.drawBarChart();
        }, function (error) { return _this.errorMessage = error; });
    };
    BarComponent = __decorate([
        core_1.Component({
            selector: 'bar-chart',
            template: "<div style=\"width:400px; height:400px\"></div>",
            providers: [bar_service_1.BarOptionService]
        }), 
        __metadata('design:paramtypes', [bar_service_1.BarOptionService, core_1.ElementRef])
    ], BarComponent);
    return BarComponent;
}());
exports.BarComponent = BarComponent;
//# sourceMappingURL=bar.component.js.map