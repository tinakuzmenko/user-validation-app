import Card from './Card';
import Button from './Button';
import styles from './Modal.module.css';

const Modal = props => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onErrorClose}>OK</Button>
      </footer>
    </Card>
  );
}

export default Modal;
