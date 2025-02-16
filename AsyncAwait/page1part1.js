//1. Basic async/await Handling
const p1 = () => new Promise((resolve, reject) => {
    let startTime = new Date()
    setTimeout(() => {
        let endTime = new Date();
        let timeElapsed = endTime - startTime
        console.log(timeElapsed / 1000 + " time taken ")
        resolve('Resolved - promise p1')
    }, 2000);

})

const p2 = () => new Promise((resolve, reject) => {
    let startTime = new Date()
    setTimeout(() => {
        let endTime = new Date();
        let timeElapsed = endTime - startTime
        console.log(timeElapsed / 1000 + " time taken ")
        resolve('Resolved - promise p2')
    }, 4000);

})


async function ques1() {

    //In order to avoid logging of time create promises inside function

    const p3 = new Promise((resolve, reject) => {
        let startTime = new Date()
        setTimeout(() => {
            let endTime = new Date();
            let timeElapsed = endTime - startTime
            console.log(timeElapsed / 1000 + " time taken ")
            resolve('Resolved - promise p3')
        }, 2000);

    })
    const p4 = new Promise((resolve, reject) => {
        let startTime = new Date()
        setTimeout(() => {
            let endTime = new Date();
            let timeElapsed = endTime - startTime
            console.log(timeElapsed / 1000 + " time taken ")
            resolve('Resolved - promise p4')
        }, 4000);

    })

    const data1 = await p3;
    console.log(data1)
    const data2 = await p4;
    console.log(data2)
}

//2. Handling Multiple Promises with async/await
async function ques2() {
    try {
        const d1 = await Promise.all([p2(), p1()])
        d1.forEach((item) => {
            console.log(item)
        })
    } catch (error) {
        console.error(error)
    }
}
ques2()



