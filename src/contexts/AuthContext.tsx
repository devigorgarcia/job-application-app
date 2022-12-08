import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import {
  IContextAuthData,
  IProviderProps,
  IUser,
} from "../interfaces/Context.interfaces";

export const AuthContext = createContext<IContextAuthData>(
  {} as IContextAuthData
);

export const AuthProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const registerUser = async (data: IUser) => {
    await api
      .post("/users", data)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log(err));
  };

  const loginUser = async (data: IUser) => {
    await api.post("/login", data).then((response) => {
      localStorage.setItem("@AppJobs:Token", response.data.token);
      navigate("/dashboard");
    });
  };
  return (
    <AuthContext.Provider value={{ registerUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
