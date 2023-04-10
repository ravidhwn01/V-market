import {
  FC,
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  Shopkeeper,
  ShopkeeperContextValue,
} from "../interfaces/exportedProduct.interface";
import { ReactJSXElementChildrenAttribute } from "@emotion/react/types/jsx-namespace";
import { useQuery } from "react-query";
import { getUserByToken } from "../api/shopkeeper.api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext<UserContextProviderData>({
  user: undefined,
  setUser: undefined!,
});

interface UserContextProviderData {
  user: ShopkeeperContextValue | undefined;
  setUser: React.Dispatch<
    React.SetStateAction<ShopkeeperContextValue | undefined>
  >;
}

export interface UserContextProps extends PropsWithChildren {}

export const UserContextProvider: FC<UserContextProps> = ({ children }) => {
  const [user, setUser] = useState<ShopkeeperContextValue>();
  const navigate = useNavigate();

  const { data, isError } = useQuery("me", getUserByToken, {
    onError: (err: any) => {
      if (err.response.status === 401) {
        navigate("/login");
      }
    },
  });

  useEffect(() => {
    setUser(data);
  }, [data]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
