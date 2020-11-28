const baseUrl = 'https://swapi.dev/api/';
const fetch = require('node-fetch');

export const getData = async () => {
  let response = await fetch(`${baseUrl}films/`);
  let data = await response.json();
  if (response.status === 200) {
    return data;
  } else {
    throw new Error('Something go wrong!');
  }
};

export const getMovieCount = async () => {
  let response = await getData();
  return response.count;
};
getMovieCount();

export const listMovies = async () => {
  let Film = [];
  let response = await getData();
  let films = await response.results;
  films.forEach((d) => {
    Film.push({
      name: d.title,
      director: d.director,
      release: d.release_date,
      episodeID: d.episode_id,
    });
  });
  return Film;
};
listMovies();

export const listMoviesSorted = async () => {
  let films = await listMovies();

  return films.sort((a, b) => {
    let filmA = a.name.toUpperCase();
    let filmB = b.name.toUpperCase();
    if (filmA < filmB) {
      return -1;
    }
    if (filmA > filmB) {
      return 1;
    }

    return 0;
  });
};
listMoviesSorted();

export const listEvenMoviesSorted = async () => {
  let films = await listMovies();
  let evenFilms = [];
  films.forEach((f) => {
    if (f.episodeID % 2 === 0) {
      evenFilms.push(f);
    }
  });
  evenFilms.sort((a, b) => {
    return a.episodeID - b.episodeID;
  });
  return evenFilms;
};
listEvenMoviesSorted();

export const getMovieInfo = async (id) => {
  let film = [];
  let response = await fetch(`${baseUrl}films/${id}/`);
  let data = await response.json();
  if (response.status === 200) {
    film.push({
      characters: data.characters,
      episodeID: data.episode_id,
      name: data.title,
    });
  } else {
    throw new Error('Something go wrong!');
  }
  return film;
};

getMovieInfo('1');

// Ejercicio 5.2 Reescribir la función  utilizando async y await

// function getCharacterName(url) {
//   // Necesario para los siguientes apartados.
//   url = url.replace('http://', 'https://');
//   return fetch(url)
//     .then((res) => res.json())
//     .then((character) => character.name);
// }
// getCharacterName('http://swapi.dev/api/people/1/');

export const getCharacterName = async (url) => {
  url = url.replace('http://', 'https://');
  let response = await fetch(url);
  let data = await response.json();
  if (response.status === 200) {
    return data.name;
  } else {
    throw new Error('Something go wrong!');
  }
};
getCharacterName('http://swapi.dev/api/people/1/');

export const getMovieCharacters = async (id) => {
  let filmData = await getMovieInfo(id);
  let name = filmData[0].name;
  let episodeID = filmData[0].episodeID;
  let characters = [];
  Promise.all(
    filmData[0].characters.map(async (u) => {
      let res = await getCharacterName(u);
      return characters.push(res);
    })
  );
  return { episodeID, name, characters };
};
getMovieCharacters('1');

export const getMovieCharactersAndHomeworlds = async (id) => {
  let filmData = await getMovieInfo(id);
  let urls = filmData[0].characters;
  let episodeID = filmData[0].episodeID;
  let name = filmData[0].name;
  let character = urls.map(async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    let worldsData = await fetch(data.homeworld);
    let world = await worldsData.json();
    let names = {
      name: data.name,
      homeworld: world.name,
    };
    return names;
  });
  let characters = [];
  Promise.all(character).then((responses) =>
    responses.forEach((response) => {
      return characters.push(response);
    })
  );

  return { episodeID, name, characters };
};
getMovieCharactersAndHomeworlds('1');

export const createMovie = async (id) => {
  const movie = await getMovieInfo(id);
  return new Movie(movie[0].name, movie[0].characters);
};

export class Movie {
  constructor(name, characters) {
    if (typeof name !== 'string') {
      throw new Error('name must be one strings');
    }
    this.name = name[0];
    this.characters = characters;
  }

  get getCharacters() {
    return (async () => {
      return Promise.all(
        this.characters.map(async (u) => {
          let res = await getCharacterName(u);
          return res;
        })
      );
    })();
  }

  get getHomeworlds() {
    return (async () => {
      return Promise.all(
        this.characters.map(async (url) => {
          let response = await fetch(url);
          let data = await response.json();
          let worldsData = await fetch(data.homeworld);
          let world = await worldsData.json();
          return world.name;
        })
      );
    })();
  }
  get getHomeworldsreverse() {
    let worlds = [];
    return (async () => {
      Promise.all(
        this.characters.map(async (url) => {
          let response = await fetch(url);
          let data = await response.json();
          let worldsData = await fetch(data.homeworld);
          let world = await worldsData.json();
          worlds.push(world.name);
          return worlds.sort((a, b) => {
            if (b.toUpperCase() < a.toUpperCase()) {
              return -1;
            }
            if (b.toUpperCase() > a.toUpperCase()) {
              return 1;
            }

            return 0;
          });
        })
      );
      return worlds;
    })();
  }
}

async function createMovie2(id) {
  const movie = await getMovieInfo(id);
  // Hacemos un condicional para saber si al respuesta da un código 200
  if (response.status === 200) {
    // si el estatus es 200 regresamos la promesa
    return movie;
  } else {
    // Si no es 200 lanzamos un error
    throw new Error('Something go wrong!');
  }
}
