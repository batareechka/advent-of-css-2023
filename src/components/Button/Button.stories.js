import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
};

export const Large = {
  args: {
    children: 'Large',
  },
};

export const Small = {
  args: {
    children: 'Small',
    size: 'small',
  },
};

export const FullWidth = {
  args: {
    children: 'Large',
    isFullWidth: true,
  },
};
