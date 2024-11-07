import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from '../main';

const meta: Meta<typeof Toggle> = {
    title: 'Toggle',
    tags: ['autodocs'],
    component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
    args: {}
};