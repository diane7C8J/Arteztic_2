import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from "react-router-dom";

import { PageLayout } from '../components/PageLayout';
import { About } from '../pages/About';

export default {
  title: 'Pages/About',
  component: About,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof About>;

export const Default = () => <MemoryRouter><PageLayout>
  <About />
</PageLayout></MemoryRouter>;
Default.args = {};