import { calculateRewardPoints } from '../../src/services/reward-point-calculator.js';

describe('Reward point calculator', () => {
  it('should not reward any points for purchases under $50', () => {
    const result = calculateRewardPoints({ amount: 49 });

    expect(result).toEqual(0);
  });

  it('should reward one point for each dollar spent between $50 and $100', () => {
    const result = calculateRewardPoints({ amount: 75 });

    expect(result).toEqual(25);
  });

  it('should also reward two points for any additional dollars spent over $100', () => {
    const result = calculateRewardPoints({ amount: 102 });

    expect(result).toEqual(54);
  });
});