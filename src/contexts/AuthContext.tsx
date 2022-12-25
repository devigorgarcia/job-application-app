import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import jwt_decode from "jwt-decode";

import {
  IContextAuthData,
  IProviderProps,
  IUser,
} from "../interfaces/Context.interfaces";

export const AuthContext = createContext<IContextAuthData>(
  {} as IContextAuthData
);

export const AuthProvider = ({ children }: IProviderProps) => {
  const [tokenDecode, setTokenDecode] = useState();
  const navigate = useNavigate();

  const registerUser = async (data: IUser) => {
    await api
      .post("/users", data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const loginUser = async (data: IUser) => {
    await api.post("/login", data).then((response) => {
      localStorage.setItem("@AppJobs:Token", response.data.token);
      const token = jwt_decode<any>(response.data.token);
      setTokenDecode(token);
      navigate("/dashboard");
    });
  };
  return (
    <AuthContext.Provider value={{ registerUser, loginUser, tokenDecode }}>
      {children}
    </AuthContext.Provider>
  );
};
