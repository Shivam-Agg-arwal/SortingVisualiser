import React from "react";
import { BiBarChart } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className="h-[60px] bg-[#f4f6fb] border-b-[1px] border-black flex items-center ">
            <div className="mx-auto w-10/12 flex justify-between">
                <div className="flex flex-row gap-2 items-center font-semibold text-2xl ">
                    <BiBarChart />
                    SortVisualizer Pro
                </div>
				<div>
					Light/Dark
				</div>

            </div>
        </div>
    );
};

export default Navbar;
