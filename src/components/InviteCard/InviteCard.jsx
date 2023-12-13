import './InviteCard.css';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import Icon from '../Icon/Icon';

const InviteCard = () => {
  return (
    <article className="invite-card">
      <div className="invite-card__avatar">
        <Avatar
          avatar="avatar-06.png"
          alt="Courtney Henry"
          status={'warning'}
        />
      </div>
      <div className="invite-card__content">
        <div className="invite-card__title">Courtney Henry</div>
        <div className="invite-card__text">courtney.henry@example.com</div>
      </div>
      {/* TODO: make  unique aria-label  */}
      <button className="invite-card__button" type="button" aria-label="Remove">
        <Icon id="close" />
      </button>
    </article>
  );
};

export default InviteCard;
