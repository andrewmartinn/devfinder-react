import { createContext, useCallback, useReducer } from "react";
import {
  GithubAPISearchResponse,
  GithubContextType,
  GithubInitialState,
  GithubProviderProps,
  GithubStateActionType,
  UserDetails,
} from "../../types";
import githubReducer from "./GithubReducer";

const GITHUB_BASE_URL = "https://api.github.com";
const GITHUB_AUTH_TOKEN = import.meta.env.VITE_APP_GITHUB_API_TOKEN;

export const GithubContext = createContext<GithubContextType | undefined>(
  undefined
);

const GithubProvider: React.FC<GithubProviderProps> = ({ children }) => {
  const initialState: GithubInitialState = {
    users: [],
    selectedUser: {},
    error: false,
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (query: URLSearchParams): Promise<void> => {
    dispatch({ type: GithubStateActionType.SET_LOADING });
    try {
      const response = await fetch(
        `${GITHUB_BASE_URL}/search/users?${query.toString()}`,
        {
          headers: {
            Authorization: `token ${GITHUB_AUTH_TOKEN}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("ERROR: Failed to users");
      }
      const data: GithubAPISearchResponse = await response.json();
      console.log(data);
      dispatch({ type: GithubStateActionType.GET_USERS, payload: data.items });
    } catch (error) {
      dispatch({ type: GithubStateActionType.SET_ERROR });
      console.error("ERROR: Failed to fetch data", error);
    }
  };

  const getUser = useCallback(async (username: string): Promise<void> => {
    dispatch({ type: GithubStateActionType.SET_LOADING });
    try {
      const response = await fetch(`${GITHUB_BASE_URL}/users/${username}`, {
        headers: {
          Authorization: `token ${GITHUB_AUTH_TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error("ERROR: Failed to fetch user profile");
      }
      const data: UserDetails = await response.json();
      console.log(data);
      dispatch({
        type: GithubStateActionType.GET_SELECTED_USER,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: GithubStateActionType.SET_ERROR });
      console.error("ERROR: Failed to fetch data", error);
    }
  }, []);

  const resetSearchResults = () => {
    dispatch({ type: GithubStateActionType.RESET_SEARCH });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        loading: state.loading,
        error: state.error,
        searchUsers,
        getUser,
        resetSearchResults,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
