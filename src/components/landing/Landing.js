import { Box, Button, Image, Heading, Text, useTheme } from "@chakra-ui/react";
import Pizza from "../../assets/Pizza.svg";
import Truck from "../../assets/Truck.svg";
import Vector1 from "../../assets/Vector1.svg";

export default function Landing() {
  return (
    <Box pb="370px">
      <Box>
        <Image src={Pizza} pos="absolute" top={0} right={0} zIndex={0} />
        <Image src={Vector1} pos="absolute" top={0} right={0} zIndex={1} />
        <Button
          pos="absolute"
          top={35}
          right={41}
          zIndex={2}
          colorScheme="white"
          fontSize="16px"
          fontFamily="Source Sans Pro"
          fontWeight={600}
          lineHeight="36px"
          letterSpacing="0.48px"
          wordWrap="break-word"
          border="1px"
          borderColor="white solid"
          borderRadius="21px"
          py="3px"
          px="26px"
        >
          Get in Touch
        </Button>
      </Box>
      <Box pl="100px">
        <Image src={Truck} pt="33px" display={{ base: "none", xl: "block" }} />
        <Box pt={{ base: "950px", xl: "111px" }} >
          <Text
            as="span"
            color="#0E2368"
            fontSize="62px"
            fontFamily="Source Sans Pro"
            fontWeight={700}
            lineHeight="69px"
            wordWrap="break-word"
          >
            Discover the
          </Text>{" "}
          <Text as="br" />
          <Text
            as="span"
            color="#E23744"
            fontSize="62px"
            fontFamily="Source Sans Pro"
            fontWeight={700}
            lineHeight="69px"
            wordWrap="break-word"
          >
            Best
          </Text>
          <Text
            as="span"
            color="#0E2368"
            fontSize="62px"
            fontFamily="Source Sans Pro"
            fontWeight={700}
            lineHeight="69px"
            wordWrap="break-word"
          >
            {` Food`}
          </Text>{" "}
          <Text as="br" />
          <Text
            as="span"
            color="#0E2368"
            fontSize="62px"
            fontFamily="Source Sans Pro"
            fontWeight={700}
            lineHeight="69px"
            wordWrap="break-word"
          >
            and Drinks
          </Text>
        </Box>
        <Box pt="26px" display="flex" flexDir="column">
          <Text
            as="span"
            color="#444957"
            fontSize="16.44px"
            fontFamily="Open Sans"
            fontWeight={400}
            lineHeight="27.41px"
            wordWrap="break-word"
          >
            Naturally made Healthcare Products for the
          </Text>
          <Text
            as="span"
            color="#444957"
            fontSize="16.44px"
            fontFamily="Open Sans"
            fontWeight={400}
            lineHeight="27.41px"
            wordWrap="break-word"
          >
            better care & support of your body.
          </Text>
        </Box>
        <Box pt="41px">
          <Button
            colorScheme="white"
            backgroundColor="#E23744"
            fontSize="18px"
            fontFamily="Open Sans"
            fontWeight={700}
            lineHeight="36px"
            letterSpacing="0.18px"
            wordWrap="break-word"
            border="1px"
            borderRadius="34px"
            px="34px"
            py="14px"
          >
            Explore Now!
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
