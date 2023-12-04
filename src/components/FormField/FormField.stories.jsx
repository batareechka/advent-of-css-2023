import FormField from './FormField';
import Input from '../Input/Input';
import InputPassword from '../InputPassword/InputPassword';

export default {
  title: 'Components/FormField',
  component: FormField,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
};

export const Text = {
  args: {
    id: 'my-input',
    label: 'Name',
    children: <Input />,
  },
};

export const Email = {
  args: {
    id: 'my-email',
    label: 'Email',
    children: <Input type="email" />,
  },
};

export const Password = {
  args: {
    id: 'my-password',
    label: 'Password',
    children: <InputPassword />,
  },
};
