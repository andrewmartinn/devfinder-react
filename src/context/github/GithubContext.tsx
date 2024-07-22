import { createContext, useCallback, useReducer } from "react";
import {
  GithubContextType,
  GithubInitalState,
  GithubProviderProps,
  GithubStateActionType,
  User,
} from "../../types";
import githubReducer from "./GithubReducer";

const GITHUB_BASE_URL = "https://api.github.com";
const GITHUB_AUTH_TOKEN = import.meta.env.VITE_APP_GITHUB_API_TOKEN;

export const GithubContext = createContext<GithubContextType | undefined>(
  undefined
);

const GithubProvider: React.FC<GithubProviderProps> = ({ children }) => {
  const initalState: GithubInitalState = {
    users: [],
    error: false,
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initalState);

  const fetchUsers = useCallback(async (): Promise<void> => {
    dispatch({ type: GithubStateActionType.SET_LOADING });
    try {
      const response = await fetch(`${GITHUB_BASE_URL}/users`, {
        headers: {
          Authorization: `token ${GITHUB_AUTH_TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch users!");
      }
      const data: User[] = await response.json();
      dispatch({ type: GithubStateActionType.GET_USERS, payload: data });
      console.log(data);
    } catch (error) {
      dispatch({ type: GithubStateActionType.SET_ERROR });
      console.error("Failed to fetch users", error);
    }
  }, []);

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        error: state.error,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
