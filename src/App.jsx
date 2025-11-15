import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import TasksPage from './pages/TasksPage'
import ApiPage from './pages/ApiPage'


const App = () => {
return (
<div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
<Navbar />


<main className="flex-1 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 w-full">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/tasks" element={<TasksPage />} />
<Route path="/api" element={<ApiPage />} />
</Routes>
</main>


<Footer />
</div>
)
}


export default App