let movieHtml = document.querySelector(".movie");
let searchBtn = document.querySelector("#searchBtn");
let modalHTML = document.querySelector(".modal");
let genresSelector = document.querySelector("#genres-selector");
let minRating = document.querySelector("#min-rating");
let maxRating = document.querySelector("#max-rating");

const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";

const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";


let respData;
let inputValue = '';
let genre = '';
let minRat = 0;
let maxRat = 10;


async function getMovies(url) {
    const resp = await fetch(url, { headers: { "Content-Type": "application/json", "X-API-KEY": API_KEY, }, });
    respData = await resp.json();
    showMovies(respData, inputValue, genre, minRat, maxRat);
}



function showMovies(respData, keyword = '', genre = '', minRating = 0, maxRating = 10) {
    movieHtml.innerHTML = '';

    for (let i = 0; i < respData.films.length; i++) {

        let genresString = '';
        for (let g = 0; g < respData.films[i].genres.length; g++) {
            genresString += respData.films[i].genres[g].genre + ' ';
        }

        if (respData.films[i].nameRu.toLowerCase().includes(keyword.toLowerCase()) &&
            genresString.includes(genre) &&
            parseFloat(respData.films[i].rating) >= minRating &&
            parseFloat(respData.films[i].rating) <= maxRating) {

            movieHtml.innerHTML += `    
            <div class="movie__cover-inner" id=${respData.films[i].filmId}>
            <img src="${respData.films[i].posterUrlPreview}" class="movie__cover" alt="${respData.films[i].nameRu}" />
            <div class="movie__cover--darkened"></div>
        </div>
        <div class="movie__info">
            <div class="movie__title">${respData.films[i].nameRu}</div>
            <div class="movie__category" genres>${genresString}</div>
            <div class="movie__average movie__average--${getClassByRate(respData.films[i].rating)}">${respData.films[i].rating}</div>}
        </div>`;
        }
    }

    movieHtml.addEventListener('click', event => {
        if (event.target.classList.contains('movie__cover--darkened')) {
            let filmId = event.target.closest('.movie__cover-inner').id


            let modalHTML = document.querySelector(".modal");
            modalHTML.classList.add("modal--show");

            let movieData = respData.films.find(el => el.filmId == filmId);

            modalHTML.children['modal-country'].innerHTML = 'Страна: ' + movieData.countries.map(x => x.country).join(',');
            modalHTML.children['modal-rating'].innerHTML = 'Рейтинг: ' + movieData.rating;
            modalHTML.children['modal-genre'].innerHTML = 'Жанры: ' + movieData.genres.map(x => x.genre).join(',');
            modalHTML.children['modal-year'].innerHTML = 'Год: ' + movieData.year;
            modalHTML.children['modal-vote-count'].innerHTML = 'Количество проголосовавших: ' + movieData.ratingVoteCount;

            console.log(filmId);
        }
    })
}

getMovies(API_URL_POPULAR)

function getClassByRate(params) {
    if (params > 7) {
        return 'green';
    }
    if (params > 5 && params < 7) {
        return 'orange';
    } else {
        return 'red';
    }
}

searchBtn.addEventListener('click', event => {
    event.preventDefault();
    inputValue = document.getElementsByClassName("header__search")[0].value;
    showMovies(respData, inputValue, genre, minRat, maxRat);

})

genresSelector.addEventListener('click', event => {
    if (event.target.tagName == 'INPUT') {
        let genreId = event.target.id;

        switch (genreId) {
            case 'comedy':
                genre = 'комедия';
                break;
            case 'fantastic':
                genre = 'фантастика';
                break;
            case 'action':
                genre = 'боевик';
                break;
            case 'drama':
                genre = 'драма';
                break;
            default:
                genre = '';
                break;
        }

        showMovies(respData, inputValue, genre, minRat, maxRat);
    }
})

minRating.addEventListener('change', event => {
    debugger
    minRat = document.getElementById('min-rating').value;

    if (minRat == '')
        minRat = 0;

    if (minRat > maxRat)
        maxRating.value = minRat;

    showMovies(respData, inputValue, genre, minRat, maxRat);
})

maxRating.addEventListener('change', event => {
    maxRat = document.getElementById('max-rating').value;

    if (maxRat < minRat)
        minRating.value = maxRat;

    if (maxRat = '')
        maxRat = 10;
    showMovies(respData, inputValue, genre, minRat, maxRat);
})