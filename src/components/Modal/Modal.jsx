import './Modal.css';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import InviteCard from '../InviteCard/InviteCard';

const Modal = ({ status = 'danger', children }) => {
  return (
    <>
      <button popovertarget="remove-modal">Open modal</button>
      <dialog className={`modal modal--${status}`} popover="" id="remove-modal">
        <button
          class="modal__close-button"
          popovertarget="remove-modal"
          popovertargetaction="hide"
        >
          <Icon id="close" />
        </button>
        <div class="modal__content">
          <h2 className="modal__title">
            Are you sure you want to remove this?
          </h2>
          <InviteCard />
          <div className="modal__actions">
            <Button type="button" size="small" style={'secondary'}>
              Cancel
            </Button>
            <Button type="button" size="small" style={'primary'}>
              Remove
            </Button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
