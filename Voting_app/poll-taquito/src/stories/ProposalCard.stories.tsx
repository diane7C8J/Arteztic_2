import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProposalCard } from '../components/ProposalCard';

export default {
  title: 'Components/Proposal Card',
  component: ProposalCard,
  argTypes: {
    votes: { control: 'number' },
  },
} as ComponentMeta<typeof ProposalCard>;

const Template: ComponentStory<typeof ProposalCard> = (args) => <ProposalCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  votes: 0,
};
