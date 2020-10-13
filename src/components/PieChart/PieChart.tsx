import React from "react";
import { getCoordinatesForPercent } from "../../helpers/helprs";
import "./PieChart.scss";
import PieChunk from "../PieChunk/PieChunk";

type Props = {
    pieChunks: Chunk[];
};

const PieChart: React.FC<Props> = ({ pieChunks }) => {
    let percent = 0;
    let startPercentPieChunk = 0;
    const totalSum = pieChunks.reduce((acc, b) => {
        return acc + b.total;
    }, 0);
    let startXFull = 0;
    let startYFull = 0;
    let endXFull = 0;
    let endYFull = 0;
    let startXHalf1 = 0;
    let startYHalf1 = 0;
    let endXHalf1 = 0;
    let endYHalf1 = 0;
    let startXHalf2 = 0;
    let startYHalf2 = 0;
    let endXHalf2 = 0;
    let endYHalf2 = 0;
    const chunksArrLength = pieChunks.length;


    if (chunksArrLength === 0) {
        return (
            <div className="chunk__header-wrapper">
                <h1 className="chunk__header">
                    No items for pie chunk, please add items
                </h1>
            </div>
        )
    }

    return (
        <div className="chart">
            <svg
                className="chart__svg"
                viewBox="-1.5 -1.5 3 3"
                style={{transform: "rotate(-90deg)"}}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                {pieChunks.map(cir => {
                    const chunkPerc = cir.total / totalSum;
                    if (chunkPerc > 0.5) {
                        const chunkPercHalf = chunkPerc / 2;
                        [startXHalf1, startYHalf1] = getCoordinatesForPercent(percent);
                        percent += chunkPercHalf;
                        [endXHalf1, endYHalf1] = getCoordinatesForPercent(percent);
                        [startXHalf2, startYHalf2] = getCoordinatesForPercent(percent);
                        percent += chunkPercHalf;
                        [endXHalf2, endYHalf2] = getCoordinatesForPercent(percent);
                    } else {
                        [startXFull, startYFull] = getCoordinatesForPercent(percent);
                        percent += chunkPerc;
                        [endXFull, endYFull] = getCoordinatesForPercent(percent);
                    }
                    const endPercentText = ((percent - startPercentPieChunk) / 2) + startPercentPieChunk;
                    const [endTextX, endTextY] = getCoordinatesForPercent(endPercentText);
                    startPercentPieChunk= percent;
                    const largeArcFlag = (chunkPerc / 100 > 0.5) ? 1 : 0;

                    return (
                        <PieChunk
                            key={cir.id}
                            color={cir.color}
                            startXFull={startXFull}
                            startYFull={startYFull}
                            endXFull={endXFull}
                            endYFull={endYFull}
                            startXHalf1={startXHalf1}
                            startYHalf1={startYHalf1}
                            startXHalf2={startXHalf2}
                            startYHalf2={startYHalf2}
                            endXHalf1={endXHalf1}
                            endYHalf1={endYHalf1}
                            endXHalf2={endXHalf2}
                            endYHalf2={endYHalf2}
                            largeArcFlag={largeArcFlag}
                            name={cir.name}
                            endTextX={endTextX}
                            endTextY={endTextY}
                            index={cir.id}
                            chunkPerc={chunkPerc}
                        />
                    );
                })}
            </svg>
        </div>
    )
};

export default PieChart;
