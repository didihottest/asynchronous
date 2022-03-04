const janji = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('User Didapatkan')
    const userEmail = { userEmail: "didi@email.com" }
    resolve(userEmail)
  }, 2000);
})

janji.then((user) => {
  console.log(user);
})

const janjiError = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('User Gagal')
    const userEmail = null
    reject(new Error("User Notfound"))
  }, 2000);
})

janjiError.then((user) => {
  console.log(user);
}).catch((error) => {
  console.log(error)
})