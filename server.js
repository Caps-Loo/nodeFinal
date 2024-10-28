const express = require('express');
const path = require('path');
const app = express();

// Port yang digunakan
const PORT = process.env.PORT || 3003;

// Middleware untuk menyediakan file statis dari direktori 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

// Server listening
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
