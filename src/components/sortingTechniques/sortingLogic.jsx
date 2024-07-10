import React, { useEffect, useRef, useState } from "react";
import GraphComponent from "./GraphComponent";
import Slider from "../common/Slider";
import { useSelector } from "react-redux";
import InfoComponent from "./InfoComponent";
import { GrPowerReset } from "react-icons/gr";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { ImShuffle } from "react-icons/im";

const SortingLogic = () => {
    const [waitTime, setWaitTime] = useState(300);
    const waitTimeRef = useRef(waitTime);
    const { count } = useSelector((state) => state.choice);
    const { sortingTechnique } = useSelector((state) => state.choice);
    const [array, setArray] = useState([]);
    const [stArray, setStArray] = useState([]);
    const [width, setWidth] = useState(0);
    const [heightpx, setHeightpx] = useState(0);
    const [comparingIndices, setComparingIndices] = useState([]);
    const [swappingIndices, setSwappingIndices] = useState([]);
    const [sortedIndices, setSortedIndices] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [outerIndices,setOuterIndices]=useState(0);
    const [insertionOuter,setInsertionOuter]=useState(null);
    const sortingRef = useRef(false);

    const screenRef = useRef();

    const createArray = () => {
        setIsSorting(false);
        sortingRef.current = false;
        setComparingIndices([]);
        setSwappingIndices([]);
        setSortedIndices([]);
        let randomArray = [];
        for (let i = 0; i < count; i++) {
            randomArray.push(Math.floor(Math.random() * 99) + 1);
        }
        setArray(randomArray);
        setStArray(randomArray);
        setComparingIndices([]);
        setSwappingIndices([]);
        setSortedIndices([]);
        setOuterIndices(0);
        setInsertionOuter(null);
    };

    const widthCorrecter = () => {
        if (screenRef.current) {
            let screenWidth = screenRef.current.clientWidth;
            const screenHeight = screenRef.current.clientHeight;
            screenWidth -= 150;
            let barWidth = screenWidth / count;
            setWidth(barWidth);
            setHeightpx(screenHeight);
        }
    };

    useEffect(() => {
        createArray();
    }, [count, sortingTechnique]);

    useEffect(() => {
        widthCorrecter();
    }, [count, screenRef]);

    useEffect(() => {
        waitTimeRef.current = waitTime;
    }, [waitTime]);

    const selectionSort = async () => {
        let arr = [...array];
        for (let i = outerIndices; i < count - 1; i++) {
            if (!sortingRef.current) return;
            setSwappingIndices([]);
            let minIndex = i;
            for (let j = i + 1; j < count; j++) {
                if (!sortingRef.current) return;
                setComparingIndices([j, minIndex]);
                await new Promise((resolve) =>
                    setTimeout(resolve, waitTimeRef.current)
                );
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            setComparingIndices([]);
            if(i!=minIndex){
                setSwappingIndices([i, minIndex]);
                await new Promise((resolve) =>
                    setTimeout(resolve, waitTimeRef.current)
                );
                let temp = arr[minIndex];
                arr[minIndex] = arr[i];
                arr[i] = temp;
            }
            setArray([...arr]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            setSwappingIndices([])
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            setSortedIndices([0, i]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            setOuterIndices(i+1);
        }
        setSortedIndices([0, count - 1]);
        setComparingIndices([]);
        setSwappingIndices([]);
    };

    const bubbleSort = async () => {
        let arr = [...array];
        for (let i = outerIndices; i < count - 1; i++) {
            if (!sortingRef.current) return;
            for (let j = 0; j < count - i - 1; j++) {
                if (!sortingRef.current) return;
                setComparingIndices([j, j + 1]);
                await new Promise((resolve) =>
                    setTimeout(resolve, waitTimeRef.current)
                );
                if (arr[j] > arr[j + 1]) {
                    setComparingIndices([]);
                    setSwappingIndices([j, j + 1]);
                    await new Promise((resolve) =>
                        setTimeout(resolve, waitTimeRef.current)
                    );
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    setArray([...arr]);
                    await new Promise((resolve) =>
                        setTimeout(resolve, waitTimeRef.current)
                    );
                    setSwappingIndices([]);
                    await new Promise((resolve) =>
                        setTimeout(resolve, waitTimeRef.current)
                    );
                }
            }
            setSortedIndices([count - 1 - i, count - 1]);
            setOuterIndices(i+1);
        }
        setSortedIndices([0, count - 1]);
        setComparingIndices([]);
        setSwappingIndices([]);
    };

    const insertionSort = async () => {
        let arr = [...array];
        for (let i = outerIndices; i < count; i++) {
            setInsertionOuter(i);
            if (!sortingRef.current) return;
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                if (!sortingRef.current) return;
                setComparingIndices([j, j + 1]);
                setArray([...arr]);
                await new Promise((resolve) =>
                    setTimeout(resolve, waitTimeRef.current)
                );
                arr[j + 1] = arr[j];
                j = j - 1;
                setArray([...arr]);
                await new Promise((resolve) =>
                    setTimeout(resolve, waitTimeRef.current)
                );
            }
            arr[j + 1] = key;
            setArray([...arr]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            setOuterIndices(i+1);
        }
        setComparingIndices([]);
        setSortedIndices([0, count - 1]);
    };

    const startSorting = async () => {
        setIsSorting(true);
        sortingRef.current = true;
        if (sortingTechnique === "Selection Sort") await selectionSort();
        else if (sortingTechnique === "Insertion Sort") await insertionSort();
        else if (sortingTechnique === "Bubble Sort") await bubbleSort();
        setIsSorting(false);
        sortingRef.current = false;
    };

    useEffect(() => {
        setIsSorting(false);
        sortingRef.current = false;
    }, [count, sortingTechnique]);

    return (
        <div className="h-full w-full flex flex-col">
            <div className="h-[450px] w-full">
                <div
                    className="m-4 p-4 rounded-lg border-black h-[90%]"
                    ref={screenRef}
                >
                    <GraphComponent
                        array={array}
                        heightpx={heightpx}
                        width={width}
                        compare={comparingIndices}
                        swap={swappingIndices}
                        sort={sortedIndices}
                        insertionOut={insertionOuter}
                    />
                </div>
            </div>

            <div className="h-[50px] mb-10 flex gap-10 mx-auto">
                <div className="flex flex-row gap-4 items-center rounded-lg shadow-md p-8  border-black border-[1px]">
                    <div
                        className="cursor-pointer text-xl font-semibold hover:scale-95 transition-all duration-200"
                        onClick={() => {
                            setArray([...stArray]);
                            setComparingIndices([]);
                            setSortedIndices([]);
                            setSwappingIndices([]);
                            setIsSorting(false);
                            setInsertionOuter(null);
                            setOuterIndices(0);
                            sortingRef.current = false;
                        }}
                    >
                        <GrPowerReset />
                    </div>
                    <div
                        className="text-3xl cursor-pointer font-semibold p-2 rounded-full border-black border-[1px] flex items-center justify-center pl-[10px] hover:scale-95 transition-all duration-200"
                        onClick={() => {
                            if (isSorting) {
                                setIsSorting(false);
                                sortingRef.current = false;
                            } else {
                                startSorting();
                            }
                        }}
                    >
                        {isSorting ? <CiPause1 /> : <CiPlay1 />}
                    </div>
                    <div
                        className="cursor-pointer text-xl font-semibold hover:scale-95 transition-all duration-200"
                        onClick={() => {
                            createArray();
                        }}
                    >
                        <ImShuffle />
                    </div>
                </div>
                <div className="flex flex-row items-center rounded-md p-4 shadow-md border-[1px] gap-4 justify-center">
                    <div>Faster</div>
                    <div className="w-[400px]  flex flex-row gap-2 items-center justify-center">
                        <div className="w-full">
                            <Slider
                                value={waitTime}
                                onChange={(e) => {
                                    setWaitTime(Number(e.target.value));
                                    waitTimeRef.current = Number(
                                        e.target.value
                                    );
                                }}
                            />
                        </div>
                    </div>
                    <div>Slower</div>
                </div>
            </div>
            <div>
                <InfoComponent />
            </div>
        </div>
    );
};

export default SortingLogic;
