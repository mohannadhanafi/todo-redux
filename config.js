require('env2')('./config.env');

const dbConfig = (env) => {
  if (env === 'development') {
    return {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      dbname: process.env.DB_NAME,
      host: 'localhost',
      dialect: 'postgres',
    };
  } if (env === 'production') {
    return {
      username: process.env.PRODUCTION_DB_USERNAME,
      password: process.env.PRODUCTION_DB_PASSWORD,
      dbname: process.env.PRODUCTION_DB_NAME,
      host: process.env.PRODUCTION_DB_HOST,
      dialect: process.env.PRODUCTION_DB_DIALECT,
    };
  }
};
module.exports = {
  DB_CONFIG: dbConfig(process.env.NODE_ENV),
};
