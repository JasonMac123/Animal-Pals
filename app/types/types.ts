import { Post, Reservation, User } from "@prisma/client";

export type safePost = Omit<Post, "createdAt"> & {
  createdAt: string;
};

export type safeUser = Omit<User, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};

export type typeSafeReservations = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "post"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  post: safePost;
};
