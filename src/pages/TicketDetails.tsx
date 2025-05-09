import { BsShare } from "react-icons/bs";
import calender from "../assets/icon/calendar.png"
import time from "../assets/icon/time.png"
import duration from "../assets/icon/duration.png"
import agelimit from "../assets/icon/age_limit.png"
import language from "../assets/icon/language.png"
import location from "../assets/icon/location.png"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import playData from "../api/playdata";


interface TDtype {
    id: number;
    match: string;
    venue: string;
    matchType: string;
    price: number;
    time: string;
    duration: string;
    ageLimit: string;
    language: string;
    categories: string;
    funType: string;
    organizedDate: number;
    organizedMonth: string;
    day: string;
    year:string
    detailsImage: string;
    description: string;
  }
  

  function TicketDetails() {
    const [ticketDetails, setTicketDetails] = useState<TDtype | null>(null);
    const { tickitid } = useParams();
   
    
  
    useEffect(() => {
        if (tickitid) {
          const match = playData.find((item) => item.id === Number(tickitid));
          setTicketDetails(match);
        }
    }, [tickitid]);
  
    if (!ticketDetails) return <div className="text-center mt-10">Loading...</div>;
    return (
        <section>
            <div className="h-screen w-full  px-4">
                <div className="flex h-full w-[95%] flex-row gap-4  ">
                    {/* Left Sidebar */}

                    <div className="mt-4  w-3/4 overflow-y-scroll scrollbar-hide  ">
                        <div className="flex justify-between px-4">
                            <h1 className="text-4xl font-semibold">{ticketDetails.match}</h1>
                            <button className="text-2xl"><BsShare /></button>
                        </div>

                        <div className="mt-4 h-94 w-full px-4">
                            <img src={ticketDetails.detailsImage} alt="" className="h-full w-full rounded-xl" />
                        </div>

                        <div className="flex h-16 w-full items-center justify-between  px-4">
                            <div className="flex h-10 w-20 items-center justify-center ">
                                <button className="h-[70%] w-[80%] rounded-md bg-black text-white shadow-2xl">{ticketDetails.categories}</button>
                            </div>
                            <div className="flex h-10 w-80 items-center justify-between gap-2 px-2">
                                <div className="h-full w-full flex items-center justify-center ">
                                    <h1>2.0k are interested</h1>
                                </div>
                                <div className="flex h-full w-full items-center justify-center  rounded-md">
                                    <button className="text-rose-500 border border-rose-400 rounded-md text-md">I'm Interest</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-[80%] items-start justify-start px-4 mt-4">
                            <h2 className="text-2xl font-semibold">About The Event</h2>
                            <p className="text-md mt-4">{ticketDetails.description}<span className="text-rose-500">Read More</span></p>
                        </div>

                    </div>

                    {/* Right Sidebar */}

                    <div className=" mt-4  w-1/4 bg-white px-2">
                        <div className="mt-4 flex flex-col gap-1  border-1 rounded-xl">
                            <div className="h-10 w-full  flex items-center justify-items-start gap-2 px-2">
                                <img className="size-5 " src={calender} />
                                <h1>{ticketDetails.day} <span>{ticketDetails.year}</span></h1>
                            </div>
                            <div className="h-10 w-full  flex items-center justify-items-start gap-2 px-2">
                                <img className="size-5 " src={time} />
                                <h1>{ticketDetails.time}</h1>
                            </div>

                            <div className="h-10 w-full  flex items-center justify-items-start gap-2 px-2">
                                <img className="size-5 " src={duration} />
                                <h1>{ticketDetails.duration}</h1>
                            </div>

                            <div className="h-10 w-full  flex items-center justify-items-start gap-2 px-2">
                                <img className="size-5 " src={agelimit} />
                                <h1>{ticketDetails.ageLimit}</h1>
                            </div>

                            <div className="h-10 w-full  flex items-center justify-items-start gap-2 px-2">
                                <img className="size-5 " src={language} />
                                <h1>{ticketDetails.language}</h1>
                            </div>

                            <div className="h-10 w-full  flex items-center justify-items-start gap-2 px-2">
                                <img className="size-5 " src={location} />
                                <h1>{ticketDetails.venue}</h1>
                            </div>

                            <div className="h-20 w-full  flex justify-between items-center px-2 ">
                                <div>
                                    <h2 className="font-semibold">{ticketDetails.price}</h2>
                                    <p className="text-md text-amber-600">Filling Fast</p>
                                </div>
                                <div className="h-16 w-[40%] mt-2 ">
                                    <button className="text-xl text-white bg-rose-500 font-semibold rounded-md">Login to book</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TicketDetails