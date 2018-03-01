"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var standard_resistors = require("./data/standard_resistors");
function populate_resistor_values(values) {
    var final_array = [];
    var multipliers = [1, 10, 100, 1000, 10000];
    multipliers.forEach(function (multiplier) {
        values.forEach(function (value) {
            final_array.push(value * multiplier);
        });
    });
    return final_array;
}
standard_resistors.default.forEach(function (set) {
    console.log(set);
});
