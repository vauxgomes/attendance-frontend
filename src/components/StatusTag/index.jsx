import './styles.css'

export const statuses = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUCCESS: 'SUCCESS',
  DANGER: 'DANGER',
  WARNING: 'WARNING',
  PENDING: 'PENDING'
}

export default function StatusTag({ status, text = '' }) {
  return (
    <div className={`badge rounded-pill badge-${status.toLocaleLowerCase()}`}>
      {text || status.toLowerCase()}
    </div>
  )
}
