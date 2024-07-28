import { ToastId, UseToastOptions } from "@chakra-ui/react";

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

export interface UserDetails extends Omit<User, "score"> {
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GithubAPISearchResponse {
  incomplete_results: boolean;
  items: User[];
  total_count: number;
}

export interface GithubInitialState {
  users: User[];
  selectedUser: UserDetails | Record<string, never>;
  loading: boolean;
  error: boolean;
}

export interface GithubContextType extends GithubInitialState {
  searchUsers: (query: URLSearchParams) => Promise<void>;
  getUser: (username: string) => Promise<void>;
  resetSearchResults: () => void;
}

export interface GithubProviderProps {
  children: React.ReactNode;
}

export enum GithubStateActionType {
  GET_USERS = "GET_USERS",
  GET_SELECTED_USER = "GET_SELECTED_USER",
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING",
  RESET_SEARCH = "RESET_SEARCH",
}

interface GetUsers {
  type: GithubStateActionType.GET_USERS;
  payload: User[];
}

interface SetLoading {
  type: GithubStateActionType.SET_LOADING;
}

interface SetError {
  type: GithubStateActionType.SET_ERROR;
}

interface ResetSearch {
  type: GithubStateActionType.RESET_SEARCH;
}

interface GetSelectedUser {
  type: GithubStateActionType.GET_SELECTED_USER;
  payload: UserDetails;
}

export type GithubAction =
  | GetUsers
  | SetLoading
  | SetError
  | ResetSearch
  | GetSelectedUser;

export interface ToastServiceContextType {
  addToast: (options: UseToastOptions) => void;
}

export interface ToastServiceProviderProps {
  children: React.ReactNode;
}

export interface toastInitialState {
  toasts: UseToastOptions[];
}

export enum ToastServiceStateActionType {
  ADD_TOAST = "ADD_TOAST",
  REMOVE_TOAST = "REMOVE_TOAST",
}

export interface AddToast {
  type: ToastServiceStateActionType.ADD_TOAST;
  payload: UseToastOptions;
}

export interface RemoveToast {
  type: ToastServiceStateActionType.REMOVE_TOAST;
  id: ToastId;
}

export type ToastAction = AddToast | RemoveToast;
