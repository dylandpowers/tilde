import { gql } from "@apollo/client";

export const GET_INCOMPLETE_TODOS = gql`
  query {
    todos {
      id
      text
      isCompleted
    }
  }
`;
