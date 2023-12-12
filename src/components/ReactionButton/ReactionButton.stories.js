import ReactionButton from './ReactionButton';

export default {
  title: 'Components/ReactionButton',
  component: ReactionButton,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
};

export const Positive = {
  args: {
    type: 'positive',
    children: 'I like this',
  },
};

export const Negative = {
  args: {
    type: 'negative',
    children: 'I do not like this',
  },
};
