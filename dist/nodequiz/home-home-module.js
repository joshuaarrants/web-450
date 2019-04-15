(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>home works!</span>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.routing */ "./src/app/home/home.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _quiz_selection_quiz_selection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quiz-selection/quiz-selection.component */ "./src/app/home/quiz-selection/quiz-selection.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/home/quiz/quiz.component.ts");
/* harmony import */ var _presentations_presentations_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./presentations/presentations.component */ "./src/app/home/presentations/presentations.component.ts");













var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _quiz_selection_quiz_selection_component__WEBPACK_IMPORTED_MODULE_10__["QuizSelectionComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_11__["QuizComponent"], _presentations_presentations_component__WEBPACK_IMPORTED_MODULE_12__["PresentationsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollDispatchModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_home_routing__WEBPACK_IMPORTED_MODULE_5__["HomeRoutes"])
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home.routing.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.routing.ts ***!
  \**************************************/
/*! exports provided: HomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/home/quiz/quiz.component.ts");
/* harmony import */ var _quiz_selection_quiz_selection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz-selection/quiz-selection.component */ "./src/app/home/quiz-selection/quiz-selection.component.ts");
/* harmony import */ var _presentations_presentations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presentations/presentations.component */ "./src/app/home/presentations/presentations.component.ts");




var HomeRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
            },
            {
                path: 'quizzes',
                component: _quiz_selection_quiz_selection_component__WEBPACK_IMPORTED_MODULE_2__["QuizSelectionComponent"]
            },
            {
                path: 'quiz/:id',
                component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_1__["QuizComponent"]
            },
            {
                path: 'presentations',
                component: _presentations_presentations_component__WEBPACK_IMPORTED_MODULE_3__["PresentationsComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/home/presentations/presentations.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/presentations/presentations.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    width: 50%;\r\n    margin: 10px; \r\n}\r\n\r\nvideo {\r\n    width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcmVzZW50YXRpb25zL3ByZXNlbnRhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcmVzZW50YXRpb25zL3ByZXNlbnRhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHg7IFxyXG59XHJcblxyXG52aWRlbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/presentations/presentations.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/presentations/presentations.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n  <mat-card class=\"mat-elevation-z8\" *ngFor=\"let quiz of quizzes\">\r\n    <mat-card-header>\r\n      <mat-card-title>{{quiz.title}}</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <video controls reload=\"none\">\r\n        <source src=\"../../../assets/presentations/{{quiz.title}}.mp4\" />\r\n      </video>\r\n    </mat-card-content>\r\n    <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n      <button mat-raised-button color=\"primary\" routerLink=\"/home/quiz/{{quiz._id}}\">Take Test</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n\r\n  <mat-card-actions fxLayout=\"row\" fxFlexFill fxLayoutAlign=\"end center\">\r\n      <button mat-raised-button color=\"warn\" (click)=\"close()\">Close</button>\r\n  </mat-card-actions>\r\n</div>"

/***/ }),

/***/ "./src/app/home/presentations/presentations.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/presentations/presentations.component.ts ***!
  \***************************************************************/
/*! exports provided: PresentationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationsComponent", function() { return PresentationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PresentationsComponent = /** @class */ (function () {
    function PresentationsComponent(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.http.get('/api/quizzes').subscribe(function (data) {
            _this.quizzes = data;
            console.log(_this.quizzes);
        }, function (err) {
            console.log(err);
        });
    }
    PresentationsComponent.prototype.close = function () {
        this.router.navigate(['/home/quizzes']);
    };
    PresentationsComponent.prototype.ngOnInit = function () {
    };
    PresentationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-presentations',
            template: __webpack_require__(/*! ./presentations.component.html */ "./src/app/home/presentations/presentations.component.html"),
            styles: [__webpack_require__(/*! ./presentations.component.css */ "./src/app/home/presentations/presentations.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PresentationsComponent);
    return PresentationsComponent;
}());



/***/ }),

