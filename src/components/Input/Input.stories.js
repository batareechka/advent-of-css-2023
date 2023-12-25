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
    id: 'my-email',
    type: 'email',
    required: true,
  },
};

export const Url = {
  args: {
    id: 'my-url',
    type: 'url',
    required: true,
  },
};
