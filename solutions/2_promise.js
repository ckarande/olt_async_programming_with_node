const fs = require('fs').promises;
// NOTE: All fs promises API functions return a promise
function truncateFile() {
    // make a copy of the file to truncate
    fs.copyFile('large.txt', 'truncated.txt')
        .then(function () {
            // truncate file to first 100 bytes
            // Solution: Fix the broken promise chain
            return fs.truncate('truncated.txt', 100);
        })
        .catch(function (err) {
            console.error(err.message);
        });
}
truncateFile();