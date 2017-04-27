/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DateWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ListWrapper; });
/* unused harmony export NumberWrapper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringWrapper; });
/* unused harmony export Adherent */
/* unused harmony export Email */
/* unused harmony export ProperNoun */
/* unused harmony export Adresse */
/* unused harmony export CodePostal */
/* unused harmony export TelephoneEntry */
/* unused harmony export Telephone */
/* unused harmony export Adhesion */
/* unused harmony export Periode */
/* unused harmony export AdhesionMembre */
/* harmony export (immutable) */ __webpack_exports__["d"] = validateAdherent;
/* unused harmony export validateEmail */
/* unused harmony export validateProperNoun */
/* unused harmony export validateAdresse */
/* unused harmony export validateCodePostal */
/* unused harmony export validateTelephoneEntry */
/* unused harmony export validateTelephone */
/* unused harmony export validateAdhesion */
/* unused harmony export validatePeriode */
/* unused harmony export validateAdhesionMembre */
var DateWrapper = (function () {
    function DateWrapper(inner) {
        this.inner = inner;
    }
    Object.defineProperty(DateWrapper.prototype, "timestamp", {
        get: function () {
            return new NumberWrapper(this.inner.getTime());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateWrapper.prototype, "day", {
        get: function () {
            return new NumberWrapper(this.inner.getDate());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateWrapper.prototype, "month", {
        get: function () {
            return new NumberWrapper(this.inner.getMonth());
        },
        enumerable: true,
        configurable: true
    });
    DateWrapper.prototype.toDate = function () {
        return this.inner;
    };
    DateWrapper.prototype.equals = function (date) {
        return this.timestamp.equals(date.timestamp);
    };
    DateWrapper.prototype.notEquals = function (date) {
        return this.timestamp.notEquals(date.timestamp);
    };
    DateWrapper.prototype.upper = function (date) {
        return this.timestamp.upper(date.timestamp);
    };
    DateWrapper.prototype.lower = function (date) {
        return this.timestamp.lower(date.timestamp);
    };
    DateWrapper.prototype.upperOrEquals = function (date) {
        return this.timestamp.upperOrEquals(date.timestamp);
    };
    DateWrapper.prototype.lowerOrEquals = function (date) {
        return this.timestamp.lowerOrEquals(date.timestamp);
    };
    return DateWrapper;
}());

var ListWrapper = (function () {
    function ListWrapper(inner) {
        var _this = this;
        this.inner = inner;
        var _loop_1 = function (i) {
            Object.defineProperty(this_1, i.toString(), { get: function () { return _this.inner[i]; }, set: function (v) { return _this.inner[i] = v; } });
        };
        var this_1 = this;
        for (var i = 0; i < inner.length; i++) {
            _loop_1(i);
        }
    }
    ListWrapper.prototype.nonEmpty = function () {
        return this.inner && this.inner.length > 0;
    };
    ListWrapper.prototype.isEmpty = function () {
        return !this.nonEmpty();
    };
    Object.defineProperty(ListWrapper.prototype, "head", {
        get: function () {
            return this.inner ? this.inner[0] : null;
        },
        enumerable: true,
        configurable: true
    });
    ListWrapper.prototype.randomElement = function () {
        // Not really random, it is for the example currently.
        return this.inner ? this.inner[0] : null;
    };
    ListWrapper.prototype.forall = function (f) {
        return this.inner.every(f);
    };
    ListWrapper.prototype.exists = function (f) {
        return this.inner.some(f);
    };
    ListWrapper.prototype.foldLeft = function (startValue, f) {
        var acc = startValue;
        for (var i = 0; i < this.inner.length; i++) {
            acc = f(acc, this.inner[i]);
        }
        return acc;
    };
    ListWrapper.prototype.map = function (f) {
        return new ListWrapper(this.inner.map(f));
    };
    return ListWrapper;
}());

var NumberWrapper = (function () {
    function NumberWrapper(inner) {
        this.inner = inner;
    }
    NumberWrapper.prototype.toNumber = function () {
        return this.inner;
    };
    NumberWrapper.prototype.minus = function (numberWrapper) {
        return new NumberWrapper(this.inner - numberWrapper.inner);
    };
    NumberWrapper.prototype.plus = function (numberWrapper) {
        return new NumberWrapper(this.inner + numberWrapper.inner);
    };
    NumberWrapper.prototype.time = function (numberWrapper) {
        return new NumberWrapper(this.inner * numberWrapper.inner);
    };
    NumberWrapper.prototype.divide = function (numberWrapper) {
        return new NumberWrapper(this.inner / numberWrapper.inner);
    };
    NumberWrapper.prototype.modulo = function (numberWrapper) {
        return new NumberWrapper(this.inner % numberWrapper.inner);
    };
    NumberWrapper.prototype.equals = function (numberWrapper) {
        return this.inner === numberWrapper.inner;
    };
    NumberWrapper.prototype.notEquals = function (numberWrapper) {
        return this.inner !== numberWrapper.inner;
    };
    NumberWrapper.prototype.upper = function (numberWrapper) {
        return this.inner > numberWrapper.inner;
    };
    NumberWrapper.prototype.lower = function (numberWrapper) {
        return this.inner < numberWrapper.inner;
    };
    NumberWrapper.prototype.upperOrEquals = function (numberWrapper) {
        return this.inner >= numberWrapper.inner;
    };
    NumberWrapper.prototype.lowerOrEquals = function (numberWrapper) {
        return this.inner <= numberWrapper.inner;
    };
    return NumberWrapper;
}());

var StringWrapper = (function () {
    function StringWrapper(inner) {
        this.inner = inner || "";
    }
    StringWrapper.prototype.toString = function () {
        return this.inner;
    };
    StringWrapper.prototype.nonEmpty = function () {
        return this.inner.length > 0;
    };
    StringWrapper.prototype.trim = function () {
        return new StringWrapper(this.inner.trim());
    };
    StringWrapper.prototype.startsWith = function (prefix) {
        return this.inner.substr(0, prefix.inner.length) === prefix.inner;
    };
    StringWrapper.prototype.matches = function (regex) {
        return new RegExp(regex.inner).test(this.inner);
    };
    StringWrapper.prototype.contains = function (search) {
        return this.inner.indexOf(search.inner) >= 0;
    };
    return StringWrapper;
}());

function verify(message, condition) {
    if (condition()) {
        return null;
    }
    else {
        return message;
    }
}
function Adherent(email, nom, prenom, adresse, telephones, adhesions) {
    var value = { email: email, nom: nom, prenom: prenom, adresse: adresse, telephones: telephones, adhesions: adhesions };
    var errorsOnValidation = validateBuiltAdherent(value);
    if (errorsOnValidation) {
        return errorsOnValidation;
    }
    else {
        return Object.freeze(value);
    }
}
function validateBuiltAdherent(__value) {
    var __errorOpt = null;
    var __verifications = [];
    for (var __i = 0; __i < __verifications.length; __i++) {
        if (__verifications[__i] !== null) {
            __errorOpt = __verifications[__i];
        }
    }
    if (__errorOpt) {
        return __errorOpt;
    }
    else {
        return null;
    }
}
function Email(content) {
    var value = { content: content };
    var errorsOnValidation = validateBuiltEmail(value);
    if (errorsOnValidation) {
        return errorsOnValidation;
    }
    else {
        return Object.freeze(value);
    }
}
function validateBuiltEmail(__value) {
    var email = __value;
    var __errorOpt = null;
    var __verifications = [
        verify("The format of the email address is invalid", function () {
            return ((email).content).contains(new StringWrapper("@"));
        })
    ];
    for (var __i = 0; __i < __verifications.length; __i++) {
        if (__verifications[__i] !== null) {
            __errorOpt = __verifications[__i];
        }
    }
    if (__errorOpt) {
        return __errorOpt;
    }
    else {
        return null;
    }
}
function ProperNoun(content) {
    var value = { content: content };
    var errorsOnValidation = validateBuiltProperNoun(value);
    if (errorsOnValidation) {
        return errorsOnValidation;
    }
    else {
        return Object.freeze(value);
    }
}
function validateBuiltProperNoun(__value) {
    var properNoun = __value;
    var __errorOpt = null;
    var __verifications = [
        verify("The proper noun must be defined", function () {
            return ((properNoun).content).nonEmpty();
        })
    ];
    for (var __i = 0; __i < __verifications.length; __i++) {
        if (__verifications[__i] !== null) {
            __errorOpt = __verifications[__i];
        }
    }
    if (__errorOpt) {
        return __errorOpt;
    }
    else {
        return null;
    }
}
function Adresse(voie, codePostal, ville) {
    var value = { voie: voie, codePostal: codePostal, ville: ville };
    var errorsOnValidation = validateBuiltAdresse(value);
    if (errorsOnValidation) {
        return errorsOnValidation;
    }
    else {
        return Object.freeze(value);
    }
}
function validateBuiltAdresse(__value) {
    var adresse = __value;
    var __errorOpt = null;
    var __verifications = [
        verify("The voie should not be empty", function () {
            return ((adresse).voie).nonEmpty();
        }),
        verify("The ville should not be empty", function () {
            return ((adresse).ville).nonEmpty();
        })
    ];
    for (var __i = 0; __i < __verifications.length; __i++) {
        if (__verifications[__i] !== null) {
            __errorOpt = __verifications[__i];
        }
    }
    if (__errorOpt) {
        return __errorOpt;
    }
    else {
        return null;
    }
}
function CodePostal(content) {
    var value = { content: content };
    var errorsOnValidation = validateBuiltCodePostal(value);
    if (errorsOnValidation) {
        return errorsOnValidation;
    }
    else {
        return Object.freeze(value);
    }
}
function validateBuiltCodePostal(__value) {
    var codePostal = __value;
    var __errorOpt = null;
    var __verifications = [
        verify("The code postal must be 5 digits long", function () {
            return ((codePostal).content).matches(new StringWrapper("^[0-9]{5}$"));
        })
    ];
    for (var __i = 0; __i < __verifications.length; __i++) {
        if (__verifications[__i] !== null) {
            __errorOpt = __verifications[__i];
        }
    }
    if (__errorOpt) {
        return __errorOpt;
    }
    else {
        return null;
    }
}
function TelephoneEntry(nom, telephone) {
    var value = { nom: nom, telephone: telephone };
    var errorsOnValidation = validateBuiltTelephoneEntry(value);
    if (errorsOnValidation) {
        return errorsOnValidation;
    }
    else {
        return Object.freeze(value);
    }
}
function validateBuiltTelephoneEntry(__value) {
    var __errorOpt = null;
    var __verifications = [];
    for (var __i = 0; __i < __verifications.length; __i++) {
        if (__verifications[__i] !== null) {
            __errorOpt = __verifications[__i];
        }
    }
    if (__errorOpt) {
        return __errorOpt;
    }
    else {
        return null;
    }
}
function Telephone(content) {
    var value = { content: content };
    var errorsOnValidation = validateBuiltTelephone(value);
    if (errorsOnValidation) {
        return errorsOnValidation;
    }
    else {
        return Object.freeze(value);
    }
}
function validateBuiltTelephone(__value) {
    var telephone = __value;
    var __errorOpt = null;
    var __verifications = [
        verify("The telephone is invalid", function () {
            return ((((telephone).content).trim()).nonEmpty()) && ((((telephone).content).trim()).matches(new StringWrapper("^([0-9]{10}|\\\\+33[0-9]{9})$")));
        })
    ];
    for (var __i = 0; __i < __verifications.length; __i++) {
        if (__verifications[__i] !== null) {
            __errorOpt = __verifications[__i];
        }
    }
    if (__errorOpt) {
        return __errorOpt;
    }
    else {
        return null;
    }
}
function Adhesion(periode, membres) {
    var value = { periode: periode, membres: membres };
    var errorsOnValidation = validateBuiltAdhesion(value);
    if (errorsOnValidation) {
        return errorsOnValidation;
    }
    else {
        return Object.freeze(value);
    }
}
function validateBuiltAdhesion(__value) {
    var __errorOpt = null;
    var __verifications = [];
    for (var __i = 0; __i < __verifications.length; __i++) {
        if (__verifications[__i] !== null) {
            __errorOpt = __verifications[__i];
        }
    }
    if (__errorOpt) {
        return __errorOpt;
    }
    else {
        return null;
    }
}
function Periode(start, end) {
    var value = { start: start, end: end };
    var errorsOnValidation = validateBuiltPeriode(value);
    if (errorsOnValidation) {
        return errorsOnValidation;
    }
    else {
        return Object.freeze(value);
    }
}
function validateBuiltPeriode(__value) {
    var periode = __value;
    var __errorOpt = null;
    var __verifications = [
        verify("end should be after start", function () {
            return (((periode).end).upper((periode).start)) || (((periode).end).equals((periode).start));
        })
    ];
    for (var __i = 0; __i < __verifications.length; __i++) {
        if (__verifications[__i] !== null) {
            __errorOpt = __verifications[__i];
        }
    }
    if (__errorOpt) {
        return __errorOpt;
    }
    else {
        return null;
    }
}
function AdhesionMembre(nom, prenom, naissance, activite) {
    var value = { nom: nom, prenom: prenom, naissance: naissance, activite: activite };
    var errorsOnValidation = validateBuiltAdhesionMembre(value);
    if (errorsOnValidation) {
        return errorsOnValidation;
    }
    else {
        return Object.freeze(value);
    }
}
function validateBuiltAdhesionMembre(__value) {
    var adhesionMembre = __value;
    var __errorOpt = null;
    var __verifications = [
        verify("activite should not be empty", function () {
            return ((adhesionMembre).activite).nonEmpty();
        })
    ];
    for (var __i = 0; __i < __verifications.length; __i++) {
        if (__verifications[__i] !== null) {
            __errorOpt = __verifications[__i];
        }
    }
    if (__errorOpt) {
        return __errorOpt;
    }
    else {
        return null;
    }
}
function validateList(list, validation) {
    var validations = list.map(validation);
    if (validations.exists(function (element) { return element !== null; })) {
        return validations;
    }
    else {
        return null;
    }
}
function validateAdherent(value) {
    var result = {
        email: validateEmail(value.email), nom: validateProperNoun(value.nom), prenom: validateProperNoun(value.prenom), adresse: validateAdresse(value.adresse), telephones: validateList(value.telephones, validateTelephoneEntry), adhesions: validateList(value.adhesions, validateAdhesion)
    };
    var hasError = false;
    for (var key in result) {
        if (result.hasOwnProperty(key) && result[key] !== null) {
            hasError = true;
            break;
        }
    }
    if (hasError) {
        return result;
    }
    else {
        var errorOnValidation = validateBuiltAdherent(value);
        if (errorOnValidation) {
            return errorOnValidation;
        }
        else {
            return null;
        }
    }
}
function validateEmail(value) {
    var result = {
        content: null
    };
    var hasError = false;
    for (var key in result) {
        if (result.hasOwnProperty(key) && result[key] !== null) {
            hasError = true;
            break;
        }
    }
    if (hasError) {
        return result;
    }
    else {
        var errorOnValidation = validateBuiltEmail(value);
        if (errorOnValidation) {
            return errorOnValidation;
        }
        else {
            return null;
        }
    }
}
function validateProperNoun(value) {
    var result = {
        content: null
    };
    var hasError = false;
    for (var key in result) {
        if (result.hasOwnProperty(key) && result[key] !== null) {
            hasError = true;
            break;
        }
    }
    if (hasError) {
        return result;
    }
    else {
        var errorOnValidation = validateBuiltProperNoun(value);
        if (errorOnValidation) {
            return errorOnValidation;
        }
        else {
            return null;
        }
    }
}
function validateAdresse(value) {
    var result = {
        voie: null, codePostal: validateCodePostal(value.codePostal), ville: null
    };
    var hasError = false;
    for (var key in result) {
        if (result.hasOwnProperty(key) && result[key] !== null) {
            hasError = true;
            break;
        }
    }
    if (hasError) {
        return result;
    }
    else {
        var errorOnValidation = validateBuiltAdresse(value);
        if (errorOnValidation) {
            return errorOnValidation;
        }
        else {
            return null;
        }
    }
}
function validateCodePostal(value) {
    var result = {
        content: null
    };
    var hasError = false;
    for (var key in result) {
        if (result.hasOwnProperty(key) && result[key] !== null) {
            hasError = true;
            break;
        }
    }
    if (hasError) {
        return result;
    }
    else {
        var errorOnValidation = validateBuiltCodePostal(value);
        if (errorOnValidation) {
            return errorOnValidation;
        }
        else {
            return null;
        }
    }
}
function validateTelephoneEntry(value) {
    var result = {
        nom: null, telephone: validateTelephone(value.telephone)
    };
    var hasError = false;
    for (var key in result) {
        if (result.hasOwnProperty(key) && result[key] !== null) {
            hasError = true;
            break;
        }
    }
    if (hasError) {
        return result;
    }
    else {
        var errorOnValidation = validateBuiltTelephoneEntry(value);
        if (errorOnValidation) {
            return errorOnValidation;
        }
        else {
            return null;
        }
    }
}
function validateTelephone(value) {
    var result = {
        content: null
    };
    var hasError = false;
    for (var key in result) {
        if (result.hasOwnProperty(key) && result[key] !== null) {
            hasError = true;
            break;
        }
    }
    if (hasError) {
        return result;
    }
    else {
        var errorOnValidation = validateBuiltTelephone(value);
        if (errorOnValidation) {
            return errorOnValidation;
        }
        else {
            return null;
        }
    }
}
function validateAdhesion(value) {
    var result = {
        periode: validatePeriode(value.periode), membres: validateList(value.membres, validateAdhesionMembre)
    };
    var hasError = false;
    for (var key in result) {
        if (result.hasOwnProperty(key) && result[key] !== null) {
            hasError = true;
            break;
        }
    }
    if (hasError) {
        return result;
    }
    else {
        var errorOnValidation = validateBuiltAdhesion(value);
        if (errorOnValidation) {
            return errorOnValidation;
        }
        else {
            return null;
        }
    }
}
function validatePeriode(value) {
    var result = {
        start: null, end: null
    };
    var hasError = false;
    for (var key in result) {
        if (result.hasOwnProperty(key) && result[key] !== null) {
            hasError = true;
            break;
        }
    }
    if (hasError) {
        return result;
    }
    else {
        var errorOnValidation = validateBuiltPeriode(value);
        if (errorOnValidation) {
            return errorOnValidation;
        }
        else {
            return null;
        }
    }
}
function validateAdhesionMembre(value) {
    var result = {
        nom: validateProperNoun(value.nom), prenom: validateProperNoun(value.prenom), naissance: null, activite: null
    };
    var hasError = false;
    for (var key in result) {
        if (result.hasOwnProperty(key) && result[key] !== null) {
            hasError = true;
            break;
        }
    }
    if (hasError) {
        return result;
    }
    else {
        var errorOnValidation = validateBuiltAdhesionMembre(value);
        if (errorOnValidation) {
            return errorOnValidation;
        }
        else {
            return null;
        }
    }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__result__ = __webpack_require__(0);

// ===== Start Model =====
var model = {
    email: { content: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */]("") },
    nom: { content: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */]("") },
    prenom: { content: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */]("") },
    adresse: {
        voie: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */](""),
        codePostal: { content: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */]("") },
        ville: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */]("")
    },
    telephones: new __WEBPACK_IMPORTED_MODULE_0__result__["b" /* ListWrapper */]([
        {
            nom: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */](""),
            telephone: { content: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */]("") }
        },
        {
            nom: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */](""),
            telephone: { content: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */]("") }
        }
    ]),
    adhesions: new __WEBPACK_IMPORTED_MODULE_0__result__["b" /* ListWrapper */]([
        {
            periode: { start: new __WEBPACK_IMPORTED_MODULE_0__result__["c" /* DateWrapper */](new Date()), end: new __WEBPACK_IMPORTED_MODULE_0__result__["c" /* DateWrapper */](new Date()) },
            membres: new __WEBPACK_IMPORTED_MODULE_0__result__["b" /* ListWrapper */]([
                {
                    nom: { content: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */]("") },
                    prenom: { content: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */]("") },
                    naissance: null,
                    activite: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */]("")
                },
                {
                    nom: { content: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */]("") },
                    prenom: { content: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */]("") },
                    naissance: null,
                    activite: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */]("")
                }
            ])
        },
        {
            periode: { start: new __WEBPACK_IMPORTED_MODULE_0__result__["c" /* DateWrapper */](new Date()), end: new __WEBPACK_IMPORTED_MODULE_0__result__["c" /* DateWrapper */](new Date()) },
            membres: new __WEBPACK_IMPORTED_MODULE_0__result__["b" /* ListWrapper */]([])
        }
    ])
};
// ===== Update model =====
Array.from(document.querySelectorAll("input")).forEach(function (input) {
    input.addEventListener("input", function () {
        var name = input.getAttribute("name");
        var value = input.value;
        switch (input.getAttribute("data-type")) {
            case "stringWrapper":
                updateDeep(name, model, { content: new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */](value) });
                break;
            case "string":
                updateDeep(name, model, new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */](value));
                break;
            case "date":
                updateDeep(name, model, new __WEBPACK_IMPORTED_MODULE_0__result__["c" /* DateWrapper */](new Date(value)));
                break;
            default:
        }
        reload();
    });
});
function replaceNatives(_, value) {
    if (value instanceof __WEBPACK_IMPORTED_MODULE_0__result__["a" /* StringWrapper */]) {
        return value["inner"];
    }
    else if (value instanceof __WEBPACK_IMPORTED_MODULE_0__result__["b" /* ListWrapper */]) {
        return value["inner"];
    }
    else if (value instanceof __WEBPACK_IMPORTED_MODULE_0__result__["c" /* DateWrapper */]) {
        return value["inner"].toISOString();
    }
    else {
        return value;
    }
}
function updateDeep(attribute, object, value) {
    var parts = attribute.split(".");
    var parent = object;
    for (var i = 0; i < parts.length - 1; i++) {
        if (parent) {
            parent = parent[parts[i]];
        }
    }
    if (parent) {
        parent[parts[parts.length - 1]] = value;
    }
}
// ===== Reload =====
function reload() {
    var $input = document.querySelector("#input-json");
    var $output = document.querySelector("#form-result");
    var validations = formValidation(model);
    $input.textContent = JSON.stringify(model, replaceNatives, " ");
    $output.textContent = JSON.stringify(validations, null, " ");
    $input.classList.remove("prettyprinted");
    $output.classList.remove("prettyprinted");
    PR.prettyPrint();
}
reload();
// ===== Form validation =====
function formValidation(input) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__result__["d" /* validateAdherent */])(input);
}


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map