import {readFile, writeFile} from "./file_service.js"


export async function showAllMovies(){
    try{
        const movies = await readFile()
        movies.forEach(movie => {
           console.log(movie.name);  
        });
    }catch (error)  {
        console.error(error); 
    }
}


