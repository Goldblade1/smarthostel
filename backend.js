const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Allows frontend to communicate with backend

// --- MOCK Mongoose Models (Based on your UI) ---
const Student = mongoose.model('Student', new mongoose.Schema({
    studentId: String, present: Boolean, room: String
}));
const GatePass = mongoose.model('GatePass', new mongoose.Schema({
    studentId: String, reason: String, status: { type: String, default: 'Pending' }
}));

// --- CORE API ROUTES ---

// 1. Authentication (Replaces handleLogin)
app.post('/api/login', (req, res) => {
    const { id, password, role } = req.body;
    // In production: Verify hash and generate JWT here
    res.json({ token: "dummy_jwt_token", role, id });
});

// 2. Student Dashboard Routes
app.post('/api/gatepass', async (req, res) => {
    const newPass = new GatePass(req.body);
    await newPass.save();
    res.status(201).json({ message: "Gate pass applied successfully" });
});

app.post('/api/sos', (req, res) => {
    const { studentId, room } = req.body;
    // Logic to trigger SMS to Warden and update Alerts collection
    res.json({ message: `SOS triggered for room ${room}` });
});

// 3. Warden Dashboard Routes
app.put('/api/attendance/bulk', async (req, res) => {
    const { date, attendanceData } = req.body;
    // Loop through attendanceData and update Student collection
    res.json({ message: "Bulk attendance updated" });
});

// Start Server
mongoose.connect('mongodb://localhost:27017/smarthostel', { useNewUrlParser: true })
    .then(() => app.listen(3000, () => console.log('Server running on port 3000')));