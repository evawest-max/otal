import { Box, Container, Flex, HStack, IconButton, Link, Stack, Text } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={10} >
      <Container maxW="container.lg">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
          gap={6}
        >
          <Box>
            <Text fontWeight="bold" fontSize="lg">Otal Institution</Text>
            <Text fontSize="sm">&copy; {new Date().getFullYear()} All rights reserved.</Text>
          </Box>

          <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
            <Link href="/about">About</Link>
            <Link href="/plans">Plans</Link>
            <Link href="/affiliate">Affiliate</Link>
            <Link href="/contact">Contact</Link>
          </Stack>

          <HStack spacing={4}>
            <Link href="https://instagram.com" isExternal>
              <IconButton aria-label="Instagram" icon={<FaInstagram />} variant="ghost" color="white" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} variant="ghost" color="white" />
            </Link>
            <Link href="https://facebook.com" isExternal>
              <IconButton aria-label="Facebook" icon={<FaFacebook />} variant="ghost" color="white" />
            </Link>
            <Link href="mailto:info@otal.ng">
              <IconButton aria-label="Email" icon={<FaEnvelope />} variant="ghost" color="white" />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
