import React, { useMemo, useState } from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'
import Button from '../components/Button'


const PAGE_SIZE = 10


const ApiPage = () => {
const [page, setPage] = useState(1)
const [query, setQuery] = useState('')


const url = `https://jsonplaceholder.typicode.com/posts`
const { data, loading, error } = useFetch(url, [url])


const filtered = useMemo(() => {
if (!data) return []
return data.filter((d) => d.title.includes(query) || d.body.includes(query))
}, [data, query])


const total = filtered.length
const pages = Math.max(1, Math.ceil(total / PAGE_SIZE))
const current = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)


return (
<div className="space-y-6">
<Card>
<h2 className="text-2xl font-bold mb-4">Posts (JSONPlaceholder)</h2>
<div className="flex gap-2 mb-4">
<input value={query} onChange={(e) => { setQuery(e.target.value); setPage(1) }} placeholder="Search posts..." className="flex-grow px-4 py-2 border rounded-lg" />
<Button onClick={() => { setQuery(''); setPage(1) }} variant="secondary">Clear</Button>
</div>


{loading && <p>Loading...</p>}
{error && <p className="text-red-500">Error loading posts</p>}


{!loading && !error && (
<div>
<ul className="space-y-3">
{current.map(post => (
<li key={post.id} className="p-3 border rounded hover:bg-gray-50">
<h3 className="font-semibold">{post.title}</h3>
<p className="text-sm text-gray-600">{post.body}</p>
</li>
))}
</ul>


<div className="flex items-center gap-2 mt-4">
<Button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</Button>
<span>Page {page} / {pages}</span>
<Button onClick={() => setPage(p => Math.min(pages, p + 1))} disabled={page === pages}>Next</Button>
</div>


<div className="mt-2 text-sm text-gray-500">Showing {current.length} of {total} result(s)</div>
</div>
)}
</Card>
</div>
)
}


export default ApiPage