import type { Decorator, Meta, StoryObj } from '@storybook/react';

import { Toast, Toasts, ToastWrapper, useToast } from '../main';

const ButtonExample = () => {
    const { addToast } = useToast()

    return (
        <button onClick={() => addToast({ title: 'XD', description: 'Hola Mundo!!!' })}>
            Agregar Dato
        </button>
    )
}

const contextDecorator: Decorator = (Story) => (
    <ToastWrapper>
        <ButtonExample />
        <Story />
    </ToastWrapper>
);

const meta: Meta<typeof Toasts> = {
    title: 'Toasts',
    tags: ['autodocs'],
    component: Toasts,
    decorators: [contextDecorator]
};

export default meta;
type Story = StoryObj<typeof Toasts>;

export const Default: Story = {
    args: {
        Component: Toast
    }
};