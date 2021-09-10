

const express = require("express")

const server = express()

server.use(express.json())
const users = [
    {username: "Matt",
      bio: "developer"
    },
    {username: "Matt",
      bio: "developer"
    },
    {username: "Matt",
      bio: "developer"
    }
]



server.get("/api/users", (req, res) => {
    res.status(200).json(users)
})

server.post("/api/register", (req, res) => {
    const info = req.body
    res.status(201).json(info)
})

server.post("/api/login", (req, res) => {
    const info = req.body
    if (!info.name || !info.password) {
    res.status(400).json({ message: "That username or password is incorrect or doesn't exist."})
    } else {
        res.status(201).json({ message: "Welcome the API!"})
    }
    
})









module.exports = server;