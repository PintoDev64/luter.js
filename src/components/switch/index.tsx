import { useState } from "react"

// Assets
import { CSSClassnames, Repeat } from "../../constants"

// Styles
import './index.css'

type handleClick = (status: boolean) => void

// Component Props
type SwitchProps = {
    onClick?: handleClick
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Switch({ onClick, className, ...props }: SwitchProps) {
    const [Active, setActive] = useState(false)

    const button_ClassNames = [
        className,
        `${CSSClassnames.Library}-Component-Switch`,
        Active ? "Active" : "Desactive"
    ].join(Repeat.WhiteSpace)

    const div_ClassNames = [
        `${CSSClassnames.Library}-Component-Switch_div`,
        Active ? "Active" : "Desactive"
    ].join(Repeat.WhiteSpace)

    const handleClick = () => {
        const newStatus = !Active
        setActive(newStatus)

        if (onClick === undefined) return

        onClick(newStatus)
    }

    return (
        <button
            {...props}
            onClick={handleClick}
            className={button_ClassNames}>
            <div
                className={div_ClassNames} />
        </button>
    )
}