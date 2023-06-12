const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('http://127.0.0.1:5500/index2.html', (req, res) => {
  // Handle the order placement logic here
  const buyerInfo = req.body;
  // Process the order and perform necessary actions
  // ...

  // Send a response to the client
  res.send('Order placed successfully!');
});

app.listen(5500, () => {
  console.log('Server is running on port 5500');
});
