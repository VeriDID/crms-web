import * as React from "react";
import styled from "styled-components";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<Partial<PageProps>> = () => {
  const title = "Students";

  return (
    <PageContainer>
      <h1 className="bai-jamjuree-regular">{title}</h1>

      <TableContainer className="overflow-hidden my-2">
        <table className="min-w-full text-left">
          <Thead className="inter-regular text-base">
            <tr>
              <th scope="col" className="px-6 py-4">
                Student ID
              </th>
              <th scope="col" className="px-6 py-4">
                Student Name
              </th>
              <th scope="col" className="px-6 py-4">
                Status
              </th>
            </tr>
          </Thead>
          <Tbody className="inter-regular text-base">
            <tr>
              <td className="whitespace-nowrap px-6 py-4">123456789</td>
              <td className="whitespace-nowrap px-6 py-4">Jason Student</td>
              <td className="whitespace-nowrap px-6 py-4">Pending</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4">123456788</td>
              <td className="whitespace-nowrap px-6 py-4">Brian Student</td>
              <td className="whitespace-nowrap px-6 py-4">Active</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4">123456787</td>
              <td className="whitespace-nowrap px-6 py-4">Mark Student</td>
              <td className="whitespace-nowrap px-6 py-4">Active</td>
            </tr>
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
