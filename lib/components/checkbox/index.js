import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { CSSClassnames, Repeat } from "../../constants";
// Assets
import CheckboxSVG from "../../assets/Checkbox";
// Styles
import './index.css';
export default function Checkbox({ onClick, className, ...props }) {
    const [Active, setActive] = useState(false);
    const button_ClassNames = [
        className,
        `${CSSClassnames.Library}-Component-Checkbox`,
        Active ? "Active" : "Desactive"
    ].join(Repeat.WhiteSpace);
    const handleClick = () => {
        const newStatus = !Active;
        setActive(newStatus);
        if (onClick === undefined)
            return;
        onClick(newStatus);
    };
    return (_jsx("button", { ...props, onClick: handleClick, className: button_ClassNames, children: Active && _jsx(CheckboxSVG, {}) }));
}
