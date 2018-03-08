import * as standard_resistors from './data/standard_resistors';

export default class Analog {
  constructor() {
  }

  /**
   * Calculates the output voltage of a voltage divider
   * @param input_voltage - input voltage at R1
   * @param r1 - Top resistor in the divider
   * @param r2 - Bottom resistor in the divider. Holds the output voltage
   */
  voltage_divider(input_voltage: number, r1: number, r2: number) {
    let output_voltage = input_voltage * (r2 / (r2 + r1));
    return output_voltage;
  }

  find_best_vdiv(input_voltage: number, output_voltage: number, tolerance_code: string, maximum_output_impedance: number) {
    var r1 = 0;
    var r2 = 0;
    var calculated_ov = 0;
    let gain = output_voltage / input_voltage;
    // Calculate R1/R2 ratio
    var r1_r2_ratio = (1 - gain) / gain;
    // Search all resistors within the specified tolerance code
    standard_resistors.default.forEach(set => {

      if (set.tolerance == tolerance_code) {
        // Maximize R2 impedance
        set.resistances.forEach(resistance => {
          if (resistance <= maximum_output_impedance) {
            r2 = resistance;
          }
        });
        // Maximize accuracy
        set.resistances.forEach(resistance => {
          let current_ratio = resistance / r2;
          if (current_ratio <= r1_r2_ratio) {
            r1 = resistance;
          }
        });

      }
      calculated_ov = input_voltage * (r2 / (r1 + r2));
    });


    // Only use resistances for R2 that are less than the max output impedance
    // Find resistors closest to (but not greater than) the calculated ratio above

    return {
      r1: r1,
      r2: r2,
      output_voltage: calculated_ov
    };
  }

  calc_led_res(input_voltage: number, forward_voltage: number, current: number, tolerance_code: string) {
    let v_r_max = input_voltage - forward_voltage;
    let ideal_r = v_r_max / current;
    var resistor = 0;

    standard_resistors.default.forEach(set => {
      if (set.tolerance == tolerance_code) {
        // Maximize R2 impedance
        for(var resistance of set.resistances) {
          if (resistance >= ideal_r) {
            resistor = resistance;
            break;
          }
        }
      }
    });
    let final_current = v_r_max / resistor;
    return {
      resistor: resistor,
      current: final_current
    };
  }
}