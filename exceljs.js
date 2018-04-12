
var Excel = require('exceljs');

// read from a file
var workbook = new Excel.Workbook();
workbook.xlsx.readFile("//mto.xlsx")
    .then(function() {
        // use workbook
    });

// pipe from stream
var workbook = new Excel.Workbook();
stream.pipe(workbook.xlsx.createInputStream());


var workbook = createAndFillWorkbook();
workbook.xlsx.writeFile("//mto.xlsx")
    .then(function() {
        // done
    });
