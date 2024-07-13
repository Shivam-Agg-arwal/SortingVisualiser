const sortInfo = [
    {
        algoName: "Selection Sort",
        Idea: "Imagine sorting toys by repeatedly finding the smallest one and placing it in the right spot.",
        Process: "It scans through the toys, finds the smallest one, and swaps it with the first toy. Then it repeats this process for the next unsorted part.",
        Efficiency: "It's simple to understand but not the fastest for large numbers of toys.",
        Example: "Like organizing toys by repeatedly picking the smallest one and putting it in its correct place.",
        timeComplexity: {
            worst: "O(n^2)",
            average: "O(n^2)",
            best: "O(n^2)"
        },
        spaceComplexity: {
            worst: "O(1)",
            average: "O(1)",
            best: "O(1)"
        }
    },
    {
        algoName: "Bubble Sort",
        Idea: "Imagine sorting toys by repeatedly swapping adjacent ones if they're in the wrong order.",
        Process: "It compares adjacent toys and swaps them if they're out of order, moving the largest unsorted toy to its correct position in each pass.",
        Efficiency: "Easy to grasp but can be slow, especially for lots of toys.",
        Example: "Like bubbles in a fizzy drink rising to the top, it moves the biggest toys to their correct places step by step.",
        timeComplexity: {
            worst: "O(n^2)",
            average: "O(n^2)",
            best: "O(n)"
        },
        spaceComplexity: {
            worst: "O(1)",
            average: "O(1)",
            best: "O(1)"
        }
    },
    {
        algoName: "Insertion Sort",
        Idea: "Imagine sorting toys by inserting each one into its right place among already sorted toys.",
        Process: "It picks one toy at a time and inserts it into its correct position among the sorted toys, shifting others as needed.",
        Efficiency: "Simple and efficient for small numbers of toys but can be slower for larger sets.",
        Example: "Like sorting playing cards by picking each new card and slotting it into the right position in a hand that's already sorted.",
        timeComplexity: {
            worst: "O(n^2)",
            average: "O(n^2)",
            best: "O(n)"
        },
        spaceComplexity: {
            worst: "O(1)",
            average: "O(1)",
            best: "O(1)"
        }
    },
    {
        algoName: "Merge Sort",
        Idea: "Imagine dividing a pile of toys into smaller piles, sorting each pile, and then merging them back together.",
        Process: "It divides the array into two halves, sorts each half recursively, and then merges them in order.",
        Efficiency: "Efficient and stable, consistently O(n log n) regardless of input, but requires extra space for merging.",
        Example: "Like sorting a deck of cards by dividing it into smaller piles, sorting each, and then merging them back into a sorted deck.",
        timeComplexity: {
            worst: "O(n log n)",
            average: "O(n log n)",
            best: "O(n log n)"
        },
        spaceComplexity: {
            worst: "O(n)",
            average: "O(n)",
            best: "O(n)"
        }
    },
    {
        algoName: "Quick Sort",
        Idea: "Imagine sorting toys by picking one toy as a pivot, rearranging the toys so that all smaller toys are on one side and larger toys on the other, and repeating this process for each side.",
        Process: "It selects a pivot, partitions the array into elements less than the pivot and elements greater than the pivot, and recursively sorts the sub-arrays.",
        Efficiency: "Very efficient for large datasets due to its average-case time complexity, but can degrade to O(n^2) in worst cases without proper pivot selection.",
        Example: "Like sorting cards by picking a card as a pivot, grouping smaller and larger cards, and sorting each group.",
        timeComplexity: {
            worst: "O(n^2)",
            average: "O(n log n)",
            best: "O(n log n)"
        },
        spaceComplexity: {
            worst: "O(log n)",
            average: "O(log n)",
            best: "O(log n)"
        }
    },
    {
        algoName: "Heap Sort",
        Idea: "Imagine organizing toys by using a heap structure, repeatedly removing the largest toy and placing it in the correct position.",
        Process: "It builds a max heap (or min heap), repeatedly swaps the root (largest element for max heap) with the last element, and then heapifies the reduced heap.",
        Efficiency: "Efficient and in-place, consistently O(n log n) time complexity, but not stable.",
        Example: "Like sorting toys by always picking the largest one and placing it in the correct spot, using a heap structure.",
        timeComplexity: {
            worst: "O(n log n)",
            average: "O(n log n)",
            best: "O(n log n)"
        },
        spaceComplexity: {
            worst: "O(1)",
            average: "O(1)",
            best: "O(1)"
        }
    },
    {
        algoName: "Radix Sort",
        Idea: "Imagine sorting toys by sorting them based on each digit or character, from the least significant to the most significant.",
        Process: "It sorts numbers or strings by grouping elements with the same starting digit/character and sorting each group based on the next significant digit/character.",
        Efficiency: "Efficient for fixed-length keys (like integers) but less efficient for variable-length keys, O(nk) where k is the number of digits/characters.",
        Example: "Like sorting toys by first sorting them based on their color, then by size, and so on.",
        timeComplexity: {
            worst: "O(nk)",
            average: "O(nk)",
            best: "O(nk)"
        },
        spaceComplexity: {
            worst: "O(n + k)",
            average: "O(n + k)",
            best: "O(n + k)"
        }
    }
];

export default sortInfo;
