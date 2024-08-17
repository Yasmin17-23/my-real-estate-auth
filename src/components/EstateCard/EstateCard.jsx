
import PropTypes from 'prop-types';

const EstateCard = ({ estate }) => {
    const { id, image, estate_title, segment_name, location } = estate;
    return (
        <div className="card bg-base-100 shadow-xl p-3">
        <figure>
          <img
            src={image}
            className='w-96 md:w-80 h-52 rounded-xl'
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>{segment_name}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

EstateCard.propTypes = {
    estate: PropTypes.obj,
}

export default EstateCard;
