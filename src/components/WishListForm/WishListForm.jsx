import './WishListForm.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import FormField from '../FormField/FormField';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

// TODO: dynamic id for form fields
// TODO: proper key for list items
// TODO: add "Add item" button

const WishListForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
  };

  return (
    <form className="wish-list-form" onSubmit={handleSubmit}>
      <div className="wish-list-form__item">
        <div className="wish-list-form__item-fields">
          <FormField id="wish-name-1" label="Wish title">
            <Input id="wish-name-1" isRequired />
          </FormField>
          <FormField id="wish-url-1" label="URL">
            <Input id="wish-url-1" type="url" isRequired />
          </FormField>
        </div>
        <div className="wish-list-form__item-button">
          <ButtonIcon icon="close" label="Remove" style="danger" />
        </div>
      </div>
      <div className="wish-list-form__item">
        <div className="wish-list-form__item-fields">
          <FormField id="wish-name-2" label="Wish title">
            <Input id="wish-name-2" isRequired />
          </FormField>
          <FormField id="wish-url-2" label="URL">
            <Input id="wish-url-2" type="url" isRequired />
          </FormField>
        </div>
        <div className="wish-list-form__item-button">
          <ButtonIcon icon="close" label="Remove" style="danger" />
        </div>
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default WishListForm;
