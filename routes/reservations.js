const express = require('express');
const router = express.Router();
const {
    createReservation,
    getReservations,
} = require('../controllers/reservationController');

// 예약 목록 조회 경로
router.get('/', getReservations);

// 예약 생성 경로
router.post('/reserve', createReservation);

module.exports = router;
