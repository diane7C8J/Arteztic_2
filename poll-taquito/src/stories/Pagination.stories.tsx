import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '../components/Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};
