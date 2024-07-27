import {
  ToastAction,
  toastInitialState,
  ToastServiceStateActionType,
} from "../../types";

const toastReducer = (state: toastInitialState, action: ToastAction) => {
  switch (action.type) {
    case ToastServiceStateActionType.ADD_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case ToastServiceStateActionType.REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.id),
      };
    default:
      return state;
  }
};

export default toastReducer;
