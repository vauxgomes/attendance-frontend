import './styles.css'

export default function SearchBar({ search, setSearch, className }) {
  return (
    <div className={`searchbar ${className}`}>
      <i className="bx bx-search-alt"></i>
      <input
        value={search || ''}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search..."
      />
    </div>
  )
}
