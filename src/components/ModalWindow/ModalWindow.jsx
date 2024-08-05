import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchModal } from "../../redux/campers/slice";
import { selectModal } from "../../redux/campers/selectors";
import css from "./ModalWindow.module.css";

const ModalWindow = ({ children }) => {
  const dispatch = useDispatch();

  const modalWindow = useSelector(selectModal);

  const closeModal = useCallback(() => {
    dispatch(switchModal(false));
  }, [dispatch]);

  useEffect(() => {
    const closeButton = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", closeButton);

    return () => {
      document.removeEventListener("keydown", closeButton);
    };
  }, [closeModal]);

  return (
    modalWindow && (
      <div className={css.modalOverlay} onClick={closeModal}>
        <div className={css.modalWindow} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    )
  );
};

export default ModalWindow;
