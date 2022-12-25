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

export interface IThemeDarkContext {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export interface IContextAuthData {
  registerUser: (data: IUser) => void;
  loginUser: (data: IUser) => void;
  tokenDecode: any;
}

//Application Context

export interface IApplication {
  id: string;
  title: string;
  org: string;
  link: string;
  obs: string;
  register_date: string;
  statusId: string;
  levelId: string;
  stackId: string;
}
export interface IApplicationData {
  id: string;
  title: string;
  org: string;
  link: string;
  obs: string;
  register_date?: string;
  status?: {
    id: string;
    status: string;
    updated_date?: string;
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

export interface IUpdateApplicationData {
  obs?: string;
}

export interface IStatusList {
  id: string;
  status: string;
  applications: IApplication;
}

export interface IAppCard {
  application: IApplicationData;
}


export interface IUserData {
  email: string;
  id: string;
  applications: IApplication[];
}
export interface IContextApplicationData {
  listApplications: IApplicationData[];
  getAllApplication: () => void;
  statusList: IStatusList[];
  setInputSelect: React.Dispatch<React.SetStateAction<string>>;
  inputSelect: string;
  editStatus: (
    newStatus: string,
    statusId: string,
    onClose: () => void
  ) => void;
  editApplication: (
    data: IUpdateApplicationData,
    applicationId: string,
    onClose: () => void
  ) => Promise<void>;
  getUserInfo: (userId: string) => Promise<IUserData>;
  userInfo: any;
}
