import Avatar from './Avatar';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
};

export const Anonymous = {
  args: {
    isAnonymous: true,
  },
};

export const NoImage = {
  args: {
    alt: 'Anastasiia Batarei',
  },
};

export const Image = {
  args: {
    avatar: 'avatar-01.png',
    alt: 'Anastasiia Batarei',
  },
};

export const SantaHat = {
  args: {
    avatar: 'avatar-02.png',
    alt: 'Louis Litt',
    isChristmasTheme: true,
  },
};

export const WithIndicator = {
  args: {
    avatar: 'avatar-03.png',
    alt: 'Harvey Spector',
    status: 'success',
  },
};

export const SizeVariation = {
  args: {
    avatar: 'avatar-01.png',
    alt: 'Anastasiia Batarei',
    size: 128,
  },
};
