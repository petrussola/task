import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export default function ReviewInfo({ location }) {
  const { review, reviewNumber } = location.state;
  return (
    <div>
      <h1>{review.product}</h1>
      <p>{review.helpful_count}</p>
      <p>{review.total_comments}</p>
      <p>{review.url}</p>
      <p>{review.review_country}</p>
      <p>{review.reviewed_at}</p>
      <p>{review.review_text}</p>
      {/* <p>{review.review_rating}</p> */}
      <ReactStars count={5} value={reviewNumber} />
      <p>{review.product_company}</p>
      <p>{review.profile_name}</p>
      <p>{review.review_title}</p>
      <Link to="/">Back</Link>
    </div>
  );
}
