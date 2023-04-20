import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModel.module.css";

const ErrorModel = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onDismissError}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onDismissError}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModel;
