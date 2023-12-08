import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  try {
    if (req.method === "POST") {
      const { email, password } = req.body;

      const users = await prisma.user.findMany({
        where: {
          email: email
        }
      })

      if (users.length > 0) {
        const us = users[0]
        const user = await prisma.user.findUnique({
          where: {
            id: us.id,
          },
        });

        if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(401).json({ error: "Authentication failed" });
        }

        const name = user.username
        const iduser = user.user_id
        const infosup = user.token


        const dashboardUrl = "/dashboard";
        res.status(200).json({ message: "Authentication successful", dashboardUrl, name, iduser, infosup });
      }
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}