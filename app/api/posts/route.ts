import { NextResponse } from "next/server";

import prisma from "../../prisma/prismadb";
import getCurrentUser from "../../actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    title,
    description,
    imageSrc,
    region,
    address,
    price,
    maxOccupancy,
    animals,
  } = body;

  const post = await prisma.post.create({
    data: {
      title,
      description,
      imageSrc,
      address,
      price,
      region,
      maxOccupancy,
      animals,
    },
  });

  return NextResponse.json(post);
}
