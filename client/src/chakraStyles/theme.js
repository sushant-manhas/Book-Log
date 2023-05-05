import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import Button from './button.js';
import Input from './input.js';
import Drawer from './drawer.js'

const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },

  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.700', 'gray.200')(props),
        bg: mode('gray.100', '#27292d')(props),
      },
    }),
  },

  colors: {
    primary: '#FFAB24',
    secondary: 'white',
  },

  components: {
    Button,
    Input,
    Drawer
  },
});

export default theme;
