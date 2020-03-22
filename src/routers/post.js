const express = require('express')
const Post = require('../models/Post')
const router = express.Router()

router.post('/create', async (req, res) => {
  // Create a new post
  try {
    const post = new Post(req.body)
    await post.save()
    res.status(201).send('New post create!')
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router