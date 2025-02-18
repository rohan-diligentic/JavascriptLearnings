async function rejectionWithReturnAwait() {
  try {
    return await Promise.reject(new Error())
  } catch (e) {
    console.log('Saved!')
  }
}
rejectionWithReturnAwait()
async function rejectionWithReturn() {
  try {
    return Promise.reject(new Error())
  } catch (e) {
    console.log('Saved!')
  }
}
rejectionWithReturn()