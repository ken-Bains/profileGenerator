const fs = require('fs');
const axios = require("axios");
const inquirer = require("inquirer");
const npm = require("npm");


inquirer.prompt({
  message: "Enter your GitHub username",
  name: "username"
})
.then(function({ username }) {
  const queryUrl = `https://api.github.com/users/ken-Bains`;
  //const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
// axios.get({queryUrl}).then(function(res))
  axios({
    method: "GET",
    url: queryUrl
  }).then(function(res){
    console.log(res.data);

    const newRepoNames = JSON.stringify(res.data, "belt", "\t");

    fs.writeFile("data.txt", newRepoNames, function(err){
        if(err) throw err;
        console.log("success");
        npm.load(() => {
            npm.run('start');
        });
    });
  });

});