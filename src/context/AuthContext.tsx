import React, { FC, Fragment, useEffect, useState } from "react";

type AuthContextProp = {
  children: React.ReactNode;
};

type UserProp = {
  email: string;
  password: string;
};

const AuthContext: FC<AuthContextProp> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserProp>({
    email: "",
    password: "",
  });

  const userData = JSON.stringify(localStorage.getItem("user"));

  console.table(userData);

  useEffect(() => {
    
  }, [currentUser]);

  return <Fragment>{children}</Fragment>;
};

export default AuthContext;
