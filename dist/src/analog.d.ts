export default class Analog {
    constructor();
    /**
     * Calculates the output voltage of a voltage divider
     * @param input_voltage - input voltage at R1
     * @param r1 - Top resistor in the divider
     * @param r2 - Bottom resistor in the divider. Holds the output voltage
     */
    voltage_divider(input_voltage: number, r1: number, r2: number): number;
    find_best_vdiv(input_voltage: number, output_voltage: number, tolerance_code: string, maximum_output_impedance: number): void;
}
