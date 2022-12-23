import { Flex, Switch, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex alignSelf="flex-end" gap={"3"} pr="4">
      {colorMode === "dark" ? <FiMoon /> : <FiSun />}
      <Switch onChange={toggleColorMode} />
      {colorMode === "dark" ? <FiSun /> : <FiMoon />}
    </Flex>
  );
};
