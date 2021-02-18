import React from "react";
import Styled from "styled-components";

// component
import ReviewDetail from "./ReviewDetail";

const StyledDiv = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export default function Reviews({ reviews }) {
  return (
    <StyledDiv>
      {reviews.map((review, index) => {
        return <ReviewDetail key={index} review={review} index={index} />;
      })}
    </StyledDiv>
  );
}
