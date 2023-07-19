import './card.css';
import { useEffect, useRef, useState } from 'react';

function Card(props) {
    const [isAnimated, setIsAnimated] = useState(false);
    const cardRef = useRef(null);
    const prevValueRef = useRef(props.value);

    useEffect(() => {
        if (props.value !== prevValueRef.current) {
            setIsAnimated(true);
            prevValueRef.current = props.value;
        }
        const animationTimeout = setTimeout(() => {
            setIsAnimated(false);
        }, 1000);
        return () => clearTimeout(animationTimeout);
    }, [props.value]);
    
    return (
        <div className="card flex flex-column" ref={cardRef}>
            <div className="top flex">
                <span className="value">{props.value}</span>
                <div className={`top-flip flex ${isAnimated ? 'animated' : ''}`}>
                    <span className="value">{props.value}</span>
                </div>
            </div>
            <div className="bottom flex">
                <span className="value">{props.value}</span>
            </div>
        </div>
    );
}

export default Card;