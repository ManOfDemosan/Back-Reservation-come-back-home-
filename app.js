const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// CORS 설정
app.use(
    cors({
        origin: 'https://comebackhomejaehwan.netlify.app', // 프론트엔드 도메인 허용
        credentials: true, // 자격 증명을 포함한 요청을 허용하려면 설정
    })
);

// JSON 파싱 미들웨어
app.use(express.json());

// 예약 라우트 파일 가져오기
const reservationRoutes = require('./routes/reservations');

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
