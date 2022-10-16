import React from "react";
import Modal from "react-bootstrap/Modal";
import "./Window.css";

const Window = ({ currentDate, name, thisDay }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const isBtnDsbled = currentDate >= thisDay ? false : true;
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <button
        className={`window ${name} ${isBtnDsbled ? "darker" : "pointer"}`}
        onClick={openModal}
        disabled={isBtnDsbled}
      />
      <Modal
        show={isModalOpen}
        onHide={closeModal}
        size="lg"
        centered
        contentClassName="modal-additional"
      >
        <Modal.Header closeButton>
          <Modal.Title> {thisDay} </Modal.Title>
        </Modal.Header>
        <Modal.Body>{name}</Modal.Body>
        <Modal.Footer>
          <button onClick={closeModal}>Zamknij</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { Window };
