"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var standard_resistors = require("./src/data/standard_resistors");
standard_resistors.default.forEach(function (set) {
    if (set.tolerance == 'E12') {
        console.log(set);
    }
});
