const multer = require('multer');

// Configure storage for uploaded files

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory where files will be stored
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop(); // ambil ekstensi

        // Format tanggal dan waktu: ddmmyy-HHMM
        const date = new Date();
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0'); // bulan dari 0-11
        const yy = String(date.getFullYear());
        const hh = String(date.getHours()).padStart(2, '0');
        const min = String(date.getMinutes()).padStart(2, '0');
        const ss = String(date.getSeconds()).padStart(2, '0');
        const dateTimeString = `${dd}${mm}${yy}-${hh}${min}${ss}`;

        // Info user
        const userId = req.user?.id || 'anonymous';
        const userName = req.user?.name?.replace(/\s+/g, '-').toLowerCase() || 'user';

        cb(null, `${dateTimeString}-${userId}-${userName}.${ext}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true); // Accept the file
    } else {
        cb(new Error('Ekstension File Salah. Hanya boleh file JPEG, PNG, dan JPG.'), false); // Reject the file
    }
};

const upload = multer({
    storage, fileFilter
});

module.exports = upload;