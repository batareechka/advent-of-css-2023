import './Indicator.css';
import Icon from '../Icon/Icon';

function Indicator({ contextClassName = '', status = 'success' }) {
  const stateIconMap = {
    danger: 'minus',
    success: 'check',
    warning: 'question',
  };
  return (
    <span className={`${contextClassName} indicator indicator--${status}`}>
      <Icon id={stateIconMap[status]} size="16" />
    </span>
  );
}

export default Indicator;
