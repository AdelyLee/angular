import { NgModule }      from '@angular/core';

import { IndexComponent } from './index.component';
import { LineComponent } from '../../components/line/line.component';
import { BarModule } from '../../components/bar/bar.module';
import { PieComponent } from '../../components/pie/pie.component';

import { indexRouting } from './index.routing';

@NgModule({
	imports: [indexRouting, BarModule.forRoot({url: "../../../data/bar-option.json"})],
//	imports: [indexRouting, BarModule],
	declarations: [ IndexComponent, LineComponent ],
})
export class IndexModule { }