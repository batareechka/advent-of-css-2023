import './Avatar.css';
import Icon from '../Icon/Icon';
import Indicator from '../Indicator/Indicator';

function Avatar({
  avatar,
  alt = '',
  size = 68,
  status,
  isAnonymous = false,
  isChristmasTheme = false,
}) {
  const src = `./images/${avatar}`;
  const christmasImgSrc = './images/santa-hat.png';
  const firstInitial = alt[0]?.toUpperCase();
  const classes = isAnonymous ? 'avatar avatar--anonymous' : 'avatar';

  return (
    <div className={classes}>
      {isChristmasTheme && (
        <img className="avatar__hat" src={christmasImgSrc} alt="Santa hat" />
      )}
      {isAnonymous ? (
        <Icon id="eyeClosed" size="32" />
      ) : (
        <>
          {avatar ? (
            <img
              className="avatar__image"
              src={src}
              alt={alt}
              width={size}
              height={size}
            />
          ) : (
            <span className="avatar__initial">{firstInitial}</span>
          )}
          {status && (
            <Indicator contextClassName="avatar__indicator" status={status} />
          )}
        </>
      )}
    </div>
  );
}

export default Avatar;
