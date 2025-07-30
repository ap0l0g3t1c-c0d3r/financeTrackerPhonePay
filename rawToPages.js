const fs = require("fs")
const { RAWDATA:pages } = require("./data.js")

function splitPagesIntoArray(pages){
    let count = 0;
    let allPagesArray = []
    for(let page of pages){
        console.log(`==============${count}=============`)
        const replacedpage= page.replace(/\\u0000/gi,":")
        let splitPages= replacedpage.split(/\\n/g)
        allPagesArray.push(splitPages)
        count++
    }
    console.log(allPagesArray)
    return allPagesArray
}

const value = splitPagesIntoArray(pages)
const x = lineByLineData(value)
// console.log(x)

//function for adding all lines in a flat array
function lineByLineData(arrayOfArray){
    const lines = []
    for(let i=0 ; i< arrayOfArray.length; i++){
        for(let j= 0; j < arrayOfArray[i].length; j++){
            lines.push(arrayOfArray[i][j].split(/\\n/))
        }
    }
    return lines
}


//To-do funcion to filter line for correct format
function formatLines(){


}



// not needed now
function addionOfPagesinFile(pagesArray){
    fs.writeFile("./allPagesData.txt", pagesArray, { flag: 'a' }, (err)=> {
        if(err) throw err;
    })
    console.log("Successfully added All files")
}