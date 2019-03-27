(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pocket-pocket-module"],{

/***/ "./src/app/pocket/pocket.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pocket/pocket.module.ts ***!
  \*****************************************/
/*! exports provided: PocketPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocketPageModule", function() { return PocketPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pocket_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pocket.page */ "./src/app/pocket/pocket.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PocketPageModule = /** @class */ (function () {
    function PocketPageModule() {
    }
    PocketPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _pocket_page__WEBPACK_IMPORTED_MODULE_5__["PocketPage"] }])
            ],
            declarations: [_pocket_page__WEBPACK_IMPORTED_MODULE_5__["PocketPage"]]
        })
    ], PocketPageModule);
    return PocketPageModule;
}());



/***/ }),

/***/ "./src/app/pocket/pocket.page.html":
/*!*****************************************!*\
  !*** ./src/app/pocket/pocket.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Tab Three\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content></ion-content>\n"

/***/ }),

/***/ "./src/app/pocket/pocket.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pocket/pocket.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvY2tldC9wb2NrZXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pocket/pocket.page.ts":
/*!***************************************!*\
  !*** ./src/app/pocket/pocket.page.ts ***!
  \***************************************/
/*! exports provided: PocketPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocketPage", function() { return PocketPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PocketPage = /** @class */ (function () {
    function PocketPage() {
    }
    PocketPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pocket',
            template: __webpack_require__(/*! ./pocket.page.html */ "./src/app/pocket/pocket.page.html"),
            styles: [__webpack_require__(/*! ./pocket.page.scss */ "./src/app/pocket/pocket.page.scss")]
        })
    ], PocketPage);
    return PocketPage;
}());



/***/ })

}]);
//# sourceMappingURL=pocket-pocket-module.js.map