
import PropTypes from 'prop-types';
import { FcHome } from "react-icons/fc";
import { FaHeart, FaRulerCombined } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const EstateCard = ({ estate }) => {
  const { id, image, estate_title, segment_name, location, Area, Status} = estate;
  
  return (
    <div className="card bg-base-100 shadow-xl p-3 ">
      <figure>
        <img
          src={image}
          className='w-96 md:w-80 h-52 rounded-xl'
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center'>
            <FaHeart className='mr-2 text-blue-800' />
            <p className='text-md'>{segment_name}</p>
          </div>
          <div className='flex justify-center items-center'>
            <FaRulerCombined className='mr-2 text-blue-800' />
            <p className='text-md'>{Area}</p>
          </div>
        </div>
        <div className='flex items-center'>
          <FcHome className='mr-2  text-xl' />
          <h2 className="card-title text-bold">{estate_title}</h2>
        </div>
        <div className='flex justify-center items-center'>
          <FaLocationDot className='text-blue-800' />
          <p className='-ml-14'>{location}</p>
        </div>
        <p className='text-3xl text-yellow-900 font-bold'>For {Status}</p>
        <div className="card-actions justify-center mt-4">
          <Link to={`/estate/${id}`}>
            <button href="#_" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">VIEW PROPERTY</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

EstateCard.propTypes = {
  estate: PropTypes.object,
}

export default EstateCard;
