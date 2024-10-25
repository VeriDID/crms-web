import React from "react";
import { createBrowserRouter } from "react-router-dom";
import IndexPage from "@/pages/index";
import Layout from "@/components/layout";
import JobPage from "@/pages/job/job";
import AddJobPage from "@/pages/addJob/addJob";
import ApplicantDetailPage from "@/pages/applicantDetail/applicantDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/job", element: <JobPage /> },
      { path: "/add-job", element: <AddJobPage /> },
      { path: "/applicants/:id", element: <ApplicantDetailPage /> },
    ],
  },
]);
