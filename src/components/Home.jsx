import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import btcSrc from "../assets/btc.png"
const Home = () => {
  return <Box bg={"blackAlpha.900"} w={"full"} h={"88.7vh"} overflow={'hidden'}>
<Image w={"full"} h={"full "} filter={"grayscale(1)"} objectFit={"contain"} src={btcSrc}/>
<Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.700"} mt={"-20"}>Coin</Text>
  </Box>
}
 export default Home
