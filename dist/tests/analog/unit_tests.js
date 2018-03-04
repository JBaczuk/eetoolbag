"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analog_1 = require("../../src/analog");
var chai_1 = require("chai");
require("mocha");
describe('voltage_divider', function () {
    it('should return 0.5', function () {
        var analog = new analog_1.default();
        var result = analog.voltage_divider(1, 1, 1);
        chai_1.expect(result).to.equal(0.5);
    });
    it('should return 1', function () {
        var analog = new analog_1.default();
        var result = analog.voltage_divider(2, 1, 1);
        chai_1.expect(result).to.equal(1);
    });
    it('should return 1.2', function () {
        var analog = new analog_1.default();
        var result = analog.voltage_divider(3.6, 548000.0, 274000.0);
        chai_1.expect(result).to.be.within(1.19, 1.21);
    });
});
describe('find_best_vdiv', function () {
    it('r1 should return 10k', function () {
        var analog = new analog_1.default();
        var result = analog.find_best_vdiv(1.0, 0.5, "E12", 10000.0);
        chai_1.expect(result.r1).to.equal(10000);
    });
    it('r2 should return 10k', function () {
        var analog = new analog_1.default();
        var result = analog.find_best_vdiv(1.0, 0.5, "E12", 10000.0);
        chai_1.expect(result.r2).to.equal(10000);
    });
});
