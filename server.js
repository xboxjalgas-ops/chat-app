const express = require('express');
const bcrypt = require('bcryptjs'); // Парольді шифрлау үшін
const app = express();

app.use(express.json());

// Парольді тексеру функциясы
const validatePassword = (password) => {
    // 8 таңба, кемінде 1 сан және 1 әріп
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
};

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (!validatePassword(password)) {
        return res.status(400).send("Қате: Пароль 8 таңбадан аспауы керек, сан және әріп болуы шарт!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // Мұнда дерекқорға (database) сақтау коды болады
    res.send("Тіркелу сәтті өтті!");
});

app.listen(3000, () => console.log('Сервер 3000 портында істеп тұр'));