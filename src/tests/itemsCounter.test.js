import itemsCounter from '../modules/itemsCounter.js';

const testObj = [
  {
    id: '1',
    name: 'First object',
    like: '45',
  },
  {
    id: '2',
    name: 'second object',
    like: '100',
  },
];

describe('Test Case to check items count', () => {
  it('Envoke itemsCounter Function with a data object', () => {
    const itemsCount = itemsCounter(testObj);

    expect(itemsCount).toEqual(2);
  });
});