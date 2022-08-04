import { Request } from "express";
import { decodeAuthHeader } from "./auth/decodeAuthHeader";

export interface Context {
  name: string;
  userId?: number;
}

export const context = ({ req }: { req: Request }): Context => {
  const token = req && req.headers.authorization ?
    decodeAuthHeader(req.headers.authorization) : null;

  return {
    name: "Dylan Powers",
    userId: token?.userId
  };
};