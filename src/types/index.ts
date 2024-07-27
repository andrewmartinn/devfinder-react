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

export interface GithubAPISearchResponse {
  incomplete_results: boolean;
  items: User[];
  total_count: number;
}

export interface GithubInitialState {
  users: User[];
  loading: boolean;
  error: boolean;
}

export interface GithubContextType extends GithubInitialState {
  searchUsers: (query: URLSearchParams) => Promise<void>;
  resetSearchResults: () => void;
}

export interface GithubProviderProps {
  children: React.ReactNode;
}

export enum GithubStateActionType {
  GET_USERS = "GET_USERS",
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING",
  RESET_SEARCH = "RESET_SEARCH",
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

interface ResetSearch {
  type: GithubStateActionType.RESET_SEARCH;
}
export type GithubAction = GetUsersAction | SetLoading | SetError | ResetSearch;

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
