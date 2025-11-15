import { useEffect, useState } from 'react'


export default function useFetch(url, deps = []) {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


useEffect(() => {
if (!url) return
let cancelled = false
setLoading(true)
setError(null)
fetch(url)
.then((r) => {
if (!r.ok) throw new Error('Network response was not ok')
return r.json()
})
.then((json) => !cancelled && setData(json))
.catch((err) => !cancelled && setError(err))
.finally(() => !cancelled && setLoading(false))


return () => { cancelled = true }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, deps)


return { data, loading, error }
}