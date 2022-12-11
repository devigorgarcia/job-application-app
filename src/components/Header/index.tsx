import { Flex, Heading, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ApplicationContext } from "../../contexts/ApplicationContext";

export const Header = () => {
  const { statusList } = useContext(ApplicationContext);

  const activeStatus = statusList.filter(
    (status) => status.status !== "Recusado"
  );

  return (
    <Flex bg="blue.700" color="white" p={["4"]} flexDir={["column"]}>
      <Heading size={["2xl"]}>Bem vindo Fulano</Heading>
      <Flex mt={"2rem"} gap={["2rem"]} textAlign={["center"]}>
        <Flex
          gap={["3"]}
          border={"1px solid"}
          borderColor={"white"}
          p={"1rem"}
          flexDir={["column"]}
          align={["center"]}
          borderRadius={["20"]}
        >
          <Heading size={["md"]}>Total de Candidaturas</Heading>
          <Text>{statusList.length} candidaturas feitas</Text>
        </Flex>
        <Flex
          gap={["3"]}
          border={"1px solid"}
          borderColor={"white"}
          p={"1rem"}
          flexDir={["column"]}
          align={["center"]}
          borderRadius={["20"]}
        >
          <Heading size={["md"]}>Total de Candidaturas Ativas</Heading>
          <Text>{activeStatus.length} candidaturas ativas</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
