import { NextResponse } from "next/server";

import getCurrentUser from "../../../functions/getCurrentUser";
import prisma from "../../../prisma/prismadb";

interface deleteReservationParams {
  reservationId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: deleteReservationParams }
) {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { reservationId } = params;

  if (!reservationId) {
    throw new Error("Reservation not found");
  }

  const reservation = await prisma.reservation.delete({
    where: {
      id: reservationId,
    },
  });

  return NextResponse.json(reservation);
}
