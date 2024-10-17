import React from "react";
import { createBrowserRouter } from "react-router-dom";
import IndexPage from "@/pages/index";
import AddStudentPage from "@/pages/addStudent/addStudent";
import Layout from "@/components/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/add-student", element: <AddStudentPage /> },
    ],
  },
]);
