// src/App.js
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CreateVote from './components/CreateVote';
import VoteList from './components/VoteList';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <Container>
      <h1>Decentralized Voting App</h1>
      <CreateVote refresh={handleRefresh} />
      <VoteList refresh={refresh} />
    </Container>
  );
}

export default App;
