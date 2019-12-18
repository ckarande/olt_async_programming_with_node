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
        // Solution:  Issue - unhandled rejections from promise b if both a and b are rejected
        // Fix using promise.all - which returns a single Promise that:
        // resolves when all of the promises passed as an iterable have resolved.
        // OR rejects with the reason of the first promise that rejects.
        await Promise.all([a, b]); 
    } catch(err) { console.log(err.message);}
})();
