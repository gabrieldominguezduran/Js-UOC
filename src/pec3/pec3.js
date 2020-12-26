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
    let options = document.createElement('option');
    options.value = m.episodeID;
    options.innerHTML = m.name;
    mainSelect.append(options);
  });
}
