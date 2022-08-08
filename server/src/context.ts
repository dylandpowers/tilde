import { AuthenticationError } from "apollo-server";
import { Request } from "express";
import { decodeAuthHeader, doesOperationRequireAuth } from "./auth";

export interface Context {
  name: string;
  userId?: number;
}

export const context = ({ req }: { req: Request }): Context => {
  if (doesOperationRequireAuth(req)) {
    const token = req && req.headers.authorization ?
      decodeAuthHeader(req.headers.authorization) : null;

    if (!token) {
      throw new AuthenticationError("Request not authenticated");
    }

    return {
      name: "Dylan Powers",
      userId: token?.userId
    };
  }

  return {
    name: "Dylan Powers"
  };
};