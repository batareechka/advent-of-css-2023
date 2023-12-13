import './PlaceholderCard.css';
import Avatar from '../Avatar/Avatar';

// TODO: check props defaults
const PlaceholderCard = () => {
  return (
    <article className="placeholder-card">
      <div className="placeholder-card__avatar">
        <Avatar isAnonymous />
      </div>
      <div className="placeholder-card__content">
        <div className="placeholder-card__title"></div>
        <div className="placeholder-card__text"></div>
      </div>
    </article>
  );
};

export default PlaceholderCard;
