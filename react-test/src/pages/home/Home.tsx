import { Navigate } from "react-router-dom";

export const Home = () => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <div>Home</div>;
};
