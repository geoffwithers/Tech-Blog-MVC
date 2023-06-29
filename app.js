const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000; 
const routes = require('./routes');

// Set up the static files directory
app.use(express.static('public'));

// Set up the body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
// Set up the template engine
app.set('view engine', 'handlebars');

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});






// Configure Handlebars
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
  })
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
