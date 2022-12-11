import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import { ApplicationList } from "../../components/ApplicationList";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { AiFillPlusSquare } from "react-icons/ai";

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <Filter />
      <Divider />
      <ApplicationList />
    </>
  );
};
