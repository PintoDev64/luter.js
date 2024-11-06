import useToast from "../../hooks/useToast";
import { CSSClassnames, Repeat } from "../../constants";
import { useEffect, useState } from "react";
import ToastSVG from "../../assets/Toast";

interface ToastProps {
    title: string;
    description: string;
    index: number;
}

export default function Toast({ title, description, index }: ToastProps) {
    const { removeToast } = useToast();
    const [AnimationClassName, setAnimationClassName] = useState("Add")

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

    type handleClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>
    const handleClick = (event: handleClickEvent) => {
        if (event.button === 0) {
            setAnimationClassName("Remove");
            // Escuchar solo una vez cuando termine la animación para eliminar el toast
            setTimeout(() => removeToast(index), 250);
        }
    };

    useEffect(() => {
        setTimeout(() => setAnimationClassName(""), 500);
        setTimeout(() => removeToast(index), 5000);
    }, []);

    return (
        <div className={toast_ClassNames}>
            <div className={toastData_ClassNames}>
                <span>{title}</span>
                <p>{description}</p>
            </div>
            <button
                onClick={handleClick}
                className={toastButton_ClassNames}>
                <ToastSVG />
            </button>
        </div>
    );
}
