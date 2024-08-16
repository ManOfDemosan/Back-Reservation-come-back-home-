const Reservation = require('../models/Reservation');

exports.getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        console.log('Fetched Reservations:', reservations); // 데이터가 올바르게 반환되는지 확인
        res.status(200).json(reservations);
    } catch (error) {
        console.error('Failed to fetch reservations:', error);
        res.status(500).json({ error: 'Failed to fetch reservations' });
    }
};

exports.createReservation = async (req, res) => {
    try {
        const { name, date } = req.body;
        const newReservation = await Reservation.create({
            name,
            date,
            status: 'Pending',
        });
        res.status(201).json(newReservation);
    } catch (error) {
        console.error('Failed to create reservation:', error);
        res.status(500).json({ error: 'Failed to create reservation' });
    }
};
