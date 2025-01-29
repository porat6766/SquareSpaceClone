import { useRef, useEffect, useContext, SetStateAction, Dispatch } from 'react'
import { Position } from './BasicEditor3ProTypes';
import { BasicEditorContext } from './BasicEditor3Pro';

const backgroundGridStyle = {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
    gap: '5px'
    // gridTemplateRows:'repeat(10, 1fr)'
}

const cellStyle = {
    border: '2px solid gray',
    borderRadius: '5px',
    aspectRatio: '1/1'
}

export type backgroundGridPropType = {
    // closestPosition:Position
    setClosestPosition: Dispatch<SetStateAction<Position>>
}

//seems there is no choice but to make the tracking based on cursor position rather
//than mouseover event. The mouseover event is obstructed by the element being dragged.
function BackgroundGrid({ setClosestPosition}:backgroundGridPropType) {
    // const [gridPositions, setGridPositions] = useState<Position[]>([]);
    const gridPositionsRef = useRef<Position[]>([])
    const { originOfCoordinates, closestPosition } = useContext(BasicEditorContext);
    const gridRef = useRef(null);
    const markerDivRef = useRef(null);

    useEffect(() => {
        // console.log("closest position:", closestPosition)
    }, [closestPosition])

    useEffect(() => {
        const gridElement = gridRef.current;
        if (gridElement) {
            const cells = gridElement.querySelectorAll('div');
            const positions = Array.from(cells).map((cell) => {
                const rect = cell.getBoundingClientRect();
                const pos:Position = { x: rect.left, y: rect.top }
                cell.addEventListener('mouseover', () => handleCellHover(pos));
                return pos;
            });
            // setGridPositions(positions);
            gridPositionsRef.current = positions;
        }
    },[]);

    useEffect(() => {
        // window.addEventListener('mousemove', handleCursorMove);
        // return () => window.removeEventListener('mousemove', handleCursorMove);
    }, [])

    function handleCellHover(pos:Position){
        setClosestPosition(pos);
    }

    // function handleCursorMove(e) {
    //     const xPos = e.clientX - (originOfCoordinates?.x ?? 0);
    //     const yPos = e.clientY - (originOfCoordinates?.y ?? 0);
    //     findClosestPosition(xPos, yPos, gridPositionsRef.current);
    // }

    //instead of this, I could add to each div a function that sets the closest position
    //to be it's own position when hovered over.
    // function findClosestPosition(cursorX: number, cursorY: number, positions: Position[]) {
    //     let closestPosition = { x: 0, y: 0 };
    //     let minDistance = Infinity;
        
    //     positions.forEach((position) => {
    //         const distance = Math.sqrt(Math.pow(cursorX - position.x, 2) + Math.pow(cursorY - position.y, 2));

    //         if (distance < minDistance) {
    //             minDistance = distance;
    //             closestPosition = position;
    //         }
    //     })

    //     setClosestPosition(closestPosition || { x: 0, y: 0 });
    // }

    const markerDivStyle = {
        width: '4rem',
        height: '4rem',
        position: 'absolute',
        // left: '400px',
        // top: '400px',
        left: (closestPosition?.x || 0) - (originOfCoordinates?.x || 0),
        top: (closestPosition?.y || 0) - (originOfCoordinates?.y || 0),
        border: '3px solid yellow'
    }

    return (
        <>
            <div style={markerDivStyle} ref={markerDivRef}></div>
            <div ref={gridRef} style={backgroundGridStyle}>
                {Array.from({ length: 200 }).map((_, index) => (
                    <div key={index} style={cellStyle}/>
                ))}
            </div>
        </>
    );
}

export default BackgroundGrid