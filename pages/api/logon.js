import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  try {
    if (req.method === "POST") {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Authentication failed" });
      }

      

      
      const dashboardUrl = "/dashboard"; 
      res.status(200).json({ message: "Authentication successful", token, dashboardUrl });
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