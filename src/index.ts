import * as standard_resistors from './data/standard_resistors';

standard_resistors.default.forEach(set => {
  if(set.tolerance == 'E12') {
    console.log(set);
  }
});