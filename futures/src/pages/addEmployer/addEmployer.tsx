import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import type { HeadFC, PageProps } from "gatsby";

const AddEmployerPage: React.FC<Partial<PageProps>> = () => {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

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
          to="/employers"
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
            Add Employer
          </span>
        </Link>
      </div>
      <section className="flex flex-col gap-2 items-end mt-10 form-add">
        <input
          type="text"
          className="px-2 inter-regular"
          placeholder="Company Name"
        />
        <input
          type="text"
          className="px-2 inter-regular"
          placeholder="Contact Name"
        />
        <button
          onClick={openInviteModal}
          className="text-white px-6 inter-regular-bold"
        >
          Invite
        </button>
      </section>

      {isInviteModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h3 className="bai-jamjuree-regular text-3xl">Invite</h3>
            <EmployerInfo className="flex justify-between items-center mt-10 mb-5 pb-5">
              <div>
                <span className="inter-regular-bold">VeriDID</span>
                <p className="inter-regular">Dave McKay</p>
              </div>
              <QRCodeSVG value={"123"} size={150} />
            </EmployerInfo>
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

export default AddEmployerPage;

export const Head: HeadFC = () => <title>Add Student</title>;

/* Styles */
const PageContainer = styled.div`
  .form-add {
    max-width: 500px;
  }
  .form-add input {
    font-size: 16px;
    color: #1b1b1b;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
    height: 40px;
    outline: none;
    width: 100%;
  }
  .form-add button {
    font-size: 19px;
    background: #f323c6;
    height: 40px;
    border-radius: 4px;
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
const EmployerInfo = styled.div`
  font-size: 16px;
  border-bottom: 1px solid #1b1b1b;
`;
const ModalActions = styled.div`
  font-size: 16px;
  .completeBtn {
    background: #f323c6;
  }
  .closeBtn {
    background: #d3d3d3;
  }
`;
