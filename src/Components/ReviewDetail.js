import React, { useState } from "react";
import Styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import Modal from "styled-react-modal";

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const StyledModal = Modal.styled`
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

export default function ReviewDetail({ review }) {
  const [isOpen, setIsOpen] = useState(false);
  const reviewNumber = parseInt(review.review_rating[0], 10);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <StyledDiv className="container">
        {/* <p>{review.review_rating}</p> */}
        <ReactStars count={5} value={reviewNumber} />
        <p>{review.profile_name}</p>
        <p>{review.review_title}</p>
        <button onClick={toggleModal}>Show Review Text</button>
        <button>Show review details</button>
      </StyledDiv>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <span>{review.review_text}</span>
        <button onClick={toggleModal}>Close me</button>
      </StyledModal>
    </>
  );
}
