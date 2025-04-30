import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Img,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { ImWarning } from "react-icons/im";
import Footer from './otalFooter';
import forex from "../assets/forex.jpg"
import ceo from '../assets/ceo.jpg'; // Adjust the path as necessary
import heroImage from "../assets/hero image.jpg"; // Adjust the path as necessary
import { Navbar } from './nav components/desktop nav/nav';
import axios from 'axios';

export default function OtalHomePage() {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    // Fetch exchange rate from an API
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          'https://api.exchangerate-api.com/v4/latest/USD' // Replace with your preferred API
        );
        setExchangeRate(response.data.rates.NGN); // Get exchange rate for NGN (Nigerian Naira)
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, []);
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient={[
          'linear(to-tr, teal.300, white.400)',
          'linear(to-t, white, rgb(213, 214, 252))',
          'linear(to-b, white, rgb(163, 163, 184))',
        ]}
        pb={16} pt={3} px={{ base: "3%", sm: "5%", lg: "10%" }} position="relative" overflow="hidden" minH="100vh"
      >
        {/* nav bar */}
        <Navbar />

        <Box display={{ base: "block", sm: "flex" }} justifyContent="space-between" color="white" py={16}
        // border="3px solid red"
        >
          <Container maxW="container.lg" >
            <VStack spacing={6} align="start">
              <Heading as="h1" size="2xl" color="black" fontWeight="bold">
                {/* <span style={{color:"purple"}}>Otal</span> Institution */}
                Welcome to <span style={{ color: "rgb(40, 38, 121)" }}>Otal</span> Institution
              </Heading>
              <Text fontSize="lg" color="black" maxW="600px">
                Embark on your journey to financial freedom with one of the most trusted names in Forex trading education. At Otal Institution, we equip aspiring traders with the skills, tools, and confidence needed to thrive in the dynamic world of Forex.
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button colorScheme="blue" bg="rgb(40, 38, 121)" color="white">Get Started</Button>
                <Button variant="outline" colorScheme="blue" color="rgb(40, 38, 121)" borderColor="purple">
                  Become an Affiliate
                </Button>
              </Stack>
            </VStack>
          </Container>
          <Box maxW={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }} borderRadius="full" border="none" mt={{ base: "20px", sm: "30px%", md: "0px", lg: "50px" }}>
            <Image
              src={heroImage}
              alt="hero"
              boxSize="100%"
              // boxSize="200px"
              objectFit="cover"
              borderRadius="full"
            />
          </Box>
        </Box>
        <Box bg="gray.100" py={4} textAlign="center" mb={5}>
          {exchangeRate ? (
            <Text fontSize="lg" color="black">
              Current Exchange Rate (USD to NGN): <strong>{exchangeRate}</strong>
            </Text>
          ) : (
            <Text fontSize="lg" color="black">Loading exchange rate...</Text>
          )}
        </Box>
      </Box>

      {/* CEO Section */}
      <Container maxW="100%" px={{ base: "3%", sm: "5%", lg: "10%" }} py={{ base: "0px", sm: "5px", md: "16px" }}>
        <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8}>
          <Image
            src={ceo}
            alt="CEO"
            boxSize="50%"
            objectFit="cover"
            borderRadius="full"
          />
          <Box>
            <Heading as="h2" size="lg" mb={2}>
              Mr. John Doe (CEO & Founder)
            </Heading>
            <Text>
              John Doe is the visionary behind our company, driven by innovation and a passion for creating lasting impact. With over 10 years of experience in tech and leadership, he’s committed to building a future where creativity meets cutting-edge technology. His dedication to excellence and community drives everything we do.
            </Text>
          </Box>
        </Flex>
      </Container>

      {/* What We Do Section */}
      <Box bg="gray.50" py={{ base: "16px", sm: "16px", md: "16px" }} px={{ base: "3%", sm: "5%", lg: "10%" }}>
        <Container minW="100%" display="flex" flexDir={{ base: "column-reverse", sm: "column-reverse", md: "row" }} >
          <Box display="flex" flexDir="column" justifyContent="space-evenly" maxW={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}>
            <Box >
              <Heading as="h2" size="xl" mb={8}>
                What do we do at Otal Institution?
              </Heading>
              <Text>
                At Otal, we believe that anyone can succeed in forex trading with the right knowledge, strategy, and mindset. Whether you’re a complete beginner or an experienced trader looking to refine your skills, our comprehensive training programs, expert instructors, and supportive community will guide you on how to trade with confidence and consistency.
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box mt={4}>
                <Heading as="h3" size="md" mb={2}>
                  Structured learning for all levels
                </Heading>
                <Text>
                  Learn from experienced traders with proven strategies.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  Expert mentorship
                </Heading>
                <Text>
                  Master technical analysis, risk management, and market psychology.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  Live trading and market analysis
                </Heading>
                <Text>
                  Gain hands-on experience with real-market scenarios.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  Exclusive trading community
                </Heading>
                <Text>
                  Join a network of traders and get ongoing mentorship.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Img maxW={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }} src={forex} alt='image' />
        </Container>
      </Box>

      {/* Learning Plans Section */}
      <Container maxW="100%" py={16} px={{ base: "3%", sm: "5%", lg: "10%" }}>
        <Heading as="h2" size="xl" mb={8}>
          View our Learning Plans
        </Heading>
        <Text mb="10px">
          Unlock premium forex training with our expert-led courses. Choose a plan that suits you and start your journey to profitable trading today! 🚀
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Box borderWidth="1px" borderRadius="lg" p={6}>
            <Heading as="h3" size="md" mb={4}>
              <span style={{ borderRadius: "5px", backgroundColor: "green", color: "white", fontSize: "15px", padding: "0px 5px" }}>NGN100,000</span> Forex Starter
            </Heading>
            <Text>
              - Introduction to Forex
              <br />
              - Forex Order
              <br />
              - Meaning and Introduction MT4/MT5
              <br />
              - Trends
              <br />
              - Candle Sticks
              <br />
              - Support and Resistance
              <br />
              - Chart Pattern
              <br />
              - Execution, Risk, Entry and Exit
            </Text>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" p={6}>
            <Heading as="h3" size="md" mb={4}>
              <span style={{ borderRadius: "5px", backgroundColor: "green", color: "white", fontSize: "15px", padding: "0px 5px" }}>NGN200,000</span> Forex Advanced
            </Heading>
            <Text>
              - Introduction to Forex
              <br />
              - Forex Order
              <br />
              - Meaning and Introduction MT4/MT5
              <br />
              - Trends
              <br />
              - Candle Sticks
              <br />
              - Support and Resistance
              <br />
              - Chart Pattern
              <br />
              - Execution, Risk, Entry and Exit
              <br />
              - Order Book
              <br />
              - Liquidity
              <br />
              - POI
              <br />
              - Fake out Masterclass
            </Text>
          </Box>
        </SimpleGrid>
        <Button colorScheme="blue" mt={4}variant="outline" borderColor="rgb(40, 38, 121)" color="rgb(40, 38, 121)">Enroll now!!! <MdKeyboardArrowRight /></Button >
      </Container>

      {/* Affiliate Program Section */}
      <Box bg="blue.700" color="white" py={16}>
        <Container maxW="100%" px={{ base: "3%", sm: "5%", lg: "10%" }}>
          <Heading as="h2" size="xl" mb={8}>
            Become an Affiliate – Earn While You Empower
          </Heading>
          <Text mb={4}>
            Join the Otal Institution Affiliate Program and turn your network into income. Whether you're a trader, content creator, or just passionate about financial freedom, our affiliate program lets you earn by sharing trusted forex education.
          </Text>
          <Heading as="h3" size="md" mb={2}>
            Who Can Be an Affiliate?
          </Heading>
          <Text mb={4}>
            • Influencers & Content Creators
            <br />
            • Forex Traders & Enthusiasts
            <br />
            • Students & Side Hustlers
            <br />
            • Anyone who loves passive income
          </Text>
          <Heading as="h3" size="md" mb={2}>
            Start Earning in 3 Easy Steps:
          </Heading>
          <Text>
            1. Sign Up – Fill the affiliate form in 2 minutes.
            <br />
            2. Promote – Share your custom link anywhere: WhatsApp, IG, X, etc.
            <br />
            3. Get Paid – Earn every time someone enrolls through you.
          </Text>
          <Button colorScheme="blue" mt={3}>Join now-it's free</Button>
        </Container>
      </Box>
      {/* Footer */}
      <Box maxW="100%" px={{ base: "3%", sm: "5%", lg: "10%" }} bg="yellow.100" color="yellow.800" p={4} borderRadius="md" border="1px solid" borderColor="yellow.300" mb={4}>
        <strong><ImWarning /> Risk Warning:</strong> At Otal Institution, we are committed to equipping our students with the knowledge and skills required to navigate the world of Forex and CFD trading. However, it's important to understand that trading involves significant risk due to leverage and may not be suitable for all individuals. A large percentage of retail traders experience financial loss. Always ensure you fully understand the risks involved and only trade with capital you can afford to lose.

        The educational content provided by Otal Institution is intended for informational and learning purposes only. It should not be interpreted as personalized financial advice or a recommendation to trade. We encourage all learners to seek guidance from a certified financial advisor before making any real-world trading decisions.
      </Box>
      <Footer />
      {/* <Box bg="gray.800" color="white" py={8}>
        <Container maxW="container
::contentReference[oaicite:2]{index=2} */}
    </Box>
  )
}