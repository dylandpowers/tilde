import { Secret, verify } from "jsonwebtoken";

export interface AuthTokenPayload {
  userId: number;
}

export function decodeAuthHeader(header: string) {
  const token = header.replace("Bearer ", "");

  if (!token) {
    throw new Error("No token found");
  }
  return verify(token, process.env.JWT_SECRET as Secret) as AuthTokenPayload;
}