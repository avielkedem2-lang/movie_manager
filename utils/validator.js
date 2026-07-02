import {createNewMovie, getMovieById, deleteMovie, updateRate, 
    searchByName, sortByGenre, showStatistic} from "../services/movie_service.js"
import rl from "readline-sync"
import fs from "fs/promises"


export function displayMenu() {
    console.log("");
    console.log("");
    console.log("1. Show all movies");
    console.log("2. Show by ID");
    console.log("3. Create new movie");
    console.log("4. Delete movie");
    console.log("5. Update rate");
    console.log("6. Search by name");
    console.log("7. Sort by genre");
    console.log("8. Show statistics");
    console.log("0. Exit");
    console.log("─".repeat(42));
    
    
}



export function bodyValidation(){
    const title = rl.question("Enter a title: ")
    const genre = rl.question("Enter a genre: ")

    if (checkingTitleAndGenre(title, genre)){
        const year = rl.questionInt("Enter the year: ")

        if (checkYear(year)){
            const rating = rl.questionFloat("Enter a rating (int): ")

            if (checkRating(rating)){
                return createNewMovie({title, genre, year, rating})
            }else {
                console.log("The rating is bigger then 10 or little then 0");
            }
        }else {
            console.log(`The year= ${year} is not good`);
        }

    }else {
        console.log("The title or the ");
        
    }
}



function checkingTitleAndGenre(title, genre){
    if (title && genre){
        return true
    }
    return false
}



function checkYear(year){    
    if (year > 1990 && year < 2026){
        return true
    }
    return false
}


function checkRating(rating){
    if (10 > rating > 0){
        return true
    }
    return false
}



export function getMovie(){
    const id = rl.questionInt("Enter id for the search: ")
    return getMovieById(id)
    .then((val) => {
        if (val){
            console.log(val) 
        }else {
            console.log(`There is no such thing id=${id}`)
        }
    })
    .catch((e) => {console.log(e);
    })
}




export function deleteTheMovie(){
    const id = rl.questionInt("Enter id: ")
    return getMovieById(id)
    .then((val) => {
        if (val){
            return deleteMovie(id) 
        }else {
            console.log(`There is no such thing id=${id}`)
        }
    })
    .catch((e) => {console.log(e);
    })

}





export function updateRateById(){
    const newRate = rl.questionFloat("Enter new rate: ")
    if (checkRating(newRate)){
    const id = rl.questionInt("Enter id: ")
    return getMovieById(id)
    .then((val) => {
        if (val){
            return updateRate(id, newRate) 
        }else {
            console.log(`There is no such thing id=${id}`)
        }
    })
    .catch((e) => {console.log(e);
    })
}}



export function searchTitle(){
    const title = rl.question("Enter the title: ")
    if (title){
        return searchByName(title.toLowerCase())
        .then((val) => {
            if (val){
                console.log(val) 
            }else {
                console.log(`There is no such thing title=${title}`)
            }
    })
    .catch((e) => {console.log(e);
    })}

}





export function searchGenre(){
    const genre = rl.question("Enter genre: ")
    if (genre) {
        return sortByGenre(genre.toLowerCase())
        .then((val) => {
            if (val){
                console.log(val) 
            }else {
                console.log(`There is no such thing genre=${genre}`)
            }
    })
    .catch((e) => {console.log(e);
    })}
}



export function theStatistic(){
    return showStatistic()
    .then((val) => { console.log(val)})
    .catch((e) => {console.log(e);
    })
}