const express = require('express')
const router = express.Router()
const path = require('path')
module.exports = router

router.get('/', (req, res) => {
  filePath = path.join(__dirname, 'index.html')
  res.sendFile(filePath)
})