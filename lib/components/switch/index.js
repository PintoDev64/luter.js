import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
// Assets
import { CSSClassnames, Repeat } from "../../constants";
// Styles
import './index.css';
export default function Switch({ onClick, className, ...props }) {
    const [Active, setActive] = useState(false);
    const button_ClassNames = [
        className,
        `${CSSClassnames.Library}-Component-Switch`,
        Active ? "Active" : "Desactive"
    ].join(Repeat.WhiteSpace);
    const div_ClassNames = [
        `${CSSClassnames.Library}-Component-Switch_div`,
        Active ? "Active" : "Desactive"
    ].join(Repeat.WhiteSpace);
    const handleClick = () => {
        const newStatus = !Active;
        setActive(newStatus);
        if (onClick === undefined)
            return;
        onClick(newStatus);
    };
    return (_jsx("button", { ...props, onClick: handleClick, className: button_ClassNames, children: _jsx("div", { className: div_ClassNames }) }));
}
