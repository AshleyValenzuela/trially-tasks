const Sequelize = require("sequelize");
const db = require("./db");

// define a User model
const User = db.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// sync the model with the database
const connectToDB = async () => {
  try {
    await db.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
    await User.sync();
    console.log("All models were synchronized successfully.");

    // execute a query to get all users
    const users = await User.findAll();
    console.log('users length', users.length);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectToDB();

module.exports = User;
