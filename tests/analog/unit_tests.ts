import Analog from '../../src/analog';
import { expect } from 'chai';
import 'mocha';

describe('voltage_divider', () => {
  
  var analog: Analog;

  before(() => {
    analog = new Analog();
  });

  it('should return 0.5', () => {
    let result = analog.voltage_divider(1, 1, 1);
    expect(result).to.equal(0.5);
  });

  it('should return 1', () => {
    let result = analog.voltage_divider(2, 1, 1);
    expect(result).to.equal(1);
  });

  it('should return 1.2', () => {
    let result = analog.voltage_divider(3.6, 548000.0, 274000.0);
    expect(result).to.be.within(1.19, 1.21); 
  });
});

describe('find_best_vdiv', () => {
  
  var analog: Analog;

  before(() => {
    analog = new Analog();
  });

  it('r1 should return 10k, r2 100k', () => {
    let result: any = analog.find_best_vdiv(1.0, 0.5, "E12", 10000.0);
    expect(result.r1).to.equal(10000);
    expect(result.r2).to.equal(10000);
  });

  it('r1 should return 150k, r2 100k', () => {
    let result: any = analog.find_best_vdiv(3.0, 1.2, "E192", 100000.0);
    expect(result.r1).to.equal(150000);
    expect(result.r2).to.equal(100000);
  });

  it('r1 should return 162k, r2 49.9k', () => {
    let result: any = analog.find_best_vdiv(3.0, 0.7, "E192", 50000.0);
    expect(result.r1).to.equal(162000);
    expect(result.r2).to.equal(49900);
  });
});

describe('calc_led_res', () => {
  
  var analog: Analog;

  before(() => {
    analog = new Analog();
  });

  it('should return 30 ohm', () => {
    let result = analog.calc_led_res(2.5, 2.2, .01, 'E24');
    expect(result.resistor).to.equal(30);
    expect(result.current).to.be.closeTo(.01, .001);
  });

  it('should return ', () => {
    let result = analog.calc_led_res(3.0, 1.2, .02, 'E24');
    expect(result.resistor).to.equal(91);
    expect(result.current).to.be.closeTo(.01978, .00001);
  });
});

describe('calc_nia_res', () => {
  
  var analog: Analog;

  before(() => {
    analog = new Analog();
  });

  it('should return 470 ohm', () => {
    let result = analog.calc_nia_res(22.3, 'E12');
    expect(result.r1).to.equal(470);
    expect(result.gain).to.be.closeTo(22.3, .1);
  });

  it('should return 91 ohm', () => {
    let result = analog.calc_nia_res(34, 'E192');
    expect(result.r1).to.equal(305);
    expect(result.gain).to.be.closeTo(34, 1);
  });

  it('should return 109 ohm', () => {
    let result = analog.calc_nia_res(91, 'E192');
    expect(result.r1).to.equal(113);
    expect(result.gain).to.be.closeTo(91, 2);
  });
});