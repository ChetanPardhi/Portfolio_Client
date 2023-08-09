import { Outlet, Navigate } from "react-router-dom";

const checkEmail = () => {
  let email = sessionStorage.getItem("email");
  return email ? true : false;
};

const PrivateRoutes = () => {
  const isAuthenticated = checkEmail();
  if(!isAuthenticated){
    return <Navigate to="/login"/>;
  }
   else{
    return <Outlet />;

  }

   
};

export default PrivateRoutes;