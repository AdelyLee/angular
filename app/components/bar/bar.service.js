"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
var BarOptionConfig = (function () {
    function BarOptionConfig() {
        this.url = '../../../data/pie-option.json';
    }
    return BarOptionConfig;
}());
exports.BarOptionConfig = BarOptionConfig;
var BarOptionService = (function () {
    function BarOptionService(http, config) {
        this.http = http;
        this._url = '../../../data/pie-option.json';
        if (config) {
            this._url = config.url;
        }
    }
    BarOptionService.prototype.getOption = function () {
        return this.http.get(this._url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BarOptionService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    BarOptionService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    BarOptionService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [http_1.Http, BarOptionConfig])
    ], BarOptionService);
    return BarOptionService;
}());
exports.BarOptionService = BarOptionService;
//# sourceMappingURL=bar.service.js.map