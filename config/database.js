const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('comebackhome', 'postgres', 'yourpassword', {
    host: 'svc.sel4.cloudtype.app:30785',
    dialect: 'postgres',
    port: 5432,
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Database connected successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

module.exports = sequelize;
