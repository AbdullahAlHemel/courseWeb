import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    const {title, image, details,_id, price} = course;   
    return (
        <>
        <div className='my-5 '>
           <div className=" flex-grow rounded">      
          
            <div className='h-[240px] overflow-hidden rounded'><img src={image} /></div>
                <h2 className="card-title mt-4">{title}</h2>
                <h4 className='text-[20px] text-orange-900 py-2'> Price: {price} $   </h4>
                <p>
                    {
                        details.length > 150? <p className='text-gray-600 leading-8'>{details.slice(0,150)} 
                        <Link to={`/Course/${_id}`} className='text-blue-600 font-semibold underline hover:text-blue-800 bg-orange-300 p-1 rounded-md ml-2'> Read more</Link>

                        </p>
                        :
                        <p >{details}</p>
                    }

                </p>
          </div>
        </div>
        </>
    );
};

export default CourseCard;


