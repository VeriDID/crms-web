import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import type { HeadFC, PageProps } from "gatsby";
import useAgentStore from "@/stores/useAgent.store";

const API_URL = import.meta.env.VITE_API_URL;
const AGENT = import.meta.env.VITE_AGENT_NAME;

const IndexPage: React.FC<Partial<PageProps>> = () => {
  const title = "Applicants";
  const [applicants, setApplicants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplicants = async () => {
      const agentInfo = useAgentStore.getState().agentInfo;

      // Only fetch students if agentInfo is available
      if (!agentInfo) return;

      try {
        const response = await fetch(
          `${API_URL}/v1.0/connections/agent/${AGENT}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data && data?.statusCode !== 500) {
          setApplicants(data);
        }
      } catch (error) {
        console.error("Error fetching applicant data:", error);
      }
    };

    // Set a timeout of 5 seconds before fetching
    const timeoutId = setTimeout(() => {
      fetchApplicants();
    }, 1000);

    // Clean up the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  const handleRowClick = (applicant: any) => {
    navigate(`/applicants/${applicant?.id}`, { state: { applicant } });
  };

  return (
    <PageContainer>
      <div className="flex items-center justify-between">
        <h1 className="bai-jamjuree-regular">{title}</h1>
      </div>

      <TableContainer className="overflow-x-auto my-2">
        {applicants.length === 0 ? (
          <NoRecordsMessage>There are no records!</NoRecordsMessage>
        ) : (
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
              {applicants.map((applicant: any) => (
                <ClickableRow
                  key={applicant?.id}
                  onClick={() => handleRowClick(applicant)}
                >
                  <td className="whitespace-nowrap px-6 py-4">
                    {applicant?.metadata?.StudentRecord?.student_name ?? "-"}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {applicant.transcript}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {applicant?.state ?? "-"}
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
