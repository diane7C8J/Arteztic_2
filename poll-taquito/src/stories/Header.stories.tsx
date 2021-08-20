import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../components/Header';

export default {
  title: 'Components/Nav',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    votes: { control: 'number' },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  votes: 0,
};
