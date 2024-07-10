import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCount, setSortingTechnique } from "../../slices/choiceSlice";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const { count } = useSelector((state) => state.choice);
    const { sortingTechnique } = useSelector((state) => state.choice);
    const [countOpen, setCountOpen] = useState(false);
    const [sortOpen, setSortOpen] = useState(true);
    const countOptions = [10, 20, 25, 50, 75, 100,200,500];
    const sortOptions=["Selection Sort","Bubble Sort","Insertion Sort","Merge Sort","Quick Sort"];
    const dispatch = useDispatch();

    const handleCountChange = (val) => {
        dispatch(setCount(val));
        setCountOpen(false);
    };
    const handleSortChange=(val)=>{
        dispatch(setSortingTechnique(val));
        setSortOpen(false);
    }
    return (
        <div className="w-[12%]  border-r-1 border-r-black bg-[#f4f6fb] min-h-[calc(100vh-60px)] h-full">
            
            <div className="w-full">
                <div className="flex flex-row gap-2 w-full">
                    <div className="flex flex-col w-full ">
                        <div className="flex flex-row gap-2 items-center">
                            {/* <div className="font-semibold text-xl">{sortingTechnique}</div>
                            <FaChevronDown
                                onClick={() => {
                                    setSortOpen(!sortOpen);
                                }}
                                className="cursor-pointer"
                            /> */}
                        </div>
                        <div className="w-full">
                            
                                <div className="flex flex-col w-full ">
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
            {/* Count part */}
            <div className="px-5">
                <div className="flex flex-row gap-2 w-full justify-between">
                    <div className="font-semibold text-lg">Size</div>
                    <div className="flex flex-col mt-1 ">
                        <div className="flex flex-row gap-2 items-center">
                            <div>{count}</div>
                            <FaChevronDown
                                onClick={() => {
                                    setCountOpen(!countOpen);
                                }}
                                className="cursor-pointer"
                            />
                        </div>
                        <div >
                            {countOpen && (
                                <div>
                                    {countOptions.map((option, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={`${
                                                    option === count
                                                        ? "bg-green-400"
                                                        : "bg-white"
                                                } cursor-pointer border-black border-[1px] px-2`}
                                                onClick={() => {
                                                    handleCountChange(option);
                                                }}
                                            >
                                                {option}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
