import React from "react";

interface Match {
  name: string;
  image: string;
  bio: string;
}

const style = {
  card: "w-80 p-2 border border-gray-300 rounded shadow-md bg-white mt-10",
  buttonaccept:
    "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full",
  buttonpass:
    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-2",
};

const MatchCard = ({ match }: { match: Match }) => {
  return (
    <div className={style.card}>
      <img className="w-full" src={match.image} alt={match.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{match.name}</div>
        <p className="text-gray-700 text-base">{match.bio}</p>
      </div>
      <div className="px-6 py-4">
        <button className={style.buttonaccept}>Accept</button>
        <button className={style.buttonpass}>Pass</button>
      </div>
    </div>
  );
};

export default MatchCard;
