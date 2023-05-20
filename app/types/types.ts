import { Post, User } from "@prisma/client";

export type safePost = Omit<Post, "createdAt"> & {
  createdAt: string;
};

export type safeUser = Omit<User, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};
