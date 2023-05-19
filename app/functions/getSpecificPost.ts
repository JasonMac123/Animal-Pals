import prisma from "../prisma/prismadb";

interface postParams {
  postId?: string;
}

export default async function getSpecificPost(data: postParams) {
  try {
    const { postId } = data;

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        user: true,
      },
    });

    if (!post) {
      return null;
    }

    return {
      ...post,
      createdAt: post.createdAt.toISOString(),
      user: {
        ...post.user,
        createdAt: post.user.createdAt.toISOString(),
        updatedAt: post.user.updatedAt.toISOString(),
        emailVerified: post.user.emailVerified?.toISOString() || null,
      },
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
