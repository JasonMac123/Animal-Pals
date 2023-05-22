import { NextResponse } from "next/server";
import prisma from "../../prisma/prismadb";
import getCurrentUser from "../../functions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { postId, startDate, endDate, totalPrice } = body;

  for (const key in body) {
    if (!body[key]) {
      return NextResponse.error;
    }
  }

  const reservationCreate = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      reservations: {
        create: {
          userId: currentUser.id,
          startDate,
          endDate,
          totalPrice,
        },
      },
    },
  });

  return NextResponse.json(reservationCreate);
}
