import { Box, Image, Text, Button } from "@chakra-ui/react";

export default function Article(article) {
  return (
    <Box
      mr="40px"
      mt="60px"
      background="white"
      border="1.37px rgba(147.13, 162.02, 211.44, 0.38) solid"
      borderRadius="20.94px"
    >
      <Image src={article.img} m="27px" />
      <Box display="flex" flexDir="column" mt="8.51px" mx="44px">
        <Text
          as="span"
          color="#0E2368"
          fontSize="21px"
          fontFamily="Poppins"
          fontWeight={700}
          lineHeight="27px"
          wordWrap="break-word"
        >
          {article.title}
        </Text>
        <Text
          mt="14px"
          as="span"
          width="280px"
          color="#444957"
          fontSize="15px"
          fontFamily="Open Sans"
          fontWeight={400}
          lineHeight="27px"
          wordWrap="break-word"
        >
          {article.description}
        </Text>
        <Box mt="27px" mb="40px">
          <Button
            colorScheme="white"
            backgroundColor="#424961;"
            fontSize="16.44px"
            fontFamily="Source Sans Pro"
            fontWeight={600}
            lineHeight="35.59px;"
            letterSpacing="0.49px"
            wordWrap="break-word"
            border="1px #424961 solid"
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
