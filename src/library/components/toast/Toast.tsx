import useToast from "../../hooks/useToast";

// Assets
import Delete from '../../assets/Toast.svg'
import { CSSClassnames, Repeat } from "../../constants";

interface ToastProps {
    title: string;
    description: string;
    index: number;
}

export default function Toast({ title, description, index }: ToastProps) {
    const { removeToast } = useToast()

    const toast_ClassNames = [
        `${CSSClassnames.Library}-Component-Toast`
    ].join(Repeat.WhiteSpace)

    const toastData_ClassNames = [
        `${CSSClassnames.Library}-Component-Toast_data`
    ].join(Repeat.WhiteSpace)

    const toastButton_ClassNames = [
        `${CSSClassnames.Library}-Component-Toast_button`
    ].join(Repeat.WhiteSpace)

    const handleClick = () => removeToast(index)

    return (
        <div className={toast_ClassNames}>
            <div className={toastData_ClassNames}>
                <span>{title}</span>
                <p>{description}</p>
            </div>
            <button
                onClick={handleClick}
                className={toastButton_ClassNames}>
                <img src={Delete} width={18} height={18} />
            </button>
        </div>
    )
}