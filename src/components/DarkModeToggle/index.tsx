import { Flex, Switch, Text, useColorMode } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

export const DarkModeToggle = () => {
  const toggle = () => {
    toggleColorMode();
    localStorage.setItem("@JobAppTheme", colorMode);
  };
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex alignSelf="flex-end" gap={"3"} pr="4">
      <FiMoon />
      <Switch onChange={() => toggle()} />
      <FiSun />
    </Flex>
  );
};
