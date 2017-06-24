//Get key info from keys.js
var keyinfo = require("./keys.js");
//Get twitter api keys
var twitterkeys = keys.twitterKeys;
//my-tweets function
function(my-tweets){

};



//Get Spotify api keys
var spotifykeys = keys.spotifykeys
//spotify-this-song function
function(spotify-this-song){

};



//Request for info from OMDB
function(movie-this){
var request = require('request');
request('http://www.omdbapi.com/?apikey=40e9cece&', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});
};



