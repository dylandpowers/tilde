import {
  extendType,
  idArg,
  list,
  mutationField,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import { JournalEntry } from "nexus-prisma";

export const JournalEntryType = objectType({
  name: JournalEntry.$name,
  definition(t) {
    t.field(JournalEntry.id);
    t.field(JournalEntry.date);
    t.field(JournalEntry.text);
    t.field(JournalEntry.categories);
    t.field(JournalEntry.isArchived);
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
          where: {
            isArchived: false,
          },
        });
      },
    });
  },
});

export const addJournalEntry = mutationField("addJournalEntry", {
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

export const archiveJournalEntry = mutationField("archiveJournalEntry", {
  type: "ID",
  args: {
    id: nonNull(idArg()),
  },
  resolve(parent, args, context) {
    return context.prisma.journalEntry
      .delete({
        where: {
          id: args.id,
        },
      })
      .then((entry) => entry.id);
  },
});
