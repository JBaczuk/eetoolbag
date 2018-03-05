#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var analog_1 = require("./analog");
var inquirer_1 = require("inquirer");
program
    .version('0.0.1')
    .description('Electrical Engineering Toolkit\n\
    Some Ascii\
    ');
// // Version with args
// program
//   .command('getvdiv <input_voltage> <output_voltage> <tolerance_code> <max_output_impedance>')
//   .alias('gv')
//   .description('Find best voltage divider')
//   .action((input_voltage, output_voltage, tolerance_code, max_output_impedance) => {
//     let analog = new Analog();
//     let result = analog.find_best_vdiv(input_voltage, output_voltage, tolerance_code, max_output_impedance);
//     console.log('r1: ' + result.r1);
//     console.log('r2: ' + result.r2);
//   });
var getvdiv_questions = [
    {
        type: 'input',
        name: 'input_voltage',
        message: 'Enter input voltage ...'
    },
    {
        type: 'input',
        name: 'output_voltage',
        message: 'Enter output voltage ...'
    },
    {
        type: 'input',
        name: 'tolerance_code',
        message: 'Enter tolerance code (Acceptable codes: E12, E24, E96, E192) ...'
    },
    {
        type: 'input',
        name: 'max_output_impedance',
        message: 'Enter maximum output impedance ...'
    }
];
program
    .command('getvdiv')
    .alias('gv')
    .description('Find best voltage divider')
    .action(function () {
    inquirer_1.prompt(getvdiv_questions).then(function (answers) {
        var analog = new analog_1.default();
        var result = analog.find_best_vdiv(answers.input_voltage, answers.output_voltage, answers.tolerance_code, answers.max_output_impedance);
        console.log('r1 (connected to input voltage): ' + result.r1);
        console.log('r2 (connected to ground): ' + result.r2);
        console.log('output voltage: ' + result.output_voltage);
    });
});
program.parse(process.argv);
