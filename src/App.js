import { Route, Routes,Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import SortingLogic from "./components/sortingTechniques/sortingLogic";

function App() {
	
  return (
    <div>
		<Navbar/>

		<div className="flex flex-row">
			<Sidebar/>
			<div className="w-[86%]">
				<Routes>
					<Route path="/" element={<SortingLogic/>} />
				</Routes>
			</div>
		</div>
    </div>
  );
}

export default App;
