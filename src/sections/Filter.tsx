import { useState } from "react";
import playData from "../api/playdata";
import TicketCard from "../components/shared/TicketCard";
import { NavLink } from "react-router-dom";

function Filter() {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedFunType, setSelectedFunType] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    // const [allCategory,setAllCategory]=useState("");

    const filteredData = playData.filter((item) => {

        const matchDate = () => {
            if (selectedDate === "Today") {
                const today = new Date().getDate();
                return item.organizedDate === today;
            }
            if (selectedDate === "Tomorrow") {
                const tomorrow = new Date().getDate() + 1;
                return item.organizedDate === tomorrow;
            }
            if (selectedDate === "Weekend") {
                return item.day === "Saturday" || item.day === "Sunday";
            }
            return true;
        };

        const matchCategory = selectedCategory ? item.categories === selectedCategory : true;
        const matchFunType = selectedFunType ? item.funType === selectedFunType : true;
        // const allMatchCategory=allCategory? item.categories ===allCategory : true;

        const matchPrice = () => {
            if (selectedPrice === "Free") return item.price === 0;
            if (selectedPrice === "0 - 500") return item.price > 0 && item.price <= 500;
            if (selectedPrice === "500 - 2000") return item.price > 500 && item.price <= 2000;
            if (selectedPrice === "Above 2000") return item.price > 2000;
            return true; 
        };

        return matchDate() && matchCategory && matchFunType &&  matchPrice();
    });

    return (
        <section id="filter" className="w-full mt-8">
            <div className="max-w-7xl mx-auto w-full px-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                {/* Left Sidebar */}
                <div className="sm:w-1/4 w-full p-4 rounded-md">
                    <h1 className="text-2xl font-semibold">Filters</h1>

                    {/* Date */}
                    <div className="w-full bg-white h-40 mt-4 px-2 rounded-md border border-slate-300 overflow-y-auto">
                        <div className="flex justify-between">
                            <h1 className="text-rose-400 py-1">Date</h1>
                            <h1 className="text-[12px] py-1 font-sans cursor-pointer" onClick={() => setSelectedDate("")}>Clear</h1>
                        </div>
                        <div className="flex flex-wrap gap-2 py-2">
                            {["Today", "Tomorrow", "Weekend"].map((label, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedDate(label)}
                                    className={`px-2 py-1 text-sm font-medium shadow-sm cursor-pointer transition ${selectedDate === label ? "bg-rose-200" : "bg-white text-rose-400"
                                        }`}
                                >
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="w-full bg-white h-40 mt-4 px-2 rounded-md border border-slate-300 overflow-y-auto">
                        <div className="flex justify-between">
                            <h1 className="text-rose-400 py-1">Categories</h1>
                            <h1 className="text-[12px] py-1 font-sans cursor-pointer" onClick={() => setSelectedCategory("")}>Clear</h1>
                        </div>
                        <div className="flex flex-wrap gap-2 py-2">
                            {["Cricket", "Running", "Walking", "Cycling", "Football", "Hiking"].map((label, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedCategory(label)}
                                    className={`px-2 py-1 text-sm font-medium shadow-sm cursor-pointer transition ${selectedCategory === label ? "bg-rose-200" : "bg-white text-rose-400"
                                        }`}
                                >
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* More Filters */}
                    <div className="w-full bg-white h-40 mt-4 px-2 rounded-md border border-slate-300 overflow-y-auto">
                        <div className="flex justify-between">
                            <h1 className="text-rose-400 py-1">More Filters</h1>
                            <h1 className="text-[12px] py-1 font-sans cursor-pointer" onClick={() => setSelectedFunType("")}>Clear</h1>
                        </div>
                        <div className="flex flex-wrap gap-2 py-2">
                            {["Outdoor Events", "IPL", "Fast Filling", "Kid"].map((label, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedFunType(label)}
                                    className={`px-2 py-1 text-sm font-medium shadow-sm cursor-pointer transition ${selectedFunType === label ? "bg-rose-200" : "bg-white text-rose-400"
                                        }`}
                                >
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Price */}
                    <div className="w-full bg-white h-40 mt-4 px-2 rounded-md border border-slate-300 overflow-y-auto">
                        <div className="flex justify-between">
                            <h1 className="text-rose-400 py-1">Price</h1>
                            <h1 className="text-[12px] py-1 font-sans cursor-pointer" onClick={() => setSelectedPrice("")}>Clear</h1>
                        </div>
                        <div className="flex flex-wrap gap-2 py-2">
                            {["Free", "0 - 500", "500 - 2000", "Above 2000"].map((label, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedPrice(label)}
                                    className={`px-2 py-1 text-sm font-medium shadow-sm cursor-pointer transition ${selectedPrice === label ? "bg-rose-200" : "bg-white text-rose-400"
                                        }`}
                                >
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-10 mt-4 rounded-md border border-rose-400 flex justify-center items-center">
                        <button className="text-rose-500 font-sans">Choose by Venues</button>
                    </div>
                </div>

                {/* Right Content */}
                <div className="sm:w-3/4 w-full p-4 rounded-md">
                    <h1 className="text-2xl font-semibold">Sports in India</h1>

                    <div className="w-full flex flex-wrap justify-start items-center mt-4 gap-3">
                        {["Cricket", "Running", "Walking", "Cycling", "Football", "Hiking"].map((sport, index) => (
                            <div
                                key={index}
                                onClick={()=>setSelectedCategory(sport)}
                                className="bg-white text-rose-500 px-4 py-1 rounded-full text-sm font-medium shadow-sm cursor-pointer hover:bg-rose-100 transition"
                            >
                                {sport}
                            </div>
                        ))}
                    </div>

                    {/* Ticket Cards */}
                    <div className="w-full flex flex-wrap gap-4 mt-4">
                        {filteredData.map((item, index) => (
                            <div key={index} className="w-full sm:w-[48%] lg:w-[23%]">
                                <NavLink key={item.id} to={`/${item.id}`}>
                                <TicketCard
                                    match={item.match}
                                    matchImage={item.matchImage}
                                    price={item.price}
                                    matchType={item.matchType}
                                    venue={item.venue}
                                />
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Filter;
