declare namespace LuterJs {
    interface ToastSingleElement {
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