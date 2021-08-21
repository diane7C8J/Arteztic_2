import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { PageLayout } from '../components/PageLayout';
import { MemoryRouter } from 'react-router';

export default {
  title: 'Pages/PageLayout',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageLayout>;

export const Empty = () => <MemoryRouter><PageLayout></PageLayout></MemoryRouter>;
Empty.args = {};

export const Long = () => <MemoryRouter>
  <PageLayout>
    <div style={{ backgroundColor: 'whitesmoke', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3000px' }}>stuff</div>
  </PageLayout>
</MemoryRouter>;
Empty.args = {};
