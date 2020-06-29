import React from 'react';
import { useParams } from 'react-router-dom';
import { Heading } from "@chakra-ui/core";

const Chat: React.FC = () => {
  let { name } = useParams();
  return (
    <div id="chat">
      <Heading as="h1">Chat {name || ""}</Heading>
    </div>
  );
}

export default Chat;
