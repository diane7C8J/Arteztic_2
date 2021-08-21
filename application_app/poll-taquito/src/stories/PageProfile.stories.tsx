import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from "react-router-dom";

import { PageLayout } from '../components/PageLayout';
import { Profile } from '../pages/Profile';

export default {
  title: 'Pages/Profile',
  component: Profile,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Profile>;

export const Default = () => <MemoryRouter><PageLayout>
  <Profile />
</PageLayout></MemoryRouter>;
Default.args = {};