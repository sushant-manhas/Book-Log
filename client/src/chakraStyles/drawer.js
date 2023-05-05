import { mode } from '@chakra-ui/theme-tools';
const Drawer = {
  baseStyle: {
    colorScheme: mode('gray.100', '#27292d'),
    bg: "#27292d",
  },
  // The default size and variant values
  defaultProps: {
    bg: "#27292d",
    colorScheme: '#27292d'
  }
};
export default Drawer;
