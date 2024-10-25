import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import type { HeadFC, PageProps } from "gatsby";

const JobPage: React.FC<Partial<PageProps>> = () => {
  const title = "Job Posting";

  // Sample data for jobs
  const jobs = [
    {
      company: "Bank of Insurance",
      date: "10.20.2024",
      job: "Manager",
      id: 1,
    },
    {
      company: "Bank of Insurance",
      date: "10.20.2024",
      job: "Teller",
      id: 2,
    },
    {
      company: "Bank of Insurance",
      date: "10.20.2024",
      job: "Broker",
      id: 3,
    },
  ];

  return (
    <PageContainer>
      <div className="flex items-center justify-between">
        <h1 className="bai-jamjuree-regular">{title}</h1>
      </div>

      <TableContainer className="overflow-x-auto my-2">
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
            {jobs.map((job, index) => (
              <ClickableRow key={job.id} to={`/jobs/${job.id}`}>
                <td className="whitespace-nowrap px-6 py-4">{job.company}</td>
                <td className="whitespace-nowrap px-6 py-4">{job.date}</td>
                <td className="whitespace-nowrap px-6 py-4">{job.job}</td>
              </ClickableRow>
            ))}
          </Tbody>
        </table>
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
const ClickableRow = styled(Link)`
  display: table-row;
  color: inherit;
  text-decoration: none;
  &:hover {
    background-color: #f0f0f0;
  }
  &:visited {
    color: inherit;
  }
  td {
    padding: 1rem;
  }
`;
