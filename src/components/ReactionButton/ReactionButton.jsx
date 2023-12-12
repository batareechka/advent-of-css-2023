import './ReactionButton.css';

import Icon from '../Icon/Icon';

// TODO: make link or button
// type: 'positive' | 'negative'
const ReactionButton = ({ type = 'positive', url = '', children }) => {
  const isPositive = type === 'positive';
  const IconId = isPositive ? 'thumbsUp' : 'thumbsDown';

  return (
    <a className={`reaction-button reaction-button--${type}`} href={url}>
      <span className="reaction-button__icon">
        <Icon id={IconId} size="72" />
      </span>
      <span className="reaction-button__label">{children}</span>
    </a>
  );
};

export default ReactionButton;
