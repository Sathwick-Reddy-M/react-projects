import styled from "styled-components";

export const ReviewContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const ReviewTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const ReviewTable = styled.table`
  width: 100%;
  margin-top: 10px;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

export const NoReviewsMessage = styled.p`
  margin-top: 10px;
`;
