import { ReactNode } from "react";

export interface IProviderProps {
  children: ReactNode;
}

//User Context

export interface IUser {
  id?: string;
  email: string;
  password: string;
}

export interface IContextAuthData {
  registerUser: (data: IUser) => void;
  loginUser: (data: IUser) => void;
}

//Application Context

export interface IApplication {
  id: string;
  title: string;
  org: string;
  link: string;
  obs: string;
  register_date: string;
  updated_date: string;
  statusId: string;
  levelId: string;
  stackId: string;
}
export interface IApplicationData {
  id?: string;
  title: string;
  org: string;
  link: string;
  obs: string;
  register_date?: string;
  updated_date?: string;
  status?: {
    id: string;
    status: string;
  };
  level?: {
    id: string;
    level: string;
  };
  stack?: {
    id: string;
    level: string;
  };
}

export interface IStatusList {
  id: string;
  status: string;
  applications: IApplication;
}

export interface IAppCard {
  application: IApplicationData;
}
export interface IContextApplicationData {
  listApplications: IApplicationData[];
  getAllApplication: () => void;
  statusList: IStatusList[];
  searchBar: (searchItem: string) => void;
  searchStatus: (statusInput: string) => void;
}
