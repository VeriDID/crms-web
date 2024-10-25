import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import type { HeadFC, PageProps } from "gatsby";

const AddJobPage: React.FC<Partial<PageProps>> = () => {
  const [jobDetails, setJobDetails] = useState({
    companyName: "",
    date: "",
    jobTitle: "",
    jobPosting: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // TODO: Add form submission logic here
    console.log("Job Details:", jobDetails);
  };

  return (
    <PageContainer>
      <div className="flex items-center">
        <Link
          key="Students"
          to="/job"
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

          <span className="ml-6 bai-jamjuree-regular text-3xl">
            Add Job Posting
          </span>
        </Link>
      </div>
      {/* Job Posting Form */}
      <JobPostingForm>
        <input
          type="text"
          name="companyName"
          value={jobDetails.companyName}
          onChange={handleInputChange}
          placeholder="Company Name"
        />
        <input
          type="date"
          name="date"
          value={jobDetails.date}
          onChange={handleInputChange}
          placeholder="Date"
        />
        <input
          type="text"
          name="jobTitle"
          value={jobDetails.jobTitle}
          onChange={handleInputChange}
          placeholder="Job Title"
        />
        <textarea
          name="jobPosting"
          value={jobDetails.jobPosting}
          onChange={handleInputChange}
          placeholder="Job Posting"
        />
        <div className="flex items-center justify-end">
          <button onClick={handleSubmit}>Post</button>
        </div>
      </JobPostingForm>
    </PageContainer>
  );
};

export default AddJobPage;

export const Head: HeadFC = () => <title>Add Student</title>;

/* Styles */
const PageContainer = styled.div`
  .idLookUp input {
    font-size: 16px;
    color: #1b1b1b;
    border: 1px solid #d3d3d3;
    border-radius: 4px 0 0 4px;
    border-right: none;
    height: 40px;
    outline: none;
    width: 300px;
  }
  .idLookUp button {
    font-size: 19px;
    background: #ffa41d;
    height: 40px;
    border-radius: 0 4px 4px 0;
  }
`;
const JobPostingForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  max-width: 500px;
  input,
  textarea {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
    position: relative;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
  textarea {
    height: 150px;
    resize: none;
  }
  button {
    background: #28a745;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100px;
  }
`;
