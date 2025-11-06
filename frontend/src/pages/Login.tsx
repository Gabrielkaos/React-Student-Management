
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authServices";



export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()


    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        try{
            const {token} = await login(email, password)
            localStorage.setItem("token",token)
            navigate("/dashboard")
        }catch{
            setError("Invalid email or password")
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <input
                type="email"
                placeholder="Email"
                className="border p-2 w-full mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="Password"
                className="border p-2 w-full mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-red-500">{error}</p>}
                <button className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
            </form>
        </div>
    )
}


