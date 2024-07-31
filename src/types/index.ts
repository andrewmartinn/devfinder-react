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

export interface UserRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Omit<User, "score">;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: [];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface GithubInitialState {
  users: User[];
  hasSearched: boolean;
  selectedUser: UserDetails | Record<string, never>;
  selectedUserRepos: UserRepo[] | [];
  loading: boolean;
  error: boolean;
}

export interface GithubContextType extends GithubInitialState {
  searchUsers: (query: URLSearchParams) => Promise<void>;
  getUser: (username: string) => Promise<void>;
  getUserRepos: (username: string) => Promise<void>;
  resetSearchResults: () => void;
}

export interface GithubProviderProps {
  children: React.ReactNode;
}

export enum GithubStateActionType {
  GET_USERS = "GET_USERS",
  GET_USER_REPOS = "GET_USER_REPOS",
  GET_SELECTED_USER = "GET_SELECTED_USER",
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING",
  RESET_SEARCH = "RESET_SEARCH",
  SET_HAS_SEARCHED = "SET_HAS_SEARCHED",
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

interface SetHasSearched {
  type: GithubStateActionType.SET_HAS_SEARCHED;
  payload: boolean;
}

interface GetUserRepos {
  type: GithubStateActionType.GET_USER_REPOS;
  payload: UserRepo[];
}

export type GithubAction =
  | GetUsers
  | SetError
  | SetLoading
  | ResetSearch
  | SetHasSearched
  | GetSelectedUser
  | GetUserRepos;

export interface ToastServiceContextType {
  state: toastInitialState;
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
