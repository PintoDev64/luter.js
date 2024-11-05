import './index.css';
type handleClick = (status: boolean) => void;
type CheckboxProps = {
    onClick?: handleClick;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function Checkbox({ onClick, className, ...props }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
export {};
