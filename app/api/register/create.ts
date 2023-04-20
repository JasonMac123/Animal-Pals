import bcrypt from "bcrypt";
import prisma from "../../prisma/prismadb";

export default async function handler(req: Request, res: Response) {
  const { email, name, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  res.status(200).json({ data: user });
}
