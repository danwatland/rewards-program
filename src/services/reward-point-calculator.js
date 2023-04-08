const calculateRewardPoints = (purchase) => {
  let rewards = 0;
  let { amount } = purchase;

  if (amount <= 50) {
    return 0;
  }

  rewards += Math.min(amount - 50, 50);
  rewards += Math.max((amount - 100) * 2, 0);

  return rewards;
};

export { calculateRewardPoints }