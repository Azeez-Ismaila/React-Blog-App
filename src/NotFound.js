import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Oops, Sorry </h2>
      <p>Page Cannot be Found</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  );
};

export default NotFound;
