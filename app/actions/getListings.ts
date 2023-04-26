import prisma from "../prisma/prismadb";

export default async function getListings() {
  try {
    const listings = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
}
