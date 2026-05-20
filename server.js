const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

// Файлдарды ортақ ету
app.use(express.static(path.join(__dirname)));

io.on('connection', (socket) => {
    socket.on('chat message', (data) => {
        io.emit('chat message', data);
    });

    socket.on('game-win', (username) => {
        io.emit('chat message', { user: '🏆 Ойын жүйесі', text: `${username} жеңіске жетті!` });
    });
});

// Хостингтер үшін динамикалық порт
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log(`Сервер ${PORT} портында іске қосылды`));