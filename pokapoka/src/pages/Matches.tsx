import React from "react";
import NavigationBar from "../components/NavigationBar";
import MatchCard from "../components/MatchCard";

const style = {
  maindiv: "flex items-center justify-center min-h-screen bg-gray-100",
  card: "max-w-md p-8 bg-white rounded shadow",
  h2: "text-2xl font-bold mb-4",
  label: "block text-gray-700 font-semibold mb-2",
  input:
    "w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500",
  button:
    "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
};

const Matches = () => {
  const matches = [
    {
      name: "John Doe",
      image: "john-doe.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      image: "jane-smith.jpg",
      bio: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    // Add more matches as needed
  ];
  return (
    <div>
      <NavigationBar />
      <div className="flex justify-center">
        {matches.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
      </div>
    </div>
  );
};

export default Matches;
