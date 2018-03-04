import Analog from '../../src/analog';
import { expect } from 'chai';
import 'mocha';

describe('voltage_divider', () => {
  it('should return 0.5', () => {
    let analog = new Analog();
    let result = analog.voltage_divider(1, 1, 1);
    expect(result).to.equal(0.5);
  });

  it('should return 1', () => {
    let analog = new Analog();
    let result = analog.voltage_divider(2, 1, 1);
    expect(result).to.equal(1);
  });

  it('should return 1.2', () => {
    let analog = new Analog();
    let result = analog.voltage_divider(3.6, 548000.0, 274000.0);
    expect(result).to.be.within(1.19, 1.21); 
  });
});

describe('find_best_vdiv', () => {
  it('r1 should return 10k, r2 100k', () => {
    let analog = new Analog();
    let result: any = analog.find_best_vdiv(1.0, 0.5, "E12", 10000.0);
    expect(result.r1).to.equal(10000);
    expect(result.r2).to.equal(10000);
  });

  it('r1 should return 150k, r2 100k', () => {
    let analog = new Analog();
    let result: any = analog.find_best_vdiv(3.0, 1.2, "E192", 100000.0);
    expect(result.r1).to.equal(150000);
    expect(result.r2).to.equal(100000);
  });

  it('r1 should return 162k, r2 49.9k', () => {
    let analog = new Analog();
    let result: any = analog.find_best_vdiv(3.0, 0.7, "E192", 50000.0);
    expect(result.r1).to.equal(162000);
    expect(result.r2).to.equal(49900);
  });
});