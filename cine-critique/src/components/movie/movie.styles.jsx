import styled from "styled-components";

export const MovieContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const MovieTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const MoviePoster = styled.img`
  min-width: 200px;
  margin-bottom: 20px;
`;

export const MovieTable = styled.table`
  width: 100%;
  margin-bottom: 20px;
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
