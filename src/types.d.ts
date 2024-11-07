/* eslint-disable @typescript-eslint/no-unused-vars */
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

export namespace LuterHooks {
    interface addToastProps { title: string, description: string }
}

export namespace LuterJs {
    interface ToastSingleElement {
        id?: string;
        title: string;
        description: string;
    }
    type ToastElements = ToastSingleElement[] | []
    interface functionalReducerProps {
        action: 'add' | 'remove' | 'removeall';
        index?: number;
        data?: LuterJs.ToastSingleElement
    }
    interface ToastContext {
        ToastElements: ToastElements;
        EditToasts: ({ action, index, data }: functionalReducerProps) => void;
    }
}