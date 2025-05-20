//Global variables
const global = {
    currentPage: window.location.pathname,
    search: {
        term: '',
        type: '', 
        page: 1, 
        totalPages: 1,
        totalResults: 0,
    }, 
    api: {
        apiKey: 'YOUR-API-KEY', 
        apiUrl: 'https://api.themoviedb.org/3/',
    },
};

//Function to go back to previous page
window.goBack = function() {
    window.history.back();
}

//Format movie budget to currency
function toCurrency(num)
{
    const formattedNumber = num.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        });
    
        return formattedNumber;
}


//== Functions to check if API object is not empty================/
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

//Function to check if API object is not empty
function checkObject(obj) {
    if(isEmpty(obj) && obj < 1)
    {
        return 'No Data';
    }else{
        return `${obj} min`;
    }
}

/*===DISPLAY DIFFERENT MOVIE LIST ON INDEX PAGE ==========================================
==========================================================================================*/

async function popularMovies() {
    try {
        const { results } = await fetchApiData('movie/popular');
        createMovieHtml(results, '#popular-movies');
    } catch (error)  {  
        console.error('Error fetching popular movies:', error);
        // Handle the error, maybe display an error message to the user
    }
}

//DISPLAY THE TOP RATED MOVIES ON INDEX PAGE==================/
async function topRatedMovies() {
    try {
        //Fetch data from API
        const { results } = await fetchApiData('movie/top_rated');
        createMovieHtml(results, '#top-rated-movies');
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
        // Handle the error, maybe display an error message to the user
    }
}

//DISPLAY THE UPCOMING MOVIES ON INDEX PAGE==================/
async function upcomingMovies() {
    try {
        //Fetch data from API
        const { results } = await fetchApiData('movie/upcoming');
        createMovieHtml(results, '#upcoming-movies');
    } catch (error) {
        console.error('Error fetching upcoming movies:', error);
        // Handle the error, maybe display an error message to the user
    }
}

//===========================================================================================/

//CREATE THE HTML FOR EACH MOVIE===============================
function createMovieHtml(results, elementId) {

    //Create a new instance of SwiperJS
    results.forEach((result) => {
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
            <a href=movie-details.php?id=${result.id}">
                <img src="https://image.tmdb.org/t/p/w500${result.poster_path}"" alt="${result.title}"/>
            </a>
            `;

            document.querySelector(elementId).appendChild(div);

            //Initialize SwiperJS
            initSwiper();
    })
}

//=======================================================================================


// DISPLAY THE DETAILS OF A MOVIE ON CLICK
async function movieDetails() {

    //get the id of the movie from the url
    const movieId = window.location.search.split('=')[1];
    const movie = await fetchApiData(`movie/${movieId}`);
    const div = document.createElement('div');

    displayBackgroundImage('movie', movie.backdrop_path);

    div.innerHTML = `
    <div class="details-top">
          <div>
             ${
                movie.poster_path
                ? ` <img
                  src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                  class="card-img-top"
                  alt="${movie.name}"
                />`
                :  `<img
                src="images/no-image.jpg"
                class="card-img-top"
                alt="${movie.name}"
              />`
            }
          </div>
          <div>
            <h2>${movie.title}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${movie.vote_average.toFixed(1)} / 10
            </p>
            <p class="text-muted">Released: ${movie.release_date}</p>
            <p>
              ${movie.overview}
            </p>
            <h5 class="sec-color">Genres:</h5>
            <ul class="list-group">
              ${movie.genres.map((title) => `<li>${title.name}</li>` ).join('')}
            </ul>
                ${movie.homepage !== "" ? `<a href="${movie.homepage}" target="_blank" class="btn">Movie Homepage</a>`
                    : ''
                }
            
          </div>
        </div>
        <div class="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li><span class="text-secondary">Budget:</span>
                ${movie.budget !== 0 ? toCurrency(movie.budget) : ' No Data'}
            </li>
            <li><span class="text-secondary">Revenue: </span>
                ${movie.revenue !== 0 ? toCurrency(movie.revenue) : 'No Data'}
            </li>
            <li><span class="text-secondary">Runtime: </span>${checkObject(movie.runtime)}</li>
            <li><span class="text-secondary">Status: </span>${movie.status}</li>
          </ul>
          <h4 class="sec-color">Production Companies:</h4>
          <div class="company-group">
            ${
                    movie.production_companies.map((company, index) =>{
                    return `<span>${company.name}</span>`;
                    }).join('')
            }
          </div>
        </div>
        `;

        document.querySelector('#movie-details').appendChild(div);
}

//***** This function displays the popular Tv Shows **********************************************//
async function popularTvShows() {
    try {
        const { results } = await fetchApiData('tv/popular');
        createTvShowHTML(results, '#popular-shows');
    } catch (error) {
        console.error('Error fetching popular tv shows:', error);
    }
}

// TOP RATED TV SHOWS **************************************************************************/
async function topRatedTvShows() {
    try {
        const { results } = await fetchApiData('tv/top_rated');
        createTvShowHTML(results, '#top-rated');
    } catch (error) {
        console.error('Error fetching top-rated tv shows:', error);
    }
}

//***** This function displays the top rated tv shows  *****************************************//
function createTvShowHTML(results, elementId) {

   //Display the tv shows in a slider
    results.forEach((show) => {
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
            <a href=tv-details.php?id=${show.id}">
                <img src="https://image.tmdb.org/t/p/w500${show.poster_path}"" alt="${show.name}"/>
            </a>
            `;

            document.querySelector(elementId).appendChild(div);

            // Initialize SwiperJS slider
            initSwiper();
    })

}

