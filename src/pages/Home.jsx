import React from 'react'
import Card from '../components/Card'


const Home = () => (
<div className="space-y-6">
<Card>
<div className="space-y-3">
<h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Welcome to Task Manager</h1>
<p className="text-gray-600 dark:text-gray-400 text-lg">A modern React application showcasing components, hooks, Tailwind CSS, and API integration.</p>
</div>
</Card>


<Card>
<div className="space-y-4">
<div className="flex items-center gap-2">
<span className="text-2xl">🚀</span>
<h2 className="text-2xl font-bold text-gray-800 dark:text-white">Getting Started</h2>
</div>
<ul className="space-y-2 text-gray-600 dark:text-gray-400">
<li className="flex items-center gap-2"><span>✓</span> <span><strong>Tasks Page:</strong> Add, complete, and delete tasks with real-time filtering</span></li>
<li className="flex items-center gap-2"><span>✓</span> <span><strong>API Page:</strong> Fetch posts from JSONPlaceholder with search and pagination</span></li>
<li className="flex items-center gap-2"><span>✓</span> <span><strong>Dark Mode:</strong> Toggle between light and dark themes</span></li>
</ul>
</div>
</Card>


<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
<div className="text-center">
<span className="text-3xl">⚛️</span>
<h3 className="text-lg font-semibold mt-2">React</h3>
<p className="text-sm text-gray-600 dark:text-gray-400">Component-based UI</p>
</div>
</Card>
<Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20">
<div className="text-center">
<span className="text-3xl">🎨</span>
<h3 className="text-lg font-semibold mt-2">Tailwind CSS</h3>
<p className="text-sm text-gray-600 dark:text-gray-400">Utility-first styling</p>
</div>
</Card>
<Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
<div className="text-center">
<span className="text-3xl">🔧</span>
<h3 className="text-lg font-semibold mt-2">Custom Hooks</h3>
<p className="text-sm text-gray-600 dark:text-gray-400">Reusable logic</p>
</div>
</Card>
</div>
</div>
)


export default Home