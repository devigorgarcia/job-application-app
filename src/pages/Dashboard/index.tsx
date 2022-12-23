import { Divider } from "@chakra-ui/react";
import { ApplicationList } from "../../components/ApplicationList";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";

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
