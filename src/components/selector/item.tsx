import { useEffect, useState } from "react";
import { SelectorElements } from ".";

// Constants
import { CSSClassnames, Repeat } from "../../constants"

// Utils
import { createRandomID } from "../../utils";

// Define all possible positions for the container
type useStateDefault = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

// Component Type
type SelectorItemProps = {
    active: boolean;
    reference: {
        clientHeight: number,
        clientWidth: number,
        clientX: number,
        clientY: number
    };
    data: SelectorElements[]
    onClick: (selectedElement: SelectorElements & { index: number }) => void;
}

export default function SelectorItems({ active, reference, data, onClick }: SelectorItemProps) {
    const [position, setPosition] = useState<useStateDefault>('bottom');
    const elementClassNames = `${CSSClassnames.Library}-Component-Selector_element`;

    // Combine classes dynamically for positioning and active state
    const containerClassNames = [
        position,
        active ? 'Active' : 'Desactive',
        `${CSSClassnames.Library}-Component-Selector_container`
    ].join(Repeat.WhiteSpace);

    const handleClick = (index: number, text?: string, image?: string) => onClick({ text, image, index });

    useEffect(() => {
        // Calculate if near document edges
        const isNearTop = reference.clientY < 100;
        const isNearBottom = reference.clientY > (reference.clientHeight - 100);
        const isNearLeft = reference.clientX < 100;
        const isNearRight = reference.clientX > (reference.clientWidth - 100);

        // Set position based on edge proximity
        if (!isNearTop && !isNearBottom && !isNearLeft && !isNearRight) setPosition('top');
        else if (isNearTop && isNearLeft) setPosition('top-left');
        else if (isNearTop && isNearRight) setPosition('top-right');
        else if (isNearBottom && isNearLeft) setPosition('bottom-left');
        else if (isNearBottom && isNearRight) setPosition('bottom-right');
        else if (isNearTop) setPosition('top');
        else if (isNearBottom) setPosition('bottom');
        else if (isNearLeft) setPosition('left');
        else if (isNearRight) setPosition('right');
        else setPosition('bottom');  // Default position if no edge is nearby
    }, [reference.clientHeight, reference.clientWidth, reference.clientX, reference.clientY]);

    return (
        <div className={containerClassNames}>
            {data.map(({ text, image }, index) =>
                <div
                    key={`${index}-${createRandomID()}`}  // Generate unique key
                    onClick={() => handleClick(index, text, image)}
                    className={elementClassNames}
                >
                    {image && <img src={image} width={25} height={25} alt={text || "Selector icon"} />}
                    {text && <span>{text}</span>}
                </div>
            )}
        </div>
    )
}