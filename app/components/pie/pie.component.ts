import { Component, OnInit, ElementRef } from '@angular/core';
import { Option } from '../option/option'

import { PieOptionService } from './pie.service'


declare var echarts:any;
declare var $:any;

@Component({
    selector: 'pie-chart',
//  templateUrl: 'app/components/pie/pie-component.html',
	template: `<div style="width:400px; height:400px"></div>`,
    providers: [PieOptionService]
})
export class PieComponent implements OnInit{
	errorMessage: string;
  	option: Option;
  	
	constructor(private pieOptionService: PieOptionService, private elementRef: ElementRef) {
	}
	ngOnInit() {
		this.getPieOption();
	}
	
	drawPieChart() {
		if (this.option) {
			// this.elementRef.nativeElement 获取当前选择器元素
			$(this.elementRef.nativeElement).find("div").attr("id", this.option.containerId);
			var echart = echarts.init($('#' + this.option.containerId)[0]);
    		echart.setOption(this.option);
		}
		
	}
	
	getPieOption() {
		this.pieOptionService.getOption().subscribe(res => { 
			this.option = res;
			this.drawPieChart();
		},
		error =>  this.errorMessage = <any>error);
	}
}