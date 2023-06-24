import React from "react";

interface Match {
  name: string;
  image: string;
  bio: string;
}

const MatchCard = ({ match }: { match: Match }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={match.image} alt={match.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{match.name}</div>
        <p className="text-gray-700 text-base">{match.bio}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-2">
          Pass
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          Like
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
