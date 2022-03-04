console.log('start')

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log('Logged In')
    const userEmail = {
      userEmail: email
    }
    callback(userEmail)
  }, 5000)
}

function getUserVideos(email, callback) {
  console.log("get Video Data");
  setTimeout(() => {
    callback(["video1", "video2", "video3"])
  }, 5000)
}

function videoDetails(video, callback) {
  console.log("getVideoDetail");
  setTimeout(() => {
    callback('war of machine')
  }, 5000)
}

const user = loginUser('didi@email.com', 123456, (user) => {
  getUserVideos(user, (videos) => {
    console.log(videos)
    videoDetails(videos, (title) => {
      console.log(title);
    })
  })
})

console.log('finish')