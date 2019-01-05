const app = require('./app');

const port = app.get('port');
const { connection } = require('./database/models');

connection.sync().then(() => { app.listen(port, () => console.log(`The server is running at port ${port}`)); });
