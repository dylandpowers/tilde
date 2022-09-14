import { objectType, extendType, list, stringArg, idArg, nonNull } from "nexus";

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
          return context.prisma.todo.findMany({
            where: {
              isCompleted: false,
            },
          });
        }

        return context.prisma.todo.findMany({
          where: {
            id: {
              in: args.ids,
            },
            AND: {
              isCompleted: false,
            },
          },
        });
      },
    });
  },
});

export const TodoMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("completeTodo", {
      type: "Todo",
      args: {
        id: nonNull(idArg()),
      },
      resolve(parent, args, context) {
        return context.prisma.todo.update({
          where: {
            id: args.id,
          },
          data: {
            isCompleted: true,
          },
        });
      },
    });
    t.nonNull.field("addTodo", {
      type: "Todo",
      args: {
        text: nonNull(stringArg()),
      },
      resolve(parent, args, context) {
        return context.prisma.todo.create({
          data: {
            text: args.text,
            isCompleted: false,
          },
        });
      },
    });
  },
});
