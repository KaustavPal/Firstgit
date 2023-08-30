const activityTime = new Date();
const posts = [{ title: "Post One" }, { title: "Post Two" }];

function createPost(post) {
  return new Promise((resolve, reject) => {
    posts.push(post);
    resolve(post);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    if (posts.length > 0) {
      let deletedPost = posts.pop();
      resolve(deletedPost);
    } else {
      reject("ERROR");
    }
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const updateTime = new Date();
      resolve(updateTime);
    }, 1000);
  });
}

let lastActivityTime;
Promise.all([createPost({ title: "Post 3" }), updateLastUserActivityTime()])
  .then((values) => {
    lastActivityTime = values[1];
    console.log(`Activity time - ${activityTime}`);
    for (let i = 0; i < posts.length; i++) {
      console.log(posts[i].title);
    }
    console.log(`Last activity time - ${lastActivityTime}`);
  })
  .then(() => {
    deletePost()
      .then((deletedPost) => {
        console.log(`${deletedPost.title} has been deleted`);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .then(() => {
    for (let i = 0; i < posts.length; i++) {
      console.log(posts[i].title);
    }
  });
