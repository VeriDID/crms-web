import React from "react";
import { createBrowserRouter } from "react-router-dom";
import IndexPage from "@/pages/index";
import Layout from "@/components/layout";
import ApplicantDetailPage from "@/pages/applicantDetail/applicantDetail";
import EmployersPage from "@/pages/employers/employers";
import AddEmployerPage from "@/pages/addEmployer/addEmployer";
import JobPage from "@/pages/job/job";
import JobDetailPage from "@/pages/jobDetails/jobDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/applicants/:id", element: <ApplicantDetailPage /> },
      { path: "/employers", element: <EmployersPage /> },
      { path: "/add-employer", element: <AddEmployerPage /> },
      { path: "/job", element: <JobPage /> },
      { path: "/job/:id", element: <JobDetailPage /> },
    ],
  },
]);
