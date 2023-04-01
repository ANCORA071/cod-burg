import Sequelize from 'sequelize';
import configDatabase from '../config/database';
import User from '../app/models/User';
import Product from '../app/models/Product';
import Category from '../app/models/Category';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const dbPass = process.env.DB_PASS_MONGO;
const dbUser = process.env.DB_USER_MONGO;

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(configDatabase);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }
  // mongodb://localhost:27017/codeburger
  // `mongodb+srv://${dbUser}:${dbPass}@codeburger.acmklcw.mongodb.net/?retryWrites=true&w=majority`

  mongo() {
    this.mongoConnection = mongoose.connect(
    'mongodb://mongo-devburger:27017/mongo',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
  }
}

export default new Database();
