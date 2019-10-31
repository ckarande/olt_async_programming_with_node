async function foo() {
    // Wait for a second and then throw an error
    await new Promise(resolve => setTimeout(resolve, 1000));
    throw Error('foo!');
}

(async function main() {
    try {
        //Solution: Wait for the result of foo() to settle, so that rejections are handled.
        return await foo();
    } catch(err) { 
        console.log(err.message);
    }
})();
