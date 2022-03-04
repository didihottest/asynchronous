console.log('start')

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Logged In')
      const userEmail = {
        userEmail: email
      }
      resolve(userEmail)
    }, 2000)
  })

}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    console.log("get Video Data");
    setTimeout(() => {
      resolve(["video1", "video2", "video3"])
    }, 2000)
  })

}

function videoDetails(video, callback) {
  return new Promise((resolve, reject) => {
    console.log("getVideoDetail");
    setTimeout(() => {
      resolve('war of machine')
    }, 2000)
  })

}

// const user = loginUser('didi@email.com', 123456, (user) => {
//   getUserVideos(user, (videos) => {
//     console.log(videos)
//     videoDetails(videos, (title) => {
//       console.log(title);
//     })
//   })
// })


// penulisan menggunakan then
// loginUser('rizky@email.com', 123456)
//   .then(userEmail => getUserVideos(userEmail))
//   .then(videos => videoDetails(videos[0]))
//   .then(detail => console.log(detail))

async function tungguPerbaris() {
  const userEmail = await loginUser('rizky@email.com', 123456)
  const videos = await getUserVideos(userEmail)
  const detailVideos = await videoDetails(videos[1])

  console.log(detailVideos)
}

tungguPerbaris()

console.log('finish')