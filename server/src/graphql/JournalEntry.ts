import { extendType, list, nonNull, objectType, stringArg } from "nexus";
import { JournalEntry } from "nexus-prisma";

export const JournalEntryType = objectType({
  name: JournalEntry.$name,
  definition(t) {
    t.field(JournalEntry.id);
    t.field(JournalEntry.date);
    t.field(JournalEntry.text);
    t.field(JournalEntry.categories);
  },
});

export const JournalEntryQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("entries", {
      type: list("JournalEntry"),
      resolve(parent, args, context) {
        return context.prisma.journalEntry.findMany({
          orderBy: {
            date: "desc",
          },
        });
      },
    });
  },
});

export const JournalEntryMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("addJournalEntry", {
      type: "JournalEntry",
      args: {
        text: nonNull(stringArg()),
        categories: nonNull(list(nonNull(stringArg()))),
      },
      resolve(parent, args, context) {
        return context.prisma.journalEntry.create({
          data: {
            text: args.text,
            categories: args.categories,
          },
        });
      },
    });
  },
});
