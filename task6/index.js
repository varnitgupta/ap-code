import fetch from "node-fetch"
async function logMovies() {
    const response = await fetch("/package.json");
    const movies = await response.json();
    console.log(movies);
}
logMovies()