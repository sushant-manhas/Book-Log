import { Container, Text, useColorModeValue } from "@chakra-ui/react";
import { ImQuotesLeft } from 'react-icons/im'
const quotes = ["The best way to predict the future is to create it.",]

function LoadingQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <Container maxW='90%' mx='auto'>
      <Container maxW={{ base: 'md', lg: 'xl' }} mt='10' px='10' py='4'
        bg={useColorModeValue('gray.100', 'whiteAlpha.100')}
        borderRadius="xl" fontWeight={700} boxShadow='xl'
      >
        <Text fontSize="3xl">
          <ImQuotesLeft />
        </Text>
        <Text fontSize="xl">
          {randomQuote}
        </Text>
      </Container>
    </Container>
  )
}

export default LoadingQuote