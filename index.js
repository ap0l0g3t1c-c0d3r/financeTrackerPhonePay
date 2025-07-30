
const fs = require('fs');
const pdf = require('pdf-parse');



console.log("Starting PDF parsing...");

// const pdfBuffer = fs.readFileSync("../sample.pdf")

const pdfBuffer = fs.readFileSync("../dataForStatement.pdf")

async function parsePDFBuffer(buffer){
    try {
        const data = await pdf(buffer)
        // console.log("PDF parsed successfully:", data);
        return data;
    } catch (error) {
        console.log("Error parsing PDF:", error);
    }
}


(async() => {
    const value = await parsePDFBuffer(pdfBuffer)
    //todo to make the value of of account id dynamic
    const data = JSON.stringify(value.text).split(/\\nPaid by\\nXXXXXX8812\\n/gi)
    console.log(data)
    fs.writeFile('./data.js', `const RAWDATA=${JSON.stringify(data)} \n\n module.exports.RAWDATA=RAWDATA`, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }
    });
    return value
})();
