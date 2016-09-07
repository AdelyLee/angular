import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import { IndexModule }      from './pages/index/index.module';
import { qjyqModule }      from './pages/qjyq/qjyq.module';
//import { NavigateModule } from './components/navigate/navigate.module';

import { routing } from './app.routing';

@NgModule({
	imports:      [ BrowserModule, HttpModule, routing, IndexModule, qjyqModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }