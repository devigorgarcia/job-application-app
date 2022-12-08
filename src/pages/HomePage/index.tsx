import { Flex, Heading, Text } from "@chakra-ui/react";
import { Form } from "../../components/Form";

export const HomePage = () => {
  return (
    <Flex flexDir={["column", "column", "column", "row"]} width={["100vw"]}>
      <Flex
        justifyContent="center"
        width={["100%"]}
        bg="blue.700"
        h={["30vh", "30vh", "30vh", "100vh"]}
        color="white"
        flexDir={["column"]}
        padding="6"
        alignItems={["center"]}
      >
        <Heading alignSelf={["flex-start", "center"]}>Bem Vindos</Heading>
        <Text mt={2} alignSelf={["flex-start", "center"]}>
          O local para acompanhar suas candidaturas
        </Text>
      </Flex>
      <Flex justifyContent={["center"]} width={["100vw"]} align={["center"]}>
        <Form />
      </Flex>
    </Flex>
  );
};
