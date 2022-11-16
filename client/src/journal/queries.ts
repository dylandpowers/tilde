import { gql } from "@apollo/client";

export const GET_JOURNAL_ENTRIES = gql`
  query GetJournalEntries {
    entries {
      id
      text
      date
      categories
    }
  }
`;
