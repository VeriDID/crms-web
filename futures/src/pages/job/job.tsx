import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import type { HeadFC, PageProps } from "gatsby";

const API_URL = import.meta.env.VITE_API_URL;

const JobPage: React.FC<Partial<PageProps>> = () => {
  const title = "Job Posting";

  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${API_URL}/jobs`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data?.statusCode !== 500) {
          setJobs(data);
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleRowClick = (job: any) => {
    navigate(`/job/${job?.id}`, { state: { job } });
  };

  return (
    <PageContainer>
      <div className="flex items-center justify-between">
        <h1 className="bai-jamjuree-regular">{title}</h1>
      </div>

      <TableContainer className="overflow-x-auto my-2">
        {jobs.length === 0 ? (
          <NoRecordsMessage>There are no records!</NoRecordsMessage>
        ) : (
          <table className="min-w-full text-left">
            <Thead className="inter-regular text-base">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Company
                </th>
                <th scope="col" className="px-6 py-4">
                  Date
                </th>
                <th scope="col" className="px-6 py-4">
                  Job
                </th>
              </tr>
            </Thead>
            <Tbody className="inter-regular text-base">
              {jobs.map((job: any) => (
                <ClickableRow key={job?.id} onClick={() => handleRowClick(job)}>
                  <td className="whitespace-nowrap px-6 py-4">
                    {job?.company_name ?? "-"}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {job?.date ?? "-"}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {job?.job_title ?? "-"}
                  </td>
                </ClickableRow>
              ))}
            </Tbody>
          </table>
        )}
      </TableContainer>
    </PageContainer>
  );
};

export default JobPage;

export const Head: HeadFC = () => <title>Job Posting</title>;

/* Styles */
const PageContainer = styled.div`
  h1 {
    font-size: 30px;
    color: #1b1b1b;
  }
`;
const TableContainer = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  box-shadow: 0px 4px 4px 0px #1b1b1b1a;
  table {
    min-width: 400px;
    width: 100%;
  }
`;
const Thead = styled.thead`
  background: #f8f8f8;
`;
const Tbody = styled.tbody`
  tr:nth-child(even) {
    background: #f8f8f8;
  }
  tr:nth-child(odd) {
    background: #ffffff;
  }
`;
const ClickableRow = styled.tr`
  display: table-row;
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #f0f0f0 !important;
  }
  &:visited {
    color: inherit !important;
  }
  td {
    padding: 1rem !important;
  }
`;
const NoRecordsMessage = styled.p`
  padding: 20px;
  font-size: 18px;
  color: #1b1b1b;
  text-align: center;
`;
