import type { Student } from "../types/Student";
import { addStudent, updateStudent } from "../services/api";
import React, { useEffect, useState } from "react";
import type { FormEvent } from "react";

interface Props{
    selected?: Student | null
    onSuccess: () => void
}

export default function StudentForm({selected, onSuccess}:Props){
    const [form, setForm] = useState<Omit<Student,"id">>({
        name:"",
        age:0,
        email:"",
    })

    useEffect(()=>{
        if(selected){
            setForm({
                name:selected.name,
                age:selected.age,
                email:selected.email,
            })
        }else{
            setForm({name:"",age:0,email:""})
        }
    },[selected])

    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target
        setForm((prev)=>({...prev, [name]:name === "age" ? Number(value): value}))
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        try {
            if (selected?.id) {
            await updateStudent(selected.id, { ...form });
            console.log("Updated student");
            } else {
            await addStudent(form);
            console.log("Added student");
            }
            onSuccess();
        } catch (err) {
            console.error("Error submitting form", err);
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <h2>{selected ? "Edit Student":"Add Student"}</h2>
            <input name="name" onChange={handleChange} placeholder="Name" required value={form.name}/>
            <input name="age" type="number" onChange={handleChange} placeholder="Age" required value={form.age}/>
            <input name="email" onChange={handleChange} placeholder="Email" required value={form.email}/>
            <button>{selected ? "Update" : "Add"}</button>
        </form>
    )
}