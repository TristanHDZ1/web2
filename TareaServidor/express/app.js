const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Texto plano desde el servidor Express');
});
const port = 3002;

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`) ;
}); 
