const test = (function(a) {
    name = a;
    let test1 = 0;
    const getTest1 = () => test1;
    const check = () => test1++;
    return {check, test1, name, getTest1}
});

// const dog = test("dog")

// dog.check()


// console.log("Outside update", dog.getTest1())

export default test


