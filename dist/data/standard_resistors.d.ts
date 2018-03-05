export declare class ResistorSet {
    tolerance: string;
    resistances: number[];
    constructor(tolerance: string, resistances: number[]);
    populate_resistor_values(values: number[]): number[];
}
declare const _default: ResistorSet[];
export default _default;
