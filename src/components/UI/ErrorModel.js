import ReactDom from "react-dom";

import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModel.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onDismissError}></div>;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorModel = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onDismissError={props.onDismissError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onDismissError={props.onDismissError}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModel;
