import './index.css';
type ProgressProps = {
    percent: number;
} & React.HTMLAttributes<HTMLDivElement>;
export default function Progress({ percent, className, ...props }: ProgressProps): import("react/jsx-runtime").JSX.Element;
export {};
