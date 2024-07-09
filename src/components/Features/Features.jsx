import { useSelector } from "react-redux";

import { selectOneCamper } from "../../redux/campers/selectors";
import FormToOrder from "../FormToOrder/FormToOrder";

const Features = () => {
  const camper = useSelector(selectOneCamper);

  return (
    <div>
      <ul></ul>
      <FormToOrder />
    </div>
  );
};

export default Features;
