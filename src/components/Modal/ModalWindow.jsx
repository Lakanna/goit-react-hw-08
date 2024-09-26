import Modal from "react-modal";
import css from "./ModalWindow.module.css";

Modal.setAppElement("#root");

export default function ModalWindow({
  onCloseModal,
  modalIsOpen,
  deleteContact,
  id,
}) {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <div className={css.describe}>
          <p>Do you really want to delete this contact?</p>
        </div>
        <div className={css.buttotsContainer}>
          <button
            type="button"
            className={css.button}
            onClick={() => deleteContact(id)}
          >
            Delete contact
          </button>
          <button
            type="button"
            className={css.buttonReturn}
            onClick={onCloseModal}
          >
            Cansel and return
          </button>
        </div>
      </Modal>
    </>
  );
}
