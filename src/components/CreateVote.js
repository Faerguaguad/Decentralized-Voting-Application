// src/components/CreateVote.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function CreateVote({ refresh }) {
  const [optionName, setOptionName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 处理创建投票的逻辑
    refresh(); // 刷新投票列表
  };

  return (
    <div>
      <h2>Create a New Vote</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Option Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter option name"
            value={optionName}
            onChange={(e) => setOptionName(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}

export default CreateVote;
