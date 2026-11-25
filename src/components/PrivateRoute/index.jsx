import { useContext } from "react";

import { Navigate } from "react-router";

import AuthContext from "../../contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (user == null) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
}
