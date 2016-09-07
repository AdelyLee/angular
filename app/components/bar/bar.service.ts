import { Injectable, Optional } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

export class BarOptionConfig {
  url = '../../../data/pie-option.json';
}

@Injectable()
export class BarOptionService {
	private _url = '../../../data/pie-option.json';
	
	constructor( private http: Http, @Optional() config: BarOptionConfig) {
    	if (config) { this._url = config.url; }
  	}

	getOption() {
		return this.http.get(this._url)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body || {};
	}

	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}