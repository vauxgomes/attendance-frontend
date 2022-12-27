export default function Header({ title, subtitle, children }) {
  return (
    <header className="d-flex align-items-center justify-content-between gap-2 mb-3">
      <div>
        <h2 className="fs-1 mb-0">{title}</h2>
        <p className="text-muted small">{subtitle}</p>
      </div>

      {children}
    </header>
  )
}

export function SubHeader({ title, subtitle, children }) {
  return (
    <header className="d-flex align-items-center justify-content-between gap-2">
      <div>
        <h5 className="mb-0">{title}</h5>
        <p className="small text-secondary">{subtitle}</p>
      </div>
      {children}
    </header>
  )
}
