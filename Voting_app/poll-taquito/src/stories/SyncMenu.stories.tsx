import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from "react-router-dom";

import { SyncMenu } from '../components/SyncMenu';

export default {
  title: 'Components/SyncMenu',
  component: SyncMenu,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    synced: { control: 'boolean' },
    admin: { control: 'boolean' },
    open: { control: 'boolean' },
  },
} as ComponentMeta<typeof SyncMenu>;

const Template: ComponentStory<typeof SyncMenu> = (args) => 
  <div style={{ padding: '30px', background: 'whitesmoke', display: 'flex', justifyContent: 'flex-end' }}>
    <MemoryRouter>
      <SyncMenu {...args} />
    </MemoryRouter>
  </div> ;

export const Unsynced = Template.bind({});
Unsynced.args = {
  connected: false,
};

export const Synced = Template.bind({});
Synced.args = {
  connected: true,
};

export const SyncedAdmin = Template.bind({});
SyncedAdmin.args = {
  connected: true,
  admin: true,
};
