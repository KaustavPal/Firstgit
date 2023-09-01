const activityTime = new Date();
const posts = [{ title: "Post One" }, { title: "Post Two" }];

async function createDeletePost() {
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

  try {
    let [createdPost, lastActivityTime] = await Promise.all([
      createPost({ title: "Post Three" }),
      updateLastUserActivityTime(),
    ]);

    console.log(`Activity time - ${activityTime}`);

    for (let i = 0; i < posts.length; i++) {
      console.log(posts[i].title);
    }

    console.log(
      `Last activity time / ${createdPost.title} created at  - ${lastActivityTime}`
    );

    let deletedPost = await deletePost();

    console.log(`${deletedPost.title} has been deleted`);
    for (let i = 0; i < posts.length; i++) {
      console.log(posts[i].title);
    }
  } catch (err) {
    console.log(err);
  }
}

createDeletePost();
