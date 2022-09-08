import { objectType, extendType, list, stringArg, nonNull, idArg } from "nexus";

export const Todo = objectType({
  name: "Todo",
  definition(t) {
    t.string("id"); // null on creates
    t.nonNull.boolean("isCompleted");
    t.nonNull.string("text");
  },
});

export const TodoQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("todos", {
      type: list("Todo"),
      args: {
        ids: list(stringArg()),
      },
      resolve(parent, args, context) {
        if (!args.ids || !args.ids.length) {
          return context.prisma.todo.findMany();
        }

        return context.prisma.todo.findMany({
          where: {
            id: {
              in: args.ids,
            },
            AND: {
              isCompleted: {
                equals: false,
              },
            },
          },
        });
      },
    });
  },
});
