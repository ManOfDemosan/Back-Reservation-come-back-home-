const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reservation = sequelize.define(
    'Reservation',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'Pending',
        },
    },
    {
        timestamps: true,
    }
);

sequelize
    .sync()
    .then(() => {
        console.log('Reservation table created or already exists.');
    })
    .catch((error) => {
        console.error('Error creating table:', error);
    });

module.exports = Reservation;
