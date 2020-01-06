const fs = require('fs');
const axios = require("axios");
const inquirer = require("inquirer");
const npm = require("npm");


inquirer.prompt([
  {
    message: "Enter your GitHub username",
    name: "username"
  },
  {
    message: "What is your favorite color",
    name: "color"
  }
])
  .then(function ({ username, color }) {
    const queryUrl = `https://api.github.com/users/${username}`;
    const queryUrlStar = `https://api.github.com/users/${username}/repos?per_page=100`;
    // axios.get({queryUrl}).then(function(res))
    const colorHtml = `body{background-color: ${color}}`;

    fs.writeFile("style.css", colorHtml, function (err) {
      if (err) throw err;
    });

    axios({
      method: "GET",
      url: queryUrl
    }).then(function (res) {
      console.log(res.data);

      const newRepoNames = JSON.stringify(res.data, "belt", "\t");

      fs.writeFile("data.txt", newRepoNames, function (err) {
        if (err) throw err;
        console.log("success");
        npm.load(() => {
          npm.run('start');
        });
      });

      axios({
        method: "GET",
        url: queryUrlStar
      }).then(function (res) {
        // console.log(res.data);
        var count = 0; 

        for(const el of res.data){
          console.log(el.stargazers_count);
          count += el.stargazers_count;
        }

        fs.writeFile("starred.txt", JSON.stringify(count), function (err) {
          if (err) throw err;
          console.log("success");
        });
      });
    });

  });