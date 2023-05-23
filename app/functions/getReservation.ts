import prisma from "../prisma/prismadb";

interface getReservationParams {
  postId?: string;
  userId?: string;
}

export default async function getReservations(params: getReservationParams) {
  try {
    const { postId, userId } = params;

    const query: any = {};

    if (postId) {
      query.postId = postId;
    }

    if (userId) {
      query.userId = userId;
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        post: true,
      },
      orderBy: {
        endDate: "asc",
      },
    });

    const typeSafeReservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      post: {
        ...reservation.post,
        createdAt: reservation.post.createdAt.toISOString(),
      },
    }));

    return typeSafeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
