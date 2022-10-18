import {
  extendType,
  intArg,
  list,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from "nexus";
import { ReadingActivity } from "nexus-prisma";

export const ReadingActivityType = objectType({
  name: ReadingActivity.$name,
  definition(t) {
    t.field(ReadingActivity.id);
    t.field(ReadingActivity.date);
    t.field(ReadingActivity.minutes);
    t.field(ReadingActivity.book);
  },
});

export const ReadingActivityQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("activities", {
      type: list("ReadingActivity"),
      args: {
        month: nullable(intArg()),
      },
      resolve(parent, args, context) {
        if (!args || typeof args.month !== "number") {
          return context.prisma.readingActivity.findMany();
        }

        const now = new Date();
        const month = args.month;
        const year = now.getFullYear();

        let nextYear, nextMonth;
        if (month === 12) {
          nextYear = year + 1;
          nextMonth = 1;
        } else {
          nextYear = year;
          nextMonth = month + 1;
        }

        return context.prisma.readingActivity.findMany({
          where: {
            date: {
              gte: new Date(`${year}-${month}-01`),
              lte: new Date(`${nextYear}-${nextMonth}-01`),
            },
          },
        });
      },
    });
    t.field("books", {
      type: list("String"),
      resolve(parent, args, context) {
        return context.prisma.readingActivity
          .findMany({
            select: {
              book: true,
            },
            distinct: ["book"],
          })
          .then((records) => records.map((record) => record.book));
      },
    });
  },
});

export const ReadingActivityMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("addReadingActivity", {
      type: "ReadingActivity",
      args: {
        minutes: nonNull(intArg()),
        book: nonNull(stringArg()),
      },
      resolve(parent, args, context) {
        return context.prisma.readingActivity.create({
          data: {
            minutes: args.minutes,
            book: args.book,
          },
        });
      },
    });
  },
});
