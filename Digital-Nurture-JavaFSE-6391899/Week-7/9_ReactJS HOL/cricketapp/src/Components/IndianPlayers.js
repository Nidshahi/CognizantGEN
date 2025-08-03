import React from 'react';
const IndianPlayers = () => {
  const T20players = ['Rohit', 'Gill', 'Surya'];
  const RanjiPlayers = ['Rahane', 'Pujara', 'Jadeja'];

  const merged = [...T20players, ...RanjiPlayers]; // merge arrays

  const oddTeam = merged.filter((_, index) => index % 2 === 0);  // 0,2,4
  const evenTeam = merged.filter((_, index) => index % 2 !== 0); // 1,3,5

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, i) => <li key={i}>{player}</li>)}
      </ul>
      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, i) => <li key={i}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
