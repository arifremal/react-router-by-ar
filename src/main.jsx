import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About/About";
import Contact from "./component/Contact.jsx/Contact";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import First from "./component/First/First";
import Friends from "./component/Friends/Friends";
import FriendDetail from "./component/FriendDetails/FriendDetail";
import Post from "./component/Post/Post";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
//   {
//     path:'/about',
//     element: <About></About>
//   },
//   {
//     path:'/contact',
//     element: <Contact></Contact>
//   },
 
  
// ]);

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<First></First>
      },
      {
        path:'friends',
        element:<Friends></Friends>,
        loader:()=> fetch(' https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'post',
        element:<Post></Post>,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'friend/:friendId',
        element:<FriendDetail></FriendDetail>,
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)

      },
      {
        path:'about',
        element: <About></About>
      },
      {
        path:'contact',
        element: <Contact></Contact>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
