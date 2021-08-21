import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from "react-router-dom";

import { PageLayout } from '../components/PageLayout';
import { Home } from '../pages/Home';

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Home>;

export const Default = () => <MemoryRouter><PageLayout>
  <Home />
</PageLayout></MemoryRouter>;
Default.args = {};