import Indicator from './Indicator';

export default {
  title: 'Components/Indicator',
  component: Indicator,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
};

export const Danger = {
  args: {
    status: 'danger',
  },
};

export const Success = {
  args: {
    status: 'success',
  },
};

export const Warning = {
  args: {
    status: 'warning',
  },
};
