import { ModuleWithProviders }  from '@angular/core';
import {
    Routes,
    RouterModule 
} from '@angular/router';

import { IndexComponent } from './index.component';

export const indexRoutes: Routes = [
    { path: 'index', component: IndexComponent }
];

export const indexRouting: ModuleWithProviders = RouterModule.forChild(indexRoutes);