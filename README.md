## React js - FrontEnd 

### Description

This music sharing application has two main features: Musics and Playlist. 
It supports CRUD operations for both musics and playlists, with specific permissions and actions associated with each feature. 

Here is the breakdown of the CRUD operations for musics and playlists:

CRUD on Musics:

Create: Users can create new musics.
Read: Users can retrieve their own musics as well as musics shared by other users.
Update: Users can update the details of their own musics.
Delete: Users can delete their own musics.

CRUD on Playlist:

Create: Users can create new playlists.
Read: Users can retrieve their own playlists.
Update: Users can add musics to their playlists.
Delete: Users can delete their own playlists.

It's important to note that users have different levels of control and permissions within the application. They can only perform certain actions on their own musics and playlists, ensuring privacy and ownership rights. Here is a summary of the user permissions for each feature:

Musics:

Users can create new musics.
Users can read musics shared by other users.
Users can update and delete only their own musics.

Playlist:

Users can create new playlists.
Users can delete their own playlists.
Users can retrieve their own playlists.
Users can add musics to their playlists.
users can delete musics under their playlists. 
users can get musics with in their playlist. 

By providing these CRUD operations and user permissions, the music sharing application allows users to manage and organize their musics and playlists effectively. They can create personalized playlists, add their favorite musics, and control the content they share with others.

finally it utilizes various libraries and tools for managing application state, making asynchronous API calls, handling navigation, and implementing route protection and using material UI icons. Here's an overview of the technologies used:

Redux Toolkit: The project uses Redux Toolkit, which is a library that simplifies the process of managing state in Redux. It provides a set of utilities, including a streamlined API, simplified store setup, and built-in Redux middleware.

Redux Saga with Axios: Redux Saga is employed for handling asynchronous actions and side effects in Redux. It integrates with Axios, a popular JavaScript library for making HTTP requests. Together, Redux Saga and Axios enable the project to handle asynchronous API calls effectively.

React Router DOM: The project utilizes React Router DOM, which is a routing library for React applications. It allows for declarative routing and navigation by providing components like <BrowserRouter>, <Route>, <Link>, etc.

React Hooks: The project takes advantage of React Hooks, specifically useEffect and useRef.

useEffect is used to perform side effects, such as fetching data or subscribing to events, in functional components. It helps manage component lifecycle and triggers actions based on dependencies.
useRef allows the project to create mutable references to elements or values that persist across re-renders.
Route Protection: The project implements route protection to control access to certain routes based on user authentication or authorization. This can be achieved using various techniques, such as conditional rendering, higher-order components (HOCs), or custom route components.

It handles access and refresh token.
  
By combining Redux Toolkit, Redux Saga with Axios, React Router DOM, and React Hooks, the project creates a robust and efficient application with state management, asynchronous API handling, seamless navigation, and route protection capabilities.








