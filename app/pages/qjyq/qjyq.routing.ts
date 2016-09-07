/**
* 全景舆情模块
* @author Lyc
* @Time 2016年9月6日
*
*/
import { ModuleWithProviders }  from '@angular/core';
import {
    Routes,
    RouterModule 
} from '@angular/router';

import { QjyqComponent } from './qjyq.component';

export const qjyqRoutes: Routes = [
    { path: 'qjyq', component: QjyqComponent }
];

export const qjyqRouting: ModuleWithProviders = RouterModule.forChild(qjyqRoutes);