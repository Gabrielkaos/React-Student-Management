import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import type { Student } from "../types/Student";
import { useState } from "react";

export default function Students(){
    const [selected, setSelected] = useState<Student | null>(null)
    const [refresh, setRefresh] = useState(false)

    function handleSucess(){
        setSelected(null)
        setRefresh((r)=>!r)
    }


    return (
        <div>
            <h2>Manage Students</h2>
            <StudentForm selected={selected} onSuccess={handleSucess}/>
            <StudentList onEdit={setSelected} refresh={refresh}/>
        </div>
    )
}