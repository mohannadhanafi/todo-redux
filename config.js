require('env2')('./config.env');

const dbConfig = () => ({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dbname: process.env.DB_NAME,
  host: 'localhost',
  dialect: 'postgres',
});
module.exports = {
  DB_CONFIG: dbConfig(process.env.NODE_ENV),
};
