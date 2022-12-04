const express = require('express')
const app = express()
const port = 3000

require('whitenapo')

if(process.argv[2]) proces.exit(0);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

