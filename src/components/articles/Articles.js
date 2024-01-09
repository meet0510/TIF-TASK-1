import { Box, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import { articlesSet1, articlesSet2 } from "../../database/ArticlesData";
import RightDark from "../../assets/RightDark.svg";
import RightLight from "../../assets/RightLight.svg";
import LeftDark from "../../assets/LeftDark.svg";
import LeftLight from "../../assets/LeftLight.svg";
import Article from "./Article";

export default function Articles() {
  const [index, setIndex] = useState(1);

  const handleIndexChange = (e) => {
    e.preventDefault();
    setIndex((prev) => {
      if (prev === 1) {
        return 2;
      } else {
        return 1;
      }
    });
  };

  return (
    <Box mt="158px" ml="108px" mb="65px">
      <Text
        as="span"
        color="#0E2368"
        fontSize="56px"
        fontFamily="Source Sans Pro"
        fontWeight={600}
        lineHeight="42px"
        letterSpacing="2.24px"
        wordWrap="break-word"
      >
        Latest Articles
      </Text>
      <Box display="flex" flexDir="raw">
        {index === 1 && articlesSet1.map((article) => <Article {...article} />)}
        {index === 2 && articlesSet2.map((article) => <Article {...article} />)}
      </Box>
      <Box display="flex" flexDir="raw" mt="65px" ml="555px">
        {index === 1 && (
          <Image src={LeftLight} _hover={{ cursor: "not-allowed" }} />
        )}
        {index === 2 && (
          <Image
            onClick={handleIndexChange}
            src={LeftDark}
            _hover={{ cursor: "pointer" }}
          />
        )}
        <Text
          as="span"
          mx="14px"
          color="#424961"
          fontSize="22px"
          fontFamily="Source Sans Pro"
          fontWeight={400}
          lineHeight="27.22px"
          wordWrap="break-word"
        >
          {index}/2
        </Text>
        {index === 1 && (
          <Image
            onClick={handleIndexChange}
            src={RightDark}
            _hover={{ cursor: "pointer" }}
          />
        )}
        {index === 2 && (
          <Image src={RightLight} _hover={{ cursor: "not-allowed" }} />
        )}
      </Box>
    </Box>
  );
}
