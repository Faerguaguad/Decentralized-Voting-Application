import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ethers } from 'ethers';

const VoteDetails = ({ contract }) => {
  const { id } = useParams();
  const [vote, setVote] = useState(null);

  useEffect(() => {
    const fetchVoteDetails = async () => {
      try {
        const voteDetails = await contract.getVoteDetails(id);
        setVote(voteDetails);
      } catch (error) {
        console.error('Error fetching vote details:', error);
      }
    };

    if (contract) {
      fetchVoteDetails();
    }
  }, [contract, id]);

  if (!vote) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Vote Details</h2>
      <p>Title: {vote.title}</p>
      <p>Description: {vote.description}</p>
      <p>Options:</p>
      <ul>
        {vote.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <p>Owner: {vote.owner}</p>
      <p>End Date: {new Date(vote.endDate * 1000).toLocaleString()}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default VoteDetails;
