import './styles.css'

import SwipableCard from '../../../components/SwipableCard'

export default function AttendanceCard({ student, handleSubmit }) {
  const getSmallClass = () => {
    return student.present === undefined ? 'text-secondary' : ''
  }

  const getCardClass = () => {
    if (student.present === undefined) return 'attendance-card'
    return 'attendance-card ' + (student.present ? 'attended' : 'missed')
  }

  return (
    <SwipableCard
      key={student.id}
      handleSwipeEnd={(d) => handleSubmit(student, d)}
    >
      <div className={getCardClass()}>
        <small className={getSmallClass()}>Student</small>
        <h5>{student.name}</h5>
      </div>
    </SwipableCard>
  )
}
