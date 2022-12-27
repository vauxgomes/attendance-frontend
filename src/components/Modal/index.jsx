import './styles.css'

export default function Modal({ children, show, handleClose }) {
  return (
    <div className={`modal-container ${show ? 'show' : 'noselect'}`}>
      <div className="container">
        <div className="modal-content">
          <div className="close-button" onClick={handleClose}>
            <i className="bx bx-x bx-sm"></i>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
