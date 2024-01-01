import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserReviewsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const ReviewsTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const ReviewItem = styled.div`
  margin-bottom: 20px;
`;

export const MovieLink = styled(Link)`
  color: #333;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 10px;
`;

export const ReviewContent = styled.span`
  display: block;
  color: #555;
`;
