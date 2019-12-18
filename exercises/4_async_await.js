// Pitfalls: Spot issue with this code
async function foo() {
    // Wait for a second and then throw an error
    await new Promise(resolve => setTimeout(resolve, 1000));
    throw Error('foo!');
}

(async function main() {
    try {
        return foo();
    } catch(err) { 
        console.log(err.message);
    }
})();
