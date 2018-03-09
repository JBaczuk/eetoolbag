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

const get_vdiv_questions = [
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
    message : 'Enter tolerance code. Acceptable codes: E12 (10%), E24 (5%), E96 (1%), E192 (0.5%) ...'
  },
  {
    type : 'input',
    name : 'max_output_impedance',
    message : 'Enter maximum output impedance ...'
  }
];

const led_res_questions = [
  {
    type: 'input',
    name: 'input_voltage',
    message: 'Enter input voltage ...'
  },
  {
    type: 'input',
    name: 'forward_voltage',
    message: 'Enter led forward voltage ...'
  },
  {
    type: 'input',
    name: 'current',
    message: 'Enter desired continuous current ...'
  },
  {
    type : 'input',
    name : 'tolerance_code',
    message : 'Enter tolerance code. Acceptable codes: E12 (10%), E24 (5%), E96 (1%), E192 (0.5%) ...'
  }
]

const nia_res_questions = [
  {
    type: 'input',
    name: 'gain',
    message: 'Enter desired gain ...'
  },
  {
    type : 'input',
    name : 'tolerance_code',
    message : 'Enter tolerance code. Acceptable codes: E12 (10%), E24 (5%), E96 (1%), E192 (0.5%) ...'
  }
]

program
  .command('getvdiv')
  .alias('gv')
  .description('Find best voltage divider')
  .action(() => {
    prompt(get_vdiv_questions).then(answers => {
      let analog = new Analog();
      let result = analog.find_best_vdiv(answers.input_voltage, answers.output_voltage, answers.tolerance_code, answers.max_output_impedance);
      console.log('r1 (connected to input voltage) (Ohm): ' + result.r1);
      console.log('r2 (connected to ground) (Ohm): ' + result.r2);
      console.log('output voltage (V): ' + result.output_voltage);
    })
  });

program
  .command('ledres')
  .alias('lr')
  .description('Calculate current-limiting resistor for LED')
  .action(() => {
    prompt(led_res_questions).then(answers => {
      let analog = new Analog();
      let result = analog.calc_led_res(answers.input_voltage, answers.forward_voltage, answers.current, answers.tolerance_code);
      console.log('Resistor (Ohm): ' + result.resistor);
      console.log('Current (A): ' + result.current);
    })
  })

program
  .command('non_inv_amp')
  .alias('nia')
  .description('Calculate op amp resistors for non-inverting amplifier')
  .action(() => {
    prompt(nia_res_questions).then(answers => {
      let analog = new Analog();
      let result = analog.calc_nia_res(answers.gain, answers.tolerance_code);
      console.log('r1 (connected to ref voltage) (Ohm): ' + result.r1);
      console.log('rf (feedback resistor) (Ohm): ' + result.rf);
      console.log('Gain (Vo/Vi): ' + result.gain);
    })
  })

program.parse(process.argv);