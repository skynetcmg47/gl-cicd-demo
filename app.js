const express = require('express')
const app = express()
const port = 3000

const response = {
  author: 'Nam Phuong',
  message: 'Hello World!',
  version: 'v1.2'
}
app.get('/', (req, res) => res.send(response))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