//******** Send data results to a Details page base on the show ID *********************************//
async function showDetails() {
    try {
        const tvId = window.location.search.split('=')[1];  //get the id of the show from the url
        const tv = await fetchApiData(`tv/${tvId}`);  //fetch the show data from the API
        const div = document.createElement('div');  

        displayBackgroundImage('tv', tv.backdrop_path);

    div.innerHTML = `
    <div class="details-top">
          <div>
             ${
                tv.poster_path
                ? ` <img
                  src="https://image.tmdb.org/t/p/w500${tv.poster_path}"
                  class="card-img-top"
                  alt="${tv.name}"
                />`
                :  `<img
                src="images/no-image.jpg"
                class="card-img-top"
                alt="${tv.name}"
              />`
            }
          </div>
          <div>
            <h2>${tv.name}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${tv.vote_average.toFixed(1)} / 10
            </p>
            <p class="text-muted">First aired: ${tv.first_air_date}</p>
            <p>
              ${tv.overview}
            </p>
            <h5 class="sec-color">Genres:</h5>
            <ul class="list-group">
              ${tv.genres.map((title) => `<li>${title.name}</li>` ).join('')}
            </ul>
            <a href="${tv.homepage}" target="_blank" class="btn">Show Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>tv Info</h2>
          <ul>
            <li><span class="text-secondary">Show Type: </span>${tv.type}</li>
            <li><span class="text-secondary">Number of seasons: </span>
                ${tv.number_of_seasons !== 0 ? tv.number_of_seasons : 'No Data'}
            </li>
            <li><span class="text-secondary">Runtime: </span>${checkObject(tv.episode_run_time)}</li>
            <li><span class="text-secondary">Status: </span>${tv.status}</li>
          </ul>
          <h4 class="sec-color">Production Companies:</h4>
          <div class="company-group">
            ${
                    tv.production_companies.map((company, index) =>{
                    return `<span>${company.name}</span>`;
                    }).join('')
            }
          </div>
        </div>
        `;

        document.querySelector('#show-details').appendChild(div);
    } catch (error) {
        console.error('Error fetching show details:', error);
    }

    
 
}

