const express = require('express')
require('./db');
const app = express();
app.use(express.json())
const port = 3000
require('./routes/index')(app);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
