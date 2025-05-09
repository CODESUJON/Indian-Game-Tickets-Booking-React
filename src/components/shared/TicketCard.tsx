interface Ttype {
  matchImage: string;
  match: string;
  venue: string;
  matchType: string;
  price: number;
}

function TicketCard({ matchImage, matchType, venue, match, price }: Ttype) {
  return (
    <div className="w-54 h-[450px] bg-transparent flex flex-col items-center justify-start gap-2 ">
      <div className="w-full h-74 ">
        <img src={matchImage} alt="" className="w-full h-full rounded-xl " />
      </div>
      <div className="">
        <h2 className="font-semibold text-xl">{match}</h2>
        <h3 className="text-[16px] text-slate-700">{venue}</h3>
        <p>{matchType}</p>
        <p>₹ {price} onwards</p>
      </div>
    </div>
  )
}

export default TicketCard