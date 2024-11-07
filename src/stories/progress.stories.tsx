import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from '../main';


const meta: Meta<typeof Progress> = {
    title: 'Progress',
    tags: ['autodocs'],
    component: Progress,
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
    args: {
        percent: 50
    }
};