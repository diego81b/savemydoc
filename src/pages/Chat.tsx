import React from 'react';
import { useParams } from 'react-router-dom';

const Chat: React.FC = () => {
  let { name } = useParams();
  return (
    <div>
      <h2>Chat {name}</h2>
    </div>
  );
}

export default Chat;
