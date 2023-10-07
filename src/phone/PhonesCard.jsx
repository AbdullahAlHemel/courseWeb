import { Link } from "react-router-dom";

const PhonesCard = ({phone}) => {
    const {title} = phone || {}
    return (

  <div >
    <h2>{title}</h2>
    <Link className="bg-red-200 p-3 rounded  " to={`/phones/${id}`}>See Details</Link>
  </div>

    );
};

export default PhonesCard;