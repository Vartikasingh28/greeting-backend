const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; 
app.use(cors());
app.use(express.json());

app.get("/api/greet", (req, res) => {
    const name = req.query.name;
    
    if (!name || name.trim() === "") {
        return res.status(400).json({ error: "Name is required." });
    }

    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
