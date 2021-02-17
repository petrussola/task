import React from "react";

export default function ReviewDetail({ review }) {
  return (
    <div>
      <p>{review.review_rating}</p>
      <p>{review.profile_name}</p>
      <p>{review.review_title}</p>
      <button>Show Review Text</button>
      <button>Show review details</button>
    </div>
  );
}
