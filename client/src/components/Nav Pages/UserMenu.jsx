import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

function ProfileIcons({ user }) {
  // const { user } = useContext(UserContext);
  // const { setUser } = useContext(UserContext);
  // const handleLogout = () => {
  //   axios.post("http://localhost:3001/user/logout")
  //   setUser(null);
  //   console.log(user);
  //   // window.location.reload();
  // }

  return (
    <Menu>
      <MenuButton>
        <Avatar src={user.dp} size="md" border="2px solid yellow" />
      </MenuButton>
      <MenuList>
        <MenuItem>{user.firstName + " " + user.lastName}</MenuItem>
        <hr />
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ProfileIcons