import React from "react";
import Styled from "styled-components";
import ReactStars from "react-rating-stars-component";

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export default function ReviewDetail({ review }) {
  const reviewNumber = parseInt(review.review_rating[0], 10);

  return (
    <StyledDiv className="container">
      {/* <p>{review.review_rating}</p> */}
      <ReactStars count={5} value={reviewNumber} />
      <p>{review.profile_name}</p>
      <p>{review.review_title}</p>
      <button>Show Review Text</button>
      <button>Show review details</button>
    </StyledDiv>
  );
}
