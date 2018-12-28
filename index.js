const app = require('express')()

const port = process.env.PORT || 5000
app.get('/', (req, res) => {
  res.send({ name: 'sohaib' })
})

app.listen(port, () => {
  console.log(`server has been established at ${port}`)
})
