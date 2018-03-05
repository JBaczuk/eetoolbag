#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var analog_1 = require("./analog");
program
    .version('0.0.1')
    .description('Electrical Engineering Toolkit\n\
    Some Ascii\
    ');
program
    .command('getvdiv <input_voltage> <output_voltage> <tolerance_code> <max_output_impedance>')
    .alias('gv')
    .description('Find best voltage divider')
    .action(function (input_voltage, output_voltage, tolerance_code, max_output_impedance) {
    var analog = new analog_1.default();
    var result = analog.find_best_vdiv(input_voltage, output_voltage, tolerance_code, max_output_impedance);
    console.log('r1: ' + result.r1);
    console.log('r2: ' + result.r2);
});
program.parse(process.argv);
