import ButtonIcon from './ButtonIcon';

export default {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    icon: 'plus',
    label: 'Add user',
  },
};

export const Danger = {
  args: {
    icon: 'close',
    label: 'Add user',
    style: 'danger',
  },
};

export const Success = {
  args: {
    icon: 'plus',
    label: 'Add user',
    style: 'success',
  },
};
