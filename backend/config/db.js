const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log('MongoDB Sapira Terkoneksi');
    } catch (error) {
        console.error('MongoDB Gagal Terhubung :', error.message);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB;