import Character from '../js/Character';
import Bowman from '../js/Bowman';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Daemon from '../js/Daemon';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';

describe('Character class tests', () => {
  test('should create a valid character', () => {
    const character = new Character('Ben', 'Bowman');
    expect(character.name).toBe('Ben');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('should throw an error if name is invalid', () => {
    expect(() => new Character('A', 'Bowman')).toThrow(Error);
    expect(() => new Character('', 'Bowman')).toThrow(Error);
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow(Error);
  });

  test('should throw an error if type is invalid', () => {
    expect(() => new Character('Ben', 'Zombee')).toThrow(Error);
  });
});

describe('Bowerman class tests', () => {
  test('should create a Bowerman character', () => {
    const bowman = new Bowman('John');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });
});

describe('Swordsman class tests', () => {
  test('should create a Swordsman character', () => {
    const bowman = new Swordsman('John');
    expect(bowman.type).toBe('Swordsman');
    expect(bowman.attack).toBe(40);
    expect(bowman.defence).toBe(10);
  });
});

describe('Magician class tests', () => {
  test('should create a Magician character', () => {
    const bowman = new Magician('John');
    expect(bowman.type).toBe('Magician');
    expect(bowman.attack).toBe(10);
    expect(bowman.defence).toBe(40);
  });
});

describe('Daemon class tests', () => {
  test('should create a Daemon character', () => {
    const bowman = new Daemon('John');
    expect(bowman.type).toBe('Daemon');
    expect(bowman.attack).toBe(10);
    expect(bowman.defence).toBe(40);
  });
});

describe('Undead class tests', () => {
  test('should create a Undead character', () => {
    const bowman = new Undead('John');
    expect(bowman.type).toBe('Undead');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });
});

describe('Zombie class tests', () => {
  test('should create a Zombie character', () => {
    const bowman = new Zombie('John');
    expect(bowman.type).toBe('Zombie');
    expect(bowman.attack).toBe(40);
    expect(bowman.defence).toBe(10);
  });
});
