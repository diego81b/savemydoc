import * as React from 'react';
import { FiUser, FiKey, FiLogIn, FiEyeOff, FiEye } from "react-icons/fi";
import { Grid, InputGroup, Stack, InputRightElement, Input, InputLeftElement, Button, Box, Flex, FormControl, FormLabel } from "@chakra-ui/core";
import { FirebaseContext } from '../services/firebase';

const Login: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const [state, setState] = React.useState({ username: "", password: "" });

  const { auth } = React.useContext(FirebaseContext);

  const handleClick = () => setShow(!show);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(state.username, state.password)
      .then((user: any) => console.log('user', user))
      .catch((error: any) => {
        console.log(error);
      });
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <Flex id="login-form" w="100%" h="100vh" alignItems="center" justifyContent="center">
      <Box maxW="48em" flexGrow={1} backgroundColor="gray.900" py={4} mx={2} boxShadow="md">
        <Grid templateColumns="5% auto 5%">
          <Grid column="2/3" >
            <form onSubmit={onSubmit}>
              <Stack spacing={3}>
                <FormControl>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<Box as={FiUser} color="teal.300" />} />
                    <Input
                      id="username"
                      name="username"
                      type="email"
                      placeholder="Enter username"
                      size="lg"
                      focusBorderColor="teal.300"
                      value={state.username}
                      onChange={onChangeHandler} />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputGroup>
                    <InputLeftElement children={<Box as={FiKey} color="teal.300" />} />
                    <Input
                      id="password"
                      name="password"
                      size="lg"
                      value={state.password}
                      onChange={onChangeHandler}
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      focusBorderColor="teal.300"
                    />
                    <InputRightElement>
                      <Button size="xs" onClick={handleClick}>
                        {show ? <Box as={FiEyeOff} color="teal.300" /> : <Box as={FiEye} color="teal.300" />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  type="submit"
                  rightIcon={FiLogIn}
                  borderColor="teal.300"
                  color="teal.300"
                  variant="outline"
                  size="lg">
                  Log In
              </Button>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Flex>
  );
}

export default Login;
