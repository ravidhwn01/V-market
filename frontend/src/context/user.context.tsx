import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getUserByToken } from "../api/shopkeeper.api";
import { ShopkeeperContextValue } from "../interfaces/exportedProduct.interface";

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
  const { data: loginUser } = useQuery("me", getUserByToken);

  useEffect(() => {
    setUser(loginUser);
  }, [loginUser]);

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
