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
    <>
      <Flex id="login-form" w="100%" h="100vh" alignItems="center" justifyContent="center">
        <Box maxW="48em" flexGrow={1} backgroundColor="gray.900" py={4} mx={2} boxShadow="md">
          <Grid templateColumns="5% auto 5%">
            <Grid column="2/3" >
              <form onSubmit={onSubmit}>
                <Stack spacing={3}>
                  <FormControl id="email">
                    <FormLabel htmlFor="email">Email address</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<FiUser color="teal.300" />} />
                      <Input
                        id="username"
                        name="username"
                        type="email"
                        placeholder="Enter username"
                        focusBorderColor="teal.300"
                        value={state.username}
                        onChange={onChangeHandler} />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<FiKey color="teal.300" />} />
                      <Input
                        name="password"
                        value={state.password}
                        onChange={onChangeHandler}
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                        focusBorderColor="teal.300"
                      />
                      <InputRightElement>
                        <Button size="xs" onClick={handleClick}>
                          {show ? <FiEyeOff color="teal.300" /> : <FiEye color="teal.300" />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Button
                    type="submit"
                    rightIcon={<FiLogIn />}
                    colorScheme="teal"
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
    </>
  );
}

export default Login;
