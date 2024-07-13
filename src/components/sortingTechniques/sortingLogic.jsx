import React, { useEffect, useRef, useState } from "react";
import GraphComponent from "./GraphComponent";
import { useSelector } from "react-redux";
import InfoComponent from "./InfoComponent";
import { GrPowerReset } from "react-icons/gr";
import { CiPause1, CiPlay1, CiStop1 } from "react-icons/ci";
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
    const [outerIndices, setOuterIndices] = useState(0);
    const [insertionOuter, setInsertionOuter] = useState(null);
    const [merging, setMerging] = useState([]);
    const [sortCall, setSortCall] = useState([]);
    const [partitionElement, setPartitionElement] = useState(null);
    const [heapified, setHeapified] = useState([]);
    const sortingRef = useRef(false);
    const [scaleEffectDown,setScaleEffectDown]=useState(false);
    const [scaleEffectUp,setScaleEffectUp]=useState(false);

    const waitTimeArr = [
        2,5,10, 20, 50, 100, 200, 300, 500, 750, 1000, 1500, 2000, 3000,
    ];
    const [waitTimeIndex, setWaitTimeIndex] = useState(7);

    const screenRef = useRef();

    const createArray = () => {
        setIsSorting(false);
        sortingRef.current = false;
        setComparingIndices([]);
        setSwappingIndices([]);
        setSortedIndices([]);
        setMerging([]);
        setSortCall([]);
        setPartitionElement(null);
        setHeapified([]);
        let randomArray = [];
        for (let i = 0; i < count; i++) {
            randomArray.push(Math.floor(Math.random() * 92) + 8);
        }
        setArray(randomArray);
        setStArray(randomArray);
        setComparingIndices([]);
        setSwappingIndices([]);
        setSortedIndices([]);
        setOuterIndices(0);
        setInsertionOuter(null);
        setMerging([]);
        setSortCall([]);
        setPartitionElement(null);
        setHeapified([]);
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
            if (i !== minIndex) {
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
            setSwappingIndices([]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            setSortedIndices([0, i]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            setOuterIndices(i + 1);
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
            setOuterIndices(i + 1);
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
            setOuterIndices(i + 1);
        }
        setComparingIndices([]);
        setSortedIndices([0, count - 1]);
    };

    const mergeSort = async (arr, start, end) => {
        if (start < end) {
            const mid = Math.floor((start + end) / 2);
            setSortCall([start, mid]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            await mergeSort(arr, start, mid);
            if (!sortingRef.current) return;
            setSortCall([mid + 1, end]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            await mergeSort(arr, mid + 1, end);
            if (!sortingRef.current) return;
            setSortCall([]);
            setMerging([start, end]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            setMerging([]);
            await merge(arr, start, mid, end);
            if (!sortingRef.current) return;
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
        }
    };

    const merge = async (arr, start, mid, end) => {
        const leftArray = arr.slice(start, mid + 1);
        const rightArray = arr.slice(mid + 1, end + 1);
        let i = 0,
            j = 0,
            k = start;

        while (i < leftArray.length && j < rightArray.length) {
            if (!sortingRef.current) return;
            setComparingIndices([start + i, mid + 1 + j]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );

            if (leftArray[i] <= rightArray[j]) {
                arr[k++] = leftArray[i++];
            } else {
                arr[k++] = rightArray[j++];
            }
            setArray([...arr]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
        }

        while (i < leftArray.length) {
            if (!sortingRef.current) return;
            arr[k++] = leftArray[i++];
            setArray([...arr]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
        }

        while (j < rightArray.length) {
            if (!sortingRef.current) return;
            arr[k++] = rightArray[j++];
            setArray([...arr]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
        }
        setComparingIndices([]);
    };
    const quickSort = async (arr, start, end) => {
        if (start < end) {
            // Visualize the call to quickSort
            setSortCall([start, end]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            setSortCall([]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );

            const pivotIndex = await partition(arr, start, end);

            // Recursively sort the left part
            await quickSort(arr, start, pivotIndex - 1);

            // Recursively sort the right part
            await quickSort(arr, pivotIndex + 1, end);
        }
    };

    const partition = async (arr, start, end) => {
        const pivot = arr[end];
        let pivotIndex = start;

        // Visualize the pivot element
        setPartitionElement(end);
        await new Promise((resolve) =>
            setTimeout(resolve, waitTimeRef.current)
        );
        setPartitionElement(null);

        for (let i = start; i < end; i++) {
            if (!sortingRef.current) return;

            // Visualize the comparison
            setComparingIndices([i, end]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            setComparingIndices([]);

            if (arr[i] < pivot) {
                // Visualize the swap
                if (i !== pivotIndex) {
                    setSwappingIndices([i, pivotIndex]);
                    await new Promise((resolve) =>
                        setTimeout(resolve, waitTimeRef.current)
                    );
                }
                [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
                setSwappingIndices([]);
                await new Promise((resolve) =>
                    setTimeout(resolve, waitTimeRef.current)
                );
                pivotIndex++;
            }

            // Visualize the current state of the array
            setArray([...arr]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
        }

        // Place the pivot element in its correct position
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
        setArray([...arr]);
        await new Promise((resolve) =>
            setTimeout(resolve, waitTimeRef.current)
        );

        return pivotIndex;
    };

    const heapSort = async (arr) => {
        const n = arr.length;

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            if (!sortingRef.current) return;
            await heapify(arr, n, i);
        }

        setHeapified([0, n - 1]);
        await new Promise((resolve) =>
            setTimeout(resolve, waitTimeRef.current)
        );
        setHeapified([]);

        for (let i = n - 1; i > 0; i--) {
            if (!sortingRef.current) return;
            setSwappingIndices([i, 0]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            [arr[0], arr[i]] = [arr[i], arr[0]];
            setArray([...arr]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            setSwappingIndices([]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            await heapify(arr, i, 0);
            setHeapified([0, i - 1]);
            setSortedIndices([i, count - 1]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            setHeapified([]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
        }
        setSortedIndices([0,count-1]);
    };

    const heapify = async (arr, n, i) => {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        if (!sortingRef.current) return;
        if (left < n) {
            setComparingIndices([left, largest]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            if (arr[left] > arr[largest]) {
                largest = left;
            }
            setComparingIndices([]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
        }
        if (right < n) {
            setComparingIndices([right, largest]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            if (arr[right] > arr[largest]) {
                largest = right;
            }
            setComparingIndices([]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
        }

        if (largest !== i) {
            setSwappingIndices([i, largest]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            setArray([...arr]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            setSwappingIndices([]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            setArray([...arr]);
            await new Promise((resolve) =>
                setTimeout(resolve, waitTimeRef.current)
            );
            if (!sortingRef.current) return;
            await heapify(arr, n, largest);
        }
    };

    const radixSort = async (arr) => {
        const maxNum = Math.max(...arr) * 10;
        let divisor = 10;

        while (maxNum / divisor > 1) {
            await countingSort(arr, divisor);
            if (!sortingRef.current) return;
            divisor *= 10;
        }
        if(sortingRef.current)  setSortedIndices([0, count - 1]);
    };

    const countingSort = async (arr, divisor) => {
        const buckets = [...Array(10)].map(() => []);
        for (let num of arr) {
            if (!sortingRef.current) return;
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
        }

        let i = 0;
        for (let bucket of buckets) {
            for (let num of bucket) {
                if (!sortingRef.current) return;
                arr[i++] = num;
                setArray([...arr]);
                await new Promise((resolve) =>
                    setTimeout(resolve, waitTimeRef.current)
                );
            }
        }
    };

    const startSorting = async () => {
        setIsSorting(true);
        sortingRef.current = true;
        if (sortingTechnique === "Selection Sort") await selectionSort();
        else if (sortingTechnique === "Insertion Sort") await insertionSort();
        else if (sortingTechnique === "Bubble Sort") await bubbleSort();
        else if (sortingTechnique === "Merge Sort") {
            await mergeSort(array, 0, array.length - 1);
            if(sortingRef.current){
                setSortedIndices([0, array.length - 1]);
            }
        } else if (sortingTechnique === "Quick Sort") {
            await quickSort(array, 0, array.length - 1);
            if(sortingRef.current){
                setSortedIndices([0, array.length - 1]);
            }
        } else if (sortingTechnique === "Heap Sort") await heapSort(array);
        else if (sortingTechnique === "Radix Sort") await radixSort(array);

        setIsSorting(false);
        sortingRef.current = false;
    };

    const handleSpeedUp = () => {
        setWaitTime(waitTimeArr[waitTimeIndex - 1]);
        setWaitTimeIndex(waitTimeIndex - 1);
        console.log(waitTimeIndex-1);
        setScaleEffectUp(true);
        setTimeout(() => {
            setScaleEffectUp(false);
    }, 100); // duration of the scale effect in milliseconds
    };
    const handleSpeedDown = () => {
        setWaitTime(waitTimeArr[waitTimeIndex + 1]);
        setWaitTimeIndex(waitTimeIndex + 1);
        console.log(waitTimeIndex+1);
        setScaleEffectDown(true);
        setTimeout(() => {
            setScaleEffectDown(false);
    }, 100); // duration of the scale effect in milliseconds
    };

    const pausableSortAlgo = () => {
        return (
            sortingTechnique === "Selection Sort" ||
            sortingTechnique === "Insertion Sort" ||
            sortingTechnique === "Bubble Sort"
        );
    };
    const resetArray = async () => {
        setComparingIndices([]);
        setSortedIndices([]);
        setSwappingIndices([]);
        setIsSorting(false);
        setInsertionOuter(null);
        setOuterIndices(0);
        setMerging([]);
        setSortCall([]);
        setPartitionElement(null);
        setHeapified([]);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setArray([...stArray]);
        sortingRef.current = false;
    };

    useEffect(() => {
        setIsSorting(false);
        sortingRef.current = false;
    }, [count, sortingTechnique]);

    return (
        <div className="h-full w-full flex flex-col gap-5">
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
                        merging={merging}
                        sortCall={sortCall}
                        partitionElement={partitionElement}
                        heapArray={heapified}
                    />
                </div>
            </div>

            <div className="h-[50px] mb-10 flex gap-10 mx-auto">
                <div className="flex flex-row gap-4 items-center rounded-lg shadow-md px-6 py-10  border-black border-[1px]">
                <button
                    className={`bg-[#007aff] shadow-md text-[#f4f6fb] rounded-md py-2 px-6 font-semibold w-fit border-black border-[1px] hover:bg-blue-600 ${waitTimeIndex>=waitTimeArr.length-1?"opacity-40":"opacity-100"} ${scaleEffectDown ? 'scale-95' : 'scale-100'}`}
                    onClick={() => {
                        handleSpeedDown();
                    }}
                    disabled={waitTimeIndex >=waitTimeArr.length-1}
                >
                    Speed Down
                </button>
                    <div
                        className="cursor-pointer text-xl font-semibold hover:scale-95 transition-all duration-200"
                        onClick={() => {
                            resetArray();
                        }}
                    >
                        <GrPowerReset />
                    </div>
                    <div
                        className="text-3xl cursor-pointer font-semibold p-2 rounded-full  border-black border-[1px] flex items-center justify-center pl-[10px] hover:scale-95 transition-all duration-200"
                        onClick={() => {
                            if (isSorting) {
                                setIsSorting(false);
                                sortingRef.current = false;
                                if (!pausableSortAlgo()) {
                                    resetArray();
                                }
                            } else {
                                startSorting();
                            }
                        }}
                    >
                        {!isSorting ? (
                            <CiPlay1 />
                        ) : pausableSortAlgo() ? (
                            <CiPause1 />
                        ) : (
                            <CiStop1 />
                        )}
                    </div>

                    <div
                        className="cursor-pointer text-xl font-semibold hover:scale-95 transition-all duration-200"
                        onClick={() => {
                            createArray();
                        }}
                    >
                        <ImShuffle />
                    </div>
                    <button
                    className={`bg-[#007aff] shadow-md text-[#f4f6fb] rounded-md py-2 px-6 font-semibold w-fit border-black border-[1px] hover:bg-blue-600 ${waitTimeIndex<=0?"opacity-40":"opacity-100"} ${scaleEffectUp ? 'scale-95' : 'scale-100'}`}
                    onClick={() => {
                        handleSpeedUp();
                    }}
                    disabled={waitTimeIndex <=0}
                >
                    Speed Up
                </button>
                </div>
                {/* <div className="flex flex-row items-center rounded-md p-4 shadow-md border-[1px] gap-4 justify-center">
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
                </div> */}
            </div>

            <div>
                <InfoComponent />
            </div>
        </div>
    );
};

export default SortingLogic;
