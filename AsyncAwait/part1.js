function divide(n1, n2) {
  if (n2 === 0) {
    return Promise.reject(new Error('Cannot divide by 0'))
  } else {
    return Promise.resolve(n1 / n2);
  }
}

async function functionWithAwait() {

  try {
    const result = await divide(6, 0);
    const response = await result;
    return response;
  } catch (error) {
    console.log(error)
  }
}


async function runWithAsync() {
  const result = await functionWithAwait();
  console.log(result)
}
runWithAsync()


async function functionWithoutAwait() {
  try {
    const result = divide(6, 0);
    return result;
  } catch (error) {
    console.log(error)
  }
}
async function runWithoutAsync() {
  const result = await functionWithAwait();
  console.log(result)
}
runWithoutAsync()