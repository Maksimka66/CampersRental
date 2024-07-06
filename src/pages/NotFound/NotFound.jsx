import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <b>Oops! No pages with such request!</b>
      <Link to="/">Back to home page</Link>;
    </div>
  );
};

export default NotFound;
