import { useState } from "react"

// Assets
import CheckboxSVG from '../../assets/Checkbox.svg'
import { CSSClassnames, Repeat } from "../../constants"

// Styles
import './index.css'

type handleClick = (status: boolean) => void

// Component Props
type CheckboxProps = {
    onClick?: handleClick
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Checkbox({ onClick, className, ...props }: CheckboxProps) {
    const [Active, setActive] = useState(false)

    const button_ClassNames = [
        className,
        `${CSSClassnames.Library}-Component-Checkbox`,
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
            {
                Active && <img src={CheckboxSVG} width={24} height={24} />
            }
        </button>
    )
}