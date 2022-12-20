import './styles.css'

import { useState } from 'react'

export default function SearchBar({ className }: { className?: string }) {
  const [search, setSearch] = useState('')

  return (
    <div className={`searchbar ${className}`}>
      <i className="bx bx-search-alt"></i>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
    </div>
  )
}
