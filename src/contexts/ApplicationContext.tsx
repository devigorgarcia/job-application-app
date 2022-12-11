import { createContext, useEffect, useState } from "react";
import { api } from "../api";
import {
  IApplicationData,
  IContextApplicationData,
  IProviderProps,
  IStatusList,
} from "../interfaces/Context.interfaces";

export const ApplicationContext = createContext<IContextApplicationData>(
  {} as IContextApplicationData
);

export const ApplicationProvider = ({ children }: IProviderProps) => {
  const [listApplications, setListApplications] = useState<IApplicationData[]>(
    [] as IApplicationData[]
  );
  const [statusList, setListStatus] = useState<IStatusList[]>([]);
  const [filtredList, setFiltredList] = useState([]);

  const token = localStorage.getItem("@AppJobs:Token");

  useEffect(() => {
    getAllApplication();
    getAllStatus();
  }, []);

  const getAllApplication = () => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api
      .get("/applications")
      .then((res) => {
        setListApplications(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getAllStatus = () => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api.get("status").then((res) => {
      setListStatus(res.data);
    });
  };

  const searchBar = (searchItem: string) => {
    if (searchItem.length == 0) {
      getAllApplication();
    } else {
      let newList = listApplications.filter(
        (application) =>
          application.title
            .toLowerCase()
            .includes(searchItem.toLocaleLowerCase()) ||
          application.org
            .toLowerCase()
            .includes(searchItem.toLocaleLowerCase()) ||
          application.status?.status
            .toLowerCase()
            .includes(searchItem.toLocaleLowerCase())
      );
      setListApplications(newList);
    }
  };

  const searchStatus = (statusInput: string) => {
    if (statusInput === "default") {
      getAllApplication();
    } else {
      let newList: any = listApplications.filter((application) => {
        return application.status?.status
          .toLowerCase()
          .includes(statusInput.toLowerCase());
      });
    }
  };

  return (
    <ApplicationContext.Provider
      value={{
        listApplications,
        getAllApplication,
        statusList,
        searchBar,
        searchStatus,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
