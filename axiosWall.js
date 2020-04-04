const axios = require('axios');
const download = require('download-file');
const wallpaper = require('wallpaper');
const urlMain = 'https://dog.ceo/api/breeds/image/random';

axios.get(urlMain)
    .then(function(response) {
        var url = response.data.message
        var options = {
                directory: "./images/dogs/",
                filename: "dog.gif"
            }
            // download(url, options, async function(err) {
            //     if (err) throw err
            //     console.log("meow");
            //     return await wallpaper.set('./images/dogs/dog.gif')
            // })
        download(url, options, function(err) {
            if (err) {
                throw err
            } else
                console.log("meow");
            return wallpaper.set('./images/dogs/dog.gif')
        })

    })
    .catch(function(error) {
        console.log(error);
    });
/*
var options = {
                filename: "dog.gif"
            }
    axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      url = response.data.message;
      download(url, options);
      wallpaper.set("./dog.jpg");
    })
    .catch(function (err) {
      console.log(err);
    });
    */