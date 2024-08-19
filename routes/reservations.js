const express = require('express');
const app = express();
const port = 3000;

// 예약 라우트 파일 가져오기
const reservationRoutes = require('./routes/reservationRoutes');

// 기본 경로에 대한 응답
app.get('/', (req, res) => {
    res.send('Welcome to the Reservation API!');
});

// 예약 관련 라우트를 사용
app.use('/reservations', reservationRoutes);

// 서버 실행
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
