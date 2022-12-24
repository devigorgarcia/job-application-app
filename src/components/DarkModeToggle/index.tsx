import { Button, Flex, useColorMode } from "@chakra-ui/react";

import { FiSun, FiMoon } from "react-icons/fi";

export const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex alignSelf="flex-end" gap={"3"} pr="4">
      {colorMode === "light" ? (
        <Button onClick={toggleColorMode} colorScheme="whiteAlpha">
          <FiMoon />
        </Button>
      ) : (
        <Button onClick={toggleColorMode} colorScheme="whiteAlpha">
          <FiSun />
        </Button>
      )}
    </Flex>
  );
};
