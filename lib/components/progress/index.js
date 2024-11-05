import { jsx as _jsx } from "react/jsx-runtime";
import { CSSClassnames, Repeat } from '../../constants';
// Styles
import './index.css';
export default function Progress({ percent, className, ...props }) {
    if (percent > 100 || percent < 0)
        throw new Error("El valor del porcentaje deber estar entre 0 y 100");
    const progress_ClassNames = [
        className,
        `${CSSClassnames.Library}-Component-Progress`,
    ].join(Repeat.WhiteSpace);
    const indicator_ClassNames = [
        className,
        `${CSSClassnames.Library}-Component-Progress_indicator`,
    ].join(Repeat.WhiteSpace);
    return (_jsx("div", { className: progress_ClassNames, ...props, children: _jsx("div", { style: {
                width: `${percent}%`
            }, className: indicator_ClassNames }) }));
}
