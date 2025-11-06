



import DashBoard from './pages/DashBoard'
import Students from './pages/Students'
import Login from './pages/Login';
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout';
import About from './pages/About';
import type { JSX } from 'react';


const PrivateRoute = ({children}:{children:JSX.Element}) =>{
  const token = localStorage.getItem("token")
  return  token ? children : <Navigate to="/"/>
}

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Login/>}/>
        
        <Route path="/"
        element={<PrivateRoute>
          <Layout />
        </PrivateRoute>}
        >
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/students" element={<Students/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
        
      </Routes>
  );
}

