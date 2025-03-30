import React from "react";
import Header from "./common/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import BlogList from "./components/Bloglist";
import BlogDetails from "./components/BlogDetails";
import Notfound from "./components/Notfound";

const blogs = [
  {
    id: 1,
    title: "React Router Basics",
    content: "Learn how to use React Router in your projects!",
  },
  {
    id: 2,
    title: "State Management in React",
    content: "Managing state efficiently in React applications.",
  },
  {
    id: 3,
    title: "Optimizing React Apps",
    content: "Improve performance and optimize your React apps.",
  },
];

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
const App = () => {
  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bloglist",
        element: <BlogList />,
        loader: () => blogs,
      },
      {
        path: "/blogdetails/:id",
        element: <BlogDetails />,
        loader: ({ params }) => {
          const blog = blogs.find((b) => b.id === parseInt(params.id));
          if (!blog) throw new Response("Blog not found", { status: 404 });
          return blog;
        },
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

export default App;
