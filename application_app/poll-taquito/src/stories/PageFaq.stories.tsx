import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from "react-router-dom";

import { PageLayout } from '../components/PageLayout';
import { Faq } from '../pages/Faq';

export default {
  title: 'Pages/Faq',
  component: Faq,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Faq>;

export const Default = () => <MemoryRouter><PageLayout>
  <Faq />
</PageLayout></MemoryRouter>;
Default.args = {};