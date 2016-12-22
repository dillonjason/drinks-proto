let express = require('express');
let path = require('path');
let compression = require('compression');

let app = express();

let port = (process.env.PORT || 8080);
let publicPath = path.resolve(__dirname, 'build');

// Must be first
app.use(compression());

// We point to our static assets
app.use(express.static(publicPath));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function(req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// And run the server
app.listen(port, function() {
  // eslint-disable-next-line
  console.log('Server running on port ' + port);
});
