import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ApplicationContext } from "../../contexts/ApplicationContext";
import { DarkModeToggle } from "../DarkModeToggle";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface tokenDecodeData extends JwtPayload {
  email: string;
  id: string;
}

export const Header = () => {
  const navigate = useNavigate();
  const { statusList } = useContext(ApplicationContext);
  const token = localStorage.getItem("@AppJobs:Token");

  if (!token) {
    return navigate("/");
  }

  const tokenDecode = jwt_decode<tokenDecodeData>(token);

  const logout = () => {
    localStorage.removeItem("@AppJobs:Token");
    return navigate("/");
  };

  const activeStatus = statusList.filter(
    (status) => status.status !== "Recusado"
  );

  return (
    <>
      {token && (
        <Flex
          bg="blue.700"
          color="white"
          p={["4"]}
          flexDir={["column"]}
          w="100vw"
          alignItems={["center"]}
        >
          <Flex alignSelf="flex-end" padding={"4"}>
            <DarkModeToggle />
            <Button onClick={logout} colorScheme="red">
              Sair
            </Button>
          </Flex>
          <Heading size={["2xl"]}>Bem vindo {tokenDecode.email}</Heading>
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
      )}
    </>
  );
};
