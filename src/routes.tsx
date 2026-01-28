import { Route, Routes } from 'react-router-dom'
import Login from './login'
import Dashboard from './dashboard'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}