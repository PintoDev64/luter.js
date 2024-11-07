import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../main';

const meta: Meta<typeof Checkbox> = {
    title: 'Checkbox',
    tags: ['autodocs'],
    component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {}
};