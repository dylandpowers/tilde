import { objectType, extendType, list, stringArg, idArg, nonNull } from "nexus";
import { Todo } from "nexus-prisma";

export const TodoType = objectType({
  name: Todo.$name,
  definition(t) {
    t.field(Todo.id);
    t.field(Todo.text);
    t.field(Todo.isCompleted);
    t.field(Todo.updatedAt);
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
    t.nonNull.field("completedTodos", {
      type: list("Todo"),
      resolve(parent, args, context) {
        return context.prisma.todo.findMany({
          where: {
            isCompleted: true,
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
