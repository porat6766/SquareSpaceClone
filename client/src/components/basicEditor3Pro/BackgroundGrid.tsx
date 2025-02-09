import { useRef, useEffect, useContext, useState, SetStateAction, Dispatch } from 'react'
import { Position, MarkerDivStyleType } from './BasicEditor3ProTypes';
import { BasicEditorContext } from './BasicEditor3Pro';

const gridGap = 5
const backgroundGridStyle = {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
    gap: `${gridGap}px`
    // gridTemplateRows:'repeat(10, 1fr)'
}

const cellStyle = {
    border: '2px solid gray',
    borderRadius: '5px',
    aspectRatio: '1/1'
}

export type backgroundGridPropType = {
    setClosestPosition: Dispatch<SetStateAction<Position>>
}

//I can give this as an example of a challenge?
//specifically, the part about locating the marker div
function BackgroundGrid({ setClosestPosition }:backgroundGridPropType) {
    const [isMarkerVisible, setIsMarkerVisible] = useState<boolean>(false);
    const [gridPositions, setGridPositions] = useState<Position[]>([]);
    const gridPositionsRef = useRef<Position[]>([])
    const { originOfCoordinates, closestPosition, offset } = useContext(BasicEditorContext);
    const gridRef = useRef(null);
    const markerDivRef = useRef(null);
    const cellWidth = gridPositions[0] ? Math.abs(gridPositions[0].x - gridPositions[1].x) - gridGap  : 50;
    // const [localOOC, setLocalOOC] = useState<Position>()

    //this is needed due to closure.
    //otherwise, the handleCursorMove function refers to old ooc
    useEffect(() => {
        window.addEventListener('mousemove', handleCursorMove);
        return () => window.removeEventListener('mousemove', handleCursorMove);
    },[originOfCoordinates])

    // useEffect(() => {
    //     // console.log("closest position:", closestPosition)
    // }, [closestPosition])

    useEffect(() => {
        const gridElement:any = gridRef.current;
        if (gridElement) {
            const cells = gridElement.querySelectorAll('div');
            const positions = Array.from(cells).map((cell:any) => {
                const rect = cell.getBoundingClientRect();
                const pos:Position = { x: rect.left - (originOfCoordinates?.x || 0), y: rect.top - (originOfCoordinates?.y || 0) }
                // cell.addEventListener('mouseover', () => handleCellHover(pos));
                return pos;
            });
            setGridPositions(positions);
            gridPositionsRef.current = positions;
        }
    },[originOfCoordinates]);

    useEffect(() => {
        window.addEventListener('mousedown', () => setIsMarkerVisible(true))
        window.addEventListener('mouseup', () => setIsMarkerVisible(false))
    }, [])

    function handleCursorMove(e:any) {
        const xPos = e.clientX - (originOfCoordinates?.x ?? 0) - offset.x - cellWidth/2;
        const yPos = e.clientY - (originOfCoordinates?.y ?? 0) - offset.y - cellWidth/2;
        findClosestPosition(xPos, yPos, gridPositionsRef.current);
    }

    function findClosestPosition(cursorX: number, cursorY: number, positions: Position[]) {
        let closestPosition = { x: 0, y: 0 };
        let minDistance = Infinity;
        
        positions.forEach((position) => {
            const distance = Math.sqrt(Math.pow(cursorX - position.x, 2) + Math.pow(cursorY - position.y, 2));
             
            if (distance < minDistance) {
                minDistance = distance;
                closestPosition = position;
                if(originOfCoordinates){
                    // closestPosition.x -= originOfCoordinates.x 
                    // closestPosition.y -= originOfCoordinates.y
                }
            }
        })

        setClosestPosition(closestPosition || { x: 0, y: 0 });
    }

    
    const markerDivStyle:MarkerDivStyleType = {
        width: `${cellWidth}px`,
        height: `${cellWidth}px`,
        position:'absolute',
        left: closestPosition?.x || 0,
        top: closestPosition?.y || 0,
        // left: (closestPosition?.x || 0) - (originOfCoordinates?.x || 0),
        // top: (closestPosition?.y || 0) - (originOfCoordinates?.y || 0),
        border: '3px solid yellow'
    }

    return (
        <>
        {
            isMarkerVisible &&
            <div style={markerDivStyle} ref={markerDivRef}></div>
        }
            <div ref={gridRef} style={backgroundGridStyle}>
                {Array.from({ length: 200 }).map((_, index) => (
                    <div key={index} style={cellStyle}/>
                ))}
            </div>
        </>
    );
}

export default BackgroundGrid