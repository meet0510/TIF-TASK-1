import { Box, Button, Image, Text } from "@chakra-ui/react";
import AboutUs from "../../assets/AboutUs.svg";

export default function About() {
  return (
    <Box
      display="flex"
      background="linear-gradient(90deg, rgba(30, 42, 93, 0.04) 0%, rgba(48, 62, 130, 0.04) 56%, rgba(60, 80, 157, 0.04) 100%)"
    >
      <Image src={AboutUs} ml="205px" />
      <Box ml="200px" pt="107px" display="flex" flexDir="column">
        <Text
          as="span"
          color="#0E2368"
          fontSize="45px"
          fontFamily="Poppins"
          fontWeight={600}
          lineHeight="27px"
          wordWrap="break-word"
        >
          About Us
        </Text>
        <Text
          pt="27.41px"
          as="span"
          width="447px"
          color="#444957"
          fontSize="15px"
          fontFamily="Open Sans"
          fontWeight={400}
          lineHeight="27px"
          wordWrap="break-word"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </Text>
        <Box mt="21px">
          <Button
            colorScheme="white"
            backgroundColor="#E23744"
            fontSize="16px"
            fontFamily="Open Sans"
            fontWeight={600}
            lineHeight="36px"
            letterSpacing="0.48px"
            wordWrap="break-word"
            border="1px"
            borderRadius="21px"
            px="26px"
            py="3px"
          >
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
