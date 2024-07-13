import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCount, setSortingTechnique } from "../../slices/choiceSlice";

const Sidebar = () => {
    const { count } = useSelector((state) => state.choice);
    const { sortingTechnique } = useSelector((state) => state.choice);
    const countOptions = [10, 20, 25, 50, 75, 100, 200, 500];
    const sortOptions = [
        "Selection Sort",
        "Bubble Sort",
        "Insertion Sort",
        "Merge Sort",
        "Quick Sort",
        "Heap Sort",
        "Radix Sort",
    ];
    const dispatch = useDispatch();

    const handleCountChange = (val) => {
        dispatch(setCount(val));
    };
    const handleSortChange = (val) => {
        dispatch(setSortingTechnique(val));
    };
    return (
        <div className="w-full border-r-1 border-r-black bg-[#f4f6fb] min-h-[calc(100vh-60px)] h-full flex flex-col px-2 font-poppins">
            <div className="w-full my-20">
                <div className="flex flex-row gap-2 w-full">
                    <div className="flex flex-col w-full ">
                        <div className="w-full">
                            <div className="font-semibold text-xl ">
                                Sorting Techniques
                            </div>
                            <div className="flex flex-col w-full text-center">
                                {sortOptions.map((option, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`${
                                                option === sortingTechnique
                                                    ? "bg-green-400 font-semibold"
                                                    : "bg-white"
                                            } cursor-pointer border-black border-[1px] px-2 hover:scale-95`}
                                            onClick={() => {
                                                handleSortChange(option);
                                            }}
                                        >
                                            {option}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full my-20">
                <div className="flex flex-row gap-2 w-full">
                    <div className="flex flex-col w-full ">
                        <div className="w-full">
                            <div className="font-semibold text-xl ">
                                Element Count
                            </div>
                            <div className="flex flex-col w-full text-center ">
                                {countOptions.map((option, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`${
                                                option === count
                                                    ? "bg-green-400 font-semibold"
                                                    : "bg-white"
                                            } cursor-pointer border-black border-[1px] px-2 hover:scale-95`}
                                            onClick={() => {
                                                handleCountChange(option);
                                            }}
                                        >
                                            {option}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
