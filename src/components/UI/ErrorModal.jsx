import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import Modal from './Modal';

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onErrorClose={props.onErrorClose}/>, document.getElementById('backdrop')
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onErrorClose={props.onErrorClose}
        />, document.getElementById('modal')
      )}
    </>
  );
}

export default ErrorModal;
