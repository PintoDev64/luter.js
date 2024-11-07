import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '../main';

const meta: Meta<typeof Switch> = {
    title: 'Switch',
    tags: ['autodocs'],
    component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    args: {}
};