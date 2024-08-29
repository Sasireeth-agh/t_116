const app = require('./app');

const PORT = process.env.PORT || 5501;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
