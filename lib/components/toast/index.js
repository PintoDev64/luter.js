import { jsx as _jsx } from "react/jsx-runtime";
import { CSSClassnames, Repeat } from "../../constants";
import useToast from "../../hooks/useToast";
// Styles
import './index.css';
export default function Toasts({ Component, className }) {
    const { ToastElements } = useToast();
    const toasts_ClassNames = [
        className,
        `${CSSClassnames.Library}-Component-Toasts`
    ].join(Repeat.WhiteSpace);
    return (_jsx("div", { className: toasts_ClassNames, children: ToastElements.map(({ id, ...props }, index) => index <= 2 && _jsx(Component, { index: index, ...props }, id)) }));
}
