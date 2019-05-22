(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"],{

/***/ "./src/app/intro/intro.module.ts":
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro.page */ "./src/app/intro/intro.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_5__["IntroPage"]
    }
];
var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_5__["IntroPage"]]
        })
    ], IntroPageModule);
    return IntroPageModule;
}());



/***/ }),

/***/ "./src/app/intro/intro.page.html":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-slides pager=\"true\">\n      <ion-slide>\n        <ion-row>\n          <ion-img src=\"../../assets/icons/sl1.svg\" class=\"icon-nav slide-img\"></ion-img>\n        </ion-row>\n      </ion-slide>\n      \n      <ion-slide>\n        <ion-row>\n          <ion-img src=\"../../assets/icons/sl2.svg\" class=\"icon-nav slide-img\"></ion-img>\n        </ion-row>\n      </ion-slide>\n      \n      <ion-slide>\n        <ion-row>\n          <ion-button expand=\"block\" routerLink=\"/login\" routerDirection=\"root\">Inicio de sesión</ion-button>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n</ion-content>\n\n "

/***/ }),

/***/ "./src/app/intro/intro.page.scss":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  background-color: #E83F4B;\n  background-position: center center;\n  background-size: cover;\n  height: 100% !important; }\n\n.slide-img {\n  width: 360px !important;\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcmhlcm5hbmRlenJvY2hhL1NpdGVzL0x1Y2t5LVBvY2tldC9zcmMvYXBwL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLHVCQUF1QjtFQUN4Qix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXN7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFODNGNEI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50OyBcbn1cblxuLnNsaWRlLWltZ3tcbiAgICB3aWR0aDogMzYwcHggIWltcG9ydGFudDtcbiAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/intro/intro.page.ts":
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroPage = /** @class */ (function () {
    function IntroPage() {
        this.slideOpts = {
            effect: 'flip'
        };
    }
    IntroPage.prototype.ngOnInit = function () {
    };
    IntroPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.page.html */ "./src/app/intro/intro.page.html"),
            styles: [__webpack_require__(/*! ./intro.page.scss */ "./src/app/intro/intro.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroPage);
    return IntroPage;
}());



/***/ })

}]);
//# sourceMappingURL=intro-intro-module.js.map