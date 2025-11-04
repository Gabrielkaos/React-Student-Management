const express = require("express")
const sqlite3 = require("sqlite3").verbose()
const cors = require("cors")

const app = express()
const PORT = 5000


app.use(cors())
app.use(express.json())


//create database
const db = new sqlite3.Database("./students.db",(err)=>{
    if(err)console.error(err.message)
    else console.log("Connected to database")
})

db.run(`CREATE DATABASE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    email TEXT
    )
`)

//get students

app.get("/students",(req, res) => {
    db.all("SELECT * FROM students",[],(err, rows) => {
        if(err)res.status(400).json({error:err.message})
        else res.json(rows)
    })
})