import React from "react";
import "./PieChunk.scss";

type Props = {
    color: string;
    startXFull: number;
    startYFull: number;
    endXFull: number;
    endYFull: number;
    largeArcFlag: number;
    name: string;
    endTextX: number;
    endTextY: number;
    index: string;
    startXHalf1: number;
    startYHalf1: number;
    startXHalf2: number;
    startYHalf2: number;
    endXHalf1: number;
    endYHalf1: number;
    endXHalf2: number;
    endYHalf2: number;
    chunkPerc: number;
}

const PieChunk: React.FC<Props> = ({
                                       color,
                                       startXFull,
                                       startYFull,
                                       endXFull,
                                       endYFull,
                                       largeArcFlag,
                                       name,
                                       endTextX,
                                       endTextY,
                                       index,
                                       startXHalf1,
                                       startYHalf1,
                                       startXHalf2,
                                       startYHalf2,
                                       endXHalf1,
                                       endYHalf1,
                                       endXHalf2,
                                       endYHalf2,
                                       chunkPerc,
                                   }) => {


    return (
        <g className="chunk"
        >
            {chunkPerc > 0.5
            ? (<>
                    <path
                        d={`M ${startXHalf1} ${startYHalf1} A 1 1 0 ${largeArcFlag} 1 ${endXHalf1} ${endYHalf1} L 0 0`}
                        fill={color}
                    />
                    <path
                    d={`M ${startXHalf2} ${startYHalf2} A 1 1 0 ${largeArcFlag} 1 ${endXHalf2} ${endYHalf2} L 0 0`}
                    fill={color}
                    />
                </>)
                : <path
                    d={`M ${startXFull} ${startYFull} A 1 1 0 ${largeArcFlag} 1 ${endXFull} ${endYFull} L 0 0`}
                    fill={color}
                />}
            <defs>
                <path
                    id={`text${index}`}
                    d={`
                        M 0 0 L ${endTextX} ${endTextY}
                    `}
                />
            </defs>
            <text
                fontSize="0.1px"
                fill="black"
                className="chunk__text"
            >
                <textPath
                    xlinkHref={`#text${index}`}
                    startOffset="20%"
                >
                    {name}
                </textPath>
            </text>
        </g>
    );
};

export default PieChunk;
