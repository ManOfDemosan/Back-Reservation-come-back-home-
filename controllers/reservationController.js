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
        console.log('Received data:', req.body); // 요청 데이터 로그
        const newReservation = await Reservation.create({
            name,
            date,
            status: 'Pending',
        });
        res.status(201).json(newReservation);
        console.log('Created Reservation:', newReservation); // 생성된 예약 로그
    } catch (error) {
        console.error('Failed to create reservation:', error);
        res.status(500).json({ error: 'Failed to create reservation' });
    }
};
