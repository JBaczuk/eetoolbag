"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var standard_resistors = require("./data/standard_resistors");
var Analog = /** @class */ (function () {
    function Analog() {
    }
    /**
     * Calculates the output voltage of a voltage divider
     * @param input_voltage - input voltage at R1
     * @param r1 - Top resistor in the divider
     * @param r2 - Bottom resistor in the divider. Holds the output voltage
     */
    Analog.prototype.voltage_divider = function (input_voltage, r1, r2) {
        var output_voltage = input_voltage * (r2 / (r2 + r1));
        console.log(output_voltage);
        return output_voltage;
    };
    Analog.prototype.find_best_vdiv = function (input_voltage, output_voltage, tolerance_code, maximum_output_impedance) {
        var gain = output_voltage / input_voltage;
        // Calculate R1/R2 ratio
        var r1_r2_ratio = (1 - gain) / gain;
        // Search all resistors within the specified tolerance code
        standard_resistors.default.forEach(function (set) {
            if (set.tolerance == tolerance_code) {
                var possible;
                set.resistances.forEach(function (resistance) {
                });
            }
            else {
                throw new Error('Invalid tolerance code.  Acceptable codes: E12, E24, E96, E192');
            }
        });
        // Only use resistances for R2 that are less than the max output impedance
        // Find resistors closest to (but not greater than) the calculated ratio above
        // Maximize accuracy, then resistance
    };
    return Analog;
}());
exports.default = Analog;
