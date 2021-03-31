const express = require('express');
const app = express();
const port = process.env.PORT || 7778;
const shopRouter = require('./shopRouter');
const cartRouter = require('./cartRouter');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/shop', shopRouter);
app.use('/cart', cartRouter);
app.use((req,res) => {
  res.send(404)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
