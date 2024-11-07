import { CSSClassnames, Repeat } from '../../constants';

// Styles
import './index.css'

// Components Props
type ProgressProps = {
    percent: number
} & React.HTMLAttributes<HTMLDivElement>

export function Progress({ percent, className, ...props }: ProgressProps) {
    if (percent > 100 || percent < 0) throw new Error("El valor del porcentaje deber estar entre 0 y 100");

    const progress_ClassNames = [
        className,
        `${CSSClassnames.Library}-Component-Progress`,
    ].join(Repeat.WhiteSpace)

    const indicator_ClassNames = [
        className,
        `${CSSClassnames.Library}-Component-Progress_indicator`,
    ].join(Repeat.WhiteSpace)

    return (
        <div className={progress_ClassNames} {...props}>
            <div
                style={{
                    width: `${percent}%`
                }}
                className={indicator_ClassNames} />
        </div>
    )
}