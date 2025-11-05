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

db.run(`CREATE TABLE IF NOT EXISTS students (
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

//add new students
app.post("/students",(req, res)=>{
    const {name, age, email} = req.body

    db.run(
        `INSERT INTO students (name, age, email) VALUES (?, ?, ?)`,
        [name, age, email],
        function(err){
            if (err)res.status(400).json({error:err.message})
            else res.json({id:this.lastID,name, age, email})
        }
    )
})

//update
app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  console.log("PUT /students:", id, name, age, email);
  db.run(
    "UPDATE students SET name=?, age=?, email=? WHERE id=?",
    [name, age, email, id],
    function (err) {
      if (err) return res.status(400).json({ error: err.message });
      res.json({ message: "Updated", changes: this.changes });
    }
  );
});


//delete
app.delete("/students/:id",(req,res) =>{
    const {id}= req.params

    db.run(
        `DELETE FROM students WHERE id=?`,id,
        function(err){
            if (err)res.status(400).json({error:err.message})
            else res.json({message:"Student deleted"})
        }
    )
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))