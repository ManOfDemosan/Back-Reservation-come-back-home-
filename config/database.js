const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('comebackhome', 'postgres', 'yourpassword', {
    host: 'svc.sel4.cloudtype.app', // 호스트는 포트 번호 없이 설정
    dialect: 'postgres',
    port: 30785, // 포트 번호는 따로 설정
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
