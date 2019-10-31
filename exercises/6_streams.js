// Activity - Make the code performant using stream..
// Hint: Hint: Use Readable FIle stream and use async iterator to extract contents from it

const fs = require('fs');

async function print(path) {
  let contents = await fs.promises.readFile(path, 'utf8');
  contents = contents.toUpperCase();
  console.log(contents);
}
print('./largefile.txt').catch(console.error);