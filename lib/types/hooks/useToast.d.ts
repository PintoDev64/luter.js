export default function useToast(): {
    addToast: ({ title, description }: LuterHooks.addToastProps) => void;
    removeToast: (index: number) => void;
    removeAllToast: () => void;
    ToastCount: number;
    ToastElements: LuterJs.ToastElements;
};
