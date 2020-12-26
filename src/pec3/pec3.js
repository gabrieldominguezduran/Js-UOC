import * as pec2 from './pec2';
export async function setMovieHeading(movieId, titleSelector, infoSelector, directorSelector) {
  // TODO: Obtenemos los elementos del DOM con QuerySelector y los almacenamos en una variable;

  const movieTitle = document.querySelector(titleSelector);
  const movieInfo = document.querySelector(infoSelector);
  const movieDirector = document.querySelector(directorSelector);
  // TODO: Obtenemos la información de la película llamando al método de pec2.js
  const getMovie = await pec2.getMovieInfo(movieId);
  // TODO: Sustituimos los datos utilizando un método de reemplazo como innerHTML
  movieTitle.innerHTML = `${getMovie.name}`;
  movieInfo.innerHTML = `Episode ${getMovie.episodeID} - ${getMovie.release}`;
  movieDirector.innerHTML = `Director: ${getMovie.director}`;
}

export async function initMovieSelect(movieSelector) {
  const mainSelect = document.querySelector(movieSelector);
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.innerHTML = `Select a movie`;
  const listedMovies = await pec2.listMoviesSorted();
  mainSelect.append(defaultOption);
  listedMovies.map((m) => {
    let movieOptions = document.createElement('option');
    movieOptions.value = m.episodeID;
    movieOptions.innerHTML = m.name;
    mainSelect.append(movieOptions);
  });
}

export async function setMovieSelectCallbacks() {
  const movieSetted = document.querySelector('#select-movie');
  const homeWorldSelect = document.querySelector('#select-homeworld');
  const characterList = document.querySelector('.list__characters');

  const movieTitle = document.querySelector('.movie__title');
  const movieInfo = document.querySelector('.movie__info');
  const movieDirector = document.querySelector('.movie__director');

  movieSetted.addEventListener('change', async () => {
    homeWorldSelect.innerHTML = '';
    const setIds = {
      1: 4,
      2: 5,
      3: 6,
      4: 1,
      5: 2,
      6: 3,
    };
    const getMovieHeading = await pec2.getMovieInfo(setIds[movieSetted.value]);

    movieTitle.innerHTML = getMovieHeading.name ? `${getMovieHeading.name}` : '';
    movieInfo.innerHTML = getMovieHeading.episodeID
      ? `Episode ${getMovieHeading.episodeID} - ${getMovieHeading.release}`
      : '';
    movieDirector.innerHTML = getMovieHeading.director
      ? `Director: ${getMovieHeading.director}`
      : '';

    const listedWorlds = setIds[movieSetted.value]
      ? await pec2.getMovieCharactersAndHomeworlds(setIds[movieSetted.value])
      : '';

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.innerHTML = `Select a homeworld`;
    homeWorldSelect.append(defaultOption);

    const homeworlds = (listedWorlds.characters || []).map((c) => c.homeworld);
    const uniqueSet = new Set(homeworlds);
    const uniqueArray = Array.from(uniqueSet);

    uniqueArray.sort().map((world, index) => {
      let worldOptions = document.createElement('option');
      worldOptions.value = index + 1;
      worldOptions.innerHTML = world;
      homeWorldSelect.append(worldOptions);
    });

    characterList.innerHTML = '';
  });
}

export async function addChangeEventToSelectHomeworld() {
  const characterList = document.querySelector('.list__characters');
  const homeWorldSelect = document.querySelector('#select-homeworld');

  homeWorldSelect.addEventListener('change', async () => {
    characterList.innerHTML = '';
  });
}
