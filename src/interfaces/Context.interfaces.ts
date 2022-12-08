import { ReactNode } from "react";

export interface IProviderProps {
  children: ReactNode;
}

export interface IUser {
  id?: string;
  email: string;
  password: string;
}

export interface IContextAuthData {
  registerUser: (data: IUser) => void;
  loginUser: (data: IUser) => void;
}
