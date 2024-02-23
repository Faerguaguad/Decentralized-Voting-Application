// src/components/VoteList.js
import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

function VoteList({ refresh }) {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    // 处理获取投票列表的逻辑
  }, [refresh]);

  return (
    <div>
      <h2>Current Votes</h2>
      <ListGroup>
        {votes.map((vote, index) => (
          <ListGroup.Item key={index}>
            {vote.name} - Votes: {vote.voteCount}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default VoteList;
