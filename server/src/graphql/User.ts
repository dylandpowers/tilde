import { AuthenticationError } from "apollo-server";
import { Secret, sign } from "jsonwebtoken";
import { extendType } from "nexus";

export const TokenQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.string("token", {
      resolve() {
        return sign({ userId: 1 }, process.env.JWT_SECRET as Secret);
      }
    });

    t.nonNull.string("hooray", {
      resolve(parent, args, context) {
        if (!context.userId) {
          throw new AuthenticationError("Request not authenticated");
        }
        return `Hooray for user ${context.userId}`;
      }
    });
  }
});