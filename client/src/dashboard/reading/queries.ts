import { gql } from "@apollo/client";

export const LOG_READING_ACTIVITY = gql`
  mutation LogReadingActivity($minutes: Int!, $book: String!) {
    addReadingActivity(minutes: $minutes, book: $book) {
      id
    }
  }
`;

export const GET_BOOKS = gql`
  query {
    books
  }
`;
