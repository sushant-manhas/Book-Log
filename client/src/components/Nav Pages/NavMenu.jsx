import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Stack, Button } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import {
  BsFillSunFill as SunIcon,
  BsFillMoonStarsFill as MoonIcon
} from "react-icons/bs";
import { UserContext } from "../Login Pages/UserContext";
import LoginButtons from './LoginButtons';

function NavMenu() {

  const { colorMode, toggleColorMode } = useColorMode();

  const NavLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 600,
      color: isActive ? '#FFAB24' : "--main-text-color",
      borderBottom: isActive ? '3px solid #FFAB24' : 'none',
    }
  }

  const { user } = useContext(UserContext);
  return (
    <Stack spacing={5} direction={['column', "coulmn", "row", "row"]} pt={[4, 4, 0, 0]} alignItems='center'>
      <NavLink style={NavLinkStyle} to="/home" >
        Home
      </NavLink>
      <NavLink style={NavLinkStyle} to="/" >
        Recommend Me
      </NavLink>
      {user ?
        <UserMenu user={user} />
        : <LoginButtons />}
      <Button onClick={() => toggleColorMode()} >
        {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Stack>
  )
}

export default NavMenu;