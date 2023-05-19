import { NextResponse } from "next/server";

import prisma from "../../prisma/prismadb";
import getCurrentUser from "../../functions/getCurrentUser";

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

  for (const key in body) {
    if (!body[key]) {
      NextResponse.error();
    }
  }

  const post = await prisma.post.create({
    data: {
      title,
      description,
      imageSrc,
      address,
      price: parseInt(price, 10),
      region: region.value,
      maxOccupancy,
      animals,
      user: {
        connect: {
          id: currentUser.id,
        },
      },
    },
  });

  return NextResponse.json(post);
}
