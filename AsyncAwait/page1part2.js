//let's create a function to create multiple promises function 

function createResolvedPromise(name, delay) {
  return new Promise((resolve, reject) => {
    let startTime = new Date();
    setTimeout(() => {
      let endTime = new Date();
      let timeElapsed = endTime - startTime;
      console.log('Time taken by ' + name + ' is ' + timeElapsed)
      resolve('Promise ' + name + ' - resolved')
    }, delay)
  })
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

function createRejectedPromise(name, delay) {
  return new Promise((res, rej) => {
    let startTime = new Date();
    setTimeout(() => {
      let endTime = new Date();
      let timeElapsed = endTime - startTime;
      console.log('Time taken by ' + name + ' is ' + timeElapsed)
      rej('Promise ' + name + ' - rejected')
    }, delay)
  })
    .then(data => console.log(data))
    .catch(error => console.log(error))
}


async function handleMultiplePromisesAccordingToResolution(promises) {

  const promiseCopy = [...promises];

  while (promiseCopy.length > 0) {
    const result = await Promise.race([...promiseCopy])
    console.log(result)

    //remove resolved promise from copy
    const resolvedIndex = promiseCopy.findIndex(p => p === result);
    if (resolvedIndex !== -1) {
      promiseCopy.splice(resolvedIndex, 1)
    }
  }

}


const promises = [
  createResolvedPromise('p1', 2000),
  createResolvedPromise('p2', 4000),
  createResolvedPromise('p3', 3000),
  createRejectedPromise('p4', 4500),
  createResolvedPromise('p5', 5500),]




//4. Parallel Promises with Promise.all and async/await
const p1 = createResolvedPromise(p1, 2000);
const p2 = createResolvedPromise(p2, 2000);
async function ques4(promisesArray) {
  const d1 = await Promise.all(p1, p2);
  console.log(d1)
}
ques4()