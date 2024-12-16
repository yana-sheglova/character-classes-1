import Swordsman from '../js/Swordsman';

describe('Swordsman class tests', () => {
  test('should create a Swordsman character', () => {
    const swordsman = new Swordsman('John');
    const correct = {
      name: 'John',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };

    expect(swordsman).toEqual(correct);
  });
});
