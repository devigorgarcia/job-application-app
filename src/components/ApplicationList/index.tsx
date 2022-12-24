import { Flex, Heading } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { ApplicationContext } from "../../contexts/ApplicationContext";
import { ApplicationCard } from "./ApplicationCard";

export const ApplicationList = () => {
  const { listApplications, inputSelect, getAllApplication } =
    useContext(ApplicationContext);

  useEffect(() => {
    getAllApplication();
  }, []);

  console.log(listApplications);

  const newList = listApplications.filter((application) => {
    return (
      application.status?.status
        .toLowerCase()
        .includes(inputSelect.toLowerCase()) ||
      application.title.toLowerCase().includes(inputSelect.toLowerCase()) ||
      application.org.toLowerCase().includes(inputSelect.toLocaleLowerCase())
    );
  });

  return (
    <Flex flexDir={["column"]} mt="3" align={["center"]}>
      <Heading mb="4" textAlign={["center"]}>
        Lista de candidaturas
      </Heading>
      <Flex
        flexDir={["column", "column", "row"]}
        gap={["4"]}
        p={["4"]}
        justifyContent={["center"]}
      >
        {inputSelect === "default"
          ? listApplications.map((application) => {
              return (
                <ApplicationCard
                  key={application.id}
                  application={application}
                />
              );
            })
          : newList.map((application) => {
              return (
                <ApplicationCard
                  key={application.id}
                  application={application}
                />
              );
            })}
      </Flex>
    </Flex>
  );
};
