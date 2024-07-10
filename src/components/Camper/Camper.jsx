import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";

import { getOneCamper } from "../../redux/campers/operations";
import CamperModalInfo from "../CamperModalInfo/CamperModalInfo";
import { useParams } from "react-router-dom";

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

const Camper = ({
  camper: {
    gallery,
    name,
    price,
    rating,
    location,
    reviews,
    description,
    adults,
    transmission,
    engine,
    details,
    _id,
  },
}) => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const openModal = () => {
    dispatch(getOneCamper(_id));
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <img src={gallery[0]} alt="Camper photo" width="290" />
      <div>
        <h2>{name}</h2>
        <div>
          <p>{`€${price},00`}</p>
          <button type="click">Heart</button>
        </div>
      </div>
      <div>
        <div>
          <p>{`${rating}(${reviews.length} Reviews)`}</p>
          <p>{location}</p>
        </div>
        <p>{description}</p>
      </div>
      <ul>
        <li>
          <p>{adults} adults</p>
        </li>
        <li>
          <p>{transmission[0].toUpperCase() + transmission.substring(1)}</p>
        </li>
        <li>
          <p>{engine[0].toUpperCase() + engine.substring(1)}</p>
        </li>
        <li>{details.kitchen && <p>Kitchen</p>}</li>
        <li>
          {details.beds === 1 ? (
            <p>{`${details.beds} bed`}</p>
          ) : (
            <p>{`${details.beds} beds`}</p>
          )}
        </li>
        <li>{details.airConditioner && <p>AC</p>}</li>
      </ul>
      <button type="click" onClick={openModal}>
        Show more
      </button>

      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Info about camper"
      >
        <CamperModalInfo />
      </Modal>
    </div>
  );
};

export default Camper;
