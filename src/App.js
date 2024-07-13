import "./App.css";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import SortingLogic from "./components/sortingTechniques/sortingLogic";

function App() {
    return (
        <div>
            <Navbar />

            <div className="flex flex-row">
                <div className="w-[14%]">
                    <Sidebar />
                </div>
                <div className="w-[86%]">
                    <SortingLogic />
                </div>
            </div>
        </div>
    );
}

export default App;
