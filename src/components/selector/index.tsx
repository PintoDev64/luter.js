import { useState } from 'react';
import SelectorItems from './item';

// Constants
import { CSSClassnames, Repeat } from '../../constants';

// Styles and assets
import './index.css';
import SelectorSVG from '../../assets/Selector';

export interface SelectorElements {
    text?: string;
    image?: string;
}

// Component Type
type SelectorProps = {
    onClick?: (selectedElement: SelectorElements & { index: number }) => void;
    init: SelectorElements;
    data: SelectorElements[];
} & React.HTMLAttributes<HTMLDivElement>;

export function Selector({ onClick, data, className, init }: SelectorProps) {
    const [selectorState, setSelectorState] = useState(false);
    const [mouseData, setMouseData] = useState({
        clientHeight: 0,
        clientWidth: 0,
        clientX: 0,
        clientY: 0
    });

    const buttonClassNames = [
        className,
        selectorState ? "Active": "Desactive",
        `${CSSClassnames.Library}-Component-Selector`
    ].join(Repeat.WhiteSpace);

    const imgSource = (init.image === undefined || init.image.length === 0) ? Repeat.ImagePlaceholder : init.image;

    type handleSelectorEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

    const handleSelector = (event: handleSelectorEvent) => {
        // Set the mouse position data to control where SelectorItems will appear
        setMouseData({
            clientHeight: document.documentElement.clientHeight,
            clientWidth: document.documentElement.clientWidth,
            clientX: event.clientX,
            clientY: event.clientY
        });
        setSelectorState(!selectorState);  // Toggle the display of SelectorItems
    };

    const handleItem = onClick !== undefined ? onClick : () => { };

    return (
        <div onClick={handleSelector} className={buttonClassNames}>
            <img src={imgSource} width={25} height={25} />
            {init.text && <span>{init.text}</span>}
            <SelectorSVG />
            <SelectorItems
                data={data}
                active={selectorState}
                reference={mouseData}
                onClick={handleItem}
            />
        </div>
    );
}
