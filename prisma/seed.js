import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from "bcrypt";

async function seed() {
  const hashed = await bcrypt.hash("senha123", 10);
  await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@email.com",
      password: hashed,
    },
  });
  console.log("Usuário criado");
}

seed();
