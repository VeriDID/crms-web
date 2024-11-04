import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const JobDetailPage: React.FC = () => {
  // const { id } = useParams<{ id: string }>(); // Get the dynamic "id" from the URL
  const location = useLocation();
  const job = location.state?.job;

  return (
    <>
      <div className="flex items-center">
        <Link key="Jobs" to="/job" className="flex items-center cursor-pointer">
          <svg
            width="13"
            height="22"
            viewBox="0 0 13 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.34314 9.8324L9.83288 0.34314C10.2904 -0.11438 11.0326 -0.11438 11.4901 0.34314L12.597 1.45007C13.0541 1.9071 13.0546 2.64734 12.599 3.10535L5.078 10.661L12.5985 18.2172C13.0546 18.6752 13.0536 19.4154 12.5966 19.8724L11.4896 20.9794C11.0321 21.4369 10.2899 21.4369 9.8324 20.9794L0.34314 11.4896C-0.11438 11.0321 -0.11438 10.2899 0.34314 9.8324Z"
              fill="black"
            />
          </svg>

          <span className="ml-6 bai-jamjuree-regular text-3xl">
            Job Posting
          </span>
        </Link>
      </div>

      <DetailContainer>
        <DetailCard>
          <DetailRow>
            <Label>Company Name</Label>
            <Value>{job?.company_name}</Value>
          </DetailRow>

          <DetailRow>
            <Label>Date</Label>
            <Value>{job?.date}</Value>
          </DetailRow>

          <DetailRow>
            <Label>Job Title</Label>
            <Value>{job?.job_title}</Value>
          </DetailRow>

          <DetailRow>
            <Label>Job Posting</Label>
            <TranscriptBox>
              <pre>{job.job_posting}</pre>
            </TranscriptBox>
          </DetailRow>
        </DetailCard>
      </DetailContainer>
    </>
  );
};

export default JobDetailPage;

/* Styles */
const DetailContainer = styled.div`
  margin-top: 20px;
`;

const DetailCard = styled.div`
  padding: 20px;
  background: #f8f8f8;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  max-width: 700px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const DetailRow = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #333;
  width: 150px;
`;

const Value = styled.div`
  font-size: 16px;
  color: #333;
`;

const TranscriptBox = styled.div`
  background: #ffffff;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 400px;
  overflow-y: auto;
  width: 100%;
  pre {
    margin: 0;
    font-size: 14px;
  }
`;
