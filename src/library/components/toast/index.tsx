import { CSSClassnames, Repeat } from "../../constants"
import useToast from "../../hooks/useToast"

// Styles
import './index.css'

// Component Props
interface ToastsProps {
    className?: string
    Component: JSX.ElementType
}

export default function Toasts({ Component, className }: ToastsProps) {
    const { ToastElements } = useToast()

    const toasts_ClassNames = [
        className,
        `${CSSClassnames.Library}-Component-Toasts`
    ].join(Repeat.WhiteSpace)

    return (
        <div className={toasts_ClassNames}>
            {
                ToastElements.map((props, index) =>
                    <Component index={index} {...props} />
                )
            }
        </div>
    )
}