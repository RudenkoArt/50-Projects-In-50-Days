const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e6abf207b5e87600ed276538f332b3f9&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=e6abf207b5e87600ed276538f332b3f9&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);

  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const {
      title,
      poster_path: posterPath,
      vote_average: voteAverage,
      overview,
    } = movie;

    const movieEl = document.createElement('div');

    movieEl.classList.add('movie');

    movieEl.innerHTML = `
    <img
    src="${IMG_PATH + posterPath}"
    alt="${title}" />
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(voteAverage)}">${voteAverage}</span>
    </div>
    <div class="overview">
        <h3>Overview</h3>
        ${overview}
    </div>
  `;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) return 'green';
  else if (vote >= 5) return 'orange';
  else return 'red';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  console.log(searchTerm);

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});
