import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';

const Home = ({ contract }) => {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const votes = await contract.getAllVotes();
        setVotes(votes);
      } catch (error) {
        console.error('Error fetching votes:', error);
      }
    };

    if (contract) {
      fetchVotes();
    }
  }, [contract]);

  return (
    <div>
      <h2>Home</h2>
      <h3>Available Votes:</h3>
      <ul>
        {votes.map(vote => (
          <li key={vote.id}>
            <Link to={`/vote/${vote.id}`}>{vote.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
