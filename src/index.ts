import * as standard_resistors from './data/standard_resistors';

function populate_resistor_values(values: number[]): number[] {
  var final_array: number[] = [];
  let multipliers = [1, 10, 100, 1000, 10000];

  multipliers.forEach(multiplier => {
    values.forEach(value => {
      final_array.push(value * multiplier);
    })
  })
  return final_array;
}

standard_resistors.default.forEach(set => {
  console.log(set);
});