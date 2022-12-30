import './styles.css';

import SwipableCard from '../../../../components/SwipableCard';

export default function AttendanceCard({ attendance, handleSubmit }) {
  const getSmallClass = () => {
    return attendance.present === undefined ? 'text-secondary' : ''
  }

  const getCardClass = () => {
    return `attendance-card ${
      attendance.id && (attendance.attended ? 'attended' : 'missed')
    }`
  }

  const handleSwipeEnd = (direction) => {
    if (!direction) {
      return
    }

    handleSubmit(attendance, direction >= 1)
  }

  return (
    <SwipableCard handleSwipeEnd={handleSwipeEnd}>
      <div className={getCardClass()}>
        <small className={getSmallClass()}>Student</small>
        <h5>{attendance.student_name}</h5>
      </div>
    </SwipableCard>
  )
}
