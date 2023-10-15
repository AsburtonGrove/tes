const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

app.use(express.static('public'));

app.post('/upload', upload.single('file'), (req, res) => {
    res.send('Unggahan berhasil');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
