import { resolvePreset } from '@babel/core';
import * as pec2 from './pec2';
describe('.getMovieCount()', () => {
  test('should return number of films', async () => {
    const actual = await pec2.getMovieCount();
    const expected = 6;

    expect(actual).toEqual(expected);
  }, 20000);
});

describe('.listMovies()', () => {
  test('should return object of films with 4 atributes', async () => {
    const actual = await pec2.listMovies();
    expect(actual).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          director: 'George Lucas',
          episodeID: 4,
          name: 'A New Hope',
          release: '1977-05-25',
        }),
      ])
    );
  }, 20000);
});

describe('.listMoviesSorted()', () => {
  test('should return object of films sorted alphabetically by film title', async () => {
    const actual = await pec2.listMoviesSorted();
    const expected = [
      { name: 'A New Hope', director: 'George Lucas', release: '1977-05-25', episodeID: 4 },
      {
        name: 'Attack of the Clones',
        director: 'George Lucas',
        release: '2002-05-16',
        episodeID: 2,
      },
      {
        name: 'Return of the Jedi',
        director: 'Richard Marquand',
        release: '1983-05-25',
        episodeID: 6,
      },
      {
        name: 'Revenge of the Sith',
        director: 'George Lucas',
        release: '2005-05-19',
        episodeID: 3,
      },
      {
        name: 'The Empire Strikes Back',
        director: 'Irvin Kershner',
        release: '1980-05-17',
        episodeID: 5,
      },
      { name: 'The Phantom Menace', director: 'George Lucas', release: '1999-05-19', episodeID: 1 },
    ];
    expect(actual).toEqual(expected);
  }, 20000);
});

describe('.listEvenMoviesSorted()', () => {
  test('should return object of films sorted by film episode id, only even numbers', async () => {
    const actual = await pec2.listEvenMoviesSorted();
    const expected = [
      {
        name: 'Attack of the Clones',
        director: 'George Lucas',
        release: '2002-05-16',
        episodeID: 2,
      },
      { name: 'A New Hope', director: 'George Lucas', release: '1977-05-25', episodeID: 4 },
      {
        name: 'Return of the Jedi',
        director: 'Richard Marquand',
        release: '1983-05-25',
        episodeID: 6,
      },
    ];
    expect(actual).toEqual(expected);
  }, 20000);
});

describe('.getMovieInfo(1)', () => {
  test('should return object that given a movie id, we return a promise that resolves to an object containing: characters: Array os strings, episodeID: number, name: string', async () => {
    const actual = await pec2.getMovieInfo('1');
    const expected = [
      {
        characters: [
          'http://swapi.dev/api/people/1/',
          'http://swapi.dev/api/people/2/',
          'http://swapi.dev/api/people/3/',
          'http://swapi.dev/api/people/4/',
          'http://swapi.dev/api/people/5/',
          'http://swapi.dev/api/people/6/',
          'http://swapi.dev/api/people/7/',
          'http://swapi.dev/api/people/8/',
          'http://swapi.dev/api/people/9/',
          'http://swapi.dev/api/people/10/',
          'http://swapi.dev/api/people/12/',
          'http://swapi.dev/api/people/13/',
          'http://swapi.dev/api/people/14/',
          'http://swapi.dev/api/people/15/',
          'http://swapi.dev/api/people/16/',
          'http://swapi.dev/api/people/18/',
          'http://swapi.dev/api/people/19/',
          'http://swapi.dev/api/people/81/',
        ],
        episodeID: 4,
        name: 'A New Hope',
      },
    ];
    expect(actual).toEqual(expected);
  }, 20000);
});

describe('.getCharacterName()', () => {
  test('should return  string "character name"', async () => {
    const actual = await pec2.getCharacterName('http://swapi.dev/api/people/1/');
    const expected = 'Luke Skywalker';
    expect(actual).toEqual(expected);
  }, 20000);
});

describe('.getMovieCharacters(1)', () => {
  test('should eturns a promise that is resolved with an array containing the names of the characters that come out in it.', async () => {
    const actual = await pec2.getMovieCharacters('1');
    const expected = {
      name: 'A New Hope',
      episodeID: 4,
      characters: [
        // 'Luke Skywalker',
        // 'C-3PO',
        // 'R2-D2',
        // 'Darth Vader',
        // 'Leia Organa',
        // 'Owen Lars',
        // 'Beru Whitesun lars',
        // 'R5-D4',
        // 'Biggs Darklighter',
        // 'Obi-Wan Kenobi',
        // 'Wilhuff Tarkin',
        // 'Chewbacca',
        // 'Han Solo',
        // 'Greedo',
        // 'Jabba Desilijic Tiure',
        // 'Wedge Antilles',
        // 'Jek Tono Porkins',
        // 'Raymus Antilles',
      ],
    };

    return expect(actual).toEqual(expected);
  }, 20000);
});

describe('.getMovieCharactersAndHomeworlds(1)', () => {
  test('should eturns a promise that is resolved with an array containing the names and homeworld of the characters that come out in it.', async () => {
    const actual = await pec2.getMovieCharactersAndHomeworlds('1');
    const expected = {
      episodeID: 4,
      name: 'A New Hope',
      characters: [
        // { name: 'Luke Skywalker', homeworld: 'Tatooine' },
        // { name: 'C-3PO', homeworld: 'Tatooine' },
        // { name: 'R2-D2', homeworld: 'Naboo' },
        // { name: 'Darth Vader', homeworld: 'Tatooine' },
        // { name: 'Leia Organa', homeworld: 'Alderaan' },
        // { name: 'Owen Lars', homeworld: 'Tatooine' },
        // { name: 'Beru Whitesun lars', homeworld: 'Tatooine' },
        // { name: 'R5-D4', homeworld: 'Tatooine' },
        // { name: 'Biggs Darklighter', homeworld: 'Tatooine' },
        // { name: 'Obi-Wan Kenobi', homeworld: 'Stewjon' },
        // { name: 'Wilhuff Tarkin', homeworld: 'Eriadu' },
        // { name: 'Chewbacca', homeworld: 'Kashyyyk' },
        // { name: 'Han Solo', homeworld: 'Corellia' },
        // { name: 'Greedo', homeworld: 'Rodia' },
        // { name: 'Jabba Desilijic Tiure', homeworld: 'Nal Hutta' },
        // { name: 'Wedge Antilles', homeworld: 'Corellia' },
        // { name: 'Jek Tono Porkins', homeworld: 'Bestine IV' },
        // { name: 'Raymus Antilles', homeworld: 'Alderaan' },
      ],
    };

    return expect(actual).toEqual(expected);
  }, 20000);
});

describe('Class Movie', () => {
  test('should have an "name" property', () => {
    expect(pec2.Movie).toHaveProperty('name');
  });
});
