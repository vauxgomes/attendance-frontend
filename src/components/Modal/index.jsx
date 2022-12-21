import './styles.css'

export default function Modal(props) {
  return (
    <div className={`modal-container ${props.show && 'show'}`}>
      <div className="container">
        <div className="modal-content">
          <div className="close-button" onClick={props.handleClose}>
            <i className="bx bx-x"></i>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  )
}
