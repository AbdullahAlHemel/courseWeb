import { Link } from "react-router-dom";

const FavoriteCard = ({phone}) => {
    const {title} = phone || {}
    return (

   <> <h2>{title}</h2>
 
  <div class="p-6 pt-0 mx-auto my-2">
    <Link className="bg-blue-500 text-white p-3 rounded  " to={`/phones/${id}`}>See Details</Link>
  </div>

  </>
    );
};

export default FavoriteCard;

