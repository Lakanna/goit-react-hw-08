import css from "./Contact.module.css";
import { MdPhone } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import ModalWindow from "../Modal/ModalWindow";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactBox}>
      <div>
        <div className={css.nameBox}>
          <IoPerson style={{ width: 20, height: 20 }} />
          <p>{name}</p>
        </div>
        <div className={css.contactData}>
          <MdPhone style={{ width: 20, height: 20 }} />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.btnDelete} onClick={openModal}>
        Delete
      </button>
      {modalIsOpen === true && (
        <ModalWindow
          onCloseModal={closeModal}
          modalIsOpen={modalIsOpen}
          deleteContact={onDelete}
          id={id}
        />
      )}
    </div>
  );
}
