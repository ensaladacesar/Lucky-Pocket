(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _search_router_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.router.model */ "./src/app/search/search.router.model.ts");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _search_router_model__WEBPACK_IMPORTED_MODULE_4__["SearchPageRoutingModule"]
            ],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/search/search.page.html":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Explorar\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar id=\"keyword\" (keyup)=\"searchProduct($event.target.value)\"></ion-searchbar>\n  <ion-grid *ngIf=\"showCategories\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">Celulares</ion-col>\n      <ion-col class=\"ion-text-center\">Juegos</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center\">Hogar</ion-col>\n      <ion-col class=\"ion-text-center\">Ropa</ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-content *ngIf=\"showGrid\">\n    <ion-grid *ngFor=\"let item of items\" class=\"grid\" id=\"grid\">\n      <ion-card>\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"5\">\n              <img src=\"../../../assets/products/{{item.product_id}}/1.jpg\">\n            </ion-col>\n            <ion-col size=\"7\">\n              <ion-card-header>\n                <ion-button routerLink=\"/product/{{item.product_id}}\">\n                  {{item.product_name}}\n                </ion-button>\n                <ion-card-subtitle>\n                  {{item.category_name}}\n                </ion-card-subtitle>\n              </ion-card-header>\n              <ion-item>\n                <ion-progress-bar value=\"0.5\">\n  \n                </ion-progress-bar>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-grid>\n  </ion-content>\n  \n  <ion-grid *ngIf=\"showNone\">\n    <h3>No hay productos con tu criterio de búsqeda, intenta otra cosa.</h3>\n  </ion-grid>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPage = /** @class */ (function () {
    function SearchPage(ProductService) {
        this.ProductService = ProductService;
        this.showCategories = true;
        this.showGrid = false;
        this.showNone = false;
    }
    SearchPage.prototype.ngOnInit = function () {
    };
    SearchPage.prototype.searchProduct = function (keyword) {
        var _this = this;
        this.items = null;
        if (keyword == '') {
            this.showCategories = true;
            this.showGrid = false;
            this.showNone = false;
        }
        else {
            this.showCategories = false;
            this.ProductService.searchProduct(keyword)
                .subscribe(function (res) {
                console.log(res);
                if (res.length == 0) {
                    _this.showGrid = false;
                    _this.showNone = true;
                }
                else {
                    _this.showGrid = true;
                    _this.showNone = false;
                    _this.items = res;
                }
            });
        }
    };
    SearchPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.page.html */ "./src/app/search/search.page.html"),
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ }),

/***/ "./src/app/search/search.router.model.ts":
/*!***********************************************!*\
  !*** ./src/app/search/search.router.model.ts ***!
  \***********************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_2__["SearchPage"],
        children: [
            {
                path: 'product:product_id',
                children: [
                    {
                        path: '',
                        loadChildren: '../product/product.module#ProductPageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
    }
];
var SearchPageRoutingModule = /** @class */ (function () {
    function SearchPageRoutingModule() {
    }
    SearchPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SearchPageRoutingModule);
    return SearchPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map