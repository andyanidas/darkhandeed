import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import app from "../init-firebase";
import { User } from "../types/user";

import { getAuth, onAuthStateChanged } from "firebase/auth";

interface AppContextInterface {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}
const initialData: AppContextInterface = {
  user: undefined,
  setUser: () => {},
};
const UserContext = createContext<AppContextInterface>(initialData);

export function useUser(): AppContextInterface {
  const { user, setUser }: AppContextInterface = useContext(UserContext);
  return { user: user, setUser: setUser };
}

export const UserProvider: React.FC<React.ReactNode | AppContextInterface> = (
  props: any
) => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      // console.log("on auth change", user);
      // setUser({user:})
      // Check for user status
    });
  }, []);

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
