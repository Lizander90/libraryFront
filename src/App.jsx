import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/home/Home'
import NotFound from './views/notFound/NotFound';
import AddBook from './views/newBook/AddBook';

// import NotFound from './views/notFound/NotFound'
// import { AddBook } from './views/newBook/AddBook';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/addBook",
      element: <AddBook />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return <>
    <RouterProvider router={router} />
  </>
}

export default App
