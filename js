// Simulated movie data
const moviesData = [
    { title: 'Movie 1', image: 'movie1.jpg' },
    { title: 'Movie 2', image: 'movie2.jpg' },
    // Add more movie data as needed
];

// Function to dynamically add movie cards
function renderMovies() {
    const moviesSection = document.querySelector('.movies');

    moviesData.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const movieImage = document.createElement('img');
        movieImage.src = movie.image;
        movieImage.alt = movie.title;

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;

        movieCard.appendChild(movieImage);
        movieCard.appendChild(movieTitle);
        moviesSection.appendChild(movieCard);
    });
}

// Call the renderMovies function when the page loads
document.addEventListener('DOMContentLoaded', renderMovies);
