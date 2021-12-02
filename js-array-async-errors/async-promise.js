const process1 = new Promise((resolve, reject) => {
    const pId1 = setTimeout(() => {
        try {
            console.log('process1');
            //console.log(dd);
            resolve();
        } catch (error) {
            reject(error);
        }

    }, 5000);
})

function process2() {
    return new Promise((resolve, reject) => {
        const pId2 = setTimeout(() => {
            try {
                console.log('process2');
                resolve()
                // clearTimeout(pId1)
            } catch (error) {
                reject(error)
            }

        }, 3000)
    })

}

function hello() {
    console.log('hello');
}
// process1.then(() => {
//     process2();
//     hello();
// }).catch(error => {
//     //console.log(error);
//     hello();
// })

async function caller() {

    await process1;
    await process2();
    hello();
}

caller()

