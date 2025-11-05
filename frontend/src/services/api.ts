
import type { Student } from "../types/Student"

const API_URL = "http://localhost:5000"

//get students
export async function getStudents(): Promise<Student[]> {
    const res = await fetch(`${API_URL}/students`)
    if(!res.ok) throw new Error("failed top fetch students")
    return res.json()
}

//add student
export async function addStudent(student: Omit<Student, "id">): Promise<Student> {

    const res = await fetch(`${API_URL}/students`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
    })
    if(!res.ok) throw new Error("failed top create student")
    return res.json()
}


//update student

export async function updateStudent(id:number, student: Student): Promise<void>{
    const res = await fetch(`${API_URL}/students/${id}`,{
        method:"PUT",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(student),
    })

    if(!res.ok)throw new Error("failed to update student")
}

export async function deleteStudent(id:number):Promise<void>{
    const res = await fetch(`${API_URL}/students/${id}`,{
        method:"DELETE",
    })
    if(!res.ok)throw new Error("failed to delete student")
}