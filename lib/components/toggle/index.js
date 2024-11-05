import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
// Constants
import { CSSClassnames, Repeat } from "../../constants";
// Styles
import './index.css';
/**
 * Crea un boton de tipo toogle que mantiene su estado de manera estatica
 * @class LuterJs-Component-Toggle
 */
export default function Toggle({ image, className, borderRadius = 'round', onClick, ...props }) {
    const [Active, setActive] = useState(false);
    const button_ClassNames = [
        className,
        `${CSSClassnames.Library}-Component-Toggle`,
        Active ? "Active" : "Desactive",
        borderRadius
    ].join(Repeat.WhiteSpace);
    const img_ClassNames = [
        `${CSSClassnames.Library}-Component-Toggle_img`
    ].join(Repeat.WhiteSpace);
    const img_Source = image.length === 0 ? "https://placeholder.pics/svg/18x18" : image;
    const handleClick = (event) => {
        const newStatus = !Active;
        setActive(newStatus);
        if (onClick === undefined)
            return;
        onClick(event, newStatus);
    };
    return (_jsx("button", { ...props, onClick: handleClick, className: button_ClassNames, children: _jsx("img", { width: 18, height: 18, src: img_Source, className: img_ClassNames }) }));
}
