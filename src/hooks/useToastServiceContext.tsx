import { useContext } from "react";
import { ToastServiceContextType } from "../types";
import { ToastServiceContext } from "../context/toast-service/ToastServiceContext";

const useToastServiceContext = (): ToastServiceContextType => {
  const context = useContext(ToastServiceContext);
  if (context === undefined) {
    throw new Error(
      "useToastServiceContext must be used within an ToastServiceProvider"
    );
  }
  return context;
};
export default useToastServiceContext;
