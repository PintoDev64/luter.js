import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useToast from "../../hooks/useToast";
import { CSSClassnames, Repeat } from "../../constants";
import { useEffect, useState } from "react";
import ToastSVG from "../../assets/Toast";
export default function Toast({ title, description, index }) {
    const { removeToast } = useToast();
    const [AnimationClassName, setAnimationClassName] = useState("Add");
    const toast_ClassNames = [
        `${CSSClassnames.Library}-Component-Toast`,
        AnimationClassName
    ].join(Repeat.WhiteSpace);
    const toastData_ClassNames = [
        `${CSSClassnames.Library}-Component-Toast_data`
    ].join(Repeat.WhiteSpace);
    const toastButton_ClassNames = [
        `${CSSClassnames.Library}-Component-Toast_button`
    ].join(Repeat.WhiteSpace);
    const handleClick = (event) => {
        if (event.button === 0) {
            setAnimationClassName("Remove");
            // Escuchar solo una vez cuando termine la animación para eliminar el toast
            setTimeout(() => removeToast(index), 250);
        }
    };
    useEffect(() => {
        setTimeout(() => setAnimationClassName(""), 500);
    }, []);
    return (_jsxs("div", { className: toast_ClassNames, children: [_jsxs("div", { className: toastData_ClassNames, children: [_jsx("span", { children: title }), _jsx("p", { children: description })] }), _jsx("button", { onClick: handleClick, className: toastButton_ClassNames, children: _jsx(ToastSVG, {}) })] }));
}
