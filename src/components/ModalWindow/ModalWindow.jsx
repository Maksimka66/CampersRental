import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import { switchModal } from "../../redux/campers/slice";
import { selectModal } from "../../redux/campers/selectors";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalWindow = ({ children }) => {
  const dispatch = useDispatch();

  const modalWindow = useSelector(selectModal);

  console.log(modalWindow);

  const closeModal = () => {
    dispatch(switchModal(false));
  };

  return (
    <Modal
      isOpen={modalWindow}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Info about camper"
    >
      {children}
    </Modal>
  );
};

export default ModalWindow;
