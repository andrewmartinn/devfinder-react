# Devfinder React

DevFinder is a React application that allows users to search for GitHub profiles, view user details, and explore user repositories. The app leverages the GitHub API for fetching and displaying user data.


[View Live Demo](https://devfinder-react-app.netlify.app/)

Homepage
![devfinder-preview](https://github.com/user-attachments/assets/90f7bdc5-07ae-4ef7-8e37-0165bdd46645)

Profile Details Page
![devfinder-profile](https://github.com/user-attachments/assets/61e6f942-dc57-4761-9799-54595dd70e46)


## Technologies Used

- [Vite](https://vitejs.dev/): Fast, opinionated web dev build tool
- [TypeScript](https://vitejs.dev/): Typed superset of JavaScript
- [Chakra UI](https://v2.chakra-ui.com/getting-started): Simple, modular, and accessible component library
- [React Router](https://reactrouter.com/): Declarative routing for React applications
- [React Icons](https://react-icons.github.io/react-icons/):A library containing popular icons for React projects, used for displaying various icons throughout the application.
- [Framer Motion](https://www.framer.com/motion/introduction/): Animation library for React
- [Github API](https://docs.github.com/en/rest): Official GitHub API for fetching user and repository data

## Project Features

- **User Search:** Search for GitHub users by their username.
- **User Profile Details:** View detailed information about GitHub users, including their repositories, followers, and following.
- **Repository List:** Display list of repositories for each user, with details like stars, forks, and language used.
- **Responsive Design:** Ensure the application is optimized for various screen sizes and devices.
- **Animations:** Implemented different animations effects and transtitions for better user experience.
- **Toast Service:** Built reusable toast service to display warnings or errors throughout the app.
- **Theme Toggle:** Users can toggle between dark and light theme according to user preference, the app is designed to adapt to colors and backgrounds based on selected theme.

## Project Outcomes

- **Context API and Reducers:** Managed global application state efficiently using the Context API along with reducers functions. This included handling user data, toasts, search results, loading states, and error states. The use of reducers helped in managing complex state logic and state transitions effecient.

- **TypeScript Integration:** Utilized TypeScript for type safety and better development experience.

- **Third-Party API Integration:** Successfully interacted with the GitHub API to fetch and display user profiles and repositories dynamically based on user queries.

- **Context API:** Utilized the Context API to manage global application state efficiently. This included managing gifs, user favorites, filters, and other application-wide data.

## Project Setup

This project was bootstrapped with [Vite](https://vitejs.dev/guide/)

To get started you need to:

- Clone the project
- Install listed dependencies
- Run available scripts
- Create a env file

### Install dependencies

```
yarn install
```

### Create an enviroment file to store Github API Authentication Token

```
VITE_APP_GITHUB_API_TOKEN=your-api-key-here
```

### Run React dev server

```
yarn dev
```

### To build for production

```
yarn build
```

## Deployment

To deploy this project run

```
yarn run deploy
```
