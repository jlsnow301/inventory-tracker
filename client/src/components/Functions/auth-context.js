import { createContext } from "react";

export const AuthContext = createContext({
  username: "Tester's",
  userImg: "./memeguy.png",
  email: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
