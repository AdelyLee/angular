import { Component, OnInit, ElementRef} from '@angular/core';
import { Option } from '../option/option'

import { BarOptionService } from './bar.service'

declare var echarts:any;
declare var $:any;

@Component({
    selector: 'bar-chart',
	template: `<div style="width:400px; height:400px"></div>`,
    providers: [BarOptionService]
})
export class BarComponent implements OnInit{
	errorMessage: string;
	url: string;
  	option: Option;
  	
	constructor(private barOptionService: BarOptionService, private elementRef: ElementRef) {
	}
	
	ngOnInit() {
		this.getBarOption();
	}
	
	drawBarChart() {
		if (this.option) {
			// this.elementRef.nativeElement 获取当前选择器元素
			$(this.elementRef.nativeElement).find("div").attr("id", this.option.containerId);
			var echart = echarts.init($('#' + this.option.containerId)[0]);
    		echart.setOption(this.option);
		}
	}
	
	getBarOption() {
		this.barOptionService.getOption().subscribe(res => { 
			this.option = res;
			this.drawBarChart();
		},
		error =>  this.errorMessage = <any>error);
	}
}