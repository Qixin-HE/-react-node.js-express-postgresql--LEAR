module.exports = {
    HOST: "localhost",
    USER: "my_user",
    PASSWORD: "root",
    DB: "my_database",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };