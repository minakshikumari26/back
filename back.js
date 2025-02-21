const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, error: "Invalid input. 'data' must be an array." });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));
    const highest_alphabet = alphabets.length > 0 ? [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)] : [];

    const response = {
        is_success: true,
        user_id: "john_doe_17091999", // Replace with your fullname_dob
        email: "john@xyz.com", // Replace with your college email
        roll_number: "ABCD123", // Replace with your roll number
        numbers,
        alphabets,
        highest_alphabet
    };

    res.status(200).json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});