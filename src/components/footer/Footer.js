import { Box, Image, Text } from "@chakra-ui/react";
import Truck from "../../assets/Truck.svg";
import Insta from "../../assets/Insta.svg";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";

export default function Footer() {
  return (
    <Box
      display="flex"
      flexDir={{ base: "column", lg: "row" }}
      background="#F8F8F8"
      pb="92px"
      justifyContent="space-between"
      px={{ base: "30px", lg: "100px" }}
    >
      <Image
        src={Truck}
        width={{ base: "auto", lg: "161px" }}
        height="125px"
        mt="123px"
        display="flex"
        alignItems="center"
      />
      <Box
        display="flex"
        flexDir="column"
        mt="84px"
        maxW={{ base: "auto", lg: "221px" }}
      >
        <Text
          as="span"
          color="#0E2368"
          alignItems="center"
          fontSize="18.84px"
          fontFamily="Source Sans Pro"
          fontWeight={600}
          lineHeight="27.22px"
          letterSpacing="0.57px"
          wordWrap="break-word"
        >
          Contact Us
        </Text>
        <Text
          pt="14px"
          as="span"
          color="#646874"
          fontSize="14.66px"
          fontFamily="Source Sans Pro"
          fontWeight={400}
          lineHeight="23.03px"
          wordWrap="break-word"
        >
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </Text>
        <Text
          pt="14px"
          as="span"
          color="#646874"
          fontSize="14.66px"
          fontFamily="Source Sans Pro"
          fontWeight={400}
          lineHeight="23.03px"
          wordWrap="break-word"
        >
          example2020@gmail.com
        </Text>
        <Text
          pt="14px"
          as="span"
          color="#646874"
          fontSize="14.66px"
          fontFamily="Source Sans Pro"
          fontWeight={400}
          lineHeight="23.03px"
          wordWrap="break-word"
        >
          (904) 443-0343
        </Text>
      </Box>
      <Box display="flex" flexDir="column" mt="84px">
        <Text
          as="span"
          color="#0E2368"
          fontSize="18.84px"
          fontFamily="Source Sans Pro"
          fontWeight={600}
          lineHeight="27.22px"
          letterSpacing="0.57px"
          wordWrap="break-word"
        >
          More
        </Text>
        <Text
          pt="14px"
          as="span"
          color="#646874"
          fontSize="14.66px"
          fontFamily="Source Sans Pro"
          fontWeight={400}
          lineHeight="23.03px"
          wordWrap="break-word"
        >
          About Us
        </Text>
        <Text
          pt="14px"
          as="span"
          color="#646874"
          fontSize="14.66px"
          fontFamily="Source Sans Pro"
          fontWeight={400}
          lineHeight="23.03px"
          wordWrap="break-word"
        >
          Products
        </Text>
        <Text
          pt="14px"
          as="span"
          color="#646874"
          fontSize="14.66px"
          fontFamily="Source Sans Pro"
          fontWeight={400}
          lineHeight="23.03px"
          wordWrap="break-word"
        >
          Career
        </Text>
        <Text
          pt="14px"
          as="span"
          color="#646874"
          fontSize="14.66px"
          fontFamily="Source Sans Pro"
          fontWeight={400}
          lineHeight="23.03px"
          wordWrap="break-word"
        >
          Contact Us
        </Text>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        mt="84px"
        alignItems={{ base: "center", lg: "baseline" }}
      >
        <Text
          as="span"
          color="#0E2368"
          fontSize="18.84px"
          fontFamily="Source Sans Pro"
          fontWeight={600}
          lineHeight="27.22px"
          letterSpacing="0.57px"
          wordWrap="break-word"
        >
          Social Links
        </Text>
        <Box display="flex" flexDir="raw" mt="11px">
          <Image src={Insta} _hover={{ cursor: "pointer" }} />
          <Image mx="44px" src={Twitter} _hover={{ cursor: "pointer" }} />
          <Image src={Facebook} _hover={{ cursor: "pointer" }} />
        </Box>
      </Box>
    </Box>
  );
}
