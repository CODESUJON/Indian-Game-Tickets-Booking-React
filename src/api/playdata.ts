import kkr1 from "../assets/kkr/kkr4.avif";
import kkr2 from "../assets/kkr/7may.avif"
import kkr3 from "../assets/kkr/26apr.avif"
import kkr4 from "../assets/kkr/4th may.avif"
import kkrDetails1 from "../assets/kkr/kkrdetails/kkr-guj.avif"
import kkrDetails2 from "../assets/kkr/kkrdetails/kkr-chainnai.avif"
import kkrDetails3 from "../assets/kkr/kkrdetails/kkr-pan.avif"
import kkrDetails4 from "../assets/kkr/kkrdetails/kkr-rj.avif"
import run1 from "../assets/running/run1.avif"
import run2 from "../assets/running/run2.avif"
import runDeatails1 from "../assets/running/run1 details.avif"
import runDetails2 from "../assets/running/run2 details.avif"





const playData = [
  {
    id: 1,
    match: "Kolkata Knight Riders vs Gujarat Titans",
    venue: "Eden Gardens: Kolkata",
    matchType: "T20",
    price: 900,
    time: "7:30 PM",
    duration: "4 Hours",
    ageLimit: "Age Limit - 2yrs +",
    language: "English",
    categories: "Cricket",
    funType: "IPL",
    organizedDate: 21,
    day: "Monday",
    year: "21 Apr 2025",
    matchImage: kkr1,
    detailsImage: kkrDetails1,
    description:"Book tickets for Kolkata Knight Riders vs Gujarat Titans IPL 2025 cricket for 21st April 2025 at Eden Gardens Stadium on BookMyShow. Experience Kolkata Knight Riders and Gujarat Titans live at the Stadium this year."
  },

  {
    id: 2,
    match: "Kolkata Knight Riders vs Chennai Super kings",
    venue: "Eden Gardens: Kolkata",
    matchType: "T20",
    price: 900,
    time: "7:30 PM",
    duration: "4 Hours",
    ageLimit: "Age Limit - 2yrs +",
    language: "English",
    categories: "Cricket",
    funType: "IPL",
    organizedDate: 7,
    day: "wednesday",
    year: "7 May 2025",
    matchImage: kkr2,
    detailsImage: kkrDetails2,
    description:"Book tickets for Kolkata Knight Riders vs Chennai Super Kings IPL 2025 cricket for 7th May 2025 at Eden Gardens Stadium on BookMyShow. Experience Kolkata Knight Riders and Chennai Super Kings live at the Stadium this year."
  },
  {
    id: 3,
    match: "Kolkata Knight Riders vs Punjab Kings",
    venue: "Eden Gardens: Kolkata",
    matchType: "T20",
    price: 900,
    time: "7:30 PM",
    duration: "4 Hours",
    ageLimit: "Age Limit - 2yrs +",
    language: "English",
    categories: "Cricket",
    funType: "IPL",
    organizedDate: 26,
    day: "Saturday",
    year: "26 Apr 2025",
    matchImage: kkr3,
    detailsImage: kkrDetails3,
    description:"Book tickets for Kolkata Knight Riders vs Rajasthan Royals IPL 2025 cricket for 4th May 2025 at Eden Gardens Stadium on BookMyShow. Experience Kolkata Knight Riders and Rajasthan Royals live at the Stadium this year."
  },
  {
    id: 4,
    match: "Kolkata Knight Riders vs Rajasthan Royals",
    venue: "Eden Gardens: Kolkata",
    matchType: "T20",
    price: 900,
    time: "7:30 PM",
    duration: "4 Hours",
    ageLimit: "Age Limit - 2yrs +",
    language: "English",
    categories: "Cricket",
    funType: "IPL",
    organizedDate: 4,
    day: "Sunday",
    year: "4 May 2025",
    matchImage: kkr4,
    detailsImage: kkrDetails4,
    description:"Book tickets for Kolkata Knight Riders vs Punjab Kings IPL 2025 cricket for 26th April 2025 at Eden Gardens Stadium on BookMyShow. Experience Kolkata Knight Riders and Punjab Kings live at the Stadium this year."
  },
  {
    id: 5,
    match: "Vande Mataram Virtual Marathon ",
    venue: "Your Place and Your Time: India",
    matchType: "4k",
    price: 450,
    time: "6:00 AM",
    duration: "14 Hours",
    language: "Hindi,English",
    categories: "Running",
    funType: "Outdoor Events",
    organizedDate: 20,
    day: "Sunday",
    year: "20 Apr 2025 - 31 Aug 2025",
    matchImage: run1,
    detailsImage: runDeatails1,
    description:"Vande Mataram Virtual Marathon Distance Categories - 5 KM / 10 KM / 21 KM / 42 KM Run / Walk / Jog / Cycle at your own Place, Gym, Treadm...."
  },
  {
  id: 6,
    match: "Summer warriors virtual run",
    venue: "Your Place and Your Time: India",
    matchType: "5k",
    price: 39,
    time: "10:00 PM",
    duration: "10 Hours",
    ageLimit: "Age Limit - 10yrs +",
    language: "Hindi,English",
    categories: "Running",
    funType: "Outdoor Events",
    organizedDate: 20,
    day: "Sunday",
    year: "20 Apr 2025",
    matchImage: run2,
    detailsImage: runDetails2,
    description:"Build a Fitness Routine: Signing up for a virtual race can provide a goal to work toward, helping you stay on track with regular exercise."
  },
  
];

export default playData;