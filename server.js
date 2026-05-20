const express = require('express');
const app = express();

// Пайдаланушы жіберген JSON мәліметтерін оқу үшін
app.use(express.json());

// CSS және басқа файлдарды іске қосу үшін (егер public қалтасы болса)
app.use(express.static('public'));

// Негізгі бетті көрсету
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Render немесе жергілікті портты автоматты анықтау
const PORT = process.env.PORT || 3000;

// Серверді іске қосу
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Сервер ${PORT} портында сәтті іске қосылды!`);
});

// Қателерді бақылау (сервер құлап қалмас үшін)
process.on('uncaughtException', (err) => {
    console.error('Қате анықталды:', err);
});