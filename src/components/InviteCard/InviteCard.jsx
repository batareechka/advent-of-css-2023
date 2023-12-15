import './InviteCard.css';
import Avatar from '../Avatar/Avatar';
import Icon from '../Icon/Icon';

// TODO: check props defaults
const InviteCard = ({
  title = 'Courtney Henry',
  text = 'courtney.henry@example.com',
  status = 'warning',
  avatar = 'avatar-06.png',
}) => {
  return (
    <article className="invite-card">
      <div className="invite-card__avatar">
        <Avatar avatar={avatar} alt="Courtney Henry" status={status} />
      </div>
      <div className="invite-card__content">
        <div className="invite-card__title">{title}</div>
        <div className="invite-card__text">{text}</div>
      </div>
      {/* TODO: make  unique aria-label  */}
      <button className="invite-card__button" type="button" aria-label="Remove">
        <Icon id="close" />
      </button>
    </article>
  );
};

export default InviteCard;
