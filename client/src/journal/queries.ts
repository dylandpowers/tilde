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

export const ARCHIVE_JOURNAL_ENTRY = gql`
  mutation ArchiveJournalEntry($id: ID!) {
    archiveJournalEntry(id: $id)
  }
`;
