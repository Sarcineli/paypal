function sendOrderToServer(orderDetails) {
    fetch('/processOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
    .then(response => response.text())
    .then(data => {
      // Process the response from the server
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
    });
  }