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
var pie_service_1 = require('./pie.service');
var PieComponent = (function () {
    function PieComponent(pieOptionService, elementRef) {
        this.pieOptionService = pieOptionService;
        this.elementRef = elementRef;
    }
    PieComponent.prototype.ngOnInit = function () {
        this.getPieOption();
    };
    PieComponent.prototype.drawPieChart = function () {
        if (this.option) {
            // this.elementRef.nativeElement 获取当前选择器元素
            $(this.elementRef.nativeElement).find("div").attr("id", this.option.containerId);
            var echart = echarts.init($('#' + this.option.containerId)[0]);
            echart.setOption(this.option);
        }
    };
    PieComponent.prototype.getPieOption = function () {
        var _this = this;
        this.pieOptionService.getOption().subscribe(function (res) {
            _this.option = res;
            _this.drawPieChart();
        }, function (error) { return _this.errorMessage = error; });
    };
    PieComponent = __decorate([
        core_1.Component({
            selector: 'pie-chart',
            //  templateUrl: 'app/components/pie/pie-component.html',
            template: "<div style=\"width:400px; height:400px\"></div>",
            providers: [pie_service_1.PieOptionService]
        }), 
        __metadata('design:paramtypes', [pie_service_1.PieOptionService, core_1.ElementRef])
    ], PieComponent);
    return PieComponent;
}());
exports.PieComponent = PieComponent;
//# sourceMappingURL=pie.component.js.map