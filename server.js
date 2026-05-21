const express = require('express');
const path = require('path');
const app = express();

// 1. Барлық статикалық файлдарды (CSS, HTML, JS) осы папкадан оқиды
app.use(express.static(path.join(__dirname)));

// 2. Басты бетті көрсету (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 3. Render немесе жергілікті портты автоматты анықтау
const PORT = process.env.PORT || 3000;

// 4. Серверді іске қосу
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Сервер ${PORT} портында сәтті іске қосылды!`);
});

// Қателерді бақылау (Сервер құлап қалмас үшін)
process.on('uncaughtException', (err) => {
    console.error('Қате анықталды:', err);
});