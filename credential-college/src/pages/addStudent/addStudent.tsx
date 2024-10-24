import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import type { HeadFC, PageProps } from "gatsby";

const AddStudentPage: React.FC<Partial<PageProps>> = () => {
  const [student, setStudent] = useState(null as any);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  const handleSearch = () => {
    // TODO: Mock search result, replace with actual search logic
    setStudent({
      name: "Jason Student",
      id: "123456789",
    });
  };

  const openInviteModal = () => {
    setIsInviteModalOpen(true);
  };

  const closeInviteModal = () => {
    setIsInviteModalOpen(false);
  };

  return (
    <PageContainer>
      <div className="flex items-center">
        <Link
          key="Students"
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

          <span className="ml-6 bai-jamjuree-regular text-3xl">
            Add Student
          </span>
        </Link>
      </div>
      <section className="flex items-center mt-10 idLookUp">
        <input
          type="text"
          className="px-2 inter-regular"
          placeholder="Student ID Lookup"
        />
        <button
          onClick={handleSearch}
          className="text-white px-6 inter-regular-bold"
        >
          Search
        </button>
      </section>

      {student && (
        <StudentCard className="mt-4 rounded flex justify-between items-center p-4">
          <div>
            <span className="inter-regular-bold">{student.name}</span>
            <p className="inter-regular">Student ID: {student.id}</p>
          </div>
          <button
            onClick={openInviteModal}
            className="inter-regular-bold text-white rounded px-4 py-2"
          >
            Invite
          </button>
        </StudentCard>
      )}

      {isInviteModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h3 className="bai-jamjuree-regular text-3xl">Invite</h3>
            <StudentInfo className="flex justify-between items-center mt-10 mb-5 pb-5">
              <div>
                <span className="inter-regular-bold">{student.name}</span>
                <p className="inter-regular">Student ID: {student.id}</p>
              </div>
              <QRCodeSVG value={student.id} size={150} />
            </StudentInfo>
            <ModalActions className="inter-regular-bold flex justify-end">
              <button
                onClick={closeInviteModal}
                className="closeBtn text-black py-2 px-4 rounded mr-2"
              >
                Close
              </button>
              <button className="completeBtn text-white py-2 px-4 rounded">
                Complete
              </button>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

export default AddStudentPage;

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
const StudentCard = styled.div`
  box-shadow: 0px 4px 4px 0px #1b1b1b1a;
  border: 1px solid #d3d3d3;
  background: #f8f8f8;
  font-size: 16px;
  width: 412px;
  span {
    font-weight: bold;
    color: #1b1b1b;
  }
  p {
    margin: 0;
    color: #1b1b1b;
  }
  button {
    background: #ffa41d;
  }
`;
/***/
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 4px;
  width: 500px;
  h3 {
    color: #1b1b1b;
  }
`;
const StudentInfo = styled.div`
  font-size: 16px;
  border-bottom: 1px solid #1b1b1b;
`;
const ModalActions = styled.div`
  font-size: 16px;
  .completeBtn {
    background: #ffa41d;
  }
  .closeBtn {
    background: #d3d3d3;
  }
`;
