#!/usr/bin/env node

import * as standard_resistors from './data/standard_resistors';
import * as program from 'commander';
import Analog from './analog';
import { prompt } from 'inquirer';

program
  .version('0.0.1')
  .description(
    'Electrical Engineering Toolkit\n\
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

const getvdiv_questions = [
  {
    type : 'input',
    name : 'input_voltage',
    message : 'Enter input voltage ...'
  },
  {
    type : 'input',
    name : 'output_voltage',
    message : 'Enter output voltage ...'
  },
  {
    type : 'input',
    name : 'tolerance_code',
    message : 'Enter tolerance code (Acceptable codes: E12, E24, E96, E192) ...'
  },
  {
    type : 'input',
    name : 'max_output_impedance',
    message : 'Enter maximum output impedance ...'
  }
];

program
  .command('getvdiv')
  .alias('gv')
  .description('Find best voltage divider')
  .action(() => {
    prompt(getvdiv_questions).then(answers => {
      let analog = new Analog();
      let result = analog.find_best_vdiv(answers.input_voltage, answers.output_voltage, answers.tolerance_code, answers.max_output_impedance);
      console.log('r1: ' + result.r1);
      console.log('r2: ' + result.r2);
      console.log('output voltage: ' + result.output_voltage);
    })
  });

program.parse(process.argv);