const path = require('path');
const fs = require('fs');

const getQuickLook = () => {
  return new Promise((resolve, reject) => {
    listPosts().then((allPosts) => {
      Promise.all(allPosts.map(getPost)).then((postContents) => {
        const builtPosts = postContents.map((post, index) => {
          const content = post.split('#').filter(section => section.startsWith(' Introduction'))[0]
          const image = content.split('\n').filter(row => row.startsWith('!['))[0].split('(')[1].replace(')', '').replace('../app/assets', '/img')
          const firstParagraph = content.split('\n')[4]
          return {image, firstParagraph, slug: allPosts[index]}
        })
        resolve(builtPosts)
      }).catch((err) => {
        reject(err)
      })
    })
  })
}

const listPosts = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(path.resolve(`${__dirname}./../posts/`), (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data.map(post => post.split('.')[0]))
    })
  })
}

const getPost = (post) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(`${__dirname}./../posts/${post}.md`), 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

const addBlogRoutes = (app) => {
  app.get('/posts', (req, res) => {
    const {name} = req.params
    getQuickLook().then((postList) => {
      res.send(postList)
    }).catch((error) => {
      res.status(404).send(error)
    })
  });

  app.get('/post/:name', (req, res) => {
    const {name} = req.params
    getPost(name).then((postContent) => {
      res.send(postContent)
    }).catch((error) => {
      res.status(404).send(error)
    })
  });
}

module.exports = addBlogRoutes
