module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'Mithun@123',
  DB: 'Users',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
