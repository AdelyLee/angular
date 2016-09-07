import { Component, OnInit, ElementRef } from '@angular/core';
import { Option } from '../option/option'

import { LineOptionService } from './line.service'


declare var echarts:any;
declare var $:any;

@Component({
    selector: 'line-chart',
//  templateUrl: 'app/components/line/line-component.html',
	template: `<div style="width:400px; height:400px"></div>`,
    providers: [LineOptionService]
})
export class LineComponent implements OnInit{
	errorMessage: string;
  	option: Option;
  	
	constructor(private lineOptionService: LineOptionService, private elementRef: ElementRef) {
	}
	ngOnInit() {
		this.getLineOption();
	}
	
	drawLineChart() {
		if (this.option) {
			// this.elementRef.nativeElement 获取当前选择器元素
			$(this.elementRef.nativeElement).find("div").attr("id", this.option.containerId);
			var echart = echarts.init($('#' + this.option.containerId)[0]);
    		echart.setOption(this.option);
		}
		
	}
	
	getLineOption() {
		this.lineOptionService.getOption().subscribe(res => { 
			this.option = res;
			this.drawLineChart();
		},
		error =>  this.errorMessage = <any>error);
	}
}