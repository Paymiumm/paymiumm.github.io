webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".well {\n  background: #ffffff;\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n}\n\nlegend {\n  color: #ffffff;\n}\n\nlabel {\n  font-size: 20pt;\n  color: #fff;\n  font-weight: 200;\n}\n\n::ng-deep .intro {\n  font-size: 4rem;\n  color: #fff;\n  font-weight: 200;\n}\n\n::ng-deep .padded.top {\n  padding-top: 50px;\n}\n\n::ng-deep .preview {\n\n  display: block;\n  height: 100vh;\n  margin-top: 0px;\n  background: linear-gradient(0deg, rgba(25, 72, 111, 1), #42576A);\n  overflow-y: hidden;\n}\n\n::ng-deep img {\n  position: relative;\n  max-width: 100%;\n  max-height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<app-conversation></app-conversation>\n<app-tracking></app-tracking>\n<app-freedom></app-freedom>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__freedom_freedom_component__ = __webpack_require__("../../../../../src/app/about/freedom/freedom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conversation_conversation_component__ = __webpack_require__("../../../../../src/app/about/conversation/conversation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tracking_tracking_component__ = __webpack_require__("../../../../../src/app/about/tracking/tracking.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_3__freedom_freedom_component__["a" /* FreedomComponent */], __WEBPACK_IMPORTED_MODULE_4__conversation_conversation_component__["a" /* ConversationComponent */], __WEBPACK_IMPORTED_MODULE_5__tracking_tracking_component__["a" /* TrackingComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */]]
    })
], AboutModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ "../../../../../src/app/about/conversation/conversation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/conversation/conversation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preview\">\n\n  <div class='container'>\n    <div class=\"row top padded\">\n    <div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5\">\n\n\n      <img src=\"assets/screenshot-1.jpeg\" alt=\"\" class=\"rounded float-left\">\n\n    </div>\n      <div class=\"col-xs-12 col-sm-7 col-md-7 col-lg-7\">\n        <div class=\"intro\">\n          With Paymiumm you can send money to other users using a chat system identical to that of a regular social network, making payments a breeze.\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/conversation/conversation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConversationComponent = (function () {
    function ConversationComponent() {
    }
    ConversationComponent.prototype.ngOnInit = function () {
    };
    return ConversationComponent;
}());
ConversationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-conversation',
        template: __webpack_require__("../../../../../src/app/about/conversation/conversation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/conversation/conversation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ConversationComponent);

//# sourceMappingURL=conversation.component.js.map

/***/ }),

/***/ "../../../../../src/app/about/freedom/freedom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/freedom/freedom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preview\">\n\n  <div class='container'>\n    <div class=\"row top padded\">\n    <div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5\">\n\n\n      <img src=\"assets/screenshot-1.jpeg\" alt=\"\" class=\"rounded float-left\">\n\n    </div>\n      <div class=\"col-xs-12 col-sm-7 col-md-7 col-lg-7\">\n        <div class=\"intro\">\n          How would you feel if you could send money seemlessly to anybody with them having to download or create account with paymiumm, using just transact-ID paymiumm users gets that extra freedom, how cool could that be.\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/freedom/freedom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreedomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FreedomComponent = (function () {
    function FreedomComponent() {
    }
    FreedomComponent.prototype.ngOnInit = function () {
    };
    return FreedomComponent;
}());
FreedomComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-freedom',
        template: __webpack_require__("../../../../../src/app/about/freedom/freedom.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/freedom/freedom.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FreedomComponent);

//# sourceMappingURL=freedom.component.js.map

/***/ }),

