import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<Partial<PageProps>> = () => {
  const title = "Applicants";

  // Sample data for applicants
  const applicants = [
    { name: "Jason Student", transcript: "Verified", status: "Active", id: 1 },
    { name: "Brian Student", transcript: "Verified", status: "Active", id: 2 },
    {
      name: "Mark Student",
      transcript: "Unconfirmed",
      status: "Pending",
      id: 3,
    },
  ];

  return (
    <PageContainer>
      <div className="flex items-center justify-between">
        <h1 className="bai-jamjuree-regular">{title}</h1>
      </div>

      <TableContainer className="overflow-hidden my-2">
        <table className="min-w-full text-left">
          <Thead className="inter-regular text-base">
            <tr>
              <th scope="col" className="px-6 py-4">
                Student Name
              </th>
              <th scope="col" className="px-6 py-4">
                Transcript
              </th>
              <th scope="col" className="px-6 py-4">
                Status
              </th>
            </tr>
          </Thead>
          <Tbody className="inter-regular text-base">
            {applicants.map((applicant, index) => (
              <ClickableRow
                key={applicant.id}
                to={`/applicants/${applicant.id}`}
              >
                <td className="whitespace-nowrap px-6 py-4">
                  {applicant.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {applicant.transcript}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {applicant.status}
                </td>
              </ClickableRow>
            ))}
          </Tbody>
        </table>
      </TableContainer>
    </PageContainer>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

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
