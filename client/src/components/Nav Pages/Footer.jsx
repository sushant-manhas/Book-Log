import {
  Text, useColorModeValue, Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiBookstack as Logo } from 'react-icons/si';

export default function LargeWithNewsletter() {
  return (
    <Box mt={20} bg={useColorModeValue('gray.200', 'gray.800')} py='3'>
      <Text fontSize="sm" align='center' justify='center' py='2'>
        © 2022 BookLog. All rights reserved
      </Text>
      <hr />
    </Box>
  );
}