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
    }
];

export default sortInfo;
