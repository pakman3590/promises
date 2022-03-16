/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
let promiseConstructor = require('./promiseConstructor.js');
let promisification = require('./promisification.js');
//Promise.promisify(fs);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return promiseConstructor.pluckFirstLineFromFileAsync(readFilePath)
    .catch(new Error ('we dun goofed'))
    .then((user) => promisification.getGitHubProfileAsync(user))
    .then((JSONresponse) => fs.writeFile(writeFilePath, JSONresponse, (err) => {}));
  // .then((JSONresponse) => fs.writeFileSync(writeFilePath, JSON.stringify(JSONresponse));
};


// fs.writeFileSync(file, data[, options])

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
