const ipc = require('electron').ipcRenderer;
const printPDFButton = document.getElementById('print-pdf');
const fs = require("fs");

fs.readFile("data.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }
    let dataInfo = JSON.parse(data)

    console.log(dataInfo);
    document.getElementById("h1Tag").innerHTML = dataInfo.login;
  
  });


window.onload = function (){
    setTimeout(function(){
        ipc.send('print-to-pdf');
    }, 1000);
};

// ipc.on('wrote-pdf', (event, path) => {
//     const message = `Wrote pdf to : ${path}`;
//     document.getElementById('pdf-path').innerHTML = message;
// })