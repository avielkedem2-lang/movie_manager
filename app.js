import {showAllMovies, showStatistic, sortByGenre} from "./services/movie_service.js"
import {bodyValidation, getMovie, deleteTheMovie, 
    updateRateById, searchTitle, searchGenre, theStatistic, displayMenu} from "./utils/validator.js"
import rl from "readline-sync"



function title(){
    console.log("\n╔" + "═".repeat(40) + "╗");
    console.log("║      MOVIE COLLECTION MANAGER        ║");
    console.log("╚" + "═".repeat(40) + "╝")
}

title()


async function main(){
    let exit = true
    while (exit){
        displayMenu()
        let userChoice = rl.questionInt("please enter a number: ");
        

        if (userChoice === 1) {
            await showAllMovies()
        }


        else if (userChoice === 2){
            await getMovie()
        }
        

        else if (userChoice === 3){
            await bodyValidation()
        }


        else if (userChoice === 4){
            await deleteTheMovie()
        }

        else if (userChoice === 5){
            await updateRateById()
        }

        else if (userChoice === 6){
            await searchTitle()
        }

        else if (userChoice === 7){
            await searchGenre()
        }

        else if (userChoice === 8){
            await theStatistic()
        }

        else if (userChoice === 0){
            exit = false
        }
    }
}
main()