import { useState } from 'react'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import type { Student } from './types/Student'

function App() {
  const [selected, setSelected] = useState<Student | null>(null)
  const [refresh, setRefresh] = useState(false)

  function handleSuccess(){
    setSelected(null)
    setRefresh((prev)=>!prev)
  }

  return (
    <div style={{padding:"1rem"}}>
      <h1>Student Management System</h1>
      <StudentForm selected={selected} onSuccess={handleSuccess}/>
      <StudentList onEdit={setSelected} refresh={refresh}/>
    </div>
  )
}

export default App
