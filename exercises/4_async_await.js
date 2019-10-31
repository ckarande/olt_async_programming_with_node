// Pitfalls: Spot issue with this code
async function foo() {
    throw Error('foo!');
}
async function bar() {
    throw Error('bar!!');
}
(async function  main() {
    const a = foo(); 
    const b = bar();
    try {
        await a;
        await b;
    } catch(err) { console.log(err.message);}
})();
