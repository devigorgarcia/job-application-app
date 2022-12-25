import { Flex, Heading } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../../contexts/ApplicationContext";
import { ApplicationCard } from "./ApplicationCard";
import jwt_decode from "jwt-decode";
import { IApplication, IUserData } from "../../interfaces/Context.interfaces";

export const ApplicationList = () => {
  const { inputSelect, getUserInfo } = useContext(ApplicationContext);

  const [applications, setApplications] = useState<IApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("@AppJobs:Token") || "";
      try {
        const tokenDecoded = jwt_decode<any>(token);
        const response = await getUserInfo(tokenDecoded.id);
        setApplications(response.applications);
        setLoading(false);
      } catch (error) {}
    };
    getUser();
  }, [applications]);

  const newList = applications.filter((application) => {
    return application.title.toLowerCase().includes(inputSelect.toLowerCase());
  });

  if (loading) {
    return <p>Carregando..</p>;
  }

  return (
    <>
      {applications && (
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
              ? applications.map((application) => {
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
      )}
    </>
  );
};
