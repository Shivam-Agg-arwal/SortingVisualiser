import React, { useEffect, useState } from "react";
import colourScheming from "../../data/colourScheming"; // Assuming correct import path
import { useSelector } from "react-redux";

const GraphComponent = ({ array, heightpx, width, compare, swap, sort,insertionOut }) => {
    const [colourData, setColourData] = useState([]);
    const {sortingTechnique}=useSelector((state)=>state.choice)

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
        if(insertionOut===index)    return "#FFBF00";
        if (swap.includes(index)) return "#6CB4EE";
        if (compare.includes(index)) return "#D5335E";
        return "white";
    };

    console.log(colourData);

    return (
        <div>
            {/* Displaying the color legend */}
            <div className="flex flex-row justify-between mb-4">
                {colourData.map((color, idx) => (
                    <div key={idx} className="flex flex-row gap-1 items-center ">
                        <div className={`w-[20px] h-[20px] bg-[${color.ActualColor}] border-[1px] border-black`} >.</div> {/* Adjusted class interpolation */}
                        <div className={``}>{color.Significance}</div>
                        {console.log(color.ActualColor)}
                    </div>
                ))}
            </div>

            {/* Displaying the graph */}
            <div className="w-full flex flex-row justify-between h-[85%] items-end bg-[#f4f6fb] p-4 pt-8">
                {array.map((val, index) => (
                    <div
                        key={index}
                        className="text-white border-black border-[1px]"
                        style={{
                            height: `${(val / 120) * heightpx}px`, // Calculate height dynamically
                            width: `${width}px`,
                            backgroundColor: findColor(index), // Determine background color dynamically
                        }}
                    >
                        {""}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GraphComponent;
