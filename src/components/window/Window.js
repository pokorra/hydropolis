import React from "react";
import Modal from "react-bootstrap/Modal";
import "./Window.css";
import { data } from "../../config/database";

const Window = ({ currentDate, name, thisDay, num }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const isBtnDsbled = currentDate >= thisDay ? false : true;
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <button
        className={`window ${name} ${isBtnDsbled ? `dis-${name}` : `active-${name}`}`}
        onClick={openModal}
        disabled={isBtnDsbled}
      />
      <Modal
        show={isModalOpen}
        onHide={closeModal}
        size="lg"
        centered
        contentClassName={`modal-additional modal-${name}`}
      >
        {/* <Modal.Header closeButton> */}
          {/* <Modal.Title> {thisDay} </Modal.Title> */}
        {/* </Modal.Header> */}
        <Modal.Body>
          {data[num]}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={closeModal}>Zamknij</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { Window };
