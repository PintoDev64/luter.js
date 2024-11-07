import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test'

import { Selector } from '../main';

const meta: Meta<typeof Selector> = {
    title: 'Selector',
    tags: ['autodocs'],
    component: Selector,
    args: {
        onClick: fn((data) => { console.log(data) }),
        init: { image: "https://avatars.githubusercontent.com/u/84690368?v=4" },
        data: [
            { text: "example", image: "https://avatars.githubusercontent.com/u/84690368?v=4" },
            { text: "example-2", image: "https://avatars.githubusercontent.com/u/84690368?v=4" }
        ]
    }
};

export default meta;
type Story = StoryObj<typeof Selector>;

export const Default: Story = {
    args: {
    }
};