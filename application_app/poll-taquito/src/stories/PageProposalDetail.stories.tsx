import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from "react-router-dom";

import { PageLayout } from '../components/PageLayout';
import { ProposalDetail } from '../pages/ProposalDetail';

export default {
  title: 'Pages/Proposal Detail',
  component: ProposalDetail,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ProposalDetail>;

export const Default = () => <MemoryRouter><PageLayout>
  <ProposalDetail />
</PageLayout></MemoryRouter>;
Default.args = {};