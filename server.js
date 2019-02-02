const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 5000;

// API calls

const getProperties = async () => {
  const response = await fetch('https://blok.ai/asunnot/myynnissa?map=true&page=1&size=-1&order_by=-public_at', {
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

app.get('/properties', function(req, res) {
  getProperties()
    .then(data => {
      res.send({ payload: data.results.items });
    });
});

// production build
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));