/***/ "../../../../../src/app/about/tracking/tracking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/tracking/tracking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preview\">\n\n  <div class='container'>\n    <div class=\"row top padded\">\n      <div class=\"col-xs-12 col-sm-7 col-md-7 col-lg-7\">\n        <div class=\"intro\">\n          Paymiumm  gives you that extra ability to easily and seemlessly track transactions using our messaging system to know when a payment was made and a sequential list of all transactions conducted between both parties.\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5\">\n\n\n        <img src=\"assets/screenshot-1.jpeg\" alt=\"\" class=\"rounded float-left\">\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/tracking/tracking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrackingComponent = (function () {
    function TrackingComponent() {
    }
    TrackingComponent.prototype.ngOnInit = function () {
    };
    return TrackingComponent;
}());
TrackingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tracking',
        template: __webpack_require__("../../../../../src/app/about/tracking/tracking.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/tracking/tracking.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TrackingComponent);

//# sourceMappingURL=tracking.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root_root_component__ = __webpack_require__("../../../../../src/app/root/root.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__root_root_component__["a" /* RootComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navigation-ext></app-navigation-ext>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_ext_navigation_ext_component__ = __webpack_require__("../../../../../src/app/navigation-ext/navigation-ext.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__root_root_component__ = __webpack_require__("../../../../../src/app/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_module__ = __webpack_require__("../../../../../src/app/about/about.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_5__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navigation_ext_navigation_ext_component__["a" /* NavigationExtComponent */],
            __WEBPACK_IMPORTED_MODULE_7__root_root_component__["a" /* RootComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__about_about_module__["a" /* AboutModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/navigation-ext/navigation-ext.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo {\n  border-radius: 30px;\n  height: 70px;\n}\n\nli a {\n  margin: 2rem;\n  font-size: 16pt;\n  font-weight: 100;\n  color: #ffffff;\n}\n\nli a:hover {\n  background: none;\n  text-shadow: 2px 2px #cccccc;\n  /*font-weight: 300;*/\n}\n\n.navbar {\n  background: #24292e;\n  border-radius: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation-ext/navigation-ext.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <div class='container '>\n\n    <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"https://avatars0.githubusercontent.com/u/32314434?v=4&s=200\" alt=\"\" class=\"logo\">\n    </a>\n    <ul class=\"nav navbar-nav\">\n     <li class=\"active\">\n      <a href=\"#\">Home</a>\n     </li>\n     <li>\n      <a href=\"#about\">About</a>\n     </li>\n    </ul>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/navigation-ext/navigation-ext.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationExtComponent = (function () {
    function NavigationExtComponent() {
    }
    NavigationExtComponent.prototype.ngOnInit = function () {
    };
    return NavigationExtComponent;
}());
NavigationExtComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navigation-ext',
        template: __webpack_require__("../../../../../src/app/navigation-ext/navigation-ext.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation-ext/navigation-ext.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavigationExtComponent);

//# sourceMappingURL=navigation-ext.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n       <a class=\"navbar-brand\" href=\"#\">Title</a>\n       <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n         <a href=\"#\">Home</a>\n        </li>\n        <li>\n         <a href=\"#\">Link</a>\n        </li>\n       </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/root/root.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/root/root.component.html":
/***/ (function(module, exports) {

module.exports = "<app-welcome></app-welcome>\n<app-about id=\"about\"></app-about>\n"

/***/ }),

/***/ "../../../../../src/app/root/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    return RootComponent;
}());
RootComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/root/root.component.html"),
        styles: [__webpack_require__("../../../../../src/app/root/root.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RootComponent);

//# sourceMappingURL=root.component.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".well {\n  background: #ffffff;\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n}\n\nlegend {\n  color: #ffffff;\n}\n\nlabel {\n  font-size: 20pt;\n  color: #fff;\n  font-weight: 200;\n}\n\n.intro {\n  font-size: 5rem;\n  color: #fff;\n  font-weight: 200;\n}\n\n.padded.top {\n  padding-top: 50px;\n}\n\n.welcome {\n  background: url(https://assets-cdn.github.com/images/modules/site/heroes/simple-codelines.svg), url(data:image/png;base64,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);\n  background-repeat: none, repeat;\n  background-size: cover, cover;\n  display: block;\n  height: calc(100vh - 90px);\n  margin-top: -20px;\n  overflow-y: hidden;\n}\nimg {\n  position: relative;\n  max-width: 100%;\n  max-height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome\">\n\n  <div class='container'>\n    <div class=\"row top padded\">\n      <div class=\"col-xs-12 col-sm-7 col-md-7 col-lg-7\">\n        <div class=\"intro\">\n          Send or receive money from anybody in seconds. It's never been easier.\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5\">\n\n        <div class=\"well well-lg\">\n          <form action=\"\" method=\"POST\" role=\"form\">\n            <legend>Sign up in seconds</legend>\n\n            <div class=\"form-group\">\n              <label for=\"fullname\">Full Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"fullname\" placeholder=\"John Doe\">\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"username\">Username</label>\n              <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Pick a Username\">\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"contact@domain.com\">\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"phone\">Phone Number</label>\n              <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"+234**********\">\n            </div>\n            <!--bro did you read my msg?/ not yet/ lemme see/1 m in posted on team viewer thats-->\n\n            <button type=\"submit\" class=\"btn btn-primary btn-lg\">Sign Up</button>\n          </form>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map