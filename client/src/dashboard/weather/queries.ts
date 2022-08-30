import { gql } from "@apollo/client";

export const GET_CURRENT_WEATHER = gql`
  query {
    weather {
      degrees,
      iconUrl
    }
  }
`;