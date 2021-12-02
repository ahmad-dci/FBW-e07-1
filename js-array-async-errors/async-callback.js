function process1(cb, cb1) {

    const pId1 = setTimeout(() => {
        console.log('hi');
        cb();
        cb1();
    }, 5000);

}

function process2() {
    const pId2 = setTimeout(() => {
        console.log('hi2');
        // clearTimeout(pId1)
    }, 3000)
}

function hello() {
    console.log('hello world');
}
process1(hello, process2);
//hello();
//process2();



// run process1 after process2:
// call back
