import PropTypes from "prop-types";
import Rating from "./Rating";

const MangaCard = ({ href, imgSrc, title, rating, views, description }) => {
  return (
    <a href={href} className="manga-card">
      <img src={imgSrc} alt={title} />
      <div className="manga-info">
        <h3>{title}</h3>
        <Rating value={rating} />
        <p>{views.toLocaleString()} views</p>
        <p>
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
      </div>
    </a>
  );
};

MangaCard.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default MangaCard;
