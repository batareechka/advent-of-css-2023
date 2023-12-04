import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
};

export const Text = {
  args: {
    id: 'my-input',
  },
};

export const Email = {
  args: {
    id: 'my-input',
    type: 'email',
    label: 'Email',
    required: true,
  },
};

export const Password = {
  args: {
    id: 'my-input',
    type: 'password',
    label: 'Password',
  },
};
