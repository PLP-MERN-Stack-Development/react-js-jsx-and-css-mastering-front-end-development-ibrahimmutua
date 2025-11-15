import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'


const Nav = () => {
const { theme, toggle } = useTheme()


return (
<nav className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-900 dark:to-gray-800 shadow-lg">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="flex items-center gap-8">
<Link to="/" className="text-2xl font-bold text-white hover:text-blue-100 transition-colors">📋 Task Manager</Link>
<div className="hidden md:flex items-center gap-6">
<NavLink to="/" end className={({isActive}) => isActive ? 'text-white font-semibold border-b-2 border-white pb-1' : 'text-blue-100 hover:text-white transition-colors'}>Home</NavLink>
<NavLink to="/tasks" className={({isActive}) => isActive ? 'text-white font-semibold border-b-2 border-white pb-1' : 'text-blue-100 hover:text-white transition-colors'}>Tasks</NavLink>
<NavLink to="/api" className={({isActive}) => isActive ? 'text-white font-semibold border-b-2 border-white pb-1' : 'text-blue-100 hover:text-white transition-colors'}>API</NavLink>
</div>
</div>


<div className="flex items-center gap-2">
<button onClick={toggle} className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white font-medium transition-all">
{theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
</button>
</div>
</div>
</div>
</nav>
)
}


export default Nav