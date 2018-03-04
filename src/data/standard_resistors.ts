export class ResistorSet {
  tolerance: string;
  resistances: number[];
  constructor(tolerance: string, resistances: number[]) {
    this.tolerance = tolerance;
    this.resistances = this.populate_resistor_values(resistances);
  }

  populate_resistor_values(values: number[]): number[] {
    var final_array: number[] = [];
    let multipliers = [1, 10, 100, 1000, 10000];
  
    multipliers.forEach(multiplier => {
      values.forEach(value => {
        final_array.push(value * multiplier);
      })
    })
    return final_array;
  }
}

// TODO: pull this data from online distributor API because more resistances are actually supported.
export default [
  new ResistorSet("E12", [10,12,15,18,22,27,33,39,47,56,68,82]),
  new ResistorSet("E24", [10,11,12,13,15,16,18,20,22,24,27,30,33,36,39,43,47,51,56,62,68,75,82,91]),
  new ResistorSet("E96", [10,10.2,10.5,10.7,11,11.3,11.5,11.8,12.1,12.4,12.7,13,13.3,13.7,14,14.3,14.7,15,15.4,15.8,16.2,16.5,16.9,17.4,17.8,18.2,18.7,19.1,19.6,20,20.5,21,21.5,22.1,22.6,23.2,23.7,24.3,24.9,25.5,26.1,26.7,27.4,28,28.7,29.4,30.1,30.9,31.6,32.4,33.2,34,34.8,35.7,36.5,37.4,38.3,39.2,40.2,41.2,42.2,43.2,44.2,45.3,46.4,47.5,48.7,49.9,51.1,52.3,53.6,54.9,56.2,57.6,59,60.4,61.9,63.4,64.9,66.5,68.1,69.8,71.5,73.2,75,76.8,78.7,80.6,82.5,84.5,86.6,88.7,90.9,93.1,95.3,97.6]),
  new ResistorSet("E192", [10,10.1,10.2,10.4,10.5,10.6,10.7,10.9,11,11.1,11.3,11.4,11.5,11.7,11.8,12,12.1,12.3,12.4,12.6,12.7,12.9,13,13.2,13.3,13.5,13.7,13.8,14,14.2,14.3,14.5,14.7,14.9,15,15.2,15.4,15.6,15.8,16,16.2,16.4,16.5,16.7,16.9,17.2,17.4,17.6,17.8,18,18.2,18.4,18.7,18.9,19.1,19.3,19.6,19.8,20,20.3,20.5,20.8,21,21.3,21.5,21.8,22.1,22.3,22.6,22.9,23.2,23.4,23.7,24,24.3,24.6,24.9,25.2,25.5,25.8,26.1,26.4,26.7,27.1,27.4,27.7,28,28.4,28.7,29.1,29.4,29.8,30.1,30.5,30.9,31.2,31.6,32,32.4,32.8,33.2,33.6,34,34.4,34.8,35.2,35.7,36.1,36.5,37,37.4,37.9,38.3,38.8,39.2,39.7,40.2,40.7,41.2,41.7,42.2,42.7,43.2,43.7,44.2,44.8,45.3,45.9,46.4,47,47.5,48.1,48.7,49.3,49.9,50.5,51.1,51.7,52.3,53,53.6,54.2,54.9,55.6,56.2,56.9,57.6,58.3,59,59.7,60.4,61.2,61.9,62.6,63.4,64.2,64.9,65.7,66.5,67.3,68.1,69,69.8,70.6,71.5,72.3,73.2,74.1,75,75.9,76.8,77.7,78.7,79.6,80.6,81.6,82.5,83.5,84.5,85.6,86.6,87.6,88.7,89.8,90.9,92,93.1,94.2,95.3,96.5,97.6,98.8])
];
