import './index.css';
interface ToastsProps {
    className?: string;
    Component: JSX.ElementType;
}
export default function Toasts({ Component, className }: ToastsProps): import("react/jsx-runtime").JSX.Element;
export {};
