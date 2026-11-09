const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "CI/CD Application Running"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.get("/api/events", (req, res) => {
    res.json([
        { id: 1, name: "DevOps Workshop" },
        { id: 2, name: "Full Stack Meetup" }
    ]);
});

module.exports = app;