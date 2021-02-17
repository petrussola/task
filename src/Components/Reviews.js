import React from "react";
import ReviewDetail from "./ReviewDetail";

export default function Reviews({ reviews }) {
  return (
    <div>
      {reviews.map((review, index) => {
        return <ReviewDetail key={index} review={review} />;
      })}
    </div>
  );
}
