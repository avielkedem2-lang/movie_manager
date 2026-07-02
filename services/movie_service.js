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



