var download = require('download-file')
const wallpaper = require('wallpaper');
const axios = require('axios')
var url = 'https://dog.ceo/api/breeds/image/random';
axios.get(url).then((response) => {
    var data = response.data
    return data;
}).catch(error => {
    return error
})

var options = {
    directory: "./images/dogs/",
    filename: "dog.gif"
}

download(url, options, function(err, data) {
    if (err) {
        throw err;
    } else {
        return data
    }

})



// (async() => {
//     await wallpaper.set('dog.gif);

//     await wallpaper.get();
//     //=> '/Users/sindresorhus/unicorn.jpg'
// })();