import * as React from 'react';
import { Heading, Box, Flex, Grid, Avatar, AvatarBadge, List, ListItem, ListIcon } from "@chakra-ui/core";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { FirebaseContext } from '../services/firebase';
import ClickOutside from '../hooks/clickoutside';

const Home: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const { auth } = React.useContext(FirebaseContext);

  const toggleMenu = (event: React.FormEvent) => {
    setShowMenu(!showMenu);
  }

  const handleClickOutside = () => {
    console.log('handleClickOutside');
    if (showMenu) {
      setShowMenu(false);
    }
  }

  const logout = (event: React.FormEvent) => {
    auth.signOut();
  }

  // React.useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // });

  return (
    <div id="home">
      <Grid templateRows="50px auto" height="100vh">
        <Grid row="1">
          <Grid backgroundColor="gray.900" templateColumns="20% 60% 20%" alignItems="center">
            <Grid column="2">
              <Heading as="h1" color="purple.300" textAlign="center" size="lg">Header</Heading>
            </Grid>
            <Grid column="3" justifySelf="end" mr={2}>
              <Avatar size="sm" showBorder onClick={toggleMenu} cursor="pointer">
                <AvatarBadge size="0.8em" bg="green.500" />
              </Avatar>
            </Grid>
          </Grid>
        </Grid>
        <Grid row="2">
          <Heading as="h1" color="purple.800" textAlign="center" size="lg">Body</Heading>
        </Grid>
      </Grid>
      <ClickOutside onClick={handleClickOutside}>
        <Box
          id="menu"
          d={showMenu ? "block" : "none"}
          position="absolute"
          top="52px"
          right="3px"
          backgroundColor="gray.900"
          zIndex={999}
          boxShadow="md">
          <List spacing={3} m={2}>
            <ListItem>
              <ListIcon as={FiSettings} />
            Configurazione
          </ListItem>
            <ListItem onClick={logout}>
              <ListIcon as={FiLogOut} />
            Logout
          </ListItem>
          </List>
        </Box>
      </ClickOutside>
    </div>
  );
}

export default Home;
