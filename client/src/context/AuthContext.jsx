import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Prop validation for children
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // children is required and should be a renderable node
};
