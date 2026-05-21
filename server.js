const express = require('express');
const app = express();
const path = require('path');

// Файлдарды (html, css) оқитын орта
app.use(express.static(__dirname));

// Басты бетті жүктеу
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Портты анықтау
const PORT = process.env.PORT || 3000;

// Серверді іске қосу
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Сервер ${PORT} портында сәтті іске қосылды!`);
});