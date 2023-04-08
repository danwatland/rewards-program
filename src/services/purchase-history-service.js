import Chance from 'chance';
const chance = new Chance();

const fetchPurchaseHistory = async (fromDate, toDate) => {
  const createFakePurchase = () => ({
    amount: chance.integer({ min: 5, max: 150 }),
    date: chance.date({ min: fromDate, max: toDate }),
    item: chance.pickone(['Bananas', 'Beans', 'Beer', 'Board Games', 'Badminton Set', 'Books', 'Baseball', 'Binoculars', 'Beef Jerky', 'Bicycle'])
  });

  return new Promise((resolve) => {
    const data = chance.n(createFakePurchase, chance.d6() + 10);

    setTimeout(() => {
      resolve(data);
    }, 2 * 1000);
  });
};

export { fetchPurchaseHistory }
