import { Box, Image, Text } from "@chakra-ui/react";
import Truck from "../../assets/Truck.svg";
import Insta from "../../assets/Insta.svg";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";

export default function Footer() {
  return (
    <Box display="flex" flexDir="raw" background="#F8F8F8" pb="92px">
      <Image src={Truck} width="161px" height="125px" mt="123px" ml="103px" />
      <Box display="flex" flexDir="column" ml="210px" mt="84px">
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
          Contact Us
        </Text>
        <Text
          pt="14px"
          as="span"
          width="217px"
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
          width="217px"
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
          width="217px"
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
      <Box display="flex" flexDir="column" ml="210px" mt="84px">
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
          width="217px"
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
          width="217px"
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
          width="217px"
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
          width="217px"
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
      <Box display="flex" flexDir="column" ml="103px" mt="84px">
        <Text
          as="span"
          pl="35px"
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
        <Box display="flex" flexDir="raw" mt="11px" pl="35px">
          <Image src={Insta} _hover={{ cursor: "pointer" }} />
          <Image mx="44px" src={Twitter} _hover={{ cursor: "pointer" }} />
          <Image src={Facebook} _hover={{ cursor: "pointer" }} />
        </Box>
        <Text
          pt="102px"
          as="span"
          width="217px"
          color="#828B9C"
          fontSize="14.66px"
          fontFamily="Roboto"
          fontWeight={400}
          lineHeight="25.12px"
          wordWrap="break-word"
        >
          © 2022 Food Truck Example
        </Text>
      </Box>
    </Box>
  );
}
