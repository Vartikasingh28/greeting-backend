const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// API route to handle greeting requests
app.get("/api/greet", (req, res) => {
    const name = req.query.name;

    // ✅ If no name is provided, return an error message
    if (!name || name.trim() === "") {
        return res.status(400).json({ error: "Name is required." });
    }

    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
