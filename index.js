require('dotenv').config();
const express = require('express');
const server = express();
const PORT = process.env.PORT || 6060;
server.use(express.json());


server.get('/', (req, res) => {
    res.send(`<h2>Let's write some code!</h2>
    <p> urls /api/---`);
  });


server.listen(PORT, ()=> {
    console.log(`server is listening on port:${PORT}`)
});