import { useEffect, useState } from "react";
import type { Student } from "../types/Student";
import { getStudents, deleteStudent } from "../services/api";


interface Props{
    onEdit: (student: Student) =>void;
    refresh:boolean
}


export default function StudentList({onEdit, refresh}: Props){
    const [students, setStudents] = useState<Student[]>([])

    async function load(){
        const data = await getStudents()
        setStudents(data)
    }
    useEffect(()=>{
        load()
    }, [refresh])

    async function handleDelete(id:number){
        await deleteStudent(id)
        load()
    }

    return (
        <div>
            <h2>Students</h2>
            <ul>
                {students.map((s)=>(
                    <li key={s.id}>
                        {s.name} {s.age}- {s.email}
                        <button onClick={()=>onEdit(s)}>Edit</button>
                        <button onClick={()=>handleDelete(s.id!)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}