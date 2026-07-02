import {readFile, writeFile} from "./file_service.js"


export async function showAllMovies(){
    try{
        const movies = await readFile()
        movies.forEach(movie => {
           console.log(movie.title);  
        });
    }catch (error)  {
        console.error(error); 
    }
}




export async function createNewMovie(body) {
    try{
        const movies = await readFile()
        let max = 0
        if (movies.length > 0){
        max = await movies.sort((a, b) => b.id - a.id)[0].id
        } 
        const newMovie = {
            id: max += 1,
            title: body.title,
            genre: body.genre,
            year: body.year,
            rating: body.rating
        }
        movies.push(newMovie)
        writeFile(movies)        
    }catch (error){
        console.error(error);
    }
    
}



export async function getMovieById(id) {
    try{
        const movies = await readFile()
        const theMovie = movies.find((movie) => {return movie.id === id})
        return theMovie
    }catch (error){
        console.error(error)
    }
}






export async function deleteMovie(id) {
    try {
        const movies = await readFile()
        const theMovie = movies.findIndex((movie) => {return movie.id === id})
        movies.splice(theMovie, 1)
        writeFile(movies)
    }catch (error) {
        console.error(error)
    }
}




export async function updateRate(id, newRate) {
    try{
        const movies = await readFile()
        const theMovie = movies.findIndex((movie) => {return movie.id === id})
        movies[theMovie].rating = newRate
        writeFile(movies)
    }catch (error){
        console.error(error)
    }
}




export async function searchByName(title) {
    try{
        const movies = await readFile()
        const theMovie = movies.find((movie) => {return movie.title === title})
        return theMovie
    }catch (error){
        console.error(error)
    }
}




export async function sortByGenre(genre) {
    try{
        const movies = await readFile()
        const moviesByGenre = movies.filter((movie) => {return movie.genre == genre})
        return moviesByGenre 
    }catch (error){
        console.error(error)
    }
}




export async function showStatistic(params) {
    try{
        const movies = await readFile()
        return {
            amountMovie: movies.length,
            average: movies.reduce((acc, movie) => {return acc += movie.rating},0) / movies.length,
            highestMovie: movies.sort((a, b) => {return b.rating - a.rating})[0].title
        }
    }catch (error){
        console.error(error)
    }
}




