import './index.css';
type handleClick = (status: boolean) => void;
type SwitchProps = {
    onClick?: handleClick;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function Switch({ onClick, className, ...props }: SwitchProps): import("react/jsx-runtime").JSX.Element;
export {};
