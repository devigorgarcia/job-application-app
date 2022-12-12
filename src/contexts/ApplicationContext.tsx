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
  const [inputSelect, setInputSelect] = useState("");

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

  return (
    <ApplicationContext.Provider
      value={{
        listApplications,
        getAllApplication,
        statusList,
        setInputSelect,
        inputSelect,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
