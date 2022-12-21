import './styles.css'

export const status = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUCCESS: 'SUCCESS',
  DANGER: 'DANGER',
  WARNING: 'WARNING',
  INFO: 'INFO'
}

export default function StatusTag({ status, text = '' }) {
  return (
    <div className={`badge rounded-pill badge-${status.toLocaleLowerCase()}`}>
      {text || status.toLowerCase()}
    </div>
  )
}
