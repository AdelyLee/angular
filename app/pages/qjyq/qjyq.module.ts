import { NgModule }      from '@angular/core';

import { QjyqComponent } from './qjyq.component';
import { PieComponent } from '../../components/pie/pie.component';
import { BarModule } from '../../components/bar/bar.module';
import { qjyqRouting } from './qjyq.routing';

@NgModule({
	imports: [qjyqRouting, BarModule],
	declarations: [ QjyqComponent, PieComponent ],
})
export class qjyqModule { }