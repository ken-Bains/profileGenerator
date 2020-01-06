const ipc = require('electron').ipcRenderer;
const fs = require("fs");

fs.readFile("starred.txt", "utf8", function(error, data) {
  document.getElementById("starTag").innerHTML = JSON.parse(data);

});

fs.readFile("data.txt", "utf8", function(error, data) {
  
  if (error) {
    return console.log(error);
  }
  let dataInfo = JSON.parse(data)
  
  console.log(dataInfo);
  document.getElementById("h1Tag").innerHTML = dataInfo.name;
  document.getElementById("imgTag").setAttribute("src", dataInfo.avatar_url);
  document.getElementById("githubLink").setAttribute("href", dataInfo.url);
  document.getElementById("githubLink").innerHTML = dataInfo.url;
  document.getElementById("locTag").innerHTML = dataInfo.location;
  document.getElementById("repoTag").innerHTML = dataInfo.public_repos;
  document.getElementById("followTag").innerHTML = dataInfo.followers;
  document.getElementById("followingTag").innerHTML = dataInfo.following;

  
});


window.onload = function (){
    setTimeout(function(){
        ipc.send('print-to-pdf');
    }, 1000);
};
