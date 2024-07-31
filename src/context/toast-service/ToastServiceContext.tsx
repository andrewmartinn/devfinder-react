import { createContext, useReducer } from "react";
import {
  toastInitialState,
  ToastServiceContextType,
  ToastServiceProviderProps,
  ToastServiceStateActionType,
} from "../../types";
import toastReducer from "./ToastServiceReducer";
import { useToast, UseToastOptions, ToastId } from "@chakra-ui/react";

export const ToastServiceContext = createContext<
  ToastServiceContextType | undefined
>(undefined);

const ToastServiceProvider: React.FC<ToastServiceProviderProps> = ({
  children,
}) => {
  const initialState: toastInitialState = {
    toasts: [],
  };
  const [state, dispatch] = useReducer(toastReducer, initialState);
  const chakraToast = useToast();

  const addToast = (options: UseToastOptions) => {
    const toast: ToastId = chakraToast(options);

    dispatch({
      type: ToastServiceStateActionType.ADD_TOAST,
      payload: { ...options, id: toast },
    });

    setTimeout(() => removeToast(toast), options.duration || 5000);
  };

  const removeToast = (id: ToastId) => {
    dispatch({ type: ToastServiceStateActionType.REMOVE_TOAST, id });
  };

  return (
    <ToastServiceContext.Provider value={{ addToast, state }}>
      {children}
    </ToastServiceContext.Provider>
  );
};

export default ToastServiceProvider;
