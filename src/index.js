const dotenv = require('dotenv');
const app = require('./app');

const port = process.env.PORT || 5000;
const hostname = process.env.HOSTNAME || 'localhost'

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`\n🚀 ... Listening: http://${hostname}:${port}`);
});
