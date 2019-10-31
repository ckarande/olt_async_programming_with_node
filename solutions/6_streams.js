const fs = require('fs');

async function print(path) {
  const stream = fs.createReadStream(path, {encoding: 'utf-8'});
  for await (let chunk of stream) {
    chunk = chunk.toUpperCase();
    console.log(chunk);
    // await new Promise(resolve => setTimeout(resolve, 1000));
   }
}
print('./largefile.txt').catch(console.error);

