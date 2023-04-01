// import dotenv from 'dotenv';
// dotenv.config();
// const dbPass = process.env.DB_PASS;
// const dbUser = process.env.DB_USER;

module.exports = {
  dialect: 'postgres',
  host: 'postgres-devburger',
  username: 'postgres',
  password: 'myscretpassword',
  database: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
