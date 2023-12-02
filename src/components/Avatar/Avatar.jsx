import './Avatar.css';
import Icon from '../Icon/Icon';
import Indicator from '../Indicator/Indicator';

function Avatar({
  fileName,
  alt = '',
  size = 68,
  status,
  isAnonymous = false,
  isChristmasTheme = false,
}) {
  const src = `/images/${fileName}`;
  const christmasImgSrc = '/images/santa-hat.png';
  const firstInitial = alt[0];
  const classes = isAnonymous ? 'avatar avatar--anonymous' : 'avatar';

  return (
    <div className={classes}>
      {isChristmasTheme && (
        <img className="avatar__hat" src={christmasImgSrc} alt="" />
      )}
      {isAnonymous ? (
        <Icon id="eyeclosed" size="32" />
      ) : (
        <>
          {fileName ? (
            <img src={src} alt={alt} width={size} height={size} />
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
