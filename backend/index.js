const express = require('express');
const mongoose = require('mongoose'); // No need for destructuring
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json()); // Add this to parse JSON payloads

const port = 3000;
const url = 'mongodb+srv://aakashsaini948585:xNsqiPIZbv1lbIjC@cluster0.rtkag.mongodb.net/';

// Define the schema and model only once
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});
const Form = mongoose.model('Form', formSchema);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/submit', formSubmitFunction);

async function formSubmitFunction(req, res) {
    console.log(req.body); // Now this should log the correct body
    try {
        await mongoose.connect(url);
        const form = new Form({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
        await form.save();
        res.send('Form submitted successfully');
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
}
// https://drive.google.com/file/d/1T7QMHzinN0OyEUQP4uyHYJV-dG0XDbsp/view?usp=sharing
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
