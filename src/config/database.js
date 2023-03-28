// import dotenv from 'dotenv';
// dotenv.config();
// const dbPass = process.env.DB_PASS;
// const dbUser = process.env.DB_USER;

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'codeburger',
  define: {
    timespamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
