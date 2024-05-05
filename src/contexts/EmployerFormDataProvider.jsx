// EmployerFormContext.jsx
import { createContext, useState, useContext } from "react";

const EmployerFormContext = createContext();

export const EmployerFormProvider = ({ children }) => {
  const [employerFormData, setEmployerFormData] = useState({});

  return (
    <EmployerFormContext.Provider
      value={{ employerFormData, setEmployerFormData }}
    >
      {children}
    </EmployerFormContext.Provider>
  );
};

export const useEmployerFormContext = () => useContext(EmployerFormContext);
