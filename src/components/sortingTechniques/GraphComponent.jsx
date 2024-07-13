import React, { useEffect, useState } from "react";
import colourScheming from "../../data/colourScheming"; // Assuming correct import path
import { useSelector } from "react-redux";

const GraphComponent = ({ array, heightpx, width, compare = [], swap = [], sort = [], insertionOut,merging=[],sortCall=[],partitionElement,heapArray=[] }) => {
    const {count}=useSelector((state)=>state.choice)
    const [colourData, setColourData] = useState([]);
    const { sortingTechnique } = useSelector((state) => state.choice);

    // useEffect to update colourData when selectedTechnique changes
    useEffect(() => {
        const selectedScheme = colourScheming.find((scheme) => scheme.name === sortingTechnique);
        if (selectedScheme) {
            setColourData(selectedScheme.coloursUsed);
        }
    }, [sortingTechnique]);

    // Function to find and return the correct color for each element
    const findColor = (index) => {
        if (sort.length === 2 && sort[0] <= index && sort[1] >= index) return "#43D9AE";
        if(heapArray.length===2 && heapArray[0]<=index && heapArray[1]>=index)  return "#955251"
        if(sortCall.length===2 && sortCall[0]<=index && sortCall[1]>=index)   return "#FFC0CB";
        if(partitionElement===index) return "#000";
        if(merging.length===2 && merging[0]<=index && merging[1]>=index)   return "black";
        if (insertionOut === index) return "#FFBF00";
        if (swap.includes(index)) return "#6CB4EE";
        if (compare.includes(index)) return "#D5335E";
        return "white";
    };

    return (
        <div>
            {/* Displaying the color legend */}
            <div className="flex flex-row justify-between mb-4 font-raleway">
                {colourData.map((color, idx) => (
                    <div key={idx} className="flex flex-row gap-1 items-center ">
                        <div className="w-[20px] h-[20px] border-[1px] border-black rounded-full" style={{ backgroundColor: color.ActualColor }}></div> {/* Adjusted class interpolation */}
                        <div className="font-semibold">{color.Significance}</div>
                    </div>
                ))}
            </div>

            {/* Displaying the graph */}
            <div className="w-full flex flex-row justify-between h-[85%] items-end bg-[#f4f6fb] p-4 pt-8">
                {array.map((val, index) => (
                    <div
                        key={index}
                        className={`text-black text-center font-semibold  border-black border-[1px] ${count<=25?"text-xl":"text-[10px]"}`}
                        style={{
                            height: `${(val / 120) * heightpx}px`, // Calculate height dynamically
                            width: `${width}px`,
                            backgroundColor: findColor(index), // Determine background color dynamically
                        }}
                    >
                        {count<=75?val:""}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GraphComponent;
