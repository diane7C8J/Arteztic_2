import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from "react-router-dom";

import { PageLayout } from '../components/PageLayout';
import { Polls } from '../pages/Polls';

export default {
  title: 'Pages/Polls',
  component: Polls,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Polls>;

export const Default = () => <MemoryRouter><PageLayout>
  <Polls view="all" myVotes={[]} />
</PageLayout></MemoryRouter>;
Default.args = {};