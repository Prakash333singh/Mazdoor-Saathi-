// WorkerFormContext.jsx
import { createContext, useState, useContext } from "react";
import { useEffect } from "react";
const WorkerFormContext = createContext();

export const WorkerFormProvider = ({ children }) => {
  const [workerFormData, setWorkerFormData] = useState({});

  // useEffect(() => {
  //   // Update localStorage whenever workerFormData changes
  //   localStorage.setItem("formattedPh", workerFormData.mobileNumber || "");
  // }, [workerFormData.mobileNumber]);

  return (
    <WorkerFormContext.Provider value={{ workerFormData, setWorkerFormData }}>
      {children}
    </WorkerFormContext.Provider>
  );
};

export const useWorkerFormContext = () => useContext(WorkerFormContext);
