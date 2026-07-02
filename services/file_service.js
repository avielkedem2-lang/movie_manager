import fs from "fs"



export function readFile(){
    const data = new Promise((res, rej) => {
        fs.readFile("./data/movies.json", "utf-8", (err, data)=> {
            if (err) return rej(err);
            res(JSON.parse(data))
         
    })})
    return data
}





export function writeFile(movies){
    return new Promise((res , rej) => {
        fs.writeFile("./data/movies.json", JSON.stringify(movies, null, 2), "utf-8", (err) => {
            if (err) return rej(err)
            res("The data ")
        })
    }) 
}





