import Bowman from '../js/Bowman';

describe('Bowerman class tests', () => {
  test('should create a Bowerman character', () => {
    const bowman = new Bowman('John');
    const correct = {
      name: 'John',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };

    expect(bowman).toEqual(correct);
  });
});
