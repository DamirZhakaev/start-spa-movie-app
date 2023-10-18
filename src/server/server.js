const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 82; // Измените порт на порт вашего MAMP-сервера

// Этот код настраивает заголовки CORS
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3001");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
// Middleware для разрешения CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:82'); // Замените это на ваше фактическое origin
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  

app.use(bodyParser.json());

// Подключение к базе данных MySQL
const db = mysql.createConnection({
    host: "localhost", // Измените хост на вашу конфигурацию MAMP
    port: 3306, // Порт MySQL по умолчанию для MAMP
    user: "root",
    password: "root", // Пароль, если он установлен
    database: "movies_spa",
});

db.connect((err) => {
    if (err) {
        console.error("Ошибка подключения к базе данных:", err);
        throw err;
    }
    console.log("Соединение с базой данных MySQL установлено");
});

// Обработка POST-запроса для сохранения сообщения
app.post("/api/savemessage", (req, res) => {
    const { text } = req.body;

    // Сохранение сообщения в базе данных
    const sql = "INSERT INTO chat_messages (text) VALUES (?)";
    db.query(sql, [text], (err, result) => {
        if (err) {
            console.error("Ошибка при сохранении сообщения:", err);
            res.status(500).json({ error: "Ошибка при сохранении сообщения" });
        } else {
            console.log("Сообщение успешно сохранено в базе данных");
            res.json({ success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
