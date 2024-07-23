export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}
export interface GithubInitalState {
  users: User[];
  loading: boolean;
  error: boolean;
}

export interface GithubContextType extends GithubInitalState {
  searchUsers: (query: URLSearchParams) => Promise<void>;
}

export interface GithubProviderProps {
  children: React.ReactNode;
}

export enum GithubStateActionType {
  GET_USERS = "GET_USERS",
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING",
}

interface GetUsersAction {
  type: GithubStateActionType.GET_USERS;
  payload: User[];
}

interface SetLoading {
  type: GithubStateActionType.SET_LOADING;
}

interface SetError {
  type: GithubStateActionType.SET_ERROR;
}

export type GithubAction = GetUsersAction | SetLoading | SetError;

export interface GithubAPISearchResponse {
  incomplete_results: boolean;
  items: User[];
  total_count: number;
}
