import React from 'react';
import { Flex, Spinner, Heading } from "@chakra-ui/core";

const LoadingState: React.FC = () => {
  return (
    <Flex w="100%" h="100vh" alignItems="center" justifyContent="center" direction="column">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.900"
          color="teal.300"
          size="xl"
        />
        <Heading size="lg" mt={2}>Loading...</Heading>
    </Flex>
  );
}

export default LoadingState;
