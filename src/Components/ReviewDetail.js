import React from "react";

import Styled from "styled-components";

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
    * {
        width: 15%;
    }
`;

export default function ReviewDetail({ review }) {
  return (
    <StyledDiv>
      <p>{review.review_rating}</p>
      <p>{review.profile_name}</p>
      <p>{review.review_title}</p>
      <button>Show Review Text</button>
      <button>Show review details</button>
    </StyledDiv>
  );
}
