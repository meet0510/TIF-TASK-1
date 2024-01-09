import { Box, Button, Image, Text } from "@chakra-ui/react";
import AboutUs from "../../assets/AboutUs.svg";

export default function About() {
  return (
    <Box
      display="flex"
      background="linear-gradient(90deg, rgba(30, 42, 93, 0.04) 0%, rgba(48, 62, 130, 0.04) 56%, rgba(60, 80, 157, 0.04) 100%)"
      justifyContent={{ base: "center", xl: "normal" }}
      pb={{ base: "141px", xl: "initial" }}
    >
      <Image display={{ base: "none", xl: "block" }} src={AboutUs} ml="205px" />
      <Box
        mx={{ base: "10px", xl: "200px" }}
        pt="107px"
        display="flex"
        flexDir="column"
        justifyContent={{ base: "center", xl: "normal" }}
      >
        <Text
          as="span"
          color="#0E2368"
          fontSize={{ base: "26px", lg: "45px" }}
          fontFamily="Poppins"
          fontWeight={600}
          lineHeight="27px"
          wordWrap="break-word"
          textAlign={{ base: "center", xl: "left" }}
        >
          About Us
        </Text>
        <Text
          pt="27.41px"
          as="span"
          width={{ base: "auto", xl: "447px" }}
          color="#444957"
          fontSize={{ base: "11px", lg: "15px" }}
          fontFamily="Open Sans"
          fontWeight={400}
          lineHeight="27px"
          wordWrap="break-word"
          textAlign={{ base: "center", xl: "left" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </Text>
        <Box
          mt="21px"
          display="flex"
          justifyContent={{ base: "center", xl: "normal" }}
        >
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
