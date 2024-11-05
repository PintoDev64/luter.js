import './index.css';
type handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, status: boolean) => void;
type ToggleProps = {
    image: string;
    borderRadius?: 'none' | 'moderate' | 'round';
    onClick?: handleClick | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
/**
 * Crea un boton de tipo toogle que mantiene su estado de manera estatica
 * @class LuterJs-Component-Toggle
 */
export default function Toggle({ image, className, borderRadius, onClick, ...props }: ToggleProps): import("react/jsx-runtime").JSX.Element;
export {};
