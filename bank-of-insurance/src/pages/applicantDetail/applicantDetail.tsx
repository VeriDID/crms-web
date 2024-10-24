import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

// Sample transcript data (you would replace this with actual data fetching)
const sampleTranscript = [
  {
    Term: "FY",
    Grade: "B",
    syear: 2023,
    CourseCode: "AMT0775F5",
    CourseTitle: "Engine - Removal Installation",
  },
  {
    Term: "FY",
    Grade: "B",
    syear: 2023,
    CourseCode: "AMT0775F4",
    CourseTitle: "Engine - Troubleshooting Repair",
  },
  {
    Term: "FY",
    Grade: "B",
    syear: 2023,
    CourseCode: "AMT0775F6",
    CourseTitle: "Pro - pellers",
  },
];

const ApplicantDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the dynamic "id" from the URL

  // In a real scenario, you'd fetch the applicant details using the id
  const applicant = {
    name: "Jason Student",
    status: "Active",
    transcript: sampleTranscript,
    id: id,
  };

  return (
    <>
      <div className="flex items-center">
        <Link
          key="Applicants"
          to="/"
          className="flex items-center cursor-pointer"
        >
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

          <span className="ml-6 bai-jamjuree-regular text-3xl">Applicants</span>
        </Link>
      </div>

      <DetailContainer>
        <DetailCard>
          <DetailRow>
            <Label>Student Name</Label>
            <Value>{applicant.name}</Value>
          </DetailRow>

          <DetailRow>
            <Label>Status</Label>
            <Value>{applicant.status}</Value>
          </DetailRow>

          <DetailRow>
            <Label>Transcript</Label>
            <TranscriptBox>
              <pre>{JSON.stringify(applicant.transcript, null, 2)}</pre>
            </TranscriptBox>
          </DetailRow>
        </DetailCard>
      </DetailContainer>
    </>
  );
};

export default ApplicantDetailPage;

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
  margin-bottom: 10px;
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
  max-height: 200px;
  overflow-y: auto;
  pre {
    margin: 0;
    font-size: 14px;
  }
`;
