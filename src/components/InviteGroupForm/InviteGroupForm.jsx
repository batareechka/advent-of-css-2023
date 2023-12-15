import './InviteGroupForm.css';
import React from 'react';
import FormField from '../FormField/FormField';
import Input from '../Input/Input';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import InviteCard from '../InviteCard/InviteCard';

const data = [
  {
    name: 'Dianne Russell',
    email: 'drussell@example.com',
    status: 'success',
    avatar: 'avatar-01.png',
  },
  {
    name: 'Ralph Edwards',
    email: 'drussell@example.com',
    status: 'warning',
    avatar: 'avatar-02.png',
  },
  {
    name: 'Robert Fox',
    email: 'r.fox@example.com',
    status: 'danger',
    avatar: 'avatar-03.png',
  },
  {
    name: 'Brooklyn Simmons',
    email: 'brooklyn.simmons@example.com',
    status: 'danger',
    avatar: 'avatar-04.png',
  },
  {
    name: 'Darlene Robertson',
    email: 'darlene@example.com',
    status: 'warning',
    avatar: 'avatar-06.png',
  },
  {
    name: 'Darrell Steward',
    email: 'darrell.steward@example.com',
    status: 'warning',
    avatar: 'avatar-07.png',
  },
];

const InviteGroupForm = () => {
  const [guests, setGuests] = React.useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const status = 'warning';
    const avatar = 'avatar-08.png';
    setGuests([...guests, { name, email, status, avatar }]);
  };

  return (
    <div className="invite-group">
      <h2 className="subtitle">Invite a friend or a family member</h2>
      <form className="invite-group__form" onSubmit={handleSubmit}>
        <div className="invite-group__form-field">
          <FormField id="my-input" label="Name">
            <Input name="name" />
          </FormField>
        </div>
        <div className="invite-group__form-field">
          <FormField id="my-email" label="Email">
            <Input type="email" name="email" />
          </FormField>
        </div>
        <div className="invite-group__form-submit">
          <ButtonIcon type="submit" label="Send invitation" icon="plus" />
        </div>
      </form>
      <ul className="invite-group__list">
        {guests.map(({ name, email, status, avatar }, index) => (
          // FIXME: add unique key
          <li key={index}>
            <InviteCard
              title={name}
              text={email}
              status={status}
              avatar={avatar}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InviteGroupForm;
