import prisma from "../prisma/prismadb";

export interface postParams {
  maxOccupancy?: number;
  region?: string;
  category?: string;
}

export default async function getPosts(params: postParams) {
  try {
    const { maxOccupancy, region, category } = params;

    let query: any = {};

    if (maxOccupancy) {
      query.maxOccupancy = {
        gte: +maxOccupancy,
      };
    }

    if (category) {
      query.animals = {
        hasEvery: category,
      };
    }

    if (region) {
      query.region = region;
    }

    const posts = await prisma.post.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    const safePosts = posts.map((post) => ({
      ...post,
      createdAt: post.createdAt.toISOString(),
    }));

    return safePosts;
  } catch (error: any) {
    throw new Error(error);
  }
}