// Display the movie that are playing now in a Js Slider *******************************//
async function displayMoviePlayingNow() {
    const { results } = await fetchApiData('movie/now_playing');

    results.forEach((result) => {
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
            <a href=movie-details.php?id=${result.id}">
                <img src="https://image.tmdb.org/t/p/w500${result.poster_path}"" alt="${result.title}"/>
            </a>
            `;

            document.querySelector('#now-playing').appendChild(div);

            initSwiper();
    })
}

function showAlert(message, className = 'error') {
    const alert = document.createElement('div');
    alert.classList.add('alert', className);
    alert.appendChild(document.createTextNode(message));
    document.querySelector('#alert').appendChild(alert);

    setTimeout(() => alert.remove(), 6000);
}

function initSwiper(){
    const swiper = new Swiper('.swiper', {
        slidesPerView: '1',
        spaceBetween: 20,
        freeMode: true,
        loop: false,
        autoplay: false, //{
        //     delay: 4000,
        //     disableOnInteraction: false
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        breakpoints: {
            500: {
                slidesPerView: 'auto',
            },
            700: {
                slidesPerView: 'auto',
            },
            1200: {
                slidesPerView: 'auto',
            }
        }
    }
       
    )
}

function displayBackgroundImage(type, backgroundPath){
    const overlayDiv = document.createElement('div');

    overlayDiv.classList.add('details-backdrop'); //refer to style.css
    overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backgroundPath})`;

    if(type === 'movie'){
        document.querySelector('#movie-details').appendChild(overlayDiv);
    }else{
        document.querySelector('#show-details').appendChild(overlayDiv);
    }
}

async function fetchApiData(endpoint) {
    const API_KEY = global.api.apiKey;
    const API_URL = global.api.apiUrl;

    showSpinner();

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();

    hideSpinner();
    return data;
}

//Searches for the data passed into the url, calls the searchApiData to carry out the fetch.
async function search() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    //sets global objects
    global.search.type = urlParams.get('type');
    global.search.term = urlParams.get('search-term');

    if(global.search.term !== '' && global.search.term !== null) {
        const {results, total_pages, page, total_results } = await searchApiData();

        global.search.page = page;
        global.search.totalPages = total_pages;
        global.search.totalResults = total_results;


        if(results.length === 0) {
            showAlert('No results found');
            return;
        }

        console.log(results);
        displaySearchResults(results);
        document.querySelector('#search-term').value = '';
    }else {
        showAlert('Please enter a search term', 'error');
    }
    
}

function displaySearchResults(results) {

    //Clear previous results
    document.querySelector('#search-results').innerHTML='';
    document.querySelector('#search-results-heading').innerHTML = '';
    document.querySelector('#pagination').innerHTML = '';
    
    results.forEach((result) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <a href="${global.search.type}-details.php?id=${result.id}">
               ${
                result.poster_path
                ? ` <img
                  src="https://image.tmdb.org/t/p/w500/${result.poster_path}"
                  class="card-img-top"
                  alt="${global.search.type ===  'movie' ? result.title : result.name}"
                />`
                :  `<img
                src="images/no-image.jpg"
                class="card-img-top"
                alt="${global.search.type ===  'movie' ? result.title : result.name}"
              />
              <div class="card-body">
                <h5 class="card-title">${global.search.type ===  'movie' ? result.title : result.name}</h5>
                <div class="card-text">
                    <span class="no-image-logo">SHOWFIXX</span><br>
                    <span class="card-text2">NO IMAGE</span>
                </div>
              </div>`
               }
              </a>
              
              `;

        document.querySelector('#search-results-heading').innerHTML = `<h2>${results.length} of ${global.search.totalResults} Results for ${global.search.term}</h2>`;

        document.querySelector('#search-results').appendChild(div);
    });


    displayPagination();
}

//Create and display Pagination for Search
function displayPagination() {
    const div = document.createElement('div');
    div.classList.add('pagination');
    div.innerHTML =    `
        <button class="btn btn-primary" id="prev">Prev</button>
        <button class="btn btn-primary" id="next">Next</button>
        <div class="page-counter">Page ${global.search.page} of ${global.search.totalPages}</div>
        `;

    document.querySelector('#pagination').appendChild(div);

    //Disable prev button if on the first page
    if(global.search.page === 1) {
        document.querySelector('#prev').disabled = true;
    }

    if(global.search.page === global.search.totalPages) {
        document.querySelector('#next').disabled = true;
    }


    //Next page button
    document.querySelector('#next').addEventListener('click', async () => {
        global.search.page++;
        const { results, total_pages } =  await searchApiData();
        displaySearchResults(results);
    });

    //Prev page button
    document.querySelector('#prev').addEventListener('click', async () => {
        global.search.page--;
        const { results, total_pages } =  await searchApiData();
        displaySearchResults(results);
    });

}

//Sets the api fetch string, returns the fetched data, no arguments due to global variables 
async function searchApiData() {
    const API_KEY = global.api.apiKey;
    const API_URL = global.api.apiUrl;

    showSpinner();

    const response = await fetch(
        `${API_URL}search/${global.search.type}?api_key=${API_KEY}&language=en-US&query=${global.search.term}&page=${global.search.page}`);

    const data = await response.json();

    hideSpinner();

    return data;
}

/*** SHOW OR HIDE SPINNER  *****************************************************************************/
function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
}

function hideSpinner(){
    document.querySelector('.spinner').classList.remove('show');
}

//Adds an .active class to .nav-link if the user is one the current page for that specific link
function highLightActiveLink(){
    const links = document.querySelectorAll('.nav-link');

    links.forEach((link) => {

        if(link.getAttribute('href') === global.currentPage)
        {
            link.classList.add('active');
        }
    });
}

function init() {
    switch (global.currentPage){
        
        case '/':
        case '/index.php':
            displayMoviePlayingNow();
            popularMovies();
            topRatedMovies();
            upcomingMovies();
        break;

        case '/shows.php':
            popularTvShows();
            topRatedTvShows();
        break;

        case '/movie-details.php':
            movieDetails();
            break;

        case '/tv-details.php':
            showDetails();
            break;

        case '/search.php':
            console.log(search());
            break;

        default:
            console.log('Route not found');
            break;
    }

    highLightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);

