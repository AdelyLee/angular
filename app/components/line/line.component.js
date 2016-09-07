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
var line_service_1 = require('./line.service');
var LineComponent = (function () {
    function LineComponent(lineOptionService, elementRef) {
        this.lineOptionService = lineOptionService;
        this.elementRef = elementRef;
    }
    LineComponent.prototype.ngOnInit = function () {
        this.getLineOption();
    };
    LineComponent.prototype.drawLineChart = function () {
        if (this.option) {
            // this.elementRef.nativeElement 获取当前选择器元素
            $(this.elementRef.nativeElement).find("div").attr("id", this.option.containerId);
            var echart = echarts.init($('#' + this.option.containerId)[0]);
            echart.setOption(this.option);
        }
    };
    LineComponent.prototype.getLineOption = function () {
        var _this = this;
        this.lineOptionService.getOption().subscribe(function (res) {
            _this.option = res;
            _this.drawLineChart();
        }, function (error) { return _this.errorMessage = error; });
    };
    LineComponent = __decorate([
        core_1.Component({
            selector: 'line-chart',
            //  templateUrl: 'app/components/line/line-component.html',
            template: "<div style=\"width:400px; height:400px\"></div>",
            providers: [line_service_1.LineOptionService]
        }), 
        __metadata('design:paramtypes', [line_service_1.LineOptionService, core_1.ElementRef])
    ], LineComponent);
    return LineComponent;
}());
exports.LineComponent = LineComponent;
//# sourceMappingURL=line.component.js.map