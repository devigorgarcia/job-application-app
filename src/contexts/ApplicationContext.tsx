import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../api";
import {
  IApplicationData,
  IContextApplicationData,
  IProviderProps,
  IStatusList,
  IUpdateApplicationData,
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
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  useEffect(() => {
    getAllApplication();
    getAllStatus();
  }, []);

  const getAllApplication = () => {
    // api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api
      .get("/applications")
      .then((res) => {
        setListApplications(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getAllStatus = () => {
    // api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api
      .get("status")
      .then((res) => {
        setListStatus(res.data);
      })
      .catch((err) => console.log(err));
  };

  const editStatus = async (
    newStatus: string,
    statusId: string,
    onClose: () => void
  ) => {
    // api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const editStatus = {
      status: newStatus,
    };
    try {
      const response = await api.patch(`status/${statusId}`, editStatus);
      toast.success("Status Atualizado", {
        autoClose: 4000,
        theme: "dark",
      });
      getAllApplication();
      getAllStatus();
      setTimeout(() => {
        onClose();
      }, 5000);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const editApplication = async (
    data: IUpdateApplicationData,
    applicationId: string,
    onClose: () => void
  ) => {
    try {
      const response = await api.patch(`/applications/${applicationId}`, data);
      toast.success("Status Atualizado", {
        autoClose: 1000,
        theme: "dark",
      });
      getAllApplication();
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {}
  };

  return (
    <ApplicationContext.Provider
      value={{
        listApplications,
        getAllApplication,
        statusList,
        setInputSelect,
        inputSelect,
        editStatus,
        editApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
