import React from 'react';
const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 90 },
    { name: "Rohit", score: 45 },
    { name: "Dhoni", score: 75 },
    { name: "Jadeja", score: 60 },
    { name: "Bumrah", score: 85 },
    { name: "Shami", score: 50 },
    { name: "Gill", score: 30 },
    { name: "Pant", score: 95 },
    { name: "Kohli", score: 88 },
    { name: "Surya", score: 40 },
    { name: "Hardik", score: 78 }
  ];

  const filteredPlayers = players.filter(player => player.score >= 70);

  return (
    <div>
    <h2>{'List of Players with score >= 70'}</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
