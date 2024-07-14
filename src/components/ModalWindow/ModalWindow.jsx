import { useDispatch, useSelector } from "react-redux";

import { switchModal } from "../../redux/campers/slice";
import { selectModal } from "../../redux/campers/selectors";

import css from "./ModalWindow.module.css";

const ModalWindow = ({ children }) => {
  const dispatch = useDispatch();

  const modalWindow = useSelector(selectModal);

  // console.log(modalWindow);

  const closeModal = () => {
    dispatch(switchModal(false));
  };

  return (
    modalWindow && (
      <div className={css.modalOverlay}>
        <div className={css.modalWindow}>{children}</div>
      </div>
    )
  );
};

export default ModalWindow;
