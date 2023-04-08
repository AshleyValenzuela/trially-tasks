const Sequelize = require("sequelize");

const db = new Sequelize(`postgres://localhost:5432/api`, {
  host: "localhost",
  dialect: "postgres",
});

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = db;