/***/ "./src/app/home/quiz-selection/quiz-selection.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home/quiz-selection/quiz-selection.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\r\nwidth: 75%;\r\nheight: 75vh;\r\npadding: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9xdWl6LXNlbGVjdGlvbi9xdWl6LXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsVUFBVTtBQUNWLFlBQVk7QUFDWixZQUFZO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9ob21lL3F1aXotc2VsZWN0aW9uL3F1aXotc2VsZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxud2lkdGg6IDc1JTtcclxuaGVpZ2h0OiA3NXZoO1xyXG5wYWRkaW5nOiAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/quiz-selection/quiz-selection.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/quiz-selection/quiz-selection.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n  <div fxFlex></div>\n  <mat-card class=\"mat-elevation-z8\">\n    <mat-toolbar color=\"primary\">\n      <h1>Quizzes</h1>\n    </mat-toolbar>\n    <mat-card-content>\n      <mat-list>\n        <mat-list-item fxLayout=\"column\" *ngFor=\"let quiz of quizzes\" >\t\n            {{quiz.title}}\n          <div fxFlex></div>\n          <mat-action-list fxLayout=\"row\" fxLayoutGap=\"2%\">\n            <button mat-raised-button color=\"primary\" (click)=\"goPresentations()\">View Presentations</button>\n            <button mat-raised-button color=\"primary\" routerLink=\"/home/quiz/{{quiz._id}}\">Take Test</button>\n          </mat-action-list>\n        </mat-list-item>\n      </mat-list>\n    </mat-card-content>\n  </mat-card>\n  <div fxFlex></div>\n</div>"

/***/ }),

/***/ "./src/app/home/quiz-selection/quiz-selection.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/quiz-selection/quiz-selection.component.ts ***!
  \*****************************************************************/
/*! exports provided: QuizSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizSelectionComponent", function() { return QuizSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var QuizSelectionComponent = /** @class */ (function () {
    function QuizSelectionComponent(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.http.get('/api/quizzes').subscribe(function (data) {
            _this.quizzes = data;
            console.log(_this.quizzes);
        }, function (err) {
            console.log(err);
        });
    }
    QuizSelectionComponent.prototype.goPresentations = function () {
        this.router.navigate(['/home/presentations']);
    };
    QuizSelectionComponent.prototype.ngOnInit = function () {
    };
    QuizSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz-selection',
            template: __webpack_require__(/*! ./quiz-selection.component.html */ "./src/app/home/quiz-selection/quiz-selection.component.html"),
            styles: [__webpack_require__(/*! ./quiz-selection.component.css */ "./src/app/home/quiz-selection/quiz-selection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuizSelectionComponent);
    return QuizSelectionComponent;
}());



/***/ }),

/***/ "./src/app/home/quiz/quiz.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/quiz/quiz.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  padding: 0;\r\n}\r\n\r\nmat-card-content {\r\n margin: 15px;\r\n}\r\n\r\nmat-radio-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 15px 0;\r\n  }\r\n\r\nmat-radio-button {\r\n    margin: 5px;\r\n  }\r\n\r\nmat-card-actions {\r\n  text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9xdWl6L3F1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjs7QUFFRjtJQUNJLFdBQVc7RUFDYjs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbm1hdC1yYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gIH1cclxuICBcclxubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcblxyXG5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/quiz/quiz.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/quiz/quiz.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\r\n    <div fxFlex></div>\r\n    <mat-card class=\"mat-elevation-z8\">\r\n        <mat-toolbar color=\"primary\">\r\n            <h1>{{quiz.title}}</h1>\r\n        </mat-toolbar>\r\n        <form (ngSubmit)=\"saveQuiz()\" [formGroup]=\"form\" #saveQuizForm>\r\n            <mat-card-content *ngFor=\"let question of quiz.questions\">\r\n                <label>{{question.question}}</label>\r\n                <mat-radio-group [formControl]=\"form.controls['selectedAnswers']\">\r\n                    <mat-radio-button *ngFor=\"let answer of question.answers\" [value]=\"answer\">{{answer.answer}}\r\n                    </mat-radio-button>\r\n                </mat-radio-group>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n                <button mat-raised-button color=\"primary\" routerLink=\"/home/quizzes/\">Cancel</button>\r\n                <button mat-raised-button color=\"primary\" type=\"submit\">Submit Quiz</button>\r\n            </mat-card-actions>\r\n        </form>\r\n    </mat-card>\r\n    <div fxFlex></div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/quiz/quiz.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/quiz/quiz.component.ts ***!
  \*********************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var QuizComponent = /** @class */ (function () {
    function QuizComponent(router, route, http, fb) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.http = http;
        this.fb = fb;
        this.quizId = this.route.snapshot.paramMap.get('id');
        this.http.get('/api/quizzes/' + this.quizId).subscribe(function (data) {
            _this.quiz = data;
            console.log(_this.quiz);
        }, function (err) {
            console.log(err);
        });
    }
    QuizComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            selectedAnswers: ''
        });
    };
    QuizComponent.prototype.saveQuiz = function () {
        var _this = this;
        var selectedAnswers = this.form.controls['selectedAnswers'].value;
        this.http.post('/api/quizResult', {
            quizId: this.quizId
        }).subscribe(function (res) {
            _this.router.navigate(['/']);
        }, function (err) {
            console.log(err);
        });
    };
    QuizComponent.prototype.close = function () {
        this.router.navigate(['/home/quizzes']);
    };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/home/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/home/quiz/quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map