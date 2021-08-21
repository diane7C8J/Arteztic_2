import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Footer } from '../components/Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  }
} as ComponentMeta<typeof Footer>;

export const Primary = () => <Footer />;
