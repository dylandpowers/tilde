import { gql } from "@apollo/client";

export const GET_INCOMPLETE_TODOS = gql`
  query GetIncompleteTodos {
    todos {
      id
      text
      isCompleted
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
      isCompleted
    }
  }
`;
