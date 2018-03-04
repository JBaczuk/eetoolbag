import * as standard_resistors from './src/data/standard_resistors';

standard_resistors.default.forEach(set => {
  if(set.tolerance == 'E12') {
    console.log(set);
  }
});