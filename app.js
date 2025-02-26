const express = require('express');
const path = require('path');
const app = express();
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', require('./routes/index'));
app.use('/donors', require('./routes/donors'));
app.use('/hospitals', require('./routes/hospitals'));
// Handle 404 errors
app.use((req, res) => {
  res.status(404).render('pages/404'); // Ensure you have a 404.ejs file
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});