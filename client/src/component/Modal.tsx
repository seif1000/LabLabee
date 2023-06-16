import Modal from "react-modal";

type ModalProps = {
  renderContnet: () => JSX.Element;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    minWidth: "500px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const ModalComponent = ({ renderContnet }: ModalProps) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={() => {}}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>{renderContnet()}</div>
    </Modal>
  );
};

export default ModalComponent;
