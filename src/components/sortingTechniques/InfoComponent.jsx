import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import sortInfo from "../../data/sortingInfo";

const InfoComponent = () => {
    const { sortingTechnique } = useSelector((state) => state.choice);
    const [sortData, setSortData] = useState(null); // Initialize with null or {}

    useEffect(() => {
        const data = sortInfo.find((val) => val.algoName === sortingTechnique);
        setSortData(data);
    }, [sortingTechnique]); // Include sortInfo in dependencies if it changes

    if (!sortData) return null; // Add a loading state if necessary

    return (
        <div className="w-10/12 mx-auto mb-4 font-nunito">
            <div className="text-2xl font-semibold my-4">
                {sortData.algoName}
            </div>
            <div className="flex flex-row gap-2 w-full">
                <div className="w-[60%] border-r-[1px] pr-4 border-black">
                    <div className="flex flex-row gap-2 text-justify">
                        <div className="font-semibold text-lg">Idea: </div>
                        <div>{sortData.Idea}</div>
                    </div>
                    <div className="flex flex-row gap-2 text-justify">
                        <div className="font-semibold text-lg">Process: </div>
                        <div>{sortData.Process}</div>
                    </div>
                    <div className="flex flex-row gap-2 text-justify">
                        <div className="font-semibold text-lg">
                            Efficiency:{" "}
                        </div>
                        <div>{sortData.Efficiency}</div>
                    </div>
                    <div className="flex flex-row gap-2 text-justify">
                        <div className="font-semibold text-lg">Example: </div>
                        <div>{sortData.Example}</div>
                    </div>
                </div>
                <div className="pl-4">
                    <div className="text-xl font-semibold">Statistics</div>
                    <div>
                        <div className="flex flex-row gap-2">
                            <div>
                                <div>Worst Case Time Complexity:</div>
                                <div>Average Case Time Complexity:</div>
                                <div>Best Case Time Complexity:</div>
                            </div>
                            <div>
                                <div>{sortData.timeComplexity.worst}</div>
                                <div>{sortData.timeComplexity.average}</div>
                                <div>{sortData.timeComplexity.best}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row gap-2">
                            <div>
                                <div>Worst Case Space Complexity:</div>
                                <div>Average Case Space Complexity:</div>
                                <div>Best Case Space Complexity:</div>
                            </div>
                            <div>
                                <div>{sortData.spaceComplexity.worst}</div>
                                <div>{sortData.spaceComplexity.average}</div>
                                <div>{sortData.spaceComplexity.best}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoComponent;
