/**
 * 该模块为 Share Module, 通过ShareModule 来让多个模块使用 BarComponent 组件。
 * 调用模块时向模块传递参数，根据不同的参数来渲染模块
 * 参见：https://angular.io/docs/ts/latest/guide/ngmodule.html 
 * 	Configure core services with CoreModule.forRoot
 * @author Lyc
 * @Time 2016年9月6日
 */

import { NgModule, ModuleWithProviders, Optional, SkipSelf}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { BarComponent } from '../../components/bar/bar.component';
import { BarOptionService }       from './bar.service';
import { BarOptionConfig } from './bar.service';


@NgModule({
  	imports:      [ CommonModule ],
  	declarations: [ BarComponent ],
  	exports:      [ BarComponent, CommonModule ],
    providers:    [ BarOptionService ]
})
export class BarModule {
	constructor (@Optional() @SkipSelf() parentModule: BarModule) {
	    if (parentModule) {
	      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
	    }
	}
	
	static forRoot(config: BarOptionConfig): ModuleWithProviders {
		//TODO: 可以在此处设置相关用户值,不同的用户请求不同的url
	    return {
	      	ngModule: BarModule,
	      	providers: [
	        	{provide: BarOptionConfig, useValue: config }
	      	]
	    };
	}
}